import logger from 'logger';

const genericHandler = ({ blFunction, res, errorMsg }) => async (...args) => {
  try {
    const result = await blFunction(...args);

    res.json(result);
  } catch(err) {

    logger.error(errorMsg, err, JSON.stringify(args));
    res.status(err.httpCode || 500).json({ message: err.message || err });
  }
};

export default genericHandler;
