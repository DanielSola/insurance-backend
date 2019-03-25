import { pathAuth } from 'config';
import {
  MissingHeaderEmail as MissingHeaderEmailError,
  UserNotFound as UserNotFoundError,
  UserNotAuthorized as UserNotAuthorizedError,
} from 'errorcodes/api';
import CompanyAPIService from 'services/CompanyAPIService';

const authorization = async (req, res, next) => {
  const requestPath = req.originalUrl;
  const userEmail = req.header('email');
  
  if(!userEmail) {
    res.status(MissingHeaderEmailError.httpCode).send(MissingHeaderEmailError.message);
  }

  const { clients } = await CompanyAPIService.getClients();
  const user = clients.find(({ email }) => email === userEmail);

  if(!user) {
    res.status(UserNotFoundError.httpCode).send(UserNotFoundError.message);
  }

  const { role: userRole } = user;
  const { authorizedRoles } = pathAuth.find(({ route }) => requestPath.match(route));
  const isAuth = authorizedRoles.includes(userRole);

  if(!isAuth) {
    res.status(UserNotAuthorizedError.httpCode).send(UserNotAuthorizedError.message);
  }

  next();
};

export default authorization;