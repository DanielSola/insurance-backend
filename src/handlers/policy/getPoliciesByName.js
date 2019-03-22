import { blGetPoliciesByName } from 'services/policy';
import { genericHandler } from 'handlers';

const getPoliciesByName = async ({ params: { userName } }, res) => {
  genericHandler({
    blFunction: blGetPoliciesByName,
    errorMsg: '/policy/name/ error',
    res,
  })({ userName });
};

export default getPoliciesByName;