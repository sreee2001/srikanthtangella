import { Router } from 'express';
import contact from '../data/contactme.json' with { type: 'json' };

const router = Router();

router.get('/api/contactme', (req, res) => {
  res.json(contact);
});

export default router;