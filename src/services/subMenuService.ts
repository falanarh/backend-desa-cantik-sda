import mongoose from 'mongoose';
import SubMenu from '../models/SubMenu';

// Create a new SubMenu
export const createSubMenu = async (data: {
    judul: string;
    link: string;
    subSubMenus?: mongoose.Types.ObjectId[];
    menu?: mongoose.Types.ObjectId;
}) => {
    const subMenu = new SubMenu(data);
    return await subMenu.save();
};

// Get a single SubMenu by ID
export const getSubMenu = async (id: string) => {
    return await SubMenu.findById(new mongoose.Types.ObjectId(id)).populate('subSubMenus').populate('menu');
};

// Get all SubMenus
export const getAllSubMenus = async () => {
    return await SubMenu.find().populate('subSubMenus').populate('menu');
};

// Update a SubMenu by ID
export const updateSubMenu = async (id: string, data: {
    judul?: string;
    link?: string;
    subSubMenus?: mongoose.Types.ObjectId[];
    menu?: mongoose.Types.ObjectId;
}) => {
    return await SubMenu.findByIdAndUpdate(new mongoose.Types.ObjectId(id), data, { new: true }).populate('subSubMenus').populate('menu');
};

// Delete a SubMenu by ID
export const deleteSubMenu = async (id: string) => {
    return await SubMenu.findByIdAndDelete(new mongoose.Types.ObjectId(id));
};

// Add a SubSubMenu to a SubMenu
export const addSubSubMenuToSubMenu = async (subMenuId: string, subSubMenuId: string) => {
    const subMenu = await SubMenu.findById(new mongoose.Types.ObjectId(subMenuId));
    if (!subMenu) throw new Error('SubMenu not found');
    subMenu.subSubMenus = [...(subMenu.subSubMenus || []), new mongoose.Types.ObjectId(subSubMenuId)];
    return await subMenu.save();
};

// Remove a SubSubMenu from a SubMenu
export const removeSubSubMenuFromSubMenu = async (subMenuId: string, subSubMenuId: string) => {
    const subMenu = await SubMenu.findById(new mongoose.Types.ObjectId(subMenuId));
    if (!subMenu) throw new Error('SubMenu not found');
    subMenu.subSubMenus = subMenu.subSubMenus?.filter(id => id.toString() !== subSubMenuId);
    return await subMenu.save();
};
