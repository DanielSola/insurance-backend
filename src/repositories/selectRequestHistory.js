import PostgresSQLService from 'services/PostgresSQLService';

const selectRequestHistoryQuery = {
  name: 'select-request-history',
  text:
  `SELECT
    *
  FROM
    request_history`,
};

const selectRequestHistory = async ({ pool = PostgresSQLService.getPool() }) => {
  const { rows: history } = await pool.query(selectRequestHistoryQuery);

  return history;
};

export default selectRequestHistory;