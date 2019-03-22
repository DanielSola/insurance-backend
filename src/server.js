import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import '@babel/polyfill';

import logger from 'logger';

const app = express();

const {
  LOG,
  PORT = 8080,
} = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Insurance API REST is running...');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

if (LOG) {
  app.use(morgan('combined'));
}

const start = () => {
  app.listen(PORT, () => {
    logger.info(`Running on ${PORT}`);
  });
};

export {
  app,
  start,
};
