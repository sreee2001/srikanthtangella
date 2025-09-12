import { Router } from 'express';
import about from '../data/aboutme.json' with { type: 'json' };

const router = Router();

/**
 * @openapi
 * /api/aboutme:
 *   get:
 *     description: Get about me info
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/api/aboutme', (req, res) => {
  res.json(about);
});

export default router;