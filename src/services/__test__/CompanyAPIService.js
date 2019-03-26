import test from 'tape';
import { stub } from 'sinon';
import proxyquire from 'proxyquire';
import { CLIENTS_API_URL, POLICIES_API_URL } from 'config';

const getStub = stub();
const superagentMock = { get: getStub };
const response = 'foo';

const CompanyAPIService = proxyquire('../CompanyAPIService', {
  'superagent': superagentMock,
}).default;

test('services/CompanyAPIService ', t => {
  t.test('CompanyAPIService/getClients success', async ({ deepEqual, ok, end }) => {
    getStub.resolves({ body: response });
    const clients = await CompanyAPIService.getClients();

    ok(getStub.calledWith(CLIENTS_API_URL), 'Should do clients request');
    deepEqual(clients, response, 'Should return clients');

    getStub.reset();

    end();
  });

  t.test('CompanyAPIService/getClients error', async ({ ok, end }) => {
    getStub.throws();

    try {
      await CompanyAPIService.getClients();
    } catch (error) {
      ok(getStub.calledWith(CLIENTS_API_URL), 'Should do policies request');
      ok(error, 'Should throw error');
    }

    getStub.reset();

    end();
  });
  
  t.test('CompanyAPIService/getPolicies success', async ({ deepEqual, ok, end }) => {
    getStub.resolves({ body: response });
    const policies = await CompanyAPIService.getPolicies();
      
    ok(getStub.calledWith(POLICIES_API_URL), 'Should do policies request');
    deepEqual(policies, response, 'Should return clients');
      
    getStub.reset();
      
    end();
  });
    
  t.test('CompanyAPIService/getPolicies error', async ({ ok, end }) => {
    getStub.throws();

    try {
      await CompanyAPIService.getPolicies();
    } catch (error) {
      ok(getStub.calledWith(POLICIES_API_URL), 'Should do policies request');
      ok(error, 'Should throw error');
    }

    getStub.reset();

    end();
  });
});
