import mongoose, { Schema, Document } from 'mongoose';

interface Menu extends Document {
    title: string;
    link: string;
    subMenus?: mongoose.Types.ObjectId[]; // Reference to SubMenu
}

const menuSchema: Schema = new Schema({
    title: { type: String, required: true },
    link: { type: String },
    subMenus: [{ type: Schema.Types.ObjectId, ref: 'SubMenu' }] // Reference to SubMenu
});

export default mongoose.model<Menu>('Menu', menuSchema);
