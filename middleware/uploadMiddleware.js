import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Set up Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads'); // Specify the destination folder for storing images
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        cb(null, uuidv4() + uniqueSuffix + fileExtension); // Generate a unique filename
    }
});

// Initialize multer instance
const upload = multer({ storage: storage });

export default upload;
