const express = require('express');
const apiHelper = require('./ApiHelper')
const app = express();
const port = 5000;


// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/getAPIResponse', (req, res) => {
    // API code will be here
    apiHelper.makeApiCall('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        })
})

app.get('/getLocation', (req, res) => {
    const { ipAddress } = req;
    console.log(ipAddress);
    const api_key = 'at_Kz770gW4Kj0mqWAx6bo8A7x6DpfEz';
    const api_url = 'https://geo.ipify.org/api/v2/country,city?';

    const url = `${api_url} apiKey=  ${api_key} &ipAddress= ${ipAddress}`;
    // API code will be here
    apiHelper.makeApiCall(url)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        })
})
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));