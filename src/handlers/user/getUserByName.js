import { blGetUserByName } from 'services/user';
import { genericHandler } from 'handlers';

const getUserByName = async ({ params: { userName } }, res) => {
  genericHandler({
    blFunction: blGetUserByName,
    errorMsg: '/user/name/ error',
    res,
  })({ userName });
};

export default getUserByName;