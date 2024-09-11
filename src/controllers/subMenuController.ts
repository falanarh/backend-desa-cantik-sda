import { Request, Response } from "express";
import * as SubMenuService from "../services/subMenuService";

// Create a new SubMenu
export const createSubMenu = async (req: Request, res: Response) => {
  try {
    const subMenu = await SubMenuService.createSubMenu(req.body);
    res.status(201).json(subMenu);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single SubMenu by ID
export const getSubMenu = async (req: Request, res: Response) => {
  try {
    const subMenu = await SubMenuService.getSubMenu(req.params.id);
    if (!subMenu) return res.status(404).json({ message: "SubMenu not found" });
    res.json(subMenu);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get all SubMenus
export const getAllSubMenus = async (req: Request, res: Response) => {
  try {
    const subMenus = await SubMenuService.getAllSubMenus();
    res.json(subMenus);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update a SubMenu by ID
export const updateSubMenu = async (req: Request, res: Response) => {
  try {
    const subMenu = await SubMenuService.updateSubMenu(req.params.id, req.body);
    if (!subMenu) return res.status(404).json({ message: "SubMenu not found" });
    res.json(subMenu);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a SubMenu by ID
export const deleteSubMenu = async (req: Request, res: Response) => {
  try {
    const result = await SubMenuService.deleteSubMenu(req.params.id);
    if (!result) return res.status(404).json({ message: "SubMenu not found" });
    res.json({ message: "SubMenu deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Add a SubSubMenu to a SubMenu
export const addSubSubMenuToSubMenu = async (req: Request, res: Response) => {
  try {
    const { subMenuId, subSubMenuId } = req.params;
    const subMenu = await SubMenuService.addSubSubMenuToSubMenu(
      subMenuId,
      subSubMenuId
    );
    res.json(subMenu);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Remove a SubSubMenu from a SubMenu
export const removeSubSubMenuFromSubMenu = async (
  req: Request,
  res: Response
) => {
  try {
    const { subSubMenuId } = req.body;
    const subMenu = await SubMenuService.removeSubSubMenuFromSubMenu(
      req.params.id,
      subSubMenuId
    );
    res.json(subMenu);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
