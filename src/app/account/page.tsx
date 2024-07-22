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
      <AccountForm user={user} />
    </main>
  );
}
