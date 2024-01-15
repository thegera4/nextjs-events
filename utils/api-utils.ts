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