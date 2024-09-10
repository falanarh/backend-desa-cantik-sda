import mongoose, { Schema, Document } from "mongoose";

interface Deskripsi extends Document {
  judul: string;
  sub_judul: string;
  isi: string;
  link_video: string;
  update_at_judul: Date;
  update_at_sub_judul: Date;
  update_at_isi: Date;
  update_at_link_video: Date;
}

const deskripsiSchema: Schema = new Schema({
  judul: { type: String },
  sub_judul: { type: String },
  isi: { type: String },
  link_video: { type: String },
  update_at_judul: { type: Date, default: null },
  update_at_sub_judul: { type: Date, default: null },
  update_at_isi: { type: Date, default: null },
  update_at_link_video: { type: Date, default: null },
});

export default mongoose.model<Deskripsi>("Deskripsi", deskripsiSchema);
