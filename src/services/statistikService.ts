import mongoose from 'mongoose';
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
    return await Statistik.findByIdAndUpdate(new mongoose.Types.ObjectId(id), data, { new: true });
};

// Delete a Statistik by ID
export const deleteStatistik = async (id: string) => {
    return await Statistik.findByIdAndDelete(new mongoose.Types.ObjectId(id));
};

export const updateKecamatan = async (kecamatan: number) => {
    const statistik = await Statistik.findOne();
    if (!statistik) {
      const newStatistik = new Statistik({
        kecamatan,
        desa: 0,
        rt: 0,
        update_at_kec: new Date(),
      });
      return await newStatistik.save();
    } else {
      statistik.kecamatan = kecamatan;
      statistik.update_at_kec = new Date();
      return await statistik.save();
    }
  };
  
  // Update Desa
  export const updateDesa = async (desa: number) => {
    const statistik = await Statistik.findOne();
    if (!statistik) {
      const newStatistik = new Statistik({
        kecamatan: 0,
        desa,
        rt: 0,
        update_at_des: new Date(),
      });
      return await newStatistik.save();
    } else {
      statistik.desa = desa;
      statistik.update_at_des = new Date();
      return await statistik.save();
    }
  };
  
  // Update RT
  export const updateRt = async (rt: number) => {
    const statistik = await Statistik.findOne();
    if (!statistik) {
      const newStatistik = new Statistik({
        kecamatan: 0,
        desa: 0,
        rt,
        update_at_rt: new Date(),
      });
      return await newStatistik.save();
    } else {
      statistik.rt = rt;
      statistik.update_at_rt = new Date();
      return await statistik.save();
    }
  };
