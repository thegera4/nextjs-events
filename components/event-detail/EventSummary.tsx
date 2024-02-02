import { getSingleEvent } from '@/utils/api-utils';
import classes from './EventSummary.module.css';

export default async function EventSummary({eventID}: {eventID: string}) { 
  const event = await getSingleEvent(eventID);
  const { Title } = event;
  return (
    <section className={classes.summary}>
      <h1>{Title}</h1>
    </section>
  );
}