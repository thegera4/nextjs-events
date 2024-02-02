import AddressIcon from '../icons/AddressIcon'
import DateIcon from '../icons/DateIcon';
import LogisticsItem from './LogisticsItem';
import classes from './EventLogistics.module.css';
import Image from 'next/image';
import { getSingleEvent } from '@/utils/api-utils';

async function EventLogistics({eventID}: {eventID: string}) {
  const eventDetails = await getSingleEvent(eventID)
  const humanReadableDate = new Date(eventDetails.Date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const shownImage = eventDetails.ImageURL || "/images/placeholder.jpg";

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image 
          src={shownImage} 
          alt={"City picture"} 
          width={500} 
          height={400}
        />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{eventDetails.Location}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;