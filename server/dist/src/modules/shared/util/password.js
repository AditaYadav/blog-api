"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.hash = void 0;
const bcrypt = require("bcrypt");
const config_1 = require("../../../config");
const hash = async (value) => {
    const rounds = config_1.default.auth.SALT_OR_ROUNDS;
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(value, salt);
};
exports.hash = hash;
const compare = (value, hash) => {
    return bcrypt.compare(value, hash);
};
exports.compare = compare;
//# sourceMappingURL=password.js.map