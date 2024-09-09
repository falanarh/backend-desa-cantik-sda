import { Request, Response } from 'express';
import * as authService from '../services/authService';

export const register = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await authService.registerUser(username, password);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const token = await authService.loginUser(username, password);
        res.status(200).json({ message: 'Login successful', token });
    } catch (error : any) {
        res.status(400).json({ message: error.message });
    }
};
