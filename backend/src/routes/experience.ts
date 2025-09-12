import { Router } from 'express';
import experience from '../data/experience.json' with { type: 'json' };

const router = Router();

router.get('/api/experience', (req, res) => {
  res.json(experience);
});

export default router;