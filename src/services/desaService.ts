import mongoose from 'mongoose';
import Desa from '../models/Desa';

// Create a new Desa
export const createDesa = async (data: {
    nama: string;
    kecamatan: string;
    luas: number;
    link_gambar: string;
    link_web: string;
}) => {
    const desa = new Desa(data);
    return await desa.save();
};

// Get a single Desa by ID
export const getDesa = async (id: string) => {
    return await Desa.findById(id);
};

// Get all Desa
export const getAllDesa = async () => {
    return await Desa.find();
};

// Update a Desa by ID
export const updateDesa = async (id: string, data: {
    nama?: string;
    kecamatan?: string;
    luas?: number;
    link_gambar?: string;
    link_web?: string;
}) => {
    // Konversi id menjadi objek ID Mongoose
    const objectId = new mongoose.Types.ObjectId(id);

    // Update data berdasarkan id dan kembalikan data yang baru
    return await Desa.findByIdAndUpdate(objectId, data, { new: true });
};

// Delete a Desa by ID
export const deleteDesa = async (id: string) => {
    const objectId = new mongoose.Types.ObjectId(id);
    return await Desa.findByIdAndDelete(objectId);
};
