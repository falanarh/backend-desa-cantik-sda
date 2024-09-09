import mongoose, { Schema, Document } from 'mongoose';

interface SubSubMenu extends Document {
    judul: string;
    link: string;
    subMenu?: mongoose.Schema.Types.ObjectId; // Referensi ke SubMenu
}

const subSubMenuSchema: Schema = new Schema({
    judul: { type: String, required: true },
    link: { type: String, required: true },
    subMenu: { type: Schema.Types.ObjectId, ref: 'SubMenu' } // Referensi ke SubMenu
});

export default mongoose.model<SubSubMenu>('SubSubMenu', subSubMenuSchema);
