import express from 'express';
import { getRequestHistory } from 'handlers/history';

const router = new express.Router();

router
  .route('/')
  .get(getRequestHistory);

export default router;