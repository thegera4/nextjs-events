import AddressIcon from '../icons/AddressIcon'
import DateIcon from '../icons/DateIcon';
import LogisticsItem from './LogisticsItem';
import classes from './EventLogistics.module.css';
import Image from 'next/image';
import { getSingleEvent } from '@/utils/api-utils';

async function EventLogistics({eventID}: {eventID: string}) {
  const eventDetails = await getSingleEvent(eventID)

  const humanReadableDate = new Date(eventDetails.DateTime).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={"/images/coding-event.jpg"} alt={"City picture"} width={400} height={400}/>
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
