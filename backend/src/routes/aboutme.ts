import { Router } from 'express';
import about from '../data/aboutme.json' with { type: 'json' };

const router = Router();

router.get('/api/aboutme', (req, res) => {
  res.json(about);
});

export default router;