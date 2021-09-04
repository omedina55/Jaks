const express = require('express');
const { verifyToken } = require('../../middleware/_codemono/authentication');
const { executeSP } = require('../../libraries/_codemono/MySQL');
const { getBool } = require('../../libraries/_codemono/data');
const app = express();

app.get('/amcoderc_dev_jaks/usuarioEmpresa', [verifyToken], (req, res) => {
    let params = [
		1,
		req.query.id || null
    ];

    executeSP('UsuarioEmpresa_READ', params).then(response => {
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

app.get('/amcoderc_dev_jaks/usuarioEmpresa/list', [verifyToken], (req, res) => {
    let params = [
		1,
		req.query.id || null
    ];

    executeSP('UsuarioEmpresa_LIST', params).then(response => {
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

app.get('/amcoderc_dev_jaks/usuarioEmpresa/:id', [verifyToken], (req, res) => {
    let params = [
		1, req.params.id || null
    ];

    executeSP('UsuarioEmpresa_READ', params).then(response => {
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

app.post('/amcoderc_dev_jaks/usuarioEmpresa', [verifyToken], (req, res) => {
    let createdBy = req.token.userId;
    let params = [
		1,
		req.body.usuarioId || null,
		req.body.empresaId || null,
		req.body.usuarioCreacionId || null,
		req.body.fechaCreacion || null,
		req.body.usuarioModificacionId || null,
		req.body.fechaModificacion || null,
		req.body.usuarioBajaId || null,
		req.body.fechaBaja || null,
		req.body.baja || null
    ];

    executeSP('UsuarioEmpresa_CREATE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/usuarioEmpresa', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
		1,
		req.body.id || null,
		req.body.usuarioId || null,
		req.body.empresaId || null,
		req.body.usuarioCreacionId || null,
		req.body.fechaCreacion || null,
		req.body.usuarioModificacionId || null,
		req.body.fechaModificacion || null,
		req.body.usuarioBajaId || null,
		req.body.fechaBaja || null,
		req.body.baja || null
    ];

    executeSP('UsuarioEmpresa_UPDATE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/usuarioEmpresa/enable', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
		req.body.id || null
    ];

    executeSP('UsuarioEmpresa_ENABLE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/usuarioEmpresa/disable', [verifyToken], (req, res) => {
    let disabledBy = req.token.userId;
    let params = [
		req.body.id || null
    ];

    executeSP('UsuarioEmpresa_DISABLE', params).then(response => {
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

app.delete('/amcoderc_dev_jaks/usuarioEmpresa/:id', [verifyToken], (req, res) => {
    let params = [
		req.params.id || null
    ];

    executeSP('UsuarioEmpresa_DELETE', params).then(response => {
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

