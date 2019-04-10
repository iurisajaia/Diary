const express = require('express');
const mongoose = require("mongoose");
const app = express();




// Connect to MongoDB
const db = require("./config/keys").mongoURI;
mongoose
	.connect(db, {
		useNewUrlParser: true
	})
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));



const users = require("./routes/users");

// Use Routes
app.use("/", users);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log('server started...')
})