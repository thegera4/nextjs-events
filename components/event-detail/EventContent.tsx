import classes from './EventContent.module.css';
import { getSingleEvent } from '@/utils/api-utils';

export default async function EventContent({eventID}: {eventID: string}) {
    const eventDetails = await getSingleEvent(eventID)
    return (
        <section className={classes.content}>
            <p>{eventDetails.Description}</p>
        </section>
    );
}