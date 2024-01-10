export async function getAllEvents() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events`);
    if (!response.ok) {
        throw new Error("Could not fetch events.");
    }
    return response.json();
}