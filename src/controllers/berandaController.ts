import { Request, Response } from "express";
import * as berandaService from "../services/berandaService";

export const createBeranda = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const beranda = await berandaService.createBeranda(data);
    res.status(201).json(beranda);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getBeranda = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const beranda = await berandaService.getBeranda(id);
    if (!beranda) return res.status(404).json({ message: "Beranda not found" });
    res.status(200).json(beranda);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllBeranda = async (req: Request, res: Response) => {
  try {
    const berandaList = await berandaService.getAllBeranda();
    res.status(200).json(berandaList);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBeranda = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedBeranda = await berandaService.updateBeranda(id, data);
    if (!updatedBeranda)
      return res.status(404).json({ message: "Beranda not found" });
    res.status(200).json(updatedBeranda);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBeranda = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await berandaService.deleteBeranda(id);
    if (!result) return res.status(404).json({ message: "Beranda not found" });
    res.status(204).send(); // No content
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update teks_1
export const updateTeks1 = async (req: Request, res: Response) => {
  try {
    const { teks_1 } = req.body;
    const beranda = await berandaService.updateTeks1(teks_1);
    res.status(200).json(beranda);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update teks_2
export const updateTeks2 = async (req: Request, res: Response) => {
  try {
    const { teks_2 } = req.body;
    const beranda = await berandaService.updateTeks2(teks_2);
    res.status(200).json(beranda);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update teks_3
export const updateTeks3 = async (req: Request, res: Response) => {
  try {
    const { teks_3 } = req.body;
    const beranda = await berandaService.updateTeks3(teks_3);
    res.status(200).json(beranda);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update link_gambar
export const updateLinkGambar = async (req: Request, res: Response) => {
  try {
    const { link_gambar } = req.body;
    const beranda = await berandaService.updateLinkGambar(link_gambar);
    res.status(200).json(beranda);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
