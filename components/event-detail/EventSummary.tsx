"use client";
import React from 'react';
import useFetch from '@/hooks/useFetch';
import { Event } from '@/types';
import { GET_ALL_EVENTS_URL } from '../events/EventsList';
import classes from './EventSummary.module.css';

export default function EventSummary({eventID}: {eventID: string}) { 

  const { data: events } = useFetch<Event[]>(`${GET_ALL_EVENTS_URL}/events`);
  if (!events) return <> </>

  const event = events.find(event => event.ID === parseInt(eventID));
  if (!event) return <div>Event not found</div>
  const { Title } = event;

  return (<section className={classes.summary}><h1>{Title}</h1></section>);
}