import { Router } from 'express';
import * as statistikController from '../controllers/statistikController';
import { authenticate } from '../middlewares/authMiddleware'; // Optional, if authentication is required

const router = Router();

// Middleware for authentication (optional)
router.use(authenticate);

// Create a new Statistik
router.post('/', statistikController.createStatistik);

// Get a single Statistik by ID
router.get('/:id', statistikController.getStatistik);

// Get all Statistik
router.get('/', statistikController.getAllStatistik);

// Update a Statistik by ID
router.put('/:id', statistikController.updateStatistik);

// Delete a Statistik by ID
router.delete('/:id', statistikController.deleteStatistik);

export default router;
