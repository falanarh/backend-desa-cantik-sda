import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

interface User extends Document {
    username: string;
    password: string;
    comparePassword(password: string): Promise<boolean>;
}

// Cast this to the User interface to ensure correct type inference
const userSchema: Schema<User> = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Middleware to hash password before saving
userSchema.pre('save', async function(next) {
    // Ensure `this` is typed as `User`
    const user = this as User;

    if (!user.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
        next();
    } catch (error : any) {
        next(error);
    }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(password: string): Promise<boolean> {
    const user = this as User;
    return await bcrypt.compare(password, user.password);
};

export default mongoose.model<User>('User', userSchema);
