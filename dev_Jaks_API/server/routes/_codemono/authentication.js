const express = require('express');
const { executeSP } = require('../../libraries/_codemono/MySQL');
const { formatData } = require('../../libraries/_codemono/data');
const jwt = require('jsonwebtoken');
const app = express();

app.post('/authentication', (req, res) => {

    let username = req.body.username;
    let password = req.body.password;

    if (!username) {
        return res.status(400).json({
            executionError: true,
            message: 'Incorrect JSON string'
        });
    }
    if (!password) {
        return res.status(400).json({
            executionError: true,
            message: 'Incorrect JSON string'
        });
    }

    let params = [username, password];


    executeSP('CodeMono_User_AUTHENTICATION', params).then(data => {

        let dataResult = formatData(data.result);
        let token = '';

        if (dataResult.authenticated === 1)
        {
            token = jwt.sign(dataResult, process.env.SEED, { expiresIn: process.env.TOKEN_EXPIRATION });
        }

        return res.status(200).json({
            data: dataResult,
            token: token,
            executionError: false,
            message: ''
        });
    }).catch(err => {
        console.log(err);
        return res.status(400).json({
            executionError: true,
            message: err
        });
    });
});

module.exports = app;

