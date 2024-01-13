import AuthForm from '@/components/auth/AuthForm';
import { login } from '@/utils/api-utils';
import { cookies } from 'next/headers'
import { TokenResponse, UserCredentials } from '@/types'

let result: TokenResponse = {
  message: '',
  token: ''
}

export default function LoginPage() {

  async function submitHandler (userCredentials: UserCredentials) {
    "use server"
    try{
      result = await login(userCredentials.email, userCredentials.password);
      const token = result.token;
      cookies().set('token', token, {
        expires: new Date(Date.now() + 1000 * 60 * 60),
        path: '/'
      });
      return result;
    } catch (error) {
      console.error(error);
      throw new Error("Could not login user.");
    }
  }

  return (
    <main>
      <AuthForm submitHandler={submitHandler} result={result} />
    </main>
  )
}