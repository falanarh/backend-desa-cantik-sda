import { Router } from 'express';
import * as desaController from '../controllers/desaController';
import { authenticate } from '../middlewares/authMiddleware'; // Optional, if authentication is required

const router = Router();

// Get all Desa
router.get('/', desaController.getAllDesa);

// Middleware for authentication (optional)
router.use(authenticate);

// Create a new Desa
router.post('/', desaController.createDesa);

// Get a single Desa by ID
router.get('/:id', desaController.getDesa);


// Update a Desa by ID
router.put('/:id', desaController.updateDesa);

// Delete a Desa by ID
router.delete('/:id', desaController.deleteDesa);

export default router;
