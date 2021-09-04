const express = require('express');
const { verifyToken } = require('../../middleware/_codemono/authentication');
const { executeSP } = require('../../libraries/_codemono/MySQL');
const { getBool } = require('../../libraries/_codemono/data');
const app = express();

app.get('/amcoderc_dev_jaks/usuario', [verifyToken], (req, res) => {
    let params = [
		1,
		req.query.id || null,
		req.query.usuario || '',
		req.query.correo || '',
		req.query.contrasena || '',
		req.query.nombre || '',
		req.query.apellidoPaterno || '',
		req.query.apellidoMaterno || ''
    ];

    executeSP('Usuario_READ', params).then(response => {
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
                    message: err
                });
            });
});

app.get('/amcoderc_dev_jaks/usuario/list', [verifyToken], (req, res) => {
    let params = [
		1,
		req.query.id || null,
		req.query.usuario || '',
		req.query.correo || '',
		req.query.contrasena || '',
		req.query.nombre || '',
		req.query.apellidoPaterno || '',
		req.query.apellidoMaterno || ''
    ];

    executeSP('Usuario_LIST', params).then(response => {
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
                    message: err
                });
            });
});

app.get('/amcoderc_dev_jaks/usuario/:id', [verifyToken], (req, res) => {
    let params = [
		1, req.params.id || null, null, null, null, null, null, null
    ];

    executeSP('Usuario_READ', params).then(response => {
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
                    message: err
                });
            });
});

app.post('/amcoderc_dev_jaks/usuario', [verifyToken], (req, res) => {
    let createdBy = req.token.userId;
    let params = [
		1,
		req.body.usuario || '',
		req.body.correo || '',
		req.body.contrasena || '',
		req.body.nombre || '',
		req.body.apellidoPaterno || '',
		req.body.apellidoMaterno || '',
		req.body.usuarioCreacionId || null,
		req.body.fechaCreacion || null,
		req.body.usuarioModificacionId || null,
		req.body.fechaModificacion || null,
		req.body.usuarioBajaId || null,
		req.body.fechaBaja || null,
		req.body.baja || null,
		req.body.usuarioTipoId || null
    ];

    executeSP('Usuario_CREATE', params).then(response => {
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
                    message: err
                });
            });
});

app.put('/amcoderc_dev_jaks/usuario', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
		1,
		req.body.id || null,
		req.body.usuario || '',
		req.body.correo || '',
		req.body.contrasena || '',
		req.body.nombre || '',
		req.body.apellidoPaterno || '',
		req.body.apellidoMaterno || '',
		req.body.usuarioCreacionId || null,
		req.body.fechaCreacion || null,
		req.body.usuarioModificacionId || null,
		req.body.fechaModificacion || null,
		req.body.usuarioBajaId || null,
		req.body.fechaBaja || null,
		req.body.baja || null,
		req.body.usuarioTipoId || null
    ];

    executeSP('Usuario_UPDATE', params).then(response => {
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
                    message: err
                });
            });
});

app.put('/amcoderc_dev_jaks/usuario/enable', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
		req.body.id || null
    ];

    executeSP('Usuario_ENABLE', params).then(response => {
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
                    message: err
                });
            });
});

app.put('/amcoderc_dev_jaks/usuario/disable', [verifyToken], (req, res) => {
    let disabledBy = req.token.userId;
    let params = [
		req.body.id || null
    ];

    executeSP('Usuario_DISABLE', params).then(response => {
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
                    message: err
                });
            });
});

app.delete('/amcoderc_dev_jaks/usuario/:id', [verifyToken], (req, res) => {
    let params = [
		req.params.id || null
    ];

    executeSP('Usuario_DELETE', params).then(response => {
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
                    message: err
                });
            });
});

module.exports = app;

