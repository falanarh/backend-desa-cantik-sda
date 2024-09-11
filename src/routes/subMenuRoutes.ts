import { Router } from 'express';
import * as subMenuController from '../controllers/subMenuController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

// Routes for SubMenu
router.use(authenticate);
router.post('/', subMenuController.createSubMenu);
router.get('/:id', subMenuController.getSubMenu);
router.get('/', subMenuController.getAllSubMenus);
router.put('/:id', subMenuController.updateSubMenu);
router.delete('/:id', subMenuController.deleteSubMenu);
router.post('/:subMenuId/subsubmenus/:subSubMenuId', subMenuController.addSubSubMenuToSubMenu);
router.delete('/:id/subsubmenus', subMenuController.removeSubSubMenuFromSubMenu);

export default router;
