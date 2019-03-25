const {
  SENTRY_API_KEY,
  SENTRY_ENVIRONMENT = 'dev',
  SENTRY_ID,
  SENTRY_URL,
  NODE_ENV,
  VERBOSE,
} = process.env;
  
const sentry = {
  NODE_ENV,
  SENTRY_API_KEY,
  SENTRY_ENVIRONMENT,
  SENTRY_ID,
  SENTRY_URL,
  VERBOSE,
};
  
export default sentry;