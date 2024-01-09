import type { InferGetStaticPropsType, GetStaticProps } from "next"
import { getStaticProps } from "next/dist/build/templates/pages"
import { Event } from "@/types"

export default function EventsList({events}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            {   
                events?.map((event: Event) => (
                    <div key={event.ID}>
                        <h2>{event.Title}</h2>
                        <p>{event.Description}</p>
                    </div>
                ))
            }
        </div>
    )
}

