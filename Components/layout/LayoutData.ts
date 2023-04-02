import { type } from "os"

export interface Address{
    email:string,
    number:string,
    street:string,
}
export interface ContactUsQuestion
{
    title:string,
    
}
export interface links{
    LinkText: string,
    LinkUrl:string
}

export interface LayoutData {
    Address: Address[],
    Links: links[],
    Title:string,
    ContactUsQuestion: ContactUsQuestion[]
}
export type layouttype={
    layoutdata:LayoutData;
}
