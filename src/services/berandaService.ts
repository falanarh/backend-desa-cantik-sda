import mongoose from "mongoose";
import Beranda from "../models/Beranda";

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

export const updateBeranda = async (
  id: string,
  data: {
    teks_1?: string;
    teks_2?: string;
    teks_3?: string;
    link_gambar?: string;
  }
) => {
  const objectId = new mongoose.Types.ObjectId(id);
  return await Beranda.findByIdAndUpdate(objectId, data, { new: true });
};

export const deleteBeranda = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  return await Beranda.findByIdAndDelete(objectId);
};

// Update teks_1
export const updateTeks1 = async (teks_1: string) => {
  let beranda = await Beranda.findOne();
  if (!beranda) {
    beranda = new Beranda({
      teks_1,
      teks_2: "",
      teks_3: "",
      link_gambar: "",
      update_at_teks_1: new Date(),
    });
  } else {
    beranda.teks_1 = teks_1;
    beranda.update_at_teks_1 = new Date();
  }
  return await beranda.save();
};

// Update teks_2
export const updateTeks2 = async (teks_2: string) => {
  let beranda = await Beranda.findOne();
  if (!beranda) {
    beranda = new Beranda({
      teks_1: "",
      teks_2,
      teks_3: "",
      link_gambar: "",
      update_at_teks_2: new Date(),
    });
  } else {
    beranda.teks_2 = teks_2;
    beranda.update_at_teks_2 = new Date();
  }
  return await beranda.save();
};

// Update teks_3
export const updateTeks3 = async (teks_3: string) => {
  let beranda = await Beranda.findOne();
  if (!beranda) {
    beranda = new Beranda({
      teks_1: "",
      teks_2: "",
      teks_3,
      link_gambar: "",
      update_at_teks_3: new Date(),
    });
  } else {
    beranda.teks_3 = teks_3;
    beranda.update_at_teks_3 = new Date();
  }
  return await beranda.save();
};

// Update link_gambar
export const updateLinkGambar = async (link_gambar: string) => {
  let beranda = await Beranda.findOne();
  if (!beranda) {
    beranda = new Beranda({
      teks_1: "",
      teks_2: "",
      teks_3: "",
      link_gambar,
      update_at_link_gambar: new Date(),
    });
  } else {
    beranda.link_gambar = link_gambar;
    beranda.update_at_link_gambar = new Date();
  }
  return await beranda.save();
};
