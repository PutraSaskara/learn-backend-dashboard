import { fileTypeFromFile } from 'file-type';
import fs from 'fs';
import { promisify } from 'util';
import User from "../models/UserModel.js";

// Import multer for handling form-data
import multer from 'multer';

// Set up multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error getting users:", error.message);
        res.status(500).json({ error: "Could not retrieve users" });
    }
};


export const getUserById = async (req, res) => {
    try {
        // Extract user id from request parameters
        const { id } = req.params;

        // Find the user by id
        const user = await User.findByPk(id);

        // If user does not exist, return 404 Not Found
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Return the user details
        res.status(200).json(user);
    } catch (error) {
        console.error("Error getting user by ID:", error.message);
        res.status(500).json({ error: "Could not retrieve user" });
    }
};


export const updateUser = async (req, res) => {
    try {
        // Extract user id from request parameters
        const { id } = req.params;

        // Find the user by id
        let user = await User.findByPk(id);

        // If user does not exist, return 404 Not Found
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Access form-data fields
        const { name, email, gender } = req.body;

        // Check if a file is uploaded
        let imageUrl = user.imageUrl; // Preserve existing image URL by default
        let imageName = user.image; // Preserve existing image name by default

        if (req.file) {
            // If a new file is uploaded, delete the old image file if it exists
            if (user.image) {
                const oldImagePath = `public/uploads/${user.image}`;
                fs.unlink(oldImagePath, (error) => {
                    if (error) {
                        console.error("Error deleting old image:", error);
                    } else {
                        console.log("Old image deleted successfully");
                    }
                });
            }

            // Update image URL and image name with new file data
            imageUrl = '/uploads/' + req.file.filename;
            imageName = req.file.filename;
        }

        // Update user record with new details
        await user.update({
            name,
            email,
            gender,
            image: imageName,
            imageUrl: imageUrl
        });

        // Return updated user details
        user = await User.findByPk(id); // Fetch updated user details
        res.status(200).json(user);
    } catch (error) {
        console.error("Error updating user:", error.message);
        res.status(400).json({ error: "Could not update user" });
    }
};



export const deleteUser = async (req, res) => {
    try {
        // Extract user id from request parameters
        const { id } = req.params;

        // Find the user by id
        const user = await User.findByPk(id);

        // If user does not exist, return 404 Not Found
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Delete the user's image file if it exists
        if (user.image) {
            const imagePath = `public/uploads/${user.image}`;
            fs.unlink(imagePath, (error) => {
                if (error) {
                    console.error("Error deleting image:", error);
                } else {
                    console.log("Image deleted successfully");
                }
            });
        }

        // Delete the user from the database
        await user.destroy();

        // Return success message
        res.status(200).json({ message: "User and associated image deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error.message);
        res.status(500).json({ error: "Could not delete user and image" });
    }
};


export const createUserWithImage = async (req, res) => {
    try {
        // Access form-data fields
        const { name, email, gender } = req.body;

        // Check if a file is uploaded
        if (!req.file) {
            throw new Error('No image uploaded');
        }

        // Generate the image URL
        const imageUrl = '/uploads/' + req.file.filename;

        // Create user record with image name and URL
        const newUser = await User.create({
            name,
            email,
            gender,
            image: req.file.filename, // Save the image name to your user model
            imageUrl: imageUrl // Save the image URL to your user model
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user with image:", error.message);
        res.status(400).json({ error: error.message });
    }
};


