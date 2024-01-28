import { EventData } from "@/types";

export async function getAllEvents() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events`);
    if (!response.ok) {
        throw new Error("Could not fetch events.");
    }
    return response.json();
}

export async function login(email: string, password: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Login failed.");
    }
    return response.json();
}

export async function signup(email: string, password: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/signup`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Signup failed.");
    }
    return response.json();
}

export async function getSingleEvent(eventID: string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${eventID}`);
        return response.json();
    }
    catch (error) {
        console.error(error);
    }
}

export async function createEvent(eventData: EventData) {
    const token = localStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        ...(token && { "Authorization": token }),
    };
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events`, {
            method: "POST",
            body: JSON.stringify(eventData),
            headers,
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}