import test from 'tape';
import { stub } from 'sinon';
import proxyquire from 'proxyquire';
import { UserNotFound } from 'errorcodes/user';
import CustomError from 'CustomError';

const CompanyAPIServiceMock = {
  '@noCallThru': true,
   getClients: stub(),
};


const existingId = 1234;
const nonExistingId = 4321;

const expectedUser = { name: 'john', id: existingId };
const clientsMock = {
    clients: [expectedUser]
};

const blGetUserById = proxyquire('../blGetUserById', {
  '../CompanyAPIService': CompanyAPIServiceMock,
}).default;

test('blGetUserById', t => {
  t.test('blGetUserById returns user', async ({ ok, deepEqual, end }) => {
    CompanyAPIServiceMock.getClients.resolves(clientsMock);
    const user = await blGetUserById({userId: existingId});

    ok(CompanyAPIServiceMock.getClients.calledOnce, 'Should call CompanyServiceMock Get clients');
    deepEqual(user, expectedUser, 'Should return expected user');

    CompanyAPIServiceMock.getClients.reset();

    end();
  });

  t.test('blGetUserById throws error if user not found', async ({ ok, deepEqual, end }) => {
    CompanyAPIServiceMock.getClients.resolves(clientsMock);
    const userNotFoundError = new CustomError(UserNotFound);

    try {
        await blGetUserById({userId: nonExistingId});
    } catch(error) {
        ok(CompanyAPIServiceMock.getClients.calledOnce, 'Should call CompanyServiceMock Get clients');
        deepEqual(error, userNotFoundError,'Shoud throw UserNotFound error');
    }

    end();
  });
});
