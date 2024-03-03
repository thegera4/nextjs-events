"use client";
import React, { useEffect, useState, FormEvent } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import classes from './CreateEventForm.module.css';
import { createEvent, updateEvent } from '@/utils/api-utils';
import { EventData } from '@/types';
import { toast } from 'react-toastify';
import { useRouter, useParams } from 'next/navigation';
import { GET_ALL_EVENTS_URL } from './ClientContainer';

export default function EditEventForm() {

  const router = useRouter();
  const params = useParams();
  const { eventSlug }  = params;
  const [eventData, setEventData] = useState<EventData>({
    Title: '',
    Location: '',
    Date: '',
    Description: '',
    ImageURL: ''
  });

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(`${GET_ALL_EVENTS_URL}/events/${eventSlug}`);
      const data = await response.json();
      setEventData(data);
    }
    fetchEvent();
  }, [eventSlug]);

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await updateEvent(eventSlug, eventData);
      toast.success("Event Updated Successfully!")
      router.push('/events');
    } catch (error) {
      toast.error('Something went wrong! Please try again.');
    }
  }

  return (
    <>
    {
      eventData &&
        <Card>
          <form className={classes.form}>
            <div className={classes.control}>
              <label htmlFor='title'>Event Title</label>
              <input 
                type='text' 
                required 
                id='title' 
                value={eventData.Title}
                onChange={(event) => setEventData({
                    ...eventData,
                    Title: event.target.value
                })}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor='image'>Image URL:</label>
              <input 
                type='url' 
                id='image' 
                placeholder='Optional...'
                value={eventData.ImageURL} 
                onChange={(event) => setEventData({
                  ...eventData,
                  ImageURL: event.target.value
                })}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor='address'>Location (Address):</label>
              <input 
                type='text' 
                required 
                id='address' 
                value={eventData.Location} 
                onChange={(event) => setEventData({
                  ...eventData,
                  Location: event.target.value
                })}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor='date'>Date</label>
              <input 
                type='date' 
                required 
                id='date' 
                placeholder='valor deprueba'
                value={eventData.Date} 
                onChange={(event) => setEventData({
                  ...eventData,
                  Date: event.target.value
                })}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                required
                rows={5}
                value={eventData.Description}
                onChange={(event) => setEventData({
                  ...eventData,
                  Description: event.target.value
                })}
              ></textarea>
            </div>
            <div className={classes.actions}>
              <Button onClick={(event: any) => submitHandler(event)}>Edit Event</Button>
            </div>
          </form>
        </Card>
    }
    </>

  );
}