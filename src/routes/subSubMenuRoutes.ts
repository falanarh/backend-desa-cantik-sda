import { Router } from 'express';
import * as subSubMenuController from '../controllers/subSubMenuController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

// Middleware for authentication (you may need to adjust this based on your auth strategy)
router.use(authenticate);

// CRUD routes for SubSubMenu
router.post('/', subSubMenuController.createSubSubMenu);
router.get('/:id', subSubMenuController.getSubSubMenu);
router.get('/', subSubMenuController.getAllSubSubMenus);
router.put('/:id', subSubMenuController.updateSubSubMenu);
router.delete('/:id', subSubMenuController.deleteSubSubMenu);


export default router;
