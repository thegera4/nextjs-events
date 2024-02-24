import Image from 'next/image'
import styles from './BackendTechStack.module.css'

export default function BackendTechStack() {
  return (
    <article className={styles.techsGroup}>
        <figure className={styles.techIcon}>
            <Image src="/images/go.png" alt="Go(golang)" width={110} height={40} className={styles.go}/> 
            <figcaption className={styles.goText}>Go(golang)</figcaption>
        </figure>
        <figure className={styles.techIcon}>
            <Image src="/images/gin.png" alt="Gin(framework)" width={55} height={80} className={styles.gin}/>
            <figcaption className={styles.ginText}>Gin(framework)</figcaption>
        </figure>
        <figure className={styles.techIcon}>
            <Image src="/images/sqlite.webp" alt="Docker" width={80} height={60} className={styles.sqlite}/>
            <figcaption className={styles.sqliteText}>Database</figcaption>
        </figure>
        <figure className={styles.techIcon}>
            <Image src="/images/docker.png" alt="Docker" width={100} height={100} className={styles.docker}/>
            <figcaption className={styles.dockerText}>Docker</figcaption>
        </figure>
    </article>
  )
}