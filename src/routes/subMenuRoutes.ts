import { Router } from 'express';
import * as SubMenuController from '../controllers/subMenuController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

// Middleware for authentication (you may need to adjust this based on your auth strategy)
router.use(authenticate);

// CRUD routes for SubMenu
router.post('/', SubMenuController.createSubMenu);
router.get('/:id', SubMenuController.getSubMenu);
router.get('/', SubMenuController.getAllSubMenus);
router.put('/:id', SubMenuController.updateSubMenu);
router.delete('/:id', SubMenuController.deleteSubMenu);

// Routes to add/remove SubSubMenu
router.post('/:id/subSubMenus', SubMenuController.addSubSubMenuToSubMenu);
router.delete('/:id/subSubMenus', SubMenuController.removeSubSubMenuFromSubMenu);

export default router;
