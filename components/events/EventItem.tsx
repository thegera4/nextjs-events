import { Event } from '../../types'
import Button from '../ui/Button'
import DateIcon from '../icons/DateIcon'
import AddressIcon from '../icons/AddressIcon'
import ArrowRightIcon from '../icons/ArrowRightIcon'
import Image from 'next/image'
import classes from './EventItem.module.css'

export default function EventItem(props: Event) {
    const { Title, DateTime, Description, ID } = props //Image, Location 

    const humanReadableDate = new Date(DateTime).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  
    //const formattedAddress = location.replace(', ', '\n')
  
    return (
      <li className={classes.item}>
        <Image src="/images/coding-event.jpg" alt={Title} width={250} height={160} />
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{Title}</h2>
            <div className={classes.date}>
              <DateIcon />
              <time>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
              <AddressIcon />
              <address>{"Address 123"/*formattedAddress*/}</address>
            </div>
          </div>
          <div className={classes.actions}>
            <Button link={`/events/${ID}`}>
              <span>Explore Event</span>
              <span className={classes.icon}><ArrowRightIcon /></span>
            </Button>
          </div>
        </div>
      </li>
    )
}