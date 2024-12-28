"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.verifyAccessToken = exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jwt = require("jsonwebtoken");
const config_1 = require("../../../config");
const generateAccessToken = (email) => {
    const secret = config_1.default.auth.ACCESS_TOKEN_SECRET_KEY;
    let duration = config_1.default.auth.ACCESS_TOKEN_DURATION;
    return jwt.sign({ email }, secret, {
        expiresIn: duration,
        subject: email
    });
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (email) => {
    const secret = config_1.default.auth.REFRESH_TOKEN_SECRET_KEY;
    const duration = config_1.default.auth.REFRESH_TOKEN_DURATION;
    return jwt.sign({ email }, secret, {
        expiresIn: duration,
        subject: email
    });
};
exports.generateRefreshToken = generateRefreshToken;
const verifyAccessToken = (token) => {
    const secret = config_1.default.auth.ACCESS_TOKEN_SECRET_KEY;
    return jwt.verify(token, secret);
};
exports.verifyAccessToken = verifyAccessToken;
const verifyRefreshToken = (token) => {
    const secret = config_1.default.auth.REFRESH_TOKEN_SECRET_KEY;
    return jwt.verify(token, secret);
};
exports.verifyRefreshToken = verifyRefreshToken;
//# sourceMappingURL=jwt.js.map