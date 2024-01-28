import { Event } from '../../types'
import Button from '../ui/Button'
import DateIcon from '../icons/DateIcon'
import AddressIcon from '../icons/AddressIcon'
import ArrowRightIcon from '../icons/ArrowRightIcon'
import Image from 'next/image'
import classes from './EventItem.module.css'

export default function EventItem(props: Event) {
    
  const { Title, Date, ImageURL, ID, Location } = props   
  
  const formattedDate = Date.split('T')[0]

  const shownImage = ImageURL ? ImageURL : '/images/placeholder.jpg'
  
  return (
    <li className={classes.item}>
      <Image src={shownImage} alt={Title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{Title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{Location}</address>
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