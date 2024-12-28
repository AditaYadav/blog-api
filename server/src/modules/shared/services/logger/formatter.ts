import * as winston from 'winston';

const { printf } = winston.format;
const keysToFilter = ['password', 'token'];

export const logFormatter = printf(
  (info: winston.Logform.TransformableInfo) => {
    const { level, message, timestamp, ...rest } = info;

    const context = rest?.context ? `| ${rest.context}` : '';

    const logMessage =
      message && message instanceof Object
        ? JSON.stringify(
            message,
            (key: string, val: any) => {
              return keysToFilter.includes(key) ? '********' : val;
            },
            2,
          )
        : message;

    return `[ ${timestamp} ]- [ ${level} ] ${logMessage} ${context}`;
  },
);
