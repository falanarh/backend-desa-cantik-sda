import { Router } from 'express';
import * as deskripsiController from '../controllers/deskripsiController';
import { authenticate } from '../middlewares/authMiddleware'; // Optional, if authentication is required

const router = Router();

// Get all Deskripsi
router.get('/', deskripsiController.getAllDeskripsi);

// Middleware for authentication (optional)
router.use(authenticate);

// Update Judul
router.put('/updateJudul', deskripsiController.updateJudul);

// Update Sub Judul
router.put('/updateSubJudul', deskripsiController.updateSubJudul);

// Update Isi
router.put('/updateIsi', deskripsiController.updateIsi);

// Update Link Video
router.put('/updateLinkVideo', deskripsiController.updateLinkVideo);

// Create a new Deskripsi
router.post('/', deskripsiController.createDeskripsi);

// Get a single Deskripsi by ID
router.get('/:id', deskripsiController.getDeskripsi);

// Update a Deskripsi by ID
router.put('/:id', deskripsiController.updateDeskripsi);

// Delete a Deskripsi by ID
router.delete('/:id', deskripsiController.deleteDeskripsi);

export default router;
