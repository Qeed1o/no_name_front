import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { fetchUsers } from "../store/actionCreators"
import { actions } from "../store/rootReducer"
import { otherUsersSelector } from "../store/selectors"
import { AppDispatch } from "../store/store"
import { User } from "../utils/types"


const setUser = (username: string) => {
    localStorage.setItem('user', username);
}

export const AuthPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector( otherUsersSelector );
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            history.push('/')
        } else {
            dispatch(fetchUsers())
        }
    }, [])

    const onSelectUser = (user: User) => {
        setUser(user.name);
        dispatch(actions.saveUser(user))
        history.push('/');
    }

    return (
        <div className="auth">
            { users.map( user => <div className="user" onClick={() => onSelectUser(user)}>{user.name}</div> ) }
        </div>
    )
}