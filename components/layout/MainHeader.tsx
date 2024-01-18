"use client";
import Link from 'next/link'
import classes from './MainHeader.module.css'
import Button from '../ui/Button'
import { useAuth } from '@/store/AuthContext';

export default function MainHeader() {

  const { userIsLoggedIn, logoutAuthCtx } = useAuth();

  const logoutHandler = () => logoutAuthCtx()
  
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link href='/'>Events</Link>
        </div>
        <nav className={classes.navigation}>
          <ul>
            <li>
              <Link href='/events'>All Events</Link>
            </li>
            {
              userIsLoggedIn ? (
                <li>
                  <Link href='/create-event'>Create Event</Link>
                </li>
              ) : (
                <li>
                  <Link href='/login'>Login</Link>
                </li>
              )
            }
            {
              userIsLoggedIn && 
              <li>
                <Button onClick={logoutHandler}>Logout</Button>
              </li>
            } 
          </ul>
        </nav>
      </div>
    </header>
  )
}