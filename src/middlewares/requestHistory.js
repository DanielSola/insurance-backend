import { saveRequest } from 'repositories';

const requestHistory = async (req, res, next) => {
  const { userEmail, userRole, resource } = req;

  try {
    await saveRequest({ userEmail, userRole, resource });
  } catch (error) {
    next();
  }

  next();
};

export default requestHistory;