import mongoose from "mongoose";
import SubSubMenu from "../models/SubSubMenu";

// Create a new SubSubMenu
export const createSubSubMenu = async (data: {
  title: string;
  link: string;
  subMenu?: mongoose.Types.ObjectId; // Reference to SubMenu
}) => {
  const subSubMenu = new SubSubMenu(data);
  return await subSubMenu.save();
};

// Get a single SubSubMenu by ID
export const getSubSubMenu = async (id: string) => {
  return await SubSubMenu.findById(new mongoose.Types.ObjectId(id)).populate(
    "subMenu"
  ); // Populate subMenu
};

// Get all SubSubMenus
export const getAllSubSubMenus = async () => {
  return await SubSubMenu.find().populate("subMenu");
};

// Update a SubSubMenu by ID
export const updateSubSubMenu = async (
  id: string,
  data: {
    title?: string;
    link?: string;
    subMenu?: mongoose.Types.ObjectId;
  }
) => {
  return await SubSubMenu.findByIdAndUpdate(
    new mongoose.Types.ObjectId(id),
    data,
    { new: true }
  ).populate("subMenu");
};

// Delete a SubSubMenu by ID
export const deleteSubSubMenu = async (id: string) => {
  return await SubSubMenu.findByIdAndDelete(new mongoose.Types.ObjectId(id));
};
