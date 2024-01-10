import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Tooltip from '@/components/Tooltip'

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Events</h1>
        <p>
          Welcome to this Fullstack application about Events. This project is still being updated and improved, but for now you can register 
          a new user, login, logout, create events, edit events, delete events, and view events. Some routes are protected (create/edit/delete), 
          so you need to be logged in to try them. If you do not want to register a new user, you can use the following credentials to login:
        </p>
        <p>
          Email: <strong><span>test1@emai.com</span></strong><br/><br/>
          Password: <strong><span>test1@emai.com</span></strong>
        </p>
        <p>Backend / API Technologies used:</p>
        <div className={styles.techsGroup}>
          <Tooltip tooltip="Go (golang)"> 
            <div className={styles.techIcon}>
              <Image src="/images/go.png" alt="Go(golang)" width={110} height={40} /> 
            </div>
          </Tooltip>
          <Tooltip tooltip="Gin (framework)"> <Image src="/images/gin.png" alt="Gin(framework)" width={60} height={80} /> </Tooltip>
          <Tooltip tooltip="Docker"> <Image src="/images/docker.png" alt="Docker" width={100} height={100} /> </Tooltip>
        </div>
        <p>You can also check the API documentation to see the avaialble endpoints.</p>
        <a href="https://documenter.getpostman.com/view/21525358/2s9YsJBCmD" target='_blank' rel='noopener'>Click here for API Documentation</a>
        <Link href="/events">
          <p>Click here to Get started</p>
        </Link>
      </main>
    </div>
  )
}