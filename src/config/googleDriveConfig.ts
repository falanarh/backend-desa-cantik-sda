import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const TOKEN_PATH = path.join(__dirname, "token.json");

// Fungsi untuk mendapatkan OAuth2Client
export const getOAuth2Client = async (): Promise<OAuth2Client> => {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI } =
    process.env;

  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI) {
    throw new Error(
      "Google client credentials are not set in environment variables."
    );
  }

  const oAuth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI
  );

  // Periksa apakah token akses sudah disimpan
  if (fs.existsSync(TOKEN_PATH)) {
    const token = fs.readFileSync(TOKEN_PATH, "utf-8");
    oAuth2Client.setCredentials(JSON.parse(token));
  } else {
    // Jika token belum ada, lakukan otorisasi
    return getNewToken(oAuth2Client);
  }

  return oAuth2Client;
};

// Fungsi untuk mendapatkan token baru (hanya perlu dilakukan sekali)
const getNewToken = (oAuth2Client: OAuth2Client): Promise<OAuth2Client> => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/drive.file"],
  });

  console.log("Authorize this app by visiting this URL:", authUrl);

  return new Promise((resolve, reject) => {
    // Setelah mendapatkan kode otorisasi dari URL di atas, ganti `YOUR_AUTH_CODE` dengan kode yang diperoleh.
    const authCode =
      "4/0AQlEd8yzGU7MzxPEPJVrozFTb4GdrGbZyY6nAhYKO-p97jdwcrNm8zOxZLczZdImgpMS0g"; // ganti ini dengan auth code yang didapat setelah otorisasi
    oAuth2Client.getToken(authCode, (err, token) => {
      if (err) {
        console.error("Error while trying to retrieve access token", err);
        reject(err);
      } else {
        // Simpan token untuk penggunaan selanjutnya
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
        oAuth2Client.setCredentials(token!);
        resolve(oAuth2Client);
      }
    });
  });
};

export default getOAuth2Client;
