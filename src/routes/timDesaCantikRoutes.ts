import { Router } from 'express';
import * as timDesaCantikController from '../controllers/timDesaCantikController';
import { authenticate } from '../middlewares/authMiddleware'; // Optional, if authentication is required

const router = Router();

// Middleware for authentication (optional)
router.use(authenticate);

// Create a new TimDesaCantik
router.post('/', timDesaCantikController.createTimDesaCantik);

// Get a single TimDesaCantik by ID
router.get('/:id', timDesaCantikController.getTimDesaCantik);

// Get all TimDesaCantik
router.get('/', timDesaCantikController.getAllTimDesaCantik);

// Update a TimDesaCantik by ID
router.put('/:id', timDesaCantikController.updateTimDesaCantik);

// Delete a TimDesaCantik by ID
router.delete('/:id', timDesaCantikController.deleteTimDesaCantik);

export default router;
