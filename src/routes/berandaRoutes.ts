import { Router } from 'express';
import * as berandaController from '../controllers/berandaController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

// Middleware for authentication (you may need to adjust this based on your auth strategy)
router.use(authenticate);

// Create a new Beranda
router.post('/', berandaController.createBeranda);

// Get a single Beranda by ID
router.get('/:id', berandaController.getBeranda);

// Get all Beranda
router.get('/', berandaController.getAllBeranda);

// Update a Beranda by ID
router.put('/:id', berandaController.updateBeranda);

// Delete a Beranda by ID
router.delete('/:id', berandaController.deleteBeranda);

export default router;
