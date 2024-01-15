import AuthForm from '@/components/auth/AuthForm';
import { TokenResponse } from '@/types'

let result: TokenResponse = {
  message: '',
  token: ''
}

export default function LoginPage() {

  return (
    <main>
      <AuthForm result={result} />
    </main>
  )
}