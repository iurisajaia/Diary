const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");



// Protect Routes
const auth = require("../middleware/login");

// Import Config
const key = require("../config/keys").secretOrKey;

// Import User Schemas
const User = require("../models/User");

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

// Add question to my diary

router.post('/add-question', async (req, res) => {
    const user = await User.findOne({ _id: req.body.id })
    try {
        if (user) {
            user.questions.push(req.body.question)
            await user.save()
            res.status(200).json({ user })
        }
    } catch (err) {
        console.log(err)
    }
})

// Get Users Diary
router.get('/diary/:user', async (req, res) => {
    console.log(req.params)
    try {
        const user = await User.findOne({ _id: req.params.user })
        if (user) {
            res.status(200).json({ questions: user.questions })
        } else {
            res.status(400).json({ msg: 'some error' })
        }
    } catch (err) {
        console.log(err)
    }
})


module.exports = router;