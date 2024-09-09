import { Request, Response } from 'express';
import * as desaService from '../services/desaService';

// Create a new Desa
export const createDesa = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const desa = await desaService.createDesa(data);
        res.status(201).json(desa);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single Desa by ID
export const getDesa = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const desa = await desaService.getDesa(id);
        if (!desa) return res.status(404).json({ message: 'Desa not found' });
        res.status(200).json(desa);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Desa
export const getAllDesa = async (req: Request, res: Response) => {
    try {
        const desaList = await desaService.getAllDesa();
        res.status(200).json(desaList);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Desa by ID
export const updateDesa = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedDesa = await desaService.updateDesa(id, data);
        if (!updatedDesa) return res.status(404).json({ message: 'Desa not found' });
        res.status(200).json(updatedDesa);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a Desa by ID
export const deleteDesa = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await desaService.deleteDesa(id);
        if (!result) return res.status(404).json({ message: 'Desa not found' });
        res.status(204).send(); // No content
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};
