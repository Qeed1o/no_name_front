import { createSelector } from "reselect";
import { RootState } from "./store";

const rootSelector = (state: RootState) => state.root;
export const mainUserSelector = createSelector(rootSelector, (state) => state.user);
export const otherUsersSelector = createSelector(rootSelector, (state) => state.users);
export const rollSelector = createSelector(rootSelector, (state) => state.roll)
export const cardsSelector = createSelector(rootSelector, (state) => state.cards);