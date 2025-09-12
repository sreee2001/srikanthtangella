import { Router } from 'express';
import projects from '../data/projects.json' with { type: 'json' };

const router = Router();

/**
 * @openapi
 * /api/projects:
 *   get:
 *     description: Get projects info
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/api/projects', (req, res) => {
  res.json(projects);
});

export default router;