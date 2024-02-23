import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function useFetch<T>(url: string, options?: RequestInit) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<T | null>(null);

    useEffect(() => {
        fetch(url, options)
        .then((res) => {
            if (!res.ok) { throw new Error("Failed to fetch data"); }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
            toast.error("Error loading events. Try again later.");
        });
    }, [url, options]);

    return { data, loading, error };
}