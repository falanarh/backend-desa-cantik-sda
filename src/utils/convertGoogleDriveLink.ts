export const convertGoogleDriveLink = (link: string): string => {
    const regex = /https:\/\/drive\.google\.com\/file\/d\/([^\/]+)/;
    const match = link.match(regex);

    if (match && match[1]) {
        const fileId = match[1];
        return `https://lh3.googleusercontent.com/d/${fileId}=w1000`;
    }

    throw new Error('Invalid Google Drive link');
};
