import express from 'express';
import { getPoliciesByName } from 'handlers/policy';

const router = new express.Router();

router
  .route('/name/:userName')
  .get(getPoliciesByName);

export default router;