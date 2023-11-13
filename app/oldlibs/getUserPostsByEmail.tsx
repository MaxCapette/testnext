
export default async function getUserPostsByEmail(email) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userEmail=${email}`,);
    if (!response.ok) {
        throw new Error('failed to fetch user posts')}
    return await response.json(); 
}