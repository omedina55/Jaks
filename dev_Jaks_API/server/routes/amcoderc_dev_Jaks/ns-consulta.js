const express = require('express');
const { verifyToken } = require('../../middleware/_codemono/authentication');
const { executeSP } = require('../../libraries/_codemono/MySQL');
const { getBool } = require('../../libraries/_codemono/data');
const app = express();

app.get('/amcoderc_dev_jaks/nsConsulta', [verifyToken], (req, res) => {
    let params = [
		1,
		req.query.id || null,
		req.query.tranId || '',
		req.query.cfdiTimbrada || '',
		req.query.transactionType || '',
		req.query.ticketCaja || '',
		req.query.relatedTranId || '',
		req.query.name || '',
		req.query.status || '',
		req.query.subtotalFormato || '',
		req.query.accountNumber || '',
		req.query.typeName || '',
		req.query.amountTaxable || '',
		req.query.itemTypeName || '',
		req.query.rate || '',
		req.query.entityName || '',
		req.query.entityFullName || '',
		req.query.descuentoPorAplicar || '',
		req.query.otherRefNum || ''
    ];

    executeSP('NsConsulta_READ', params).then(response => {
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

app.get('/amcoderc_dev_jaks/nsConsulta/list', [verifyToken], (req, res) => {
    let params = [
		1,
		req.query.id || null,
		req.query.tranId || '',
		req.query.cfdiTimbrada || '',
		req.query.transactionType || '',
		req.query.ticketCaja || '',
		req.query.relatedTranId || '',
		req.query.name || '',
		req.query.status || '',
		req.query.subtotalFormato || '',
		req.query.accountNumber || '',
		req.query.typeName || '',
		req.query.amountTaxable || '',
		req.query.itemTypeName || '',
		req.query.rate || '',
		req.query.entityName || '',
		req.query.entityFullName || '',
		req.query.descuentoPorAplicar || '',
		req.query.otherRefNum || ''
    ];

    executeSP('NsConsulta_LIST', params).then(response => {
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

app.get('/amcoderc_dev_jaks/nsConsulta/:id', [verifyToken], (req, res) => {
    let params = [
		1, req.params.id || null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null
    ];

    executeSP('NsConsulta_READ', params).then(response => {
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

app.post('/amcoderc_dev_jaks/nsConsulta', [verifyToken], (req, res) => {
    let createdBy = req.token.userId;
    let params = [
		1,
		req.body.facturaGlobalId || null,
		req.body.tranDate || null,
		req.body.tranId || '',
		req.body.entityId || null,
		req.body.cfdiTimbrada || '',
		req.body.transactionType || '',
		req.body.ticketCaja || '',
		req.body.relatedTranId || '',
		req.body.name || '',
		req.body.transactionId || null,
		req.body.status || '',
		req.body.transactionOrder || null,
		req.body.amountForeign || null,
		req.body.subtotalFormato || '',
		req.body.accounId || null,
		req.body.accountNumber || '',
		req.body.typeName || '',
		req.body.amountTaxable || '',
		req.body.taxItemId || null,
		req.body.itemTypeName || '',
		req.body.rate || '',
		req.body.entityName || '',
		req.body.entityFullName || '',
		req.body.descuentoPorAplicar || '',
		req.body.otherRefNum || ''
    ];

    executeSP('NsConsulta_CREATE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/nsConsulta', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
		1,
		req.body.id || null,
		req.body.facturaGlobalId || null,
		req.body.tranDate || null,
		req.body.tranId || '',
		req.body.entityId || null,
		req.body.cfdiTimbrada || '',
		req.body.transactionType || '',
		req.body.ticketCaja || '',
		req.body.relatedTranId || '',
		req.body.name || '',
		req.body.transactionId || null,
		req.body.status || '',
		req.body.transactionOrder || null,
		req.body.amountForeign || null,
		req.body.subtotalFormato || '',
		req.body.accounId || null,
		req.body.accountNumber || '',
		req.body.typeName || '',
		req.body.amountTaxable || '',
		req.body.taxItemId || null,
		req.body.itemTypeName || '',
		req.body.rate || '',
		req.body.entityName || '',
		req.body.entityFullName || '',
		req.body.descuentoPorAplicar || '',
		req.body.otherRefNum || ''
    ];

    executeSP('NsConsulta_UPDATE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/nsConsulta/enable', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
		req.body.id || null
    ];

    executeSP('NsConsulta_ENABLE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/nsConsulta/disable', [verifyToken], (req, res) => {
    let disabledBy = req.token.userId;
    let params = [
		req.body.id || null
    ];

    executeSP('NsConsulta_DISABLE', params).then(response => {
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

app.delete('/amcoderc_dev_jaks/nsConsulta/:id', [verifyToken], (req, res) => {
    let params = [
		req.params.id || null
    ];

    executeSP('NsConsulta_DELETE', params).then(response => {
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

