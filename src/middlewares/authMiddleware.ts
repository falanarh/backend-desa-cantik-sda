import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface JwtPayload {
    id: string;
    username: string;
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        (req as any).user = decoded; // Add user info to the request
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
