"use client";
import useFetch from "@/hooks/useFetch";
import EventItem from "./EventItem";
import { Event } from "@/types"
import classes from './EventsList.module.css'
import { toast } from "react-toastify";
import Spinner from "../ui/Spinner";

export const GET_ALL_EVENTS_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function EventsList() {

    const { data: events, loading, error } = useFetch<Event[]>(`${GET_ALL_EVENTS_URL}/events`);

    return (
        <ul className={classes.list}>
            { error && toast.error("Error loading events. Try again later.") }
            { loading && <Spinner /> }
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