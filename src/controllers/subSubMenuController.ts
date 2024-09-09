import { Request, Response } from 'express';
import * as SubSubMenuService from '../services/subSubMenuService';

// Create a new SubSubMenu
export const createSubSubMenu = async (req: Request, res: Response) => {
    try {
        const subSubMenu = await SubSubMenuService.createSubSubMenu(req.body);
        res.status(201).json(subSubMenu);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single SubSubMenu by ID
export const getSubSubMenu = async (req: Request, res: Response) => {
    try {
        const subSubMenu = await SubSubMenuService.getSubSubMenu(req.params.id);
        if (!subSubMenu) return res.status(404).json({ message: 'SubSubMenu not found' });
        res.json(subSubMenu);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get all SubSubMenus
export const getAllSubSubMenus = async (req: Request, res: Response) => {
    try {
        const subSubMenus = await SubSubMenuService.getAllSubSubMenus();
        res.json(subSubMenus);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Update a SubSubMenu by ID
export const updateSubSubMenu = async (req: Request, res: Response) => {
    try {
        const subSubMenu = await SubSubMenuService.updateSubSubMenu(req.params.id, req.body);
        if (!subSubMenu) return res.status(404).json({ message: 'SubSubMenu not found' });
        res.json(subSubMenu);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a SubSubMenu by ID
export const deleteSubSubMenu = async (req: Request, res: Response) => {
    try {
        const result = await SubSubMenuService.deleteSubSubMenu(req.params.id);
        if (!result) return res.status(404).json({ message: 'SubSubMenu not found' });
        res.json({ message: 'SubSubMenu deleted successfully' });
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};
