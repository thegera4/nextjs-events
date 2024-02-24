import styles from './page.module.css'
import WelcomeInstructions from '@/components/home/WelcomeInstructions'
import DocsInstructions from '@/components/home/DocsInstructions'
import TechStack from '@/components/home/TechStack'

export default function Home() {

  return (
    <main className={styles.main}>
      <WelcomeInstructions />
      <TechStack />
      <DocsInstructions />
    </main>
  )
}