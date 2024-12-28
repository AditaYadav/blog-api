"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logFormatter = void 0;
const winston = require("winston");
const { printf } = winston.format;
const keysToFilter = ['password', 'token'];
exports.logFormatter = printf((info) => {
    const { level, message, timestamp, ...rest } = info;
    const context = rest?.context ? `| ${rest.context}` : '';
    const logMessage = message && message instanceof Object
        ? JSON.stringify(message, (key, val) => {
            return keysToFilter.includes(key) ? '********' : val;
        }, 2)
        : message;
    return `[ ${timestamp} ]- [ ${level} ] ${logMessage} ${context}`;
});
//# sourceMappingURL=formatter.js.map