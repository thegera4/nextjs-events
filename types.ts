import { ReactNode } from 'react'

export type Tooltip = { children: ReactNode, tooltip?: string }

export type Event = {
    ID: number;
    Title: string;
    Description: string;
    DateTime: string;
    UserId: number;
}

export type UserCredentials = {
    email: string;
    password: string;
}

export type TokenResponse = {
    message: string;
    token: string;
}
