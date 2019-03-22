import CompanyAPIService from 'services/CompanyAPIService';
import CustomError from 'CustomError';
import { UserNotFound } from 'errorcodes/user';

const blGetUserByName = async ({ userName }) => {
  const { clients } = await CompanyAPIService.getClients();
  const user = clients.find(({ name }) => name === userName);

  if(!user) {
    throw new CustomError(UserNotFound);
  }

  return user;
};

export default blGetUserByName;