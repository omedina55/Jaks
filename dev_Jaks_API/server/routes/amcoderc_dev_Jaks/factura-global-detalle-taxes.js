const express = require('express');
const { verifyToken } = require('../../middleware/_codemono/authentication');
const { executeSP } = require('../../libraries/_codemono/MySQL');
const { getBool } = require('../../libraries/_codemono/data');
const app = express();

app.get('/amcoderc_dev_jaks/facturaGlobalDetalleTaxes', [verifyToken], (req, res) => {
    let params = [
		1,
		req.query.id || null,
		req.query.descripcion || '',
		req.query.name || ''
    ];

    executeSP('FacturaGlobalDetalleTaxes_READ', params).then(response => {
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

app.get('/amcoderc_dev_jaks/facturaGlobalDetalleTaxes/list', [verifyToken], (req, res) => {
    let params = [
		1,
		req.query.id || null,
		req.query.descripcion || '',
		req.query.name || ''
    ];

    executeSP('FacturaGlobalDetalleTaxes_LIST', params).then(response => {
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

app.get('/amcoderc_dev_jaks/facturaGlobalDetalleTaxes/:id', [verifyToken], (req, res) => {
    let params = [
		1, req.params.id || null, null, null
    ];

    executeSP('FacturaGlobalDetalleTaxes_READ', params).then(response => {
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

app.post('/amcoderc_dev_jaks/facturaGlobalDetalleTaxes', [verifyToken], (req, res) => {
    let createdBy = req.token.userId;
    let params = [
		1,
		req.body.descripcion || '',
		req.body.facturaGlobalDetalleId || null,
		req.body.name || '',
		req.body.base || null,
		req.body.rate || null,
		req.body.isRetention || null,
		req.body.total || null
    ];

    executeSP('FacturaGlobalDetalleTaxes_CREATE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/facturaGlobalDetalleTaxes', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
		1,
		req.body.id || null,
		req.body.descripcion || '',
		req.body.facturaGlobalDetalleId || null,
		req.body.name || '',
		req.body.base || null,
		req.body.rate || null,
		req.body.isRetention || null,
		req.body.total || null
    ];

    executeSP('FacturaGlobalDetalleTaxes_UPDATE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/facturaGlobalDetalleTaxes/enable', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
		req.body.id || null
    ];

    executeSP('FacturaGlobalDetalleTaxes_ENABLE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/facturaGlobalDetalleTaxes/disable', [verifyToken], (req, res) => {
    let disabledBy = req.token.userId;
    let params = [
		req.body.id || null
    ];

    executeSP('FacturaGlobalDetalleTaxes_DISABLE', params).then(response => {
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

app.delete('/amcoderc_dev_jaks/facturaGlobalDetalleTaxes/:id', [verifyToken], (req, res) => {
    let params = [
		req.params.id || null
    ];

    executeSP('FacturaGlobalDetalleTaxes_DELETE', params).then(response => {
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

