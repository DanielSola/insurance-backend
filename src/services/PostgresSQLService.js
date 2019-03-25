import { Pool } from 'pg';
import logger from 'logger';
import config from 'config';

class PostgresSQLService {
  constructor() {
    logger.info('PostgresSQLService - constructor');
    this.configPG = {
      database: config.pg.database,
      host: config.pg.host,
      max: 10,
      password: config.pg.password,
      port: config.pg.port,
      user: config.pg.user,
    };
    this.pool = null;
  }
  
  getPool() {
    if (!this.pool) {
      this.pool = new Pool(this.configPG);
    }

    return this.pool;
  }
}

export default new PostgresSQLService();
