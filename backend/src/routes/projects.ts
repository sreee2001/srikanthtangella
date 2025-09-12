import { Router } from 'express';
import projects from '../data/projects.json' with { type: 'json' };

const router = Router();

router.get('/api/projects', (req, res) => {
  res.json(projects);
});

export default router;