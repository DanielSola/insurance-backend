import request from 'superagent';
import { CLIENTS_API_URL } from 'config';

import catchError from '../catchError';

class CompanyAPIService {
  @catchError
  async getClients() {
    const { body } = await request.get(CLIENTS_API_URL);

    return body;
  }
}

export default new CompanyAPIService();