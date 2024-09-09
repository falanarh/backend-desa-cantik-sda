import SuratKeputusan from '../models/SuratKeputusan';

// Create a new SuratKeputusan
export const createSuratKeputusan = async (data: {
    judul: string;
    link_file: string;
}) => {
    const suratKeputusan = new SuratKeputusan(data);
    return await suratKeputusan.save();
};

// Get a single SuratKeputusan by ID
export const getSuratKeputusan = async (id: string) => {
    return await SuratKeputusan.findById(id);
};

// Get all SuratKeputusan
export const getAllSuratKeputusan = async () => {
    return await SuratKeputusan.find();
};

// Update a SuratKeputusan by ID
export const updateSuratKeputusan = async (id: string, data: {
    judul?: string;
    link_file?: string;
}) => {
    return await SuratKeputusan.findByIdAndUpdate(id, data, { new: true });
};

// Delete a SuratKeputusan by ID
export const deleteSuratKeputusan = async (id: string) => {
    return await SuratKeputusan.findByIdAndDelete(id);
};
