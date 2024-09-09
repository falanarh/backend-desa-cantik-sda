import { Request, Response } from 'express';
import * as buletinService from '../services/buletinService';

// Create a new Buletin
export const createBuletin = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const buletin = await buletinService.createBuletin(data);
        res.status(201).json(buletin);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single Buletin by ID
export const getBuletin = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const buletin = await buletinService.getBuletin(id);
        if (!buletin) return res.status(404).json({ message: 'Buletin not found' });
        res.status(200).json(buletin);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Buletins
export const getAllBuletin = async (req: Request, res: Response) => {
    try {
        const buletins = await buletinService.getAllBuletin();
        res.status(200).json(buletins);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Buletin by ID
export const updateBuletin = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedBuletin = await buletinService.updateBuletin(id, data);
        if (!updatedBuletin) return res.status(404).json({ message: 'Buletin not found' });
        res.status(200).json(updatedBuletin);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a Buletin by ID
export const deleteBuletin = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await buletinService.deleteBuletin(id);
        if (!result) return res.status(404).json({ message: 'Buletin not found' });
        res.status(204).send(); // No content
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};
