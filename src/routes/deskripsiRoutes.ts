import { Router } from 'express';
import * as deskripsiController from '../controllers/deskripsiController';
import { authenticate } from '../middlewares/authMiddleware'; // Optional, if authentication is required

const router = Router();

// Middleware for authentication (optional)
router.use(authenticate);

// Create a new Deskripsi
router.post('/', deskripsiController.createDeskripsi);

// Get a single Deskripsi by ID
router.get('/:id', deskripsiController.getDeskripsi);

// Get all Deskripsi
router.get('/', deskripsiController.getAllDeskripsi);

// Update a Deskripsi by ID
router.put('/:id', deskripsiController.updateDeskripsi);

// Delete a Deskripsi by ID
router.delete('/:id', deskripsiController.deleteDeskripsi);

export default router;
