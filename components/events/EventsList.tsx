"use client";
import { useState, useEffect } from "react";
import { getAllEvents } from "@/utils/api-utils";
import EventItem from "./EventItem";
import { Event } from "@/types"
import classes from './EventsList.module.css'
import { toast } from "react-toastify";

export default function EventsList() {

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        getAllEvents()
        .then((events) => setEvents(events))
        .catch((_) => toast.error("Error loading events. Try again later."))
    }, [])

    console.log(events)

    return (
        <ul className={classes.list}>
            { events?.map((event) => (
                <EventItem 
                    key={event.ID}
                    ID={event.ID}
                    Title={event.Title}
                    Location={event.Location}
                    Date={event.Date} 
                    ImageURL={event.ImageURL}
                    Description={event.Description} 
                    UserId={event.UserId}
                />
            ))}
        </ul>
    )
}