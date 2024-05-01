
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
const app = express()

// app.use(express.static(path.join(__dirname, 'src/client/views/index.html')))


// console.log(__dirname)

// app.get('/', function (req, res) {
//     // res.sendFile('dist/index.html')
//     res.sendFile(path.resolve('src/client/views/index.html'))
// })

// // designates what port the app will listen to for incoming requests
// app.listen(8080, function () {
//     console.log('Example app listening on port 8080!')
//     console.log('http://localhost:8080/')
// })

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

// Route for the main page
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

// Route for mock API response
app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
    console.log(`http://localhost:${PORT}/`);
});
