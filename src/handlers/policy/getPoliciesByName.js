import { blGetPoliciesByName } from 'services/policy';
import { genericHandler } from 'handlers';
import { saveRequest } from 'repositories';

const getPoliciesByName = async (req, res) => {
  const userEmail = req.header('email');
  const resource = req.route.path;

  await saveRequest({ userEmail, resource });

  const { params: userName } = req;

  genericHandler({
    blFunction: blGetPoliciesByName,
    errorMsg: '/policy/name/ error',
    res,
  })(userName);
};

export default getPoliciesByName;