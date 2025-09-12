import { Router } from 'express';
import education from '../data/education.json' with { type: 'json' };

const router = Router();

router.get('/api/education', (req, res) => {
  res.json(education);
});

export default router;