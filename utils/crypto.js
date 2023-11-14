const crypto = require("crypto");
const config = require("../config");
const jwt = require("jsonwebtoken");

async function calculateSHA256Hash(text) {
    const hashString = crypto.createHash("sha256");
    hashString.update(`${text}`);
    return hashString.digest("hex");
};

function generateJsonWebToken(userEmail) {
    const payload = {
        username: userEmail
    };
    return jwt.sign(payload, config.webTokenSecret, { expiresIn: config.tokenExpirationTime });
}

function verifyJsonWebToken(token) {
    try {
        let username;
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, payload) => {
            if(err) {
                return null;
            }
            else {
                username = payload.username;
            }
        })
        return username;
    } 
    catch(error) {
        log.debug(error.message);
        return null;
    }
}

function getAuthTokenFromHeader(req) {
    let accessToken = req.headers['authorization'] || req.headers['x-access-token']; 
    if(!accessToken) {
        return null;
    }
    if(accessToken.startsWith('Bearer ')) {
        accessToken = accessToken.slice(7, accessToken.lenght);
    }
    return accessToken;
}

module.exports = {
    calculateSHA256Hash,
    generateJsonWebToken,
    verifyJsonWebToken,
    getAuthTokenFromHeader
};
