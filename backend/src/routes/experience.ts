import { Router } from 'express';
import experience from '../data/experience.json' with { type: 'json' };

const router = Router();

/**
 * @openapi
 * /api/experience:
 *   get:
 *     description: Get experience info
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/api/experience', (req, res) => {
  res.json(experience);
});

export default router;