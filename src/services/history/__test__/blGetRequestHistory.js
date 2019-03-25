import test from 'tape';
import { stub } from 'sinon';
import proxyquire from 'proxyquire';

const mockHistory = [{
    id: 123,
    user_email: 'john@doe.com',
    resource: '/name/:userName',
    request_date: '01/01/1970'
}];
const selectRequestHistoryStub = stub();
const repositoriesMock = { selectRequestHistory: selectRequestHistoryStub };

const blGetRequestHistory = proxyquire('../blGetRequestHistory', {
  '../../repositories': repositoriesMock,
}).default;

test('blGetRequestHistory', t => {
  t.test('blGetRequestHistory returns user history', async ({ ok, deepEqual, end }) => {
    selectRequestHistoryStub.resolves(mockHistory);
    const history = await blGetRequestHistory({});

    ok(selectRequestHistoryStub.calledOnce, 'Should call selectRequestHistory');
    deepEqual(history, {history: mockHistory}, 'Should return expected policy');

    end();
  });
});