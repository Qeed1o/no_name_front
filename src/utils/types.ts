export interface Card {
    name: string;
    cost: number;
    roll: number[];
    type: CardTypes;
}

export interface User {
    turn: boolean;
    cards: Card[],
    money: number,
    name: string;
    attractions: Attraction[]
}

export interface Attraction {
    name: string;
    cost: number;
    flip: boolean;
}

export interface RollResponse {
    roll: number;
    users: User[]
}

export enum CardTypes {
    "Blue",
    "Green",
    "Red",
    "Violet"
}