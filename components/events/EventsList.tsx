"use client";
import EventItem from "./EventItem";
import { Event } from "@/types"
import classes from './EventsList.module.css'

export default function EventsList({ events } : { events: Event[] }) {

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