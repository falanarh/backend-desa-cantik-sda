import mongoose, { Schema, Document } from 'mongoose';

interface Statistik extends Document {
    kecamatan: string;
    desa: string;
    rt: number;
}

const statistikSchema: Schema = new Schema({
    kecamatan: { type: String, required: true },
    desa: { type: String, required: true },
    rt: { type: Number, required: true },
});

export default mongoose.model<Statistik>('Statistik', statistikSchema);
