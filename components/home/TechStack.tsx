import BackendTechStack from './BackendTechStack'
import FrontendTechStack from './FrontendTechStack'
import classes from './TechStack.module.css'

export default function TechStack() {
  return (
    <section className={classes.techStack}>
      <p>This Fullstack application is powered by these technologies:</p>
      <p><strong>Backend / API:</strong></p>
      <BackendTechStack />
      <p><strong>Frontend:</strong></p>
      <FrontendTechStack />
    </section>
  )
}