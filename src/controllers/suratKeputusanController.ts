import { Request, Response } from 'express';
import * as suratKeputusanService from '../services/suratKeputusanService';

// Create a new SuratKeputusan
export const createSuratKeputusan = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const suratKeputusan = await suratKeputusanService.createSuratKeputusan(data);
        res.status(201).json(suratKeputusan);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single SuratKeputusan by ID
export const getSuratKeputusan = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const suratKeputusan = await suratKeputusanService.getSuratKeputusan(id);
        if (!suratKeputusan) return res.status(404).json({ message: 'SuratKeputusan not found' });
        res.status(200).json(suratKeputusan);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get all SuratKeputusan
export const getAllSuratKeputusan = async (req: Request, res: Response) => {
    try {
        const suratKeputusanList = await suratKeputusanService.getAllSuratKeputusan();
        res.status(200).json(suratKeputusanList);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Update a SuratKeputusan by ID
export const updateSuratKeputusan = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedSuratKeputusan = await suratKeputusanService.updateSuratKeputusan(id, data);
        if (!updatedSuratKeputusan) return res.status(404).json({ message: 'SuratKeputusan not found' });
        res.status(200).json(updatedSuratKeputusan);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a SuratKeputusan by ID
export const deleteSuratKeputusan = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await suratKeputusanService.deleteSuratKeputusan(id);
        if (!result) return res.status(404).json({ message: 'SuratKeputusan not found' });
        res.status(204).send(); // No content
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};
