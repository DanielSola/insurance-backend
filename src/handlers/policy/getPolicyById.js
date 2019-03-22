import { blGetPolicyById } from 'services/policy';
import { genericHandler } from 'handlers';

const getPolicyById = async ({ params: { policyId } }, res) => {
  genericHandler({
    blFunction: blGetPolicyById,
    errorMsg: '/policy/policyId/ error',
    res,
  })({ policyId });
};

export default getPolicyById;