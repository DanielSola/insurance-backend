import { blGetUserById } from 'services/user';
import { genericHandler } from 'handlers';
import { saveRequest } from 'repositories';

const getUserById = async (req, res) => {
  const userEmail = req.header('email');
  const resource = req.route.path;

  await saveRequest({ userEmail, resource });

  const { params: userId } = req;

  genericHandler({
    blFunction: blGetUserById,
    errorMsg: '/user/id/ error',
    res,
  })(userId);
};

export default getUserById;