import { createSlice } from "@reduxjs/toolkit";
import { Card, User } from "../utils/types";

interface RootState {
    user: User;
    users: User[];
    roll?: number;
    cards: (Card & { id: string })[]
}

const initialState: RootState = {
    user: {
        cards: [],
        money: 0,
        name: '',
        turn: false,
        attractions: []
    },
    users: [],
    cards: []
}

export const RootSlice = createSlice({
    initialState,
    name: 'root',
    reducers: {
        saveUser(state, action) {
            return ({
                ...state,
                user: action.payload
            })
        },
        saveUsers(state, action) {
            return ({
                ...state,
                users: action.payload
            })
        },
        setRoll(state, action) {
            return ({
                ...state,
                roll: action.payload
            })
        },
        setCards(state, action) {
            return ({
                ...state,
                cards: action.payload
            })
        }
    }
})

export const actions = RootSlice.actions;
export default RootSlice.reducer;