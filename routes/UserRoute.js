import express from "express";
import {
    getUsers, 
    getUserById,
    updateUser,
    deleteUser,
    createUserWithImage
} from "../controllers/UserController.js";
import upload from '../middleware/uploadMiddleware.js'; // Import the multer middleware

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users-img', upload.single('imageUrl'), createUserWithImage); // Apply the middleware here
router.patch('/users/:id', upload.single('imageUrl'), updateUser);
router.delete('/users/:id', deleteUser);

export default router;
