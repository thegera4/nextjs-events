"use client";
import {useState, useRef} from 'react'
import {useRouter} from 'next/navigation'
import Button from '../../components/ui/Button'
import classes from './AuthForm.module.css'
import { TokenResponse } from '@/types'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../ui/Spinner';
import { login, signup } from '@/utils/api-utils';

export default function AuthForm({result}: {result: TokenResponse}) {
    
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    
    const router = useRouter();
  
    const switchAuthModeHandler = () => setIsLogin((prevState) => !prevState)

    async function submitHandler (emailRef: string, passwordRef: string) {
        try{
            let result = isLogin ? await login(emailRef, passwordRef) : await signup(emailRef, passwordRef);
            if(isLogin){
                const token = result.token;
                localStorage.setItem('token', token);
                return result;
            } else {
                toast.success("Account created successfully!");
                setIsLogin(true);
            }
        } catch (error) {
            console.error(error);
            throw new Error("Could not login user.");
        }
            
    }

    const onClickHandler = async () => {
        setLoading(true);
        try{
            const response = await submitHandler(emailRef.current?.value!, passwordRef.current?.value!);
            if(isLogin){
                if(response.token !== ''){
                    router.push('/events');
                    toast.success("Login successful!");
                }
            } else {
                setIsLogin(true);
                setLoading(false);
            } 
        } catch (error) {
            toast.error("Could not login user. Please try again later.");
            setLoading(false);
        }
    }

    const title = isLogin ? 'Login' : 'Sign Up';

    const message = isLogin ? 'If you want to create an account, please click on Create new account.' :
                              'If you already have an account, please click on Login with existing account.'

    const buttonText = isLogin ? 'Login' : 'Create Account'
    
    const authMode = isLogin ? 'Create new account' : 'Login with existing account'

    if (loading) return <Spinner />

  return (
    <>
    <section className={classes.auth}>
        <h1>{title}</h1>
        <h4>To create a new event, you need to login. You can use this test account to login and use the app:</h4> 
        <h4>Email: test2@email.com</h4> 
        <h4>Password: test2 </h4>
        <h4>{message}</h4>
        <h5>(You can register fake accounts for example abd@test.com) and a password of at least 6 characters</h5>
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