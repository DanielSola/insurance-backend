import test from 'tape';
import { stub } from 'sinon';
import proxyquire from 'proxyquire';
import { PolicyNotFound } from 'errorcodes/policy';
import CustomError from 'CustomError';

const CompanyAPIServiceMock = {
  '@noCallThru': true,
  getClients: stub(),
  getPolicies: stub(),
};

const existingPolicyId = 1234;
const nonExistingPolicyId = 4321;

const expectedPolicy = { name: 'john', id: existingPolicyId, clientId: 5432 };

const policiesMock = { policies: [expectedPolicy] };

const blGetPolicyById = proxyquire('../blGetPolicyById', {
  '../CompanyAPIService': CompanyAPIServiceMock,
}).default;

test('blGetPolicyById', t => {
  t.test('blGetPolicyById returns user policies', async ({ ok, deepEqual, end }) => {
    CompanyAPIServiceMock.getPolicies.resolves(policiesMock);

    const policies = await blGetPolicyById({ policyId: existingPolicyId });

    ok(CompanyAPIServiceMock.getPolicies.calledOnce, 'Should call CompanyServiceMock Get policies');
    deepEqual(policies, expectedPolicy, 'Should return expected policy');

    CompanyAPIServiceMock.getPolicies.reset();

    end();
  });

  t.test('blGetPolicyById throws error if no policy found', async ({ ok, deepEqual, end }) => {
    CompanyAPIServiceMock.getPolicies.resolves(policiesMock);
    const policyNotFound = new CustomError(PolicyNotFound);

    try {
      await blGetPolicyById({ policyId: nonExistingPolicyId });
    } catch(error) {
      ok(CompanyAPIServiceMock.getPolicies.calledOnce, 'Should call CompanyServiceMock Get clients');
      deepEqual(error, policyNotFound, 'Shoud throw PolicyNotFound error');
    }

    end();
  });
});
