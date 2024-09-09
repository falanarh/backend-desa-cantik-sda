import TimDesaCantik from '../models/TimDesaCantik';

// Create a new TimDesaCantik
export const createTimDesaCantik = async (data: {
    nama: string;
    jabatan: string;
    link_gambar: string;
}) => {
    const timDesaCantik = new TimDesaCantik(data);
    return await timDesaCantik.save();
};

// Get a single TimDesaCantik by ID
export const getTimDesaCantik = async (id: string) => {
    return await TimDesaCantik.findById(id);
};

// Get all TimDesaCantik
export const getAllTimDesaCantik = async () => {
    return await TimDesaCantik.find();
};

// Update a TimDesaCantik by ID
export const updateTimDesaCantik = async (id: string, data: {
    nama?: string;
    jabatan?: string;
    link_gambar?: string;
}) => {
    return await TimDesaCantik.findByIdAndUpdate(id, data, { new: true });
};

// Delete a TimDesaCantik by ID
export const deleteTimDesaCantik = async (id: string) => {
    return await TimDesaCantik.findByIdAndDelete(id);
};
