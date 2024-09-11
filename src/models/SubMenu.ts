import mongoose, { Schema, Document } from 'mongoose';

interface SubMenu extends Document {
    title: string;
    link: string;
    subSubMenus?: mongoose.Types.ObjectId[]; // Reference to SubSubMenu
    menu?: mongoose.Schema.Types.ObjectId; // Reference to Menu
}

const subMenuSchema: Schema = new Schema({
    title: { type: String, required: true },
    link: { type: String },
    subSubMenus: [{ type: Schema.Types.ObjectId, ref: 'SubSubMenu' }], // Reference to SubSubMenu
    menu: { type: Schema.Types.ObjectId, ref: 'Menu' } // Reference to Menu
});

export default mongoose.model<SubMenu>('SubMenu', subMenuSchema);
