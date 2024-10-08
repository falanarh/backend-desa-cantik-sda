import { Router } from 'express';
import * as statistikController from '../controllers/statistikController';
import { authenticate } from '../middlewares/authMiddleware'; // Optional, if authentication is required

const router = Router();

// Get all Statistik
router.get('/', statistikController.getAllStatistik);

// Middleware for authentication (optional)
router.use(authenticate);

// Update Kecamatan
router.put('/updateKec', statistikController.updateKecStat);

// Update Desa
router.put('/updateDes', statistikController.updateDesStat);

// Update RT
router.put('/updateRt', statistikController.updateRtStat);

// Create a new Statistik
router.post('/', statistikController.createStatistik);

// Get a single Statistik by ID
router.get('/:id', statistikController.getStatistik);

// Update a Statistik by ID
router.put('/:id', statistikController.updateStatistik);

// Delete a Statistik by ID
router.delete('/:id', statistikController.deleteStatistik);

export default router;
