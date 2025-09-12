import { Router } from 'express';
import education from '../data/education.json' with { type: 'json' };

const router = Router();

/**
 * @openapi
 * /api/education:
 *   get:
 *     description: Get education info
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/api/education', (req, res) => {
  res.json(education);
});

export default router;