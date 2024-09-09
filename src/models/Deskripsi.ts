import mongoose, { Schema, Document } from 'mongoose';

interface Deskripsi extends Document {
    judul: string;
    sub_judul: string;
    isi: string;
    link_video: string;
}

const deskripsiSchema: Schema = new Schema({
    judul: { type: String, required: true },
    sub_judul: { type: String, required: true },
    isi: { type: String, required: true },
    link_video: { type: String, required: true },
});

export default mongoose.model<Deskripsi>('Deskripsi', deskripsiSchema);
