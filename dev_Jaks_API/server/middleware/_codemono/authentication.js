const jwt = require('jsonwebtoken');

//====================================
// Verificar Token
//====================================

let verifyToken = (req, res, next) => {

    let token = req.get('Authorization');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                executionError: true,
                message: 'Invalid Token'
            });
        }

        req.token = decoded;
        next();
    });
};

module.exports = { verifyToken }