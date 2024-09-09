import { Router } from 'express';
import * as menuController from '../controllers/menuController';
import { authenticate } from '../middlewares/authMiddleware'; // Optional, if authentication is required

const router = Router();

// Middleware for authentication (optional)
router.use(authenticate);

// Create a new Menu
router.post('/', menuController.createMenu);

// Get a single Menu by ID
router.get('/:id', menuController.getMenu);

// Get all Menu
router.get('/', menuController.getAllMenu);

// Update a Menu by ID
router.put('/:id', menuController.updateMenu);

// Delete a Menu by ID
router.delete('/:id', menuController.deleteMenu);

// Add SubMenu to a Menu
router.post('/:menuId/submenus/:subMenuId', menuController.addSubMenuToMenu);

// Remove SubMenu from a Menu
router.delete('/:menuId/submenus/:subMenuId', menuController.removeSubMenuFromMenu);

export default router;
