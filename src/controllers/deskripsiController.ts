import { Request, Response } from "express";
import * as deskripsiService from "../services/deskripsiService";

// Create a new Deskripsi
export const createDeskripsi = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const deskripsi = await deskripsiService.createDeskripsi(data);
    res.status(201).json(deskripsi);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Deskripsi by ID
export const getDeskripsi = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deskripsi = await deskripsiService.getDeskripsi(id);
    if (!deskripsi)
      return res.status(404).json({ message: "Deskripsi not found" });
    res.status(200).json(deskripsi);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Deskripsi
export const getAllDeskripsi = async (req: Request, res: Response) => {
  try {
    const deskripsiList = await deskripsiService.getAllDeskripsi();
    res.status(200).json(deskripsiList);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Deskripsi by ID
export const updateDeskripsi = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedDeskripsi = await deskripsiService.updateDeskripsi(id, data);
    if (!updatedDeskripsi)
      return res.status(404).json({ message: "Deskripsi not found" });
    res.status(200).json(updatedDeskripsi);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Deskripsi by ID
export const deleteDeskripsi = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await deskripsiService.deleteDeskripsi(id);
    if (!result)
      return res.status(404).json({ message: "Deskripsi not found" });
    res.status(204).send(); // No content
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update Judul
export const updateJudul = async (req: Request, res: Response) => {
  try {
    const { judul } = req.body;
    const deskripsi = await deskripsiService.updateJudul(judul);
    res.status(200).json(deskripsi);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update Sub Judul
export const updateSubJudul = async (req: Request, res: Response) => {
  try {
    const { sub_judul } = req.body;
    const deskripsi = await deskripsiService.updateSubJudul(sub_judul);
    res.status(200).json(deskripsi);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update Isi
export const updateIsi = async (req: Request, res: Response) => {
  try {
    const { isi } = req.body;
    const deskripsi = await deskripsiService.updateIsi(isi);
    res.status(200).json(deskripsi);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update Link Video
export const updateLinkVideo = async (req: Request, res: Response) => {
  try {
    const { link_video } = req.body;
    const deskripsi = await deskripsiService.updateLinkVideo(link_video);
    res.status(200).json(deskripsi);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
