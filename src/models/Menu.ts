import mongoose, { Schema, Document } from 'mongoose';

interface Menu extends Document {
    judul: string;
    link: string;
    subMenus?: mongoose.Types.ObjectId[]; // Referensi ke SubMenu
}

const menuSchema: Schema = new Schema({
    judul: { type: String, required: true },
    link: { type: String, required: true },
    subMenus: [{ type: Schema.Types.ObjectId, ref: 'SubMenu' }] // Referensi ke SubMenu
});

export default mongoose.model<Menu>('Menu', menuSchema);
