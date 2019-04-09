const jwt = require('jsonwebtoken');

module.exports = {
    decode : (req, res, next) => {
        try {
            var decoded = jwt.verify(req.header.token, process.env.jwt_secret);
            req.decoded = decoded
            next()
        } catch (err) {
            res.status(500).json(err)
        }
    }
}