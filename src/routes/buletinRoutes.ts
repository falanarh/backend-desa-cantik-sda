import { Router } from 'express';
import * as buletinController from '../controllers/buletinController';
import { authenticate } from '../middlewares/authMiddleware'; // Optional, if authentication is required

const router = Router();

// Middleware for authentication (you may need to adjust this based on your auth strategy)
router.use(authenticate);

// Create a new Buletin
router.post('/', buletinController.createBuletin);

// Get a single Buletin by ID
router.get('/:id', buletinController.getBuletin);

// Get all Buletins
router.get('/', buletinController.getAllBuletin);

// Update a Buletin by ID
router.put('/:id', buletinController.updateBuletin);

// Delete a Buletin by ID
router.delete('/:id', buletinController.deleteBuletin);

export default router;
