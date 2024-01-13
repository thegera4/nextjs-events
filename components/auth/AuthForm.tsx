"use client";
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import Button from '../../components/ui/Button'
import classes from './AuthForm.module.css'
import { TokenResponse, UserCredentials } from '@/types'

/*
{
    "email": "test2@email.com",
    "password": "test2"
}
*/

export default function AuthForm({submitHandler, result}: 
    {submitHandler: (userCredentials: UserCredentials) => Promise<TokenResponse>; result: TokenResponse}, ) {
    
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [userCredentials, setUserCredentials] = useState<UserCredentials>({
        email: '',
        password: ''
    })
  
    //const notificationCtx = useContext(NotificationContext);
    
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserCredentials({
            ...userCredentials,
            [e.target.id]: e.target.value
        })
    }
  
    const switchAuthModeHandler = () => setIsLogin((prevState) => !prevState)

    const onClickHandler = async () => {
        setLoading(true);
        let tokenResponse: TokenResponse = await submitHandler(userCredentials);
        if(tokenResponse.token){
            router.push('/events');
        } else {
            //si no hay token, muestra mensaje de error
            //notificationCtx.showNotification({
            //    title: 'Error',
            //    message: 'Could not login user.',
            //    status: 'error'
            //})
        }
    }


    const title = isLogin ? 'Login' : 'Sign Up';

    const message = isLogin ? 'If you do not have an account, please click on Create new account.' :
                              'If you already have an account, please click on Login with existing account.'

    const buttonText = isLogin ? 'Login' : 'Create Account'
    
    const authMode = isLogin ? 'Create new account' : 'Login with existing account'

    if (loading) return <p>Loading...</p> //TODO: replace with spinner component

  return (
    <section className={classes.auth}>
        <h1>{title}</h1>
        <h4>To create a new event, you need to login.</h4>
        <h4>{message}</h4>
        <h5>(You can use fake accounts for example abd@test.com) and a password of at least 6 characters</h5>
        <form>
            <div className={classes.control}>
                <label htmlFor='email'>Your Email</label>
                <input type='email' id='email' required onChange={handleChange}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='password'>Your Password</label>
                <input type='password' id='password' required onChange={handleChange}/>
            </div>
            <div className={classes.actions}>
                <Button onClick={onClickHandler}>{buttonText}</Button>
                <button type='button' className={classes.toggle} onClick={switchAuthModeHandler}>{authMode}</button>
            </div>
        </form>
    </section>
  )
}