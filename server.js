const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

const users = require("./routes/users");


// Public Folder
app.use(express.static("./uploads"));

// Use Cors
app.use(cors());
// Connect to MongoDB
const db = require("./config/keys").mongoURI;
mongoose
	.connect(db, {
		useNewUrlParser: true
	})
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())



// Use Routes
app.use("/", users);


app.use(express.static(path.join(__dirname, '/client/build/')))
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log('server started...')
})