import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { buyCard, doRoll } from "../store/actionCreators";
import { mainUserSelector, otherUsersSelector } from "../store/selectors";
import { AppDispatch } from "../store/store";
import { UserComponent } from "./UserComponent";

export const UserListComponent = () => {
    const dispatch = useDispatch<AppDispatch>();

    const otherUsers = useSelector( otherUsersSelector );
    const mainUser = useSelector( mainUserSelector );
    const usersList = useMemo( () => otherUsers.map( user => <UserComponent user={user} key={user.name} /> ), [otherUsers])

    return (
        <div className="users-list-inner">
            <div className="main-user">
                <UserComponent user={mainUser} />
            </div>  
            <div className="other-users">
                {usersList}
            </div>
        </div>
    )
}