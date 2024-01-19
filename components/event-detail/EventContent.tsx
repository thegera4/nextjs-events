import classes from './EventContent.module.css';
import { getSingleEvent } from '@/utils/api-utils';

async function EventContent({eventID}: {eventID: string}) {

    const eventDetails = await getSingleEvent(eventID)

    return (
        <section className={classes.content}>
            <p>{eventDetails.Description}</p>
        </section>
    );
}

export default EventContent;
