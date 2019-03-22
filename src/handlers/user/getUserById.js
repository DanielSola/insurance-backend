import { blGetUserById } from 'services/user';
import { genericHandler } from 'handlers';

const getUserById = async ({ params: { userId } }, res) => {
  genericHandler({
    blFunction: blGetUserById,
    errorMsg: '/user/id/ error',
    res,
  })({ userId });
};

export default getUserById;