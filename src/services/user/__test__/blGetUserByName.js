import test from 'tape';
import { stub } from 'sinon';
import proxyquire from 'proxyquire';
import { UserNotFound } from 'errorcodes/user';
import CustomError from 'CustomError';

const CompanyAPIServiceMock = {
  '@noCallThru': true,
   getClients: stub(),
};

const existingName = 'john';
const nonExistingName = 'mark';

const expectedUser = { name: existingName, id: 1234 };
const clientsMock = {
    clients: [expectedUser]
};

const blGetUserByName = proxyquire('../blGetUserByName', {
  '../CompanyAPIService': CompanyAPIServiceMock,
}).default;

test('blGetUserByName', t => {
  t.test('blGetUserByName returns user', async ({ ok, deepEqual, end }) => {
    CompanyAPIServiceMock.getClients.resolves(clientsMock);
    const user = await blGetUserByName({userName: existingName});

    ok(CompanyAPIServiceMock.getClients.calledOnce, 'Should call CompanyServiceMock Get clients');
    deepEqual(user, expectedUser, 'Should return expected user');

    CompanyAPIServiceMock.getClients.reset();

    end();
  });

  t.test('blGetUserByName throws error if user not found', async ({ ok, deepEqual, end }) => {
    CompanyAPIServiceMock.getClients.resolves(clientsMock);
    const userNotFoundError = new CustomError(UserNotFound);

    try {
        await blGetUserByName({userName: nonExistingName});
    } catch(error) {
        ok(CompanyAPIServiceMock.getClients.calledOnce, 'Should call CompanyServiceMock Get clients');
        deepEqual(error, userNotFoundError,'Shoud throw UserNotFound error');
    }

    end();
  });
});
