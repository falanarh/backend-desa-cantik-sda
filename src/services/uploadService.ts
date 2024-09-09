import cloudinary from "../config/cloudinaryConfig";
import { UploadApiResponse } from "cloudinary";
import { drive_v3, google } from "googleapis";
import fs from "fs";
import path from "path";
import getOAuth2Client from "../config/googleDriveConfig";
import { PassThrough } from "stream";

export const uploadImage = async (file: Express.Multer.File): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result as UploadApiResponse);
    }).end(file.buffer);  // Gunakan file.buffer untuk mengunggah dari memori
  });
};

export const uploadDocument = async (file: Express.Multer.File): Promise<string> => {
  const authClient = await getOAuth2Client();
  const drive = google.drive({ version: "v3", auth: authClient });

  // Metadata file
  const fileMetadata = {
    name: file.originalname,
    parents: ["1ExAnKy9vK9BTNkONSj0MiN5D71FOrtni"], // Optional: Folder ID in Google Drive
  };

  // Convert buffer to stream
  const stream = new PassThrough();
  stream.end(file.buffer);

  // Upload the file using stream
  try {
    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: {
        mimeType: file.mimetype,
        body: stream,  // Upload from stream
      },
      fields: "id",
    });

    const fileId = response.data.id;

    // Set file permissions to public
    await drive.permissions.create({
      fileId: fileId as string,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    // Return the link to the uploaded file
    return `https://drive.google.com/file/d/${fileId}`;
  } catch (error: any) {
    console.error("Error uploading document:", error);
    throw new Error(`Error uploading document: ${error.message}`);
  }
};


// export const uploadDocument = async (filePath: string): Promise<UploadApiResponse> => {
//   return cloudinary.uploader.upload(filePath, {
//     resource_type: 'raw', // Untuk file PDF, Word, dan lainnya
//     format: 'pdf',
//   });
// };