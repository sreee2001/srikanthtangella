import { Router } from 'express';
import contact from '../data/contactme.json' with { type: 'json' };

const router = Router();

/**
 * @openapi
 * /api/contactme:
 *   get:
 *     description: Get contact me info
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/api/contactme', (req, res) => {
  res.json(contact);
});

export default router;