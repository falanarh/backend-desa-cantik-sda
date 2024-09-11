import { Router } from 'express';
import * as menuController from '../controllers/menuController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.use(authenticate);

router.post('/', menuController.createMenu);
router.get('/:id', menuController.getMenu);
router.get('/', menuController.getAllMenus);
router.put('/:id', menuController.updateMenu);
router.delete('/:id', menuController.deleteMenu);
router.post('/:menuId/submenus/:subMenuId', menuController.addSubMenuToMenu);
router.delete('/:menuId/submenus/:subMenuId', menuController.removeSubMenuFromMenu);

export default router;
