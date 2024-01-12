"use client";
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import Button from '../../components/ui/Button'
import classes from './AuthForm.module.css'
import { login } from '@/utils/api-utils';
import { UserCredentials } from '@/types'

/*
{
    "email": "test2@email.com",
    "password": "test2"
}
*/

export default function AuthForm() {
    
    const [isLogin, setIsLogin] = useState<boolean>(true);
   
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

    async function submitHandler (userCredentials: UserCredentials) {
        const result = await login(userCredentials.email, userCredentials.password);
        console.log(result);
        const token = result.token;
        document.cookie = `token=${token}; path=/; max-age=3600;`;
        router.replace('/events');
    }

    const title = isLogin ? 'Login' : 'Sign Up';

    const message = isLogin ? 'If you do not have an account, please click on Create new account.' :
                              'If you already have an account, please click on Login with existing account.'

    const buttonText = isLogin ? 'Login' : 'Create Account'
    
    const authMode = isLogin ? 'Create new account' : 'Login with existing account'

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
                <Button onClick={()=>submitHandler(userCredentials)}>{buttonText}</Button>
                <button type='button' className={classes.toggle} onClick={switchAuthModeHandler}>{authMode}</button>
            </div>
        </form>
    </section>
  )
}