import { Request, Response } from 'express';
import * as statistikService from '../services/statistikService';

// Create a new Statistik
export const createStatistik = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const statistik = await statistikService.createStatistik(data);
        res.status(201).json(statistik);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single Statistik by ID
export const getStatistik = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const statistik = await statistikService.getStatistik(id);
        if (!statistik) return res.status(404).json({ message: 'Statistik not found' });
        res.status(200).json(statistik);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Statistik
export const getAllStatistik = async (req: Request, res: Response) => {
    try {
        const statistikList = await statistikService.getAllStatistik();
        res.status(200).json(statistikList);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Statistik by ID
export const updateStatistik = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedStatistik = await statistikService.updateStatistik(id, data);
        if (!updatedStatistik) return res.status(404).json({ message: 'Statistik not found' });
        res.status(200).json(updatedStatistik);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a Statistik by ID
export const deleteStatistik = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await statistikService.deleteStatistik(id);
        if (!result) return res.status(404).json({ message: 'Statistik not found' });
        res.status(204).send(); // No content
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};

// Update Kecamatan
export const updateKecStat = async (req: Request, res: Response) => {
    try {
      const { kecamatan } = req.body;
      const statistik = await statistikService.updateKecamatan(kecamatan);
      res.status(200).json(statistik);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Update Desa
  export const updateDesStat = async (req: Request, res: Response) => {
    try {
      const { desa } = req.body;
      const statistik = await statistikService.updateDesa(desa);
      res.status(200).json(statistik);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Update RT
  export const updateRtStat = async (req: Request, res: Response) => {
    try {
      const { rt } = req.body;
      const statistik = await statistikService.updateRt(rt);
      res.status(200).json(statistik);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
