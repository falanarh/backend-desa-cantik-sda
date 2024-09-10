import mongoose from "mongoose";
import Deskripsi from "../models/Deskripsi";

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
export const updateDeskripsi = async (
  id: string,
  data: {
    judul?: string;
    sub_judul?: string;
    isi?: string;
    link_video?: string;
  }
) => {
  const objectId = new mongoose.Types.ObjectId(id);
  return await Deskripsi.findByIdAndUpdate(objectId, data, { new: true });
};

// Delete a Deskripsi by ID
export const deleteDeskripsi = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  return await Deskripsi.findByIdAndDelete(objectId);
};

// Update Judul
export const updateJudul = async (judul: string) => {
  let deskripsi = await Deskripsi.findOne();
  if (!deskripsi) {
    deskripsi = new Deskripsi({
      judul,
      sub_judul: "",
      isi: "",
      link_video: "",
      update_at_judul: new Date(),
    });
  } else {
    deskripsi.judul = judul;
    deskripsi.update_at_judul = new Date();
  }
  return await deskripsi.save();
};

// Update Sub Judul
export const updateSubJudul = async (sub_judul: string) => {
  let deskripsi = await Deskripsi.findOne();
  if (!deskripsi) {
    deskripsi = new Deskripsi({
      judul: "",
      sub_judul,
      isi: "",
      link_video: "",
      update_at_sub_judul: new Date(),
    });
  } else {
    deskripsi.sub_judul = sub_judul;
    deskripsi.update_at_sub_judul = new Date();
  }
  return await deskripsi.save();
};

// Update Isi
export const updateIsi = async (isi: string) => {
  let deskripsi = await Deskripsi.findOne();
  if (!deskripsi) {
    deskripsi = new Deskripsi({
      judul: "",
      sub_judul: "",
      isi,
      link_video: "",
      update_at_isi: new Date(),
    });
  } else {
    deskripsi.isi = isi;
    deskripsi.update_at_isi = new Date();
  }
  return await deskripsi.save();
};

// Update Link Video
export const updateLinkVideo = async (link_video: string) => {
  let deskripsi = await Deskripsi.findOne();
  if (!deskripsi) {
    deskripsi = new Deskripsi({
      judul: "",
      sub_judul: "",
      isi: "",
      link_video,
      update_at_link_video: new Date(),
    });
  } else {
    deskripsi.link_video = link_video;
    deskripsi.update_at_link_video = new Date();
  }
  return await deskripsi.save();
};
