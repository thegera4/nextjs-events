import EventSummary from "@/components/event-detail/EventSummary"
import EventLogistics from "@/components/event-detail/EventLogistics"
import EventContent from "@/components/event-detail/EventContent"
import { getSingleEvent } from "@/utils/api-utils"
import { Event } from "@/types";
import { toast } from "react-toastify";
//import Comments from "@/components/input/Comments"

export default async function EventDetailsPage(params: { params: { eventSlug: string } }) {

  const eventID = params.params.eventSlug

  const eventDetails = await getSingleEvent(eventID)

  console.log(eventDetails)

  return (
    <article>
      {eventDetails && <EventSummary Title={eventDetails.Title} />}
        <EventLogistics eventID={eventID} />
        <EventContent eventID={eventID} />
        {/*<Comments eventID={eventID} />*/}
    </article>

  )
}