import { SECRET } from 'config';
import { InvalidSecret as error } from 'errorcodes/api';

const security = (req, res, next) => {
  if (req.header('x-auth-secret') === SECRET && req.method !== 'OPTIONS') {
    next();
  } else {
    res.status(error.httpCode).send(error.message);
  }
};

export default security;