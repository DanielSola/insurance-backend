import CompanyAPIService from 'services/CompanyAPIService';
import CustomError from 'CustomError';
import { UserNotFound } from 'errorcodes/user';

const blGetUserById = async ({ userId }) => {
  const { clients } = await CompanyAPIService.getClients();
  const user = clients.find(({ id }) => id === userId);

  if(!user) {
    throw new CustomError(UserNotFound);
  }

  return user;
};

export default blGetUserById;