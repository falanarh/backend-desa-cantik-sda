import mongoose from 'mongoose';
import Menu from '../models/Menu';
import SubMenu from '../models/SubMenu';

// Create a new Menu
export const createMenu = async (data: {
    judul: string;
    link: string;
    subMenus?: mongoose.Types.ObjectId[]; // Use mongoose.Types.ObjectId
}) => {
    const menu = new Menu(data);
    return await menu.save();
};

// Get a single Menu by ID
export const getMenu = async (id: string) => {
    return await Menu.findById(new mongoose.Types.ObjectId(id)).populate('subMenus');
};

// Get all Menu
export const getAllMenu = async () => {
    return await Menu.find().populate('subMenus');
};

// Update a Menu by ID
export const updateMenu = async (id: string, data: {
    judul?: string;
    link?: string;
    subMenus?: mongoose.Types.ObjectId[]; // Use mongoose.Types.ObjectId
}) => {
    return await Menu.findByIdAndUpdate(new mongoose.Types.ObjectId(id), data, { new: true }).populate('subMenus');
};

// Delete a Menu by ID
export const deleteMenu = async (id: string) => {
    return await Menu.findByIdAndDelete(new mongoose.Types.ObjectId(id));
};

// Add SubMenu to a Menu
export const addSubMenuToMenu = async (menuId: string, subMenuId: string) => {
    const menu = await Menu.findById(new mongoose.Types.ObjectId(menuId));
    if (!menu) throw new Error('Menu not found');
    menu.subMenus = [...(menu.subMenus || []), new mongoose.Types.ObjectId(subMenuId)];
    return await menu.save();
};

// Remove SubMenu from a Menu
export const removeSubMenuFromMenu = async (menuId: string, subMenuId: string) => {
    const menu = await Menu.findById(new mongoose.Types.ObjectId(menuId));
    if (!menu) throw new Error('Menu not found');
    menu.subMenus = menu.subMenus?.filter(id => id.toString() !== subMenuId);
    return await menu.save();
};
