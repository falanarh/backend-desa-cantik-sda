import mongoose, { Schema, Document } from 'mongoose';

interface SubMenu extends Document {
    judul: string;
    link: string;
    subSubMenus?: mongoose.Types.ObjectId[]; // Referensi ke SubSubMenu
    menu?: mongoose.Schema.Types.ObjectId; // Referensi ke Menu
}

const subMenuSchema: Schema = new Schema({
    judul: { type: String, required: true },
    link: { type: String, required: true },
    subSubMenus: [{ type: Schema.Types.ObjectId, ref: 'SubSubMenu' }], // Referensi ke SubSubMenu
    menu: { type: Schema.Types.ObjectId, ref: 'Menu' } // Referensi ke Menu
});

export default mongoose.model<SubMenu>('SubMenu', subMenuSchema);
