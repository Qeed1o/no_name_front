import API from "../utils/api";
import { RollResponse, User } from "../utils/types";
import { actions } from "./rootReducer";
import { AppDispatch } from "./store";

let currentUserName = localStorage.getItem('user');

export const fetchUser = (name: string) => async (dispatch: AppDispatch) => {
    const user = await API.getUserByName(name);
    dispatch(actions.saveUser(user));
}

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    currentUserName = localStorage.getItem('user');
    const {roll, users} = (await API.getUsers() as RollResponse);
    dispatch(actions.setRoll(roll));
    dispatch(actions.saveUsers(users.filter( (user: User) => user.name !== currentUserName )));
    dispatch(actions.saveUser(users.find( (user: User) => user.name === currentUserName)))
}

export const doRoll = () => async(dispatch: AppDispatch) => {
    const {roll, users} = (await API.doRoll() as RollResponse);
    dispatch(actions.setRoll(roll));
    dispatch(fetchUsers())
}

export const buyCard = (cardID: string) => async(dispatch: AppDispatch) => {
    const { roll, users } = (await API.buyCard(cardID) as RollResponse);
    dispatch(actions.setRoll(roll));
    dispatch(fetchUsers())
}

export const getCards = () => async (dispatch: AppDispatch) => {
    const cards = await API.getCards();
    dispatch(actions.setCards(cards));
}