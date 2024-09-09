import { Request, Response } from 'express';
import * as menuService from '../services/menuService';

// Create a new Menu
export const createMenu = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const menu = await menuService.createMenu(data);
        res.status(201).json(menu);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single Menu by ID
export const getMenu = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const menu = await menuService.getMenu(id);
        if (!menu) return res.status(404).json({ message: 'Menu not found' });
        res.status(200).json(menu);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Menu
export const getAllMenu = async (req: Request, res: Response) => {
    try {
        const menuList = await menuService.getAllMenu();
        res.status(200).json(menuList);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Menu by ID
export const updateMenu = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedMenu = await menuService.updateMenu(id, data);
        if (!updatedMenu) return res.status(404).json({ message: 'Menu not found' });
        res.status(200).json(updatedMenu);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a Menu by ID
export const deleteMenu = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await menuService.deleteMenu(id);
        if (!result) return res.status(404).json({ message: 'Menu not found' });
        res.status(204).send(); // No content
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Add SubMenu to a Menu
export const addSubMenuToMenu = async (req: Request, res: Response) => {
    try {
        const { menuId, subMenuId } = req.params;
        const updatedMenu = await menuService.addSubMenuToMenu(menuId, subMenuId);
        res.status(200).json(updatedMenu);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Remove SubMenu from a Menu
export const removeSubMenuFromMenu = async (req: Request, res: Response) => {
    try {
        const { menuId, subMenuId } = req.params;
        const updatedMenu = await menuService.removeSubMenuFromMenu(menuId, subMenuId);
        res.status(200).json(updatedMenu);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};
