const { users } = require("../models");
const { getAuthTokenFromHeader, verifyJsonWebToken } = require("../utils/crypto");

async function verifyDriverToken(req, res, next) {
    try {
        let accessToken = getAuthTokenFromHeader(req);
        if(!accessToken) {
            res.status(401).json({ message: "Access denied, token?" });
            return;
        }

        let email = await verifyJsonWebToken(accessToken);
        if(email) {
            next();
        }
        else {
            res.status(401).json({ message: "Access denied, token expired or is invaid" });
        }

        let user = users.getByEmail(email);
        if(user.type != "assistant") {
            res.status(401).json({ message: "Access denied, token expired or is invaid" });
        }
    } 
    catch(error) {
        res.status(418).json({ message: "Quack" });
    }
}

async function verifyEmployeeToken(req, res, next) {
    try {
        let accessToken = getAuthTokenFromHeader(req);
        if(!accessToken) {
            res.status(401).json({ message: "Access denied, token?" });
            return;
        }

        let email = await verifyJsonWebToken(accessToken);
        if(email) {
            next();
        }
        else {
            res.status(401).json({ message: "Access denied, token expired or is invaid" });
        }

        let user = users.getByEmail(email);
        if(user.type != "eventPlanner") {
            res.status(401).json({ message: "Access denied, token expired or is invaid" });
        }
    } 
    catch(error) {
        res.status(418).json({ message: "Quack" });
    }
}

async function verifyAdminToken(req, res, next) {
    try {
        let accessToken = getAuthTokenFromHeader(req);
        if(!accessToken) {
            res.status(401).json({ message: "Access denied, token?" });
            return;
        }

        let email = await verifyJsonWebToken(accessToken);
        if(email) {
            next();
        }
        else {
            res.status(401).json({ message: "Access denied, token expired or is invaid" });
        }

        let user = users.getByEmail(email);
        if(user.type != "admin") {
            res.status(401).json({ message: "Access denied, token expired or is invaid" });
        }
    } 
    catch(error) {
        res.status(418).json({ message: "Quack" });
    }
}

module.exports = {
    verifyDriverToken,
    verifyEmployeeToken,
    verifyAdminToken
}
