import Logger from 'sentry-winston-logger';

import { sentry as options } from 'config';

export default new Logger(options);
