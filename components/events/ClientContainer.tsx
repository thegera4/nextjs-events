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

export default function ClientContainer() {

  const { data: events, loading, error } = useFetch<Event[]>(`${GET_ALL_EVENTS_URL}/events`);
  useEffect(() => { events && setEventsData(events); }, [events]);

  const [eventsData, setEventsData] = useState<Event[]>([]);
  const [filter, setFilter] = useState<boolean>(false);
  const [queryParams, setQueryParams] = useState<queryParamsType>({ year: "", month: "" });

  //when there is a change in filter or queryParams, get the data from the endpoint `${GET_ALL_EVENTS_URL}/events/filtered`
  useEffect(() => {
    if (filter) {
      const { year, month } = queryParams;
      fetch(`${GET_ALL_EVENTS_URL}/events/filtered?year=${year}&month=${month}`)
        .then((res) => {
          if (!res.ok) { throw new Error("Failed to fetch data"); }
          return res.json();
        })
        .then((data) => {
          setEventsData(data);
        })
        .catch((error) => {
          console.error("error", error);
          toast.error("Error searching events. Try again later.");
        });
    } else {
      fetch(`${GET_ALL_EVENTS_URL}/events`)
        .then((res) => {
          if (!res.ok) { throw new Error("Failed to fetch data"); }
          return res.json();
        })
        .then((data) => {
          setEventsData(data);
        })
        .catch((error) => {
          console.error("error", error);
          toast.error("Error loading events. Try again later.");
        });
    }
  }, [filter, queryParams]);

  const clearFilterHandler = () => setFilter(false);

  return (
    <>
      <Search filter={filter} setFilter={setFilter} setQueryParams={setQueryParams} />
      { filter &&
        <div className={classes.CenteredBtn}>
          <Button onClick={clearFilterHandler}>Clear Filter</Button>
        </div>
      }
      { error && toast.error("Error loading events. Try again later.") }
      { loading && <Spinner /> }
      <EventsList events={eventsData} />
    </>
  )
}