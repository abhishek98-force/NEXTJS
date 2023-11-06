import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link'

export default async function UserDetails() {
  const userData : Promise<User[]> = getAllUsers();
  const user = await userData;
  const content = (
    <>
    <h1>Link back to home page</h1>
    <Link href="/">Home</Link>
    {user.map(e => (
        <div key={e.id}>
            <p>
                <Link href={`/users/${e.id}`}>{e.name}</Link>
            </p>
        </div>
    ))}
</>
    );

  return content;
}
