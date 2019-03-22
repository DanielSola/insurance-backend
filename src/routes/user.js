import express from 'express';
import { getUserById, getUserByName } from 'handlers/user';

const router = new express.Router();

router
  .route('/id/:userId')
  .get(getUserById);

router
  .route('/name/:userName')
  .get(getUserByName);

export default router;