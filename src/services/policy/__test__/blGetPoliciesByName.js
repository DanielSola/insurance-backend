import test from 'tape';
import { stub } from 'sinon';
import proxyquire from 'proxyquire';
import { UserNotFound } from 'errorcodes/user';
import CustomError from 'CustomError';

const CompanyAPIServiceMock = {
  '@noCallThru': true,
  getClients: stub(),
  getPolicies: stub(),
};

const existingName = 'john';
const nonExistingName = 'mark';

const expectedUser = { name: existingName, id: 1234 };
const clientsMock = {
  clients: [expectedUser],
};

const expectedPolicy = [{ name: existingName, policyId: 4321, clientId: 1234 }];

const policiesMock = { policies: expectedPolicy };

const blGetPoliciesByName = proxyquire('../blGetPoliciesByName', {
  '../CompanyAPIService': CompanyAPIServiceMock,
}).default;

test('blGetPoliciesByName', t => {
  t.test('blGetPoliciesByName returns user policies', async ({ ok, deepEqual, end }) => {
    CompanyAPIServiceMock.getClients.resolves(clientsMock);
    CompanyAPIServiceMock.getPolicies.resolves(policiesMock);

    const policies = await blGetPoliciesByName({ userName: existingName });

    ok(CompanyAPIServiceMock.getClients.calledOnce, 'Should call CompanyServiceMock Get clients');
    ok(CompanyAPIServiceMock.getPolicies.calledOnce, 'Should call CompanyServiceMock Get policies');
    deepEqual(policies, expectedPolicy, 'Should return expected policy');

    CompanyAPIServiceMock.getClients.reset();

    end();
  });

  t.test('blGetPoliciesByName throws error if user not found', async ({ ok, deepEqual, end }) => {
    CompanyAPIServiceMock.getClients.resolves(clientsMock);
    const userNotFoundError = new CustomError(UserNotFound);

    try {
      await blGetPoliciesByName({ userName: nonExistingName });
    } catch(error) {
      ok(CompanyAPIServiceMock.getClients.calledOnce, 'Should call CompanyServiceMock Get clients');
      deepEqual(error, userNotFoundError, 'Shoud throw UserNotFound error');
    }

    end();
  });
});
