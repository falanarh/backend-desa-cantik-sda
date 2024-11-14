import mongoose, { Schema, Document } from "mongoose";

interface Desa extends Document {
  nama: string;
  kecamatan: string;
  luas: number;
  link_gambar: string;
  link_web: string;
}

const desaSchema: Schema = new Schema({
  nama: { type: String, required: true },
  kecamatan: { type: String, required: true },
  luas: { type: Number, required: true },
  link_gambar: { type: String, required: true },
  link_web: { type: String, required: true },
});

export default mongoose.model<Desa>("Desa", desaSchema);
