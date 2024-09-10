import mongoose from 'mongoose';
import Buletin from '../models/Buletin';

// Create a new Buletin
export const createBuletin = async (data: {
    judul: string;
    tanggal_rilis: Date;
    tanggal_kegiatan: Date;
    deskripsi: string;
    link_file: string;
}) => {
    const buletin = new Buletin(data);
    return await buletin.save();
};

// Get a single Buletin by ID
export const getBuletin = async (id: string) => {
    return await Buletin.findById(id);
};

// Get all Buletins
export const getAllBuletin = async () => {
    return await Buletin.find();
};

// Update a Buletin by ID
export const updateBuletin = async (id: string, data: {
    judul?: string;
    tanggal_rilis?: Date;
    tanggal_kegiatan?: Date;
    deskripsi?: string;
    link_file?: string;
}) => {
    const objectId = new mongoose.Types.ObjectId(id);
    return await Buletin.findByIdAndUpdate(objectId, data, { new: true });
};

// Delete a Buletin by ID
export const deleteBuletin = async (id: string) => {
    const objectId = new mongoose.Types.ObjectId(id);
    return await Buletin.findByIdAndDelete(objectId);
};
