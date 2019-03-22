import sentry from 'cfg/sentry';
import pathAuth from 'cfg/pathAuth';

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
  pathAuth,
};
