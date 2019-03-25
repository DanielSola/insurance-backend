import { blGetUserByName } from 'services/user';
import { genericHandler } from 'handlers';
import { saveRequest } from 'repositories';

const getUserByName = async (req, res) => {
  const userEmail = req.header('email');
  const resource = req.route.path;
  await saveRequest({userEmail, resource});

  const { params: userName } = req;

  genericHandler({
    blFunction: blGetUserByName,
    errorMsg: '/user/name/ error',
    res,
  })({ userName });
};

export default getUserByName;