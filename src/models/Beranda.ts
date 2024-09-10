import mongoose, { Schema, Document } from 'mongoose';

interface Beranda extends Document {
    teks_1: string;
    teks_2: string;
    teks_3: string;
    link_gambar: string;
    update_at_teks_1: Date;
    update_at_teks_2: Date;
    update_at_teks_3: Date;
    update_at_link_gambar: Date;
}

const berandaSchema: Schema = new Schema({
    teks_1: { type: String },
    teks_2: { type: String },
    teks_3: { type: String },
    link_gambar: { type: String },
    update_at_teks_1: { type: Date, default: null },
    update_at_teks_2: { type: Date, default: null },
    update_at_teks_3: { type: Date, default: null },
    update_at_link_gambar: { type: Date, default: null },
});

export default mongoose.model<Beranda>('Beranda', berandaSchema);
