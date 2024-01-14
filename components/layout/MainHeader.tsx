import Link from 'next/link'
import classes from './MainHeader.module.css'
import Button from '../ui/Button'
import { cookies } from 'next/headers'

export default function MainHeader() {

  let userIsLoggedIn: boolean = false

  if(cookies().get('token')){
    userIsLoggedIn = true
  }


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
                <Button /*onClick={logoutHandler}*/>Logout</Button>
              </li>
            } 
          </ul>
        </nav>
      </div>
    </header>
  )
}