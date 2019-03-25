import CompanyAPIService from 'services/CompanyAPIService';
import CustomError from 'CustomError';
import { PolicyNotFound } from 'errorcodes/policy';

const blGetPolicyById = async ({ policyId }) => {
  const { policies } = await CompanyAPIService.getPolicies();
  const policy = policies.find(({ id }) => id === policyId);

  if(!policy) {
    throw new CustomError(PolicyNotFound);
  }

  return policy;
};

export default blGetPolicyById;