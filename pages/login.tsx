import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Login() {
  const supabaseClient = useSupabaseClient();
  return (
    <Auth supabaseClient={supabaseClient} appearance={{ theme: ThemeSupa }} providers={['github', 'google']} />
  );
}
