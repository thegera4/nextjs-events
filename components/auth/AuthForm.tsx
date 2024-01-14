"use client";
import {useState, useRef} from 'react'
import {useRouter} from 'next/navigation'
import Button from '../../components/ui/Button'
import classes from './AuthForm.module.css'
import { TokenResponse } from '@/types'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../ui/Spinner';

/*
{
    "email": "test2@email.com",
    "password": "test2"
}
*/

export default function AuthForm({submitHandler, result}: 
    {submitHandler: (emailRef: string, passwordRef: string) => Promise<TokenResponse>, result: TokenResponse}) {
    
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    
    const router = useRouter();
  
    const switchAuthModeHandler = () => setIsLogin((prevState) => !prevState)

    const onClickHandler = async () => {
        setLoading(true);
        try{
            await submitHandler(emailRef.current?.value!, passwordRef.current?.value!);
            toast.success("Login successful!");
            router.push('/events');
        } catch (error) {
            console.error("Login error: ", error);
            toast.error("Could not login user. Please try again later.");
        }
    }

    const title = isLogin ? 'Login' : 'Sign Up';

    const message = isLogin ? 'If you do not have an account, please click on Create new account.' :
                              'If you already have an account, please click on Login with existing account.'

    const buttonText = isLogin ? 'Login' : 'Create Account'
    
    const authMode = isLogin ? 'Create new account' : 'Login with existing account'

    if (loading) return <Spinner />

  return (
    <>
    <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />
    <section className={classes.auth}>
        <h1>{title}</h1>
        <h4>To create a new event, you need to login.</h4>
        <h4>{message}</h4>
        <h5>(You can use fake accounts for example abd@test.com) and a password of at least 6 characters</h5>
        <form>
            <div className={classes.control}>
                <label htmlFor='email'>Your Email</label>
                <input type='email' id='email' required ref={emailRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='password'>Your Password</label>
                <input type='password' id='password' required ref={passwordRef}/>
            </div>
            <div className={classes.actions}>
                <Button onClick={onClickHandler}>{buttonText}</Button>
                <button type='button' className={classes.toggle} onClick={switchAuthModeHandler}>{authMode}</button>
            </div>
        </form>
    </section>
    </>
  )
}