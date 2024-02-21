import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define('users3', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.BLOB('long'), // Defining BLOB field for image
        allowNull: true // Depending on your requirements, image might be optional
    },
    imageUrl: {
        type: DataTypes.STRING, // Define as STRING to store the URL
        allowNull: true // Depending on your requirements, imageUrl might be optional
    }
}, {
    freezeTableName: true
});

export default User;

(async () => {
    await db.sync();
})();
