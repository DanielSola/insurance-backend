import express from 'express';
import { getUserById } from 'handlers/user';

const router = new express.Router();

router
  .route('/id/:userId')
  .get(getUserById);

export default router;