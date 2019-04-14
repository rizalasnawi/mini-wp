const {OAuth2Clinet} = require('google-auth-library');
const clientID =  process.env.GoogleClientID;
const client = new OAuth2Clinet(clientID);


module.exports = {
    googleAuthentication (token) {
        return client.verifyIdToken({
            idToken : token,
            audience : clientID
        })
    }
}