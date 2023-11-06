

export default async function getUser(userid : string) {
  const userData = fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
  const user = await userData;
  if(!user.ok) throw new Error('User error');

  return user.json();
  
}
