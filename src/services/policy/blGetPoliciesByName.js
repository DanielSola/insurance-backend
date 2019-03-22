import CompanyAPIService from 'services/CompanyAPIService';
import CustomError from 'CustomError';
import { UserNotFound } from 'errorcodes/user';

const blGetPoliciesByName = async ({ userName }) => {
  const { clients } = await CompanyAPIService.getClients();
  const user = clients.find(({ name }) => name === userName);

  if(!user) {
    throw new CustomError(UserNotFound);
  }
  
  const { id } = user;
  const { policies } = await CompanyAPIService.getPolicies();
  const clientPolicies = policies.filter(({clientId}) => clientId === id);

  return clientPolicies;
};

export default blGetPoliciesByName;