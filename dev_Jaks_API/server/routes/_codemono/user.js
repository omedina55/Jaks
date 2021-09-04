const express = require('express');
const { verifyToken } = require('../../middleware/_codemono/authentication');
const { executeSP } = require('../../libraries/_codemono/MySQL');
const { getBool } = require('../../libraries/_codemono/data');
const app = express();

app.get('/user', [verifyToken], (req, res) => {
    let params = [
        req.query.userId || null, 
        req.query.firstName || null, 
        req.query.lastName || null, 
        req.query.userTypeId || null, 
        req.query.username || null, 
        getBool(req.query.active)
    ];

    executeSP('CodeMono_User_READ', params).then(response => {
        return res.status(200).json(
            {
                data: response.result,
                executionError: false,
                message: ''
            });
        }).catch (err => {
            return res.status(400).json(
                {
                    data: [],
                    executionError: true,
                    message: err,
                });
            });
});

app.get('/user/list', [verifyToken], (req, res) => {
    let params = [
        req.query.userId || null, 
        req.query.firstName || null, 
        req.query.lastName || null, 
        req.query.userTypeId || null, 
        req.query.username || null, 
        req.query.active || null
    ];

    executeSP('CodeMono_User_LIST', params).then(response => {
        return res.status(200).json(
            {
                data: response.result,
                executionError: false,
                message: ''
            });
        }).catch (err => {
            return res.status(400).json(
                {
                    data: [],
                    executionError: true,
                    message: err,
                });
            });
});

app.get('/user/:id', [verifyToken], (req, res) => {
    let params = [
		req.params.id || null, null, null, null, null, null
    ];

    executeSP('CodeMono_User_READ', params).then(response => {
        return res.status(200).json(
            {
                data: response.result,
                executionError: false,
                message: ''
            });
        }).catch (err => {
            return res.status(400).json(
                {
                    data: [],
                    executionError: true,
                    message: err,
                });
            });
});

app.post('/user', [verifyToken], (req, res) => {
    let createdBy = req.token.userId;
    let params = [
        req.body.firstName || null, 
        req.body.lastName || null, 
        req.body.userTypeId || null, 
        req.body.username || null, 
        req.body.password || null,
        req.body.avatar || null,
        createdBy || null
    ];

    executeSP('CodeMono_User_CREATE', params).then(response => {
        return res.status(200).json(
            {
                data: response.result,
                executionError: false,
                message: ''
            });
        }).catch (err => {
            return res.status(400).json(
                {
                    data: [],
                    executionError: true,
                    message: err,
                });
            });
});

app.put('/user', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
        req.body.userId || null, 
        req.body.firstName || null,
        req.body.lastName || null, 
        req.body.userTypeId || null, 
        req.body.username || null, 
        req.body.password || null,
        req.body.avatar || null,
        updatedBy || null
    ];

    executeSP('CodeMono_User_UPDATE', params).then(response => {
        return res.status(200).json(
            {
                data: response.result,
                executionError: false,
                message: ''
            });
        }).catch (err => {
            return res.status(400).json(
                {
                    data: [],
                    executionError: true,
                    message: err,
                });
            });
});

app.put('/user/enable', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
        req.body.userId || null, 
        updatedBy || null
    ];

    executeSP('CodeMono_User_ENABLE', params).then(response => {
        return res.status(200).json(
            {
                data: response.result,
                executionError: false,
                message: ''
            });
        }).catch (err => {
            return res.status(400).json(
                {
                    data: [],
                    executionError: true,
                    message: err,
                });
            });
});

app.put('/user/disable', [verifyToken], (req, res) => {
    let disabledBy = req.token.userId;
    let params = [
        req.body.userId || null, 
        disabledBy || null
    ];
    
    executeSP('CodeMono_User_DISABLE', params).then(response => {
        return res.status(200).json(
            {
                data: response.result,
                executionError: false,
                message: ''
            });
        }).catch (err => {
            return res.status(400).json(
                {
                    data: [],
                    executionError: true,
                    message: err,
                });
            });
});

app.delete('/user/:id', [verifyToken], (req, res) => {
    let params = [
        req.params.id || null
    ];
    
    executeSP('CodeMono_User_DELETE', params).then(response => {
        return res.status(200).json(
            {
                data: response.result,
                executionError: false,
                message: ''
            });
        }).catch (err => {
            return res.status(400).json(
                {
                    data: [],
                    executionError: true,
                    message: err,
                });
            });
});

module.exports = app;

