const {
    PG_USER,
    PG_HOST,
    PG_DATABASE,
    PG_PASSWORD,
    PG_PORT,
  } = process.env;

  const pg = {
    database: PG_DATABASE,
    host: PG_HOST,
    password: PG_PASSWORD,
    port: PG_PORT,
    user: PG_USER,
  };
  
  export default pg;
  