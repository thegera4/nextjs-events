import Link from 'next/link'
import classes from './MainHeader.module.css'

export default function MainHeader() {
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
            {/*
              session ? (
                <li>
                  <Link href='/create-event'>Create Event</Link>
                </li>
              ) : (
                <li>
                  <Link href='/login'>Login</Link>
                </li>
              )
            */}
            {/*
              session && 
              <li>
                <Button onClick={logoutHandler}>Logout</Button>
              </li>
            */} 
          </ul>
        </nav>
      </div>
    </header>
  )
}