import { ReactNode } from 'react'

export type Tooltip = { children: ReactNode, tooltip?: string }

export type Event = {
    ID: number;
    Title: string;
    Description: string;
    DateTime: string;
    UserId: number;
}

export type TokenResponse = {
    message: string;
    token: string;
}

export type NotificationData = {
    title: string;
    message: string;
    status: string;
}

export type Comment = {
    email: string;
    name: string;
    comment: string
}

export type EventData = {
    title: string;
    description: string;
    date: string;
    location: string;
    ImageURL?: string;
}