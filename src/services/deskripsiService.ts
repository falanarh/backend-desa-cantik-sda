import Deskripsi from '../models/Deskripsi';

// Create a new Deskripsi
export const createDeskripsi = async (data: {
    judul: string;
    sub_judul: string;
    isi: string;
    link_video: string;
}) => {
    const deskripsi = new Deskripsi(data);
    return await deskripsi.save();
};

// Get a single Deskripsi by ID
export const getDeskripsi = async (id: string) => {
    return await Deskripsi.findById(id);
};

// Get all Deskripsi
export const getAllDeskripsi = async () => {
    return await Deskripsi.find();
};

// Update a Deskripsi by ID
export const updateDeskripsi = async (id: string, data: {
    judul?: string;
    sub_judul?: string;
    isi?: string;
    link_video?: string;
}) => {
    return await Deskripsi.findByIdAndUpdate(id, data, { new: true });
};

// Delete a Deskripsi by ID
export const deleteDeskripsi = async (id: string) => {
    return await Deskripsi.findByIdAndDelete(id);
};
