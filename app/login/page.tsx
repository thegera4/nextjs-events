import AuthForm from '@/components/auth/AuthForm';
import { login } from '@/utils/api-utils';
import { cookies } from 'next/headers'

export default function LoginPage() {

  return (
    <main>
        <AuthForm />
    </main>
  )
}