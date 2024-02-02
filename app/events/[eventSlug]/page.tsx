import EventSummary from "@/components/event-detail/EventSummary"
import EventLogistics from "@/components/event-detail/EventLogistics"
import EventContent from "@/components/event-detail/EventContent"
//import Comments from "@/components/input/Comments"

export default async function EventDetailsPage(params: { params: { eventSlug: string } }) {
  const eventID = params.params.eventSlug
  return (
    <article>
      <EventSummary eventID={eventID} />
      <EventLogistics eventID={eventID} />
      <EventContent eventID={eventID} />
      {/*<Comments eventID={eventID} />*/}
    </article>

  )
}