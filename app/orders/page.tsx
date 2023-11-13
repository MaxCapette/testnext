"use client"
import React, { useState, useEffect } from 'react';

export default function UsersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch('http://localhost:3000/api/orders'); // Utilisez le chemin vers votre API
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des commandes');
        }
        const fetchedOrders = await response.json();
        setOrders(fetchedOrders);
      } catch (error) {
        console.error('Erreur lors de la récupération des commandes :', error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Commandes</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>{/* Affichez les détails de la commande ici */}</li>
        ))}
      </ul>
    </div>
  );
}
