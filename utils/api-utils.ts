export async function getAllEvents(): Promise<Event[]> {
    const response = await fetch(`${process.env.API_BASE_URL}/events`);
    const data: Event[] = await response.json();
    return data;
}