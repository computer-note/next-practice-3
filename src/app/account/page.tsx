import Link from 'next/link';
import AccountForm from './account-form';
import { createClient } from '@/utils/supabase/server';

export default async function AccountPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log('AccountPage() is executing');

  return (
    <main>
      <nav className='flex justify-around'>
        <Link href={'/'}>메인페이지로</Link>
        <Link href={'/login'}>로그인페이지로</Link>
      </nav>
      <AccountForm user={user} />
    </main>
  );
}
