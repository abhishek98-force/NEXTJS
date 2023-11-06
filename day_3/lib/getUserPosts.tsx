

export default async function getUserPosts(userid:string) {
    const userData = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
    const user = await userData;
    if(!user.ok) throw new Error('User error');
    return user.json();
}
