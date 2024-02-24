import Link from 'next/link'
import classes from './DocsInstructions.module.css'

export default function DocsInstructions() {

  return (
    <section className={classes.alignment}>
      <p>You can also check the API documentation to see the available endpoints.</p>
      <Link href="https://documenter.getpostman.com/view/21525358/2s9YsJBCmD" target='_blank' rel='noopener'>
        Click here for API Documentation
      </Link>
    </section>
  )
}