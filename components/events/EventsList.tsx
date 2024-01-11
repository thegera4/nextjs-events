"use client";
import { useState, useEffect } from "react";
import { getAllEvents } from "@/utils/api-utils";
import EventItem from "./EventItem";
import { Event } from "@/types"
import classes from './EventsList.module.css'

export default function EventsList() {

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        getAllEvents()
        .then((events) => setEvents(events))
        .catch((error) => console.error(error))
    }, [])

    return (
        <ul className={classes.list}>
            { events?.map((event) => (
                <EventItem 
                    key={event.ID}
                    ID={event.ID}
                    Title={event.Title}
                    //location={event.location}
                    DateTime={event.DateTime} 
                    Description={event.Description} 
                    UserId={event.UserId}
                />
            ))}
        </ul>
    )
}