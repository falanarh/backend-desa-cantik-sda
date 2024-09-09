import mongoose, { Schema, Document } from 'mongoose';

interface Beranda extends Document {
    teks_1: string;
    teks_2: string;
    teks_3: string;
    link_gambar: string;
}

const berandaSchema: Schema = new Schema({
    teks_1: { type: String, required: true },
    teks_2: { type: String, required: true },
    teks_3: { type: String, required: true },
    link_gambar: { type: String, required: true },
});

export default mongoose.model<Beranda>('Beranda', berandaSchema);
