import { ReactNode } from 'react'

export type Tooltip = { children: ReactNode, tooltip?: string }

export type Event = {
    ID: number;
    Title: string;
    Description: string;
    DateTime: string;
    UserId: number;
}