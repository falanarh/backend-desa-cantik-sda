import mongoose from 'mongoose';
import Beranda from '../models/Beranda';

export const createBeranda = async (data: {
    teks_1: string;
    teks_2: string;
    teks_3: string;
    link_gambar: string;
}) => {
    const beranda = new Beranda(data);
    return await beranda.save();
};

export const getBeranda = async (id: string) => {
    return await Beranda.findById(id);
};

export const getAllBeranda = async () => {
    return await Beranda.find();
};

export const updateBeranda = async (id: string, data: {
    teks_1?: string;
    teks_2?: string;
    teks_3?: string;
    link_gambar?: string;
}) => {
    const objectId = new mongoose.Types.ObjectId(id);
    return await Beranda.findByIdAndUpdate(objectId, data, { new: true });
};

export const deleteBeranda = async (id: string) => {
    const objectId = new mongoose.Types.ObjectId(id);
    return await Beranda.findByIdAndDelete(objectId);
};
