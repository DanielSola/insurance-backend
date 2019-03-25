import PostgresSQLService from 'services/PostgresSQLService';

const saveRequestQuery = {
  name: 'insert-request',
  text: `
  INSERT INTO request_history 
  (
    user_email,
    resource
  )
  VALUES ($1, $2)
  `,
};

const saveRequest = async ({ userEmail, resource, pool = PostgresSQLService.getPool() }) => {
  const values = [userEmail, resource];

  return await pool.query(saveRequestQuery, values);
};

export default saveRequest;