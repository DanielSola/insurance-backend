import express from 'express';
import { getPoliciesByName, getPolicyById } from 'handlers/policy';

const router = new express.Router();

router
  .route('/name/:userName')
  .get(getPoliciesByName);

router
  .route('/policyId/:policyId')
  .get(getPolicyById);

export default router;