import { Router } from 'express';
import * as berandaController from '../controllers/berandaController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

// Get all Beranda
router.get('/', berandaController.getAllBeranda);

// Middleware for authentication (you may need to adjust this based on your auth strategy)
router.use(authenticate);

// Update teks_1
router.put('/updateTeks1', berandaController.updateTeks1);

// Update teks_2
router.put('/updateTeks2', berandaController.updateTeks2);

// Update teks_3
router.put('/updateTeks3', berandaController.updateTeks3);

// Update link_gambar
router.put('/updateLinkGambar', berandaController.updateLinkGambar);

// Create a new Beranda
router.post('/', berandaController.createBeranda);

// Get a single Beranda by ID
router.get('/:id', berandaController.getBeranda);


// Update a Beranda by ID
router.put('/:id', berandaController.updateBeranda);

// Delete a Beranda by ID
router.delete('/:id', berandaController.deleteBeranda);

export default router;
