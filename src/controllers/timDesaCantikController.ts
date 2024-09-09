import { Request, Response } from 'express';
import * as timDesaCantikService from '../services/timDesaCantikService';

// Create a new TimDesaCantik
export const createTimDesaCantik = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const timDesaCantik = await timDesaCantikService.createTimDesaCantik(data);
        res.status(201).json(timDesaCantik);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single TimDesaCantik by ID
export const getTimDesaCantik = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const timDesaCantik = await timDesaCantikService.getTimDesaCantik(id);
        if (!timDesaCantik) return res.status(404).json({ message: 'TimDesaCantik not found' });
        res.status(200).json(timDesaCantik);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get all TimDesaCantik
export const getAllTimDesaCantik = async (req: Request, res: Response) => {
    try {
        const timDesaCantikList = await timDesaCantikService.getAllTimDesaCantik();
        res.status(200).json(timDesaCantikList);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Update a TimDesaCantik by ID
export const updateTimDesaCantik = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedTimDesaCantik = await timDesaCantikService.updateTimDesaCantik(id, data);
        if (!updatedTimDesaCantik) return res.status(404).json({ message: 'TimDesaCantik not found' });
        res.status(200).json(updatedTimDesaCantik);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a TimDesaCantik by ID
export const deleteTimDesaCantik = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await timDesaCantikService.deleteTimDesaCantik(id);
        if (!result) return res.status(404).json({ message: 'TimDesaCantik not found' });
        res.status(204).send(); // No content
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};
