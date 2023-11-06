import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link'

export default async function UserDetails() {
  const userData : Promise<User[]> = getAllUsers();
  const user = await userData;
  const content = (
    
    user.map( e => {
        return <>
        <p key={e.id}>
            <Link href={`/users/${e.id}`}>{e.name}</Link>
        </p>
        </>
    })
    
  )
  return content;
}
