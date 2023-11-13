export default async function getOrders() {
    try {
        const response = await fetch('http://localhost:3000/api/orders', {
            method: "GET",
            cache: "no-store",  // Ajouté pour correspondre à l'exemple d'origine
        });

        if (!response.ok) {
            throw new Error('Failed to fetch orders');  // Modification du message d'erreur
        }

        return await response.json(); 
    } catch (error) {
        console.error("Error loading orders: ", error);  // Modification pour une meilleure gestion des erreurs
        return null;  // Ajouté pour gérer les cas d'erreur
    }
}
