const express = require('express');
const app = express();


console.log('test')
const port =  process.env.PORT || 5000;

app.listen(port, () => {
	console.log('server started...')
})