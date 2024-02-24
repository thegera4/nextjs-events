import Image from 'next/image'
import styles from './FrontendTechStack.module.css'

export default function FrontendTechStack() {
  return (
    <article className={styles.techsGroup}>
        <figure className={styles.techIcon}>
            <Image src="/images/typescript.webp" alt="TypeScript" width={55} height={55} className={styles.typescript}/> 
            <figcaption className={styles.typescriptText}>TypeScript</figcaption>
        </figure>
        <figure className={styles.techIcon}>
            <Image src="/images/react.webp" alt="React" width={70} height={70} className={styles.react}/>
            <figcaption className={styles.reactText}>React</figcaption>
        </figure>
        <figure className={styles.techIcon}>
            <Image src="/images/nextjs.webp" alt="NextJS" width={150} height={120} className={styles.nextjs}/>
            <figcaption className={styles.nextjsText}>NextJS</figcaption>
        </figure>
        <figure className={styles.techIcon}>
            <Image src="/images/docker.png" alt="Docker" width={100} height={100} className={styles.docker}/>
            <figcaption className={styles.dockerText}>Docker</figcaption>
        </figure>
    </article>
  )
}