import mongoose, { Schema, Document } from 'mongoose';

interface TimDesaCantik extends Document {
    nama: string;
    jabatan: string;
    link_gambar: string;
}

const timDesaCantikSchema: Schema = new Schema({
    nama: { type: String, required: true },
    jabatan: { type: String, required: true },
    link_gambar: { type: String, required: true },
});

export default mongoose.model<TimDesaCantik>('TimDesaCantik', timDesaCantikSchema);
