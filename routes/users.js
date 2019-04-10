const express = require("express");
const mongoose = require("mongoose");
// const keys = require("../config/keys");
// const passport = require("passport");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const jwt_decode = require("jwt-decode");
const router = express.Router();

// Import User Schemas
const User = require("../models/User");

router.get('/test', (req, res) => {
    res.send('test')
})
module.exports = router;