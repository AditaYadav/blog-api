import e from 'express';
import * as jwt from 'jsonwebtoken';
import appConfig from 'src/config';

export const generateAccessToken = (email: string) => {
  const secret = appConfig.auth.ACCESS_TOKEN_SECRET_KEY;
  let duration = appConfig.auth.ACCESS_TOKEN_DURATION;

  return jwt.sign({ email }, secret, {
    expiresIn: duration,
    subject: email
  });
};

export const generateRefreshToken = (email: string) => {
  const secret = appConfig.auth.REFRESH_TOKEN_SECRET_KEY;
  const duration = appConfig.auth.REFRESH_TOKEN_DURATION;

  return jwt.sign({ email }, secret, {
    expiresIn: duration,
    subject: email
  });
};

export const verifyAccessToken = (token: string) => {
  const secret = appConfig.auth.ACCESS_TOKEN_SECRET_KEY;

  return jwt.verify(token, secret);
};

export const verifyRefreshToken = (token: string) => {
  const secret = appConfig.auth.REFRESH_TOKEN_SECRET_KEY;

  return jwt.verify(token, secret);
};