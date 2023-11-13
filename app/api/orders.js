import connectMongoDB from '../../libs/mongodb';
import Order from '../../models/order'; // Assurez-vous que le chemin est correct

export default async function handler(req, res) {
  try {
    await connectMongoDB();
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Erreur lors de la récupération des commandes :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des commandes' });
  }
}
