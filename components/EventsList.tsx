"use client";
import { useState, useEffect } from "react";
import { getAllEvents } from "@/utils/api-utils";
import { Event } from "@/types"

export default function EventsList() {

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        getAllEvents()
        .then((events) => setEvents(events))
        .catch((error) => console.error(error))
    }, [])

    return (
        <div>
            { 
                events.map((event: Event) => (
                    <div key={event.ID}>
                        <h2>{event.Title}</h2>
                        <p>{event.Description}</p>
                    </div>
                ))
            }
        </div>
    )
}