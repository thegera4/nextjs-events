"use client";
import { useState, useEffect } from "react";
import EventsList from "./EventsList";
import Search from "./Search";
import { Event } from "@/types";
import useFetch from "@/hooks/useFetch";
import Spinner from "@/components/ui/Spinner";
import { toast } from "react-toastify";
import Button from "../ui/Button";
import classes from './ClientContainer.module.css'

export const GET_ALL_EVENTS_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export type queryParamsType = { year: string, month: string }

// function to filter events (call the endpoint `/events/filtered` with year and month as query params)
const filterEvents = (year: string, month: string, setFilteredEvents: (data: Event[]) => void,) => { 
  try{
    fetch(`${GET_ALL_EVENTS_URL}/events/filtered?year=${year}&month=${month}`)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    })
    .then((data) => { setFilteredEvents(data); })
    .catch((error) => {
      console.error("error", error);
      toast.error("Error searching events. Try again later.");
    });
  } catch (error) {
    console.error("error", error);
    toast.error("Error filtering events. Try again later.");
  }
}

export default function ClientContainer() {
  // custom hook to fetch events data from the server
  const { data: events, loading, error } = useFetch<Event[]>(`${GET_ALL_EVENTS_URL}/events`);

  // effect to save the events data during component mount
  useEffect(() => { events && setEventsData(events); }, [events]);

  const [eventsData, setEventsData] = useState<Event[]>([]); // state to save all events data
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]); // state to save the filtered events
  const [passedEvents, setPassedEvents] = useState<Event[]>([]); // state to pass the events to EventsList
  const [filter, setFilter] = useState<boolean>(false); // state to know if we are filtering events
  const [queryParams, setQueryParams] = useState<queryParamsType>({ year: "", month: "" }); // state to save the query params
  const { year, month } = queryParams; // destructuring the query params

  // effect to filter events when we click on "Find Events" button and everytime queryParams change
  useEffect(() => { 
    filter && filterEvents(year, month, setFilteredEvents); 
  }, [filter, month, queryParams, year]);

  // function to clear the filter and show all events again
  const clearFilterHandler = () => setFilter(false);

  // effect to update the event list to be passed to the EventsList component
  useEffect(() => {
    filter ? setPassedEvents(filteredEvents) : setPassedEvents(eventsData);
  }, [filter, filteredEvents, eventsData]); 


  return (
    <>
      <Search setFilter={setFilter} setQueryParams={setQueryParams} />
      { filter &&
        <div className={classes.CenteredBtn}>
          <Button onClick={clearFilterHandler}>Clear Filter</Button>
        </div>
      }
      { error && toast.error("Error loading events. Try again later.") }
      { loading && <Spinner /> }
      <EventsList events={passedEvents} />
    </>
  )
}