/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SP2HtDDzQqZ
 */
import Link from "next/link"
import classes from "./not-found.module.css"

export default function NotFoundPage() {
  return (
    <main className={classes.mainContainer}>
      <CalendarXIcon />
      <h1> 404 - Page Not Found </h1>
      <p> The page you are looking for could not be found. Please check the URL.</p>
      <div className={classes.btn}>
        <Link className={classes.link} href="/events"> Return to Events </Link>
      </div>
    </main>
  )
}

function CalendarXIcon() {
  return (
    <svg
      className={classes.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <line x1="10" x2="14" y1="14" y2="18" />
      <line x1="14" x2="10" y1="14" y2="18" />
    </svg>
  )
}
