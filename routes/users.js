const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
const multer = require("multer");


// Protect Routes
const auth = require("../middleware/login");

// Import Config
const key = require("../config/keys").secretOrKey;

// Import User Schemas
const User = require("../models/User");

// Import Diary Schemas
const Diary = require('../models/Diary');



// Multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


// რეგისტრაცია
router.post('/registration', async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (
            firstname == '' ||
            firstname == undefined ||
            firstname == null ||

            lastname == '' ||
            lastname == undefined ||
            lastname == null ||

            email == '' ||
            email == undefined ||
            email == null ||

            password == '' ||
            password == undefined ||
            password == null


        ) {
            res.status(400).json({ msg: 'შეავსეთ ყველა ველი' })
        }
        else if (
            password.length < 6
        ) {
            res.status(400).json({ msg: 'მინიმუმ 6 სიმბოლო პაროლის ველში' })
        } else if (user) {
            res.status(400).json({ msg: 'ელ.ფოსტა უკვე გამოყენებულია' })
        } else {


            const newUser = new User({
                firstname,
                lastname,
                email,
                password
            })
            await newUser.save();
            res.status(200).json({ newUser })
        }
    } catch (err) {
        console.log(err)
    }
})


// ავტორიზაცია
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })

        if (user) {
            const token = jwt.sign(
                {
                    _id: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    image: user.image,
                    email: user.email,
                    questions: user.questions,
                    isAdmin: user.isAdmin,
                    isActive: user.isActive

                },
                key,
                { expiresIn: "1h" }
            );
            return res
                .header("x-auth-token", token)
                .status(200)
                .json({ token });

        } else {
            res.status(400).json({ msg: 'user not found' })
        }
    } catch (err) {
        console.log(err)
    }
})

// დღიურში შეკითხვის დამატება

router.post('/add-question', async (req, res) => {
    console.log(req.body)
    const user = await User.findOne({ _id: req.body.id })
    try {
        if (user) {
            user.questions.push(req.body.question)
            await user.save()

            const token = jwt.sign(
                {
                    _id: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    image: user.image,
                    email: user.email,
                    questions: user.questions,
                    isAdmin: user.isAdmin,
                    isActive: user.isActive

                },
                key,
                { expiresIn: "1h" }
            );
            res.status(200).json({ token })
        }
    } catch (err) {
        console.log(err)
    }
})

// იუზერის დღიური (საჯარო)
router.get('/diary/:id', async (req, res) => {

    try {
        const user = await User.findOne({ _id: req.params.id })
        if (user) {
            res.status(200).json({ questions: user })
        } else {
            res.status(400).json({ msg: 'some error' })
        }
    } catch (err) {
        console.log(err)
    }
})


// იუზერის პროფილი
router.get('/profile/:id', async (req, res) => {
    try {
        const diary = await Diary.find({ to: req.params.id }).populate('from')
        if (diary) {
            res.status(200).json({ diary });
        } else {
            res.status(400).json({ msg: 'თქვენი დღიური ცარიელია' })
        }

    } catch (err) {
        console.log(err)
    }
})

// შეკითხვის წაშლა
router.put('/remove-question', async (req, res) => {
    try {
        const { id, question } = req.body;
        const user = await User.findOne({ _id: id })


        if (user) {
            var questions = user.questions;
            var num = questions.indexOf(question)
            questions.splice(num, 1);
            user.save();
            const token = jwt.sign(
                {
                    _id: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    image: user.image,
                    email: user.email,
                    questions: user.questions,
                    isAdmin: user.isAdmin,
                    isActive: user.isActive

                },
                key,
                { expiresIn: "1h" }
            );
            res.status(200).json({ token })
        }

    } catch (err) {
        console.log(err)
    }
})


// დღიურის შევსება
router.post('/handle-diary', async (req, res) => {

    try {
        const { question, answer, from, to } = req.body;
        var questions = [];
        var answers = [];

        for (let i = 0; i < question.length; i++) {
            questions.push(question[i])
            answers.push(answer[i])
        }
        const diary = new Diary({
            question: questions,
            answer: answers,
            from,
            to
        })

        diary.save();

        res.status(200).json({ diary })

    } catch (err) {
        console.log(err)
    }
})


// ფოტოს განახლება
router.post("/add-user-image", upload.single("image"), async (req, res) => {
    const user = await User.findOne({ _id: req.body.user });
    try {
        if (user) {
            user.image = `/${req.file.filename}`;
            user.save();

            const token = jwt.sign(
                {
                    _id: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    image: user.image,
                    email: user.email,
                    questions: user.questions,
                    isAdmin: user.isAdmin,
                    isActive: user.isActive
                },
                key,
                { expiresIn: "1h" }
            );
            res.status(200).json({ token });
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;