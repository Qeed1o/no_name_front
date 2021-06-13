import { useMemo } from "react";
import { useSelector } from "react-redux"
import { mainUserSelector } from "../store/selectors"
import { User } from "../utils/types";
import { AttractionComponent } from "./AttractionComponent";
import { CardComponent } from "./CardComponent";

interface Props {
    user: User
}

export const UserComponent = ({user}: Props) => {
    const cards = useMemo( () => user.cards.map( card => <CardComponent card={card} /> ), [user.cards] )
    const attractions = useMemo( () => user.attractions.map( attraction => <AttractionComponent card={attraction} />), [user.attractions] )
    return (
        <div className={['user', user.turn ? 'user--turn' : null].join(' ')}>
            <div className="info">
                <span className="name">{user.name}</span>
                <span className="money">{user.money} ₽</span>
            </div>
            <div className="cards">
                {cards}
            </div>
            <div className="cards attractions">
                {attractions}
            </div>
        </div>
    )
}