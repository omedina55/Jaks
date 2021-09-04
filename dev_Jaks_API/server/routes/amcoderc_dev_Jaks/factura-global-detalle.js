const express = require('express');
const { verifyToken } = require('../../middleware/_codemono/authentication');
const { executeSP } = require('../../libraries/_codemono/MySQL');
const { getBool } = require('../../libraries/_codemono/data');
const app = express();

app.get('/amcoderc_dev_jaks/facturaGlobalDetalle', [verifyToken], (req, res) => {
    let params = [
		1,
		req.query.id || null,
		req.query.descripcion || '',
		req.query.productCode || '',
		req.query.identificationNumber || '',
		req.query.description || '',
		req.query.unitCode || '',
		req.query.unit || ''
    ];

    executeSP('FacturaGlobalDetalle_READ', params).then(response => {
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

app.get('/amcoderc_dev_jaks/facturaGlobalDetalle/list', [verifyToken], (req, res) => {
    let params = [
		1,
		req.query.id || null,
		req.query.descripcion || '',
		req.query.productCode || '',
		req.query.identificationNumber || '',
		req.query.description || '',
		req.query.unitCode || '',
		req.query.unit || ''
    ];

    executeSP('FacturaGlobalDetalle_LIST', params).then(response => {
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

app.get('/amcoderc_dev_jaks/facturaGlobalDetalle/:id', [verifyToken], (req, res) => {
    let params = [
		1, req.params.id || null, null, null, null, null, null, null
    ];

    executeSP('FacturaGlobalDetalle_READ', params).then(response => {
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

app.post('/amcoderc_dev_jaks/facturaGlobalDetalle', [verifyToken], (req, res) => {
    let createdBy = req.token.userId;
    let params = [
		1,
		req.body.descripcion || '',
		req.body.facturaGlobalId || null,
		req.body.productCode || '',
		req.body.identificationNumber || '',
		req.body.description || '',
		req.body.unitCode || '',
		req.body.unitPrice || null,
		req.body.unit || '',
		req.body.quantity || null,
		req.body.subtotal || null,
		req.body.total || null,
		req.body.discount || null,
		req.body.discountVal || null
    ];

    executeSP('FacturaGlobalDetalle_CREATE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/facturaGlobalDetalle', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
		1,
		req.body.id || null,
		req.body.descripcion || '',
		req.body.facturaGlobalId || null,
		req.body.productCode || '',
		req.body.identificationNumber || '',
		req.body.description || '',
		req.body.unitCode || '',
		req.body.unitPrice || null,
		req.body.unit || '',
		req.body.quantity || null,
		req.body.subtotal || null,
		req.body.total || null,
		req.body.discount || null,
		req.body.discountVal || null
    ];

    executeSP('FacturaGlobalDetalle_UPDATE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/facturaGlobalDetalle/enable', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
		req.body.id || null
    ];

    executeSP('FacturaGlobalDetalle_ENABLE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/facturaGlobalDetalle/disable', [verifyToken], (req, res) => {
    let disabledBy = req.token.userId;
    let params = [
		req.body.id || null
    ];

    executeSP('FacturaGlobalDetalle_DISABLE', params).then(response => {
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

app.delete('/amcoderc_dev_jaks/facturaGlobalDetalle/:id', [verifyToken], (req, res) => {
    let params = [
		req.params.id || null
    ];

    executeSP('FacturaGlobalDetalle_DELETE', params).then(response => {
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

