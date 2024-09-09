import { Router } from 'express';
import { uploadFile } from '../controllers/uploadController';
import multer from 'multer';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

// Middleware for authentication (you may need to adjust this based on your auth strategy)
router.use(authenticate);

// Configure multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), uploadFile);

export default router;
