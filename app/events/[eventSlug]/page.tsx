import EventSummary from "@/components/event-detail/EventSummary"
import EventLogistics from "@/components/event-detail/EventLogistics"
import EventContent from "@/components/event-detail/EventContent"
import Comments from "@/components/input/Comments"

export default function EventDetailsPage({params}: {params: any}) {

    const eventID: string = params.eventSlug

  return (
    <article>
        <EventSummary eventID={eventID} />
        <EventLogistics eventID={eventID} />
        <EventContent eventID={eventID} />
        {/*<Comments eventID={eventID} />*/}
    </article>

  )
}