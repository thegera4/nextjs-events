import { ReactNode } from 'react'

export type Tooltip = { children: ReactNode, tooltip?: string }

export type Event = {
    ID: number;
    Title: string;
    Description: string;
    Location: string;
    Date: string;
    ImageURL?: string;
    UserID: number;
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
    Title: string;
    Description: string;
    Date: string;
    Location: string;
    ImageURL?: string;
}