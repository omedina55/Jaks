const express = require('express');
const { verifyToken } = require('../../middleware/_codemono/authentication');
const { executeSP } = require('../../libraries/_codemono/MySQL');
const { getBool } = require('../../libraries/_codemono/data');
const app = express();

app.get('/amcoderc_dev_jaks/facturaGlobal', [verifyToken], (req, res) => {
    let params = [
		1,
		req.query.id || null,
		req.query.descripcion || '',
		req.query.currency || '',
		req.query.paymentConditions || '',
		req.query.orderNumber || '',
		req.query.folio || '',
		req.query.cfdiType || '',
		req.query.paymentForm || '',
		req.query.paymentMethod || '',
		req.query.receiver__Rfc || '',
		req.query.receiver__Name || '',
		req.query.receiver__CfdiUse || '',
		req.query.expeditionPlaceSandbox || '',
		req.query.xmlInternalId || '',
		req.query.pdfInternalId || '',
		req.query.nombreArchivoSandbox || '',
		req.query.nombreArchivo || ''
    ];

    executeSP('FacturaGlobal_READ', params).then(response => {
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

app.get('/amcoderc_dev_jaks/facturaGlobal/list', [verifyToken], (req, res) => {
    let params = [
		1,
		req.query.id || null,
		req.query.descripcion || '',
		req.query.currency || '',
		req.query.paymentConditions || '',
		req.query.orderNumber || '',
		req.query.folio || '',
		req.query.cfdiType || '',
		req.query.paymentForm || '',
		req.query.paymentMethod || '',
		req.query.receiver__Rfc || '',
		req.query.receiver__Name || '',
		req.query.receiver__CfdiUse || '',
		req.query.expeditionPlaceSandbox || '',
		req.query.xmlInternalId || '',
		req.query.pdfInternalId || '',
		req.query.nombreArchivoSandbox || '',
		req.query.nombreArchivo || ''
    ];

    executeSP('FacturaGlobal_LIST', params).then(response => {
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

app.get('/amcoderc_dev_jaks/facturaGlobal/:id', [verifyToken], (req, res) => {
    let params = [
		1, req.params.id || null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null
    ];

    executeSP('FacturaGlobal_READ', params).then(response => {
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

app.post('/amcoderc_dev_jaks/facturaGlobal', [verifyToken], (req, res) => {
    let createdBy = req.token.userId;
    let params = [
		1,
		req.body.descripcion || '',
		req.body.empresaId || null,
		req.body.periodoId || null,
		req.body.fechaInicio || null,
		req.body.fechaFin || null,
		req.body.completadaSandbox || null,
		req.body.completada || null,
		req.body.currency || '',
		req.body.expeditionPlace || null,
		req.body.paymentConditions || '',
		req.body.orderNumber || '',
		req.body.folio || '',
		req.body.cfdiType || '',
		req.body.paymentForm || '',
		req.body.paymentMethod || '',
		req.body.receiver__Rfc || '',
		req.body.receiver__Name || '',
		req.body.receiver__CfdiUse || '',
		req.body.cancelada || null,
		req.body.intento || null,
		req.body.usuarioCreacionId || null,
		req.body.expeditionPlaceSandbox || '',
		req.body.xmlInternalId || '',
		req.body.pdfInternalId || '',
		req.body.nombreArchivoSandbox || '',
		req.body.nombreArchivo || '',
		req.body.usuarioAprobadorId || null
    ];

    executeSP('FacturaGlobal_CREATE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/facturaGlobal', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
		1,
		req.body.id || null,
		req.body.descripcion || '',
		req.body.empresaId || null,
		req.body.periodoId || null,
		req.body.fechaInicio || null,
		req.body.fechaFin || null,
		req.body.completadaSandbox || null,
		req.body.completada || null,
		req.body.currency || '',
		req.body.expeditionPlace || null,
		req.body.paymentConditions || '',
		req.body.orderNumber || '',
		req.body.folio || '',
		req.body.cfdiType || '',
		req.body.paymentForm || '',
		req.body.paymentMethod || '',
		req.body.receiver__Rfc || '',
		req.body.receiver__Name || '',
		req.body.receiver__CfdiUse || '',
		req.body.cancelada || null,
		req.body.intento || null,
		req.body.usuarioCreacionId || null,
		req.body.expeditionPlaceSandbox || '',
		req.body.xmlInternalId || '',
		req.body.pdfInternalId || '',
		req.body.nombreArchivoSandbox || '',
		req.body.nombreArchivo || '',
		req.body.usuarioAprobadorId || null
    ];

    executeSP('FacturaGlobal_UPDATE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/facturaGlobal/enable', [verifyToken], (req, res) => {
    let updatedBy = req.token.userId;
    let params = [
		req.body.id || null
    ];

    executeSP('FacturaGlobal_ENABLE', params).then(response => {
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

app.put('/amcoderc_dev_jaks/facturaGlobal/disable', [verifyToken], (req, res) => {
    let disabledBy = req.token.userId;
    let params = [
		req.body.id || null
    ];

    executeSP('FacturaGlobal_DISABLE', params).then(response => {
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

app.delete('/amcoderc_dev_jaks/facturaGlobal/:id', [verifyToken], (req, res) => {
    let params = [
		req.params.id || null
    ];

    executeSP('FacturaGlobal_DELETE', params).then(response => {
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

