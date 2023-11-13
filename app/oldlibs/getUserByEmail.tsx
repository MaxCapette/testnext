
export default async function getUserByEmail(email) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${email}`,);
    if (!response.ok) {
        throw new Error('failed to fetch users')}
    return await response.json(); 
}