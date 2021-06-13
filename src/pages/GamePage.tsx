import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { BuyCardsComponent } from "../components/BuyCardsComponent";
import { UserListComponent } from "../components/UserListComponent";
import { buyCard, doRoll, fetchUser, fetchUsers } from "../store/actionCreators";
import { actions } from "../store/rootReducer";
import { mainUserSelector, rollSelector } from "../store/selectors";
import { AppDispatch } from "../store/store";

export const GamePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const history = useHistory();
    const roll = useSelector(rollSelector)
    const updateUsersIntervalRef = useRef<any>();
    const mainUser = useSelector( mainUserSelector );

    const onRoll = () => {
        dispatch(doRoll());
    }

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            history.push('/auth')
        } else {
            updateUsersIntervalRef.current = setInterval( () => {
                dispatch(fetchUsers())
            }, 1000)
    
            return () => {
                clearInterval(updateUsersIntervalRef.current);
                updateUsersIntervalRef.current = null;
            }
        }
    }, [])


    return (
        <div className="game">
            <UserListComponent />
            <div className="game-info-inner">
                <span className="info--roll">{roll}</span>
                {mainUser.turn && <div className="buy_card__input">
                    <div className="buttons">
                        <div className="button roll__button" onClick={onRoll}>ROLL</div>
                    </div>
                </div>}
                <BuyCardsComponent />
            </div>            
        </div>
    )
}