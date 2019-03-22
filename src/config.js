import sentry from 'cfg/sentry';

const {
  CLIENTS_API_URL,
  POLICIES_API_URL,
  PORT,
  SECRET,
} = process.env;

module.exports = {
  CLIENTS_API_URL,
  POLICIES_API_URL,
  PORT,
  SECRET,
  sentry,
};
