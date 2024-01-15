"use client";
//import { useState, useEffect } from 'react'
import Link from 'next/link'
import classes from './MainHeader.module.css'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/store/AuthContext';

export default function MainHeader() {

  const router = useRouter()

  const { userIsLoggedIn, logout } = useAuth();

  const logoutHandler = () => {
    logout()
    router.push('/')
  }

  console.log(userIsLoggedIn)
  
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