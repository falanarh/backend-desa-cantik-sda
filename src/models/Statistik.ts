import mongoose, { Schema, Document } from "mongoose";

interface Statistik extends Document {
  kecamatan: number;
  desa: number;
  rt: number;
  update_at_kec: Date;
  update_at_des: Date;
  update_at_rt: Date;
}

const statistikSchema: Schema = new Schema({
  kecamatan: { type: Number, required: true },
  desa: { type: Number, required: true },
  rt: { type: Number, required: true },
  update_at_kec: { type: Date, default: null },
  update_at_des: { type: Date, default: null },
  update_at_rt: { type: Date, default: null },
});

export default mongoose.model<Statistik>("Statistik", statistikSchema);
