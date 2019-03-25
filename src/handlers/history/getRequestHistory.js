import { blGetRequestHistory } from 'services/history';
import { genericHandler } from 'handlers';

const getRequestHistory = async (req, res) => {
  genericHandler({
    blFunction: blGetRequestHistory,
    errorMsg: 'GET /history/ error',
    res,
  })(req);
};

export default getRequestHistory;