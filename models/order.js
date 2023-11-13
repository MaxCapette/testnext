import mongoose, { Schema, models } from "mongoose";

const orderSchema = new Schema(
    {   _id: {
        type: mongoose.Schema.Types.ObjectId, // Utilisez ObjectId ici
        required: true,
    },
    
    date: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["En attente", "En cours", "Terminé"],
        default: "En attente",
    },
    client: {
        type: mongoose.Schema.Types.ObjectId, // Utilisez ObjectId ici
        ref: 'User', // Référence au modèle User
        required: true,
    },
    monteur: {
        type: mongoose.Schema.Types.ObjectId, // Utilisez ObjectId ici
        ref: 'User', // Référence au modèle User
        required: false,
    },


    },
    { timestamps: true }
);

const Order = models.Order || mongoose.model("Order", orderSchema);

export default Order;