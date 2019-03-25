import { blGetPolicyById } from 'services/policy';
import { genericHandler } from 'handlers';
import { saveRequest } from 'repositories';

const getPolicyById = async (req, res) => {
  const userEmail = req.header('email');
  const resource = req.route.path;

  await saveRequest({ userEmail, resource });

  const { params: policyId } = req;

  genericHandler({
    blFunction: blGetPolicyById,
    errorMsg: '/policy/policyId/ error',
    res,
  })(policyId);
};

export default getPolicyById;