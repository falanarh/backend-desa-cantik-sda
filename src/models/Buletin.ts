import mongoose, { Schema, Document } from "mongoose";

interface Buletin extends Document {
  judul: string;
  tanggal_rilis: string;
  tanggal_kegiatan: string;
  deskripsi: string;
  link_file: string;
  link_thumbnail: string;
  desa: string;
}

const buletinSchema: Schema = new Schema({
  judul: { type: String, required: true },
  tanggal_rilis: { type: String, required: true },
  tanggal_kegiatan: { type: String, required: true },
  deskripsi: { type: String, required: true },
  link_file: { type: String, required: true },
  link_thumbnail: { type: String },
  desa: { type: String },
});

export default mongoose.model<Buletin>("Buletin", buletinSchema);
