import Statistik from '../models/Statistik';

// Create a new Statistik
export const createStatistik = async (data: {
    kecamatan: string;
    desa: string;
    rt: number;
}) => {
    const statistik = new Statistik(data);
    return await statistik.save();
};

// Get a single Statistik by ID
export const getStatistik = async (id: string) => {
    return await Statistik.findById(id);
};

// Get all Statistik
export const getAllStatistik = async () => {
    return await Statistik.find();
};

// Update a Statistik by ID
export const updateStatistik = async (id: string, data: {
    kecamatan?: string;
    desa?: string;
    rt?: number;
}) => {
    return await Statistik.findByIdAndUpdate(id, data, { new: true });
};

// Delete a Statistik by ID
export const deleteStatistik = async (id: string) => {
    return await Statistik.findByIdAndDelete(id);
};
