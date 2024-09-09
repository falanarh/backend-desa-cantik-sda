import mongoose, { Schema, Document } from 'mongoose';

interface SuratKeputusan extends Document {
    judul: string;
    link_file: string;
}

const suratKeputusanSchema: Schema = new Schema({
    judul: { type: String, required: true },
    link_file: { type: String, required: true },
});

export default mongoose.model<SuratKeputusan>('SuratKeputusan', suratKeputusanSchema);
