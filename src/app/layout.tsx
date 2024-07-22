import './globals.css';
import AuthProvider from '@/providers/AuthProvider';
import Header from '@/components/Header';
import { createClient } from '@/utils/supabase/server';
import { type PropsWithChildren } from 'react';

export default async function RootLayout(props: PropsWithChildren) {
  const { children } = props;
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  const authInfo = {};
  if (error) {
    authInfo.isLogin = false;
  } else {
    authInfo.isLogin = true;
    authInfo.data = data.user;
  }

  return (
    <html lang='en'>
      <body>
        <AuthProvider value={authInfo}>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
