import { getSingleEvent } from '@/utils/api-utils';
import classes from './EventSummary.module.css';

async function EventSummary({eventID}: {eventID: string}) {
  
    const eventDetails = await getSingleEvent(eventID)

  return (
    <section className={classes.summary}>
      <h1>{eventDetails.Title}</h1>
    </section>
  );
}

export default EventSummary;