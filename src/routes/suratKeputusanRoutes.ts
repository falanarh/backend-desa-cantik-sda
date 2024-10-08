import { Router } from 'express';
import * as suratKeputusanController from '../controllers/suratKeputusanController';
import { authenticate } from '../middlewares/authMiddleware'; // Optional, if authentication is required

const router = Router();

// Get all SuratKeputusan
router.get('/', suratKeputusanController.getAllSuratKeputusan);

// Middleware for authentication (optional)
router.use(authenticate);

// Create a new SuratKeputusan
router.post('/', suratKeputusanController.createSuratKeputusan);

// Get a single SuratKeputusan by ID
router.get('/:id', suratKeputusanController.getSuratKeputusan);

// Update a SuratKeputusan by ID
router.put('/:id', suratKeputusanController.updateSuratKeputusan);

// Delete a SuratKeputusan by ID
router.delete('/:id', suratKeputusanController.deleteSuratKeputusan);

export default router;
