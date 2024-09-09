import User from '../models/User';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const registerUser = async (username: string, password: string) => {
    const user = new User({ username, password });
    return await user.save();
};

export const loginUser = async (username: string, password: string) => {
    const user = await User.findOne({ username });
    if (!user) throw new Error('User not found');
    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET as string, { expiresIn: '6h' });
    return token;
};

export const findUserById = async (id: string) => {
    return await User.findById(id);
};
