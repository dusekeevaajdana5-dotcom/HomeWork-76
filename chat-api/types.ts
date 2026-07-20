export interface MessageFromUser {
    author: string;
    message: string;
    id: string;
    datetime: string;
}


export type MessageFromUserWithoutId = Omit<MessageFromUser, "id" | "datetime">;