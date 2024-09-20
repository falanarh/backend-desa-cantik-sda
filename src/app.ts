import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/mongoConfig';
import desaRoutes from './routes/desaRoutes';
import buletinRoutes from './routes/buletinRoutes';
import menuRoutes from './routes/menuRoutes';
import subMenuRoutes from './routes/subMenuRoutes';
import subSubMenuRoutes from './routes/subSubMenuRoutes';
import berandaRoutes from './routes/berandaRoutes';
import deskripsiRoutes from './routes/deskripsiRoutes';
import statistikRoutes from './routes/statistikRoutes';
import timDesaCantikRoutes from './routes/timDesaCantikRoutes';
import suratKeputusanRoutes from './routes/suratKeputusanRoutes';
import authRoutes from './routes/authRoutes';
import uploadRoutes from './routes/uploadRoutes';

dotenv.config();
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: [
      "https://desa-cantik-sda.vercel.app",
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://desacantik.pahlawan140.com",
    ], // Ganti dengan domain Anda
    methods: ["GET", "POST", "PUT", "DELETE"], // Metode yang diizinkan
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// Setup morgan to log requests
app.use(morgan('combined'));

app.use('/api/desa', desaRoutes);
app.use('/api/buletin', buletinRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/submenu', subMenuRoutes);
app.use('/api/subsubmenu', subSubMenuRoutes);
app.use('/api/beranda', berandaRoutes);
app.use('/api/deskripsi', deskripsiRoutes);
app.use('/api/statistik', statistikRoutes);
app.use('/api/timdesacantik', timDesaCantikRoutes);
app.use('/api/suratkeputusan', suratKeputusanRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});