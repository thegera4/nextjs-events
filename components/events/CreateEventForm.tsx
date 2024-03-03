"use client";
import React, { useState, FormEvent } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import classes from './CreateEventForm.module.css';
import { createEvent } from '@/utils/api-utils';
import { EventData } from '@/types';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

function CreateEventForm() {

  const router = useRouter();
  const [eventData, setEventData] = useState<EventData>({
    Title: '',
    ImageURL: '',
    Location: '',
    Date: '',
    Description: '',
    //isFeatured: false
  });


  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await createEvent(eventData);
      toast.success("Event Created Successfully!")
      router.push('/events');
    } catch (error) {
      toast.error('Something went wrong! Please try again.');
    }
  }

  console.log(eventData)

  return (
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
          <Button onClick={(event: any) => submitHandler(event)}>Add Event</Button>
        </div>
      </form>
    </Card>
  );
}

export default CreateEventForm;