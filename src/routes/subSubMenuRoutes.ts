import { Router } from 'express';
import * as SubSubMenuController from '../controllers/subSubMenuController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

// Middleware for authentication (you may need to adjust this based on your auth strategy)
router.use(authenticate);

// CRUD routes for SubSubMenu
router.post('/', SubSubMenuController.createSubSubMenu);
router.get('/:id', SubSubMenuController.getSubSubMenu);
router.get('/', SubSubMenuController.getAllSubSubMenus);
router.put('/:id', SubSubMenuController.updateSubSubMenu);
router.delete('/:id', SubSubMenuController.deleteSubSubMenu);

export default router;
