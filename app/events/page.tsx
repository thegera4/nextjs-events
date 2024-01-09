import EventsList from "@/components/EventsList";

const props = {
    events: [
        {
            ID: 1,
            Title: "Test Event",
            Description: "This is a test event",
            DateTime: "2021-10-13T00:00:00Z",
            UserId: 1
        }
    ]
}

export default function Events() {
    return (
        <main>
            <EventsList events={props.events}/>
        </main>
    )
}