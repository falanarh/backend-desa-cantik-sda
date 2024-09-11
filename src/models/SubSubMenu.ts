import mongoose, { Schema, Document } from 'mongoose';

interface SubSubMenu extends Document {
    title: string;
    link: string;
    subMenu?: mongoose.Schema.Types.ObjectId; // Reference to SubMenu
}

const subSubMenuSchema: Schema = new Schema({
    title: { type: String, required: true },
    link: { type: String },
    subMenu: { type: Schema.Types.ObjectId, ref: 'SubMenu' } // Reference to SubMenu
});

export default mongoose.model<SubSubMenu>('SubSubMenu', subSubMenuSchema);
