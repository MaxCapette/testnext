import mongoose, { Schema, models } from "mongoose";


const userSchema = new Schema(
    {   _id: {
        type: mongoose.Schema.Types.ObjectId, // Utilisez ObjectId ici
        required: true,
    },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["Admin", "Client", "Monteur"],
            default: "Client",
        },


    },
    { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);

export default User;