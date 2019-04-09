const jwt = require('jsonwebtoken');

module.exports = {
    token : (id, username, email) => {
        try {
            return jwt.sign({
                id,
                username,
                email
            }, process.env.jwt_secret)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}