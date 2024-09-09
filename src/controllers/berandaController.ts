import { Request, Response } from 'express';
import * as berandaService from '../services/berandaService';

export const createBeranda = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const beranda = await berandaService.createBeranda(data);
        res.status(201).json(beranda);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

export const getBeranda = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const beranda = await berandaService.getBeranda(id);
        if (!beranda) return res.status(404).json({ message: 'Beranda not found' });
        res.status(200).json(beranda);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllBeranda = async (req: Request, res: Response) => {
    try {
        const berandaList = await berandaService.getAllBeranda();
        res.status(200).json(berandaList);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateBeranda = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedBeranda = await berandaService.updateBeranda(id, data);
        if (!updatedBeranda) return res.status(404).json({ message: 'Beranda not found' });
        res.status(200).json(updatedBeranda);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteBeranda = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await berandaService.deleteBeranda(id);
        if (!result) return res.status(404).json({ message: 'Beranda not found' });
        res.status(204).send(); // No content
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};
