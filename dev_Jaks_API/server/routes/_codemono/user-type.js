const express = require('express');
const { verifyToken } = require('../../middleware/_codemono/authentication');
const { executeSP } = require('../../libraries/_codemono/MySQL');
const { getBool } = require('../../libraries/_codemono/data');
const app = express();

app.get('/userType', [verifyToken], (req, res) => {
    let params = [
        req.query.userTypeId || null, 
        req.query.userType || null, 
        getBool(req.query.active)
    ];

    executeSP('CodeMono_UserType_READ', params).then(response => {
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

app.get('/userType/list', [verifyToken], (req, res) => {
    let params = [
        req.query.userTypeId || null, 
        req.query.userType || null, 
        getBool(req.query.active)
    ];

    executeSP('CodeMono_UserType_LIST', params).then(response => {
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

app.get('/userType/:id', [verifyToken], (req, res) => {
    let params = [
		req.params.id || null, null, null
    ];
    
    executeSP('CodeMono_UserType_READ', params).then(response => {
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

app.post('/userType', [verifyToken], (req, res) => {
    let createdBy = req.token.userId;
    let params = [
        req.body.userTypeId || null, 
        req.body.userType || null, 
        createdBy || null
    ];

    executeSP('CodeMono_UserType_CREATE', params).then(response => {
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

app.put('/userType', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
        req.body.userTypeId || null, 
        req.body.userType || null, 
        updatedBy || null
    ];

    executeSP('CodeMono_UserType_UPDATE', params).then(response => {
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

app.put('/userType/enable', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
        req.body.userTypeId || null, 
        updatedBy || null
    ];

    executeSP('CodeMono_UserType_ENABLE', params).then(response => {
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

app.put('/userType/disable', [verifyToken], (req, res) => {
    let disabledBy = req.token.userId;
    let params = [
        req.body.userTypeId || null, 
        disabledBy || null
    ];

    executeSP('CodeMono_UserType_DISABLE', params).then(response => {
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

app.delete('/userType/:id', [verifyToken], (req, res) => {
    let params = [
        req.params.id || null
    ];
    
    executeSP('CodeMono_UserType_DELETE', params).then(response => {
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
