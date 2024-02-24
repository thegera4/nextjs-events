"use client";
import { useState } from 'react';
import useFetch from '@/hooks/useFetch';
import { Event } from '@/types';
import { GET_ALL_EVENTS_URL } from '../events/ClientContainer';
import Spinner from '../ui/Spinner';
import AddressIcon from '../icons/AddressIcon'
import DateIcon from '../icons/DateIcon';
import LogisticsItem from './LogisticsItem';
import classes from './EventLogistics.module.css';
import Image from 'next/image';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export enum Months {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12
}

export default function EventLogistics({eventID}: {eventID: string}) {

  const router = useRouter();
  const [userIsCreator, setUserIsCreator] = useState<boolean>(false);

  const { data: events, error } = useFetch<Event[]>(`${GET_ALL_EVENTS_URL}/events`);
  if (error) return <div>Failed to load</div>
  if (!events) return <Spinner />

  const eventDetails = events.find(event => event.ID === parseInt(eventID));
  if (!eventDetails) return <div>Event not found</div>

  const dateParts = eventDetails.Date.split(/[-T:Z]/).slice(0, 3);

  const year = dateParts[0];
  const month = Months[parseInt(dateParts[1])];
  const day = dateParts[2];
  const humanReadableDate = `${month} ${day}, ${year}`;

  const shownImage = eventDetails.ImageURL || "/images/placeholder.jpg";

  // function to delete an event when the "Delete Event" button is clicked
  async function deleteEventHandler() {
    const token = localStorage.getItem('token');
    
    if (!token) {
      toast.error("You need to be logged in to delete an event");
      return;
    }

    try{
      const response = await fetch(`${GET_ALL_EVENTS_URL}/events/${eventID}`, {
        method: 'DELETE',
        headers: { 'Authorization': `${token}`}
      });
      if (!response.ok) {
        throw new Error("Failed to delete event");
      }
      toast.success("Event deleted successfully");
      router.push('/events');
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete event. Please try again later.");
    }
  }

  // function to check if the user is the creator of the event, by comparing the user's ID with the event's creator ID
  async function checkUserIsCreator() {

    const token = localStorage.getItem('token');
    if (!token) return;

    const response = await fetch(`${GET_ALL_EVENTS_URL}/events/${eventID}`, {
      headers: { 'Authorization': `${token}`}
    });
    if (!response.ok) {
      throw new Error("Failed to check if user is creator");
    }
    const data = await response.json();
    if (data.CreatorID === localStorage.getItem('userID')) {
      setUserIsCreator(true);
    }
    
  }

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={shownImage} alt={"City picture"} width={500} height={400}/>
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{eventDetails.Location}</address>
        </LogisticsItem>
        <Button onClick={deleteEventHandler} color="delete"> Delete Event </Button>
      </ul>
    </section>
  );
}