import cloudinary from "../config/cloudinaryConfig";
import { UploadApiResponse } from "cloudinary";
import { drive_v3, google } from "googleapis";
import fs from "fs";
import path from "path";
import getOAuth2Client from "../config/googleDriveConfig";

export const uploadImage = async (
  filePath: string
): Promise<UploadApiResponse> => {
  return cloudinary.uploader.upload(filePath, {
    resource_type: "image",
  });
};

// export const uploadDocument = async (filePath: string): Promise<UploadApiResponse> => {
//   return cloudinary.uploader.upload(filePath, {
//     resource_type: 'raw', // Untuk file PDF, Word, dan lainnya
//     format: 'pdf',
//   });
// };

export const uploadDocument = async (filePath: string): Promise<string> => {
  console.log("Sampai sini!");

  // Memastikan filePath valid
  if (!fs.existsSync(filePath)) {
    console.error(`File tidak ditemukan di jalur: ${filePath}`);
    throw new Error(`File tidak ditemukan di jalur: ${filePath}`);
  }

  // Mencetak filePath dan metadata yang akan digunakan
  console.log(`Mengunggah file dari jalur: ${filePath}`);
  const fileName = path.basename(filePath);
  console.log(`Nama file yang diunggah: ${fileName}`);

  const authClient = await getOAuth2Client();
  console.log("OAuth2Client berhasil didapatkan");

  const drive = google.drive({ version: "v3", auth: authClient });

  // Metadata file yang akan diupload
  const fileMetadata = {
    name: fileName,
    parents: ["1ExAnKy9vK9BTNkONSj0MiN5D71FOrtni"], // Optional: ID folder di Google Drive
  };

  // Media yang akan diupload
  const media = {
    mimeType: "application/pdf", // Sesuaikan dengan tipe file (PDF atau Word)
    body: fs.createReadStream(filePath),
  };

  try {
    console.log("Memulai proses upload...");
    // Upload file ke Google Drive
    const response = await drive.files.create({
      requestBody: fileMetadata, // Gunakan requestBody, bukan resource
      media: media,
      fields: "id",
    });

    console.log("Upload berhasil!");
    console.log(`File ID yang diunggah: ${response.data.id}`);

    const fileId = response.data.id;

    // Mengatur izin file menjadi publik
    await drive.permissions.create({
      fileId: fileId as string,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    console.log("Izin file berhasil diatur menjadi publik.");

    // Kembalikan link untuk file yang diunggah
    return `https://drive.google.com/file/d/${response.data.id}`;
  } catch (error: any) {
    console.error("Terjadi kesalahan saat mengunggah file:", error.message);
    throw new Error(`Terjadi kesalahan saat mengunggah file: ${error.message}`);
  }
};
