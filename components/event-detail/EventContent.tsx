"use client";
import useFetch from '@/hooks/useFetch';
import { Event } from '@/types';
import { GET_ALL_EVENTS_URL } from '../events/EventsList';
import Spinner from '../ui/Spinner';
import classes from './EventContent.module.css';

export default function EventContent({eventID}: {eventID: string}) {
    
    const { data: events, error } = useFetch<Event[]>(`${GET_ALL_EVENTS_URL}/events`);
    if (error) return <div>Failed to load</div>
    if (!events) return <Spinner />

    const eventDetails = events.find(event => event.ID === parseInt(eventID));
    if (!eventDetails) return <div>Event not found</div>

    return (<section className={classes.content}> <p>{ eventDetails.Description }</p> </section>);
}