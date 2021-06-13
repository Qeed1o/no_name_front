import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"
import { buyCard, getCards } from "../store/actionCreators";
import { cardsSelector, mainUserSelector } from "../store/selectors"
import { AppDispatch } from "../store/store";
import { Card } from "../utils/types";
import { TypeSquareComponent } from "./TypeSquareComponent";

const mapCardsToItems = (cards: (Card & { id: string; })[], onBuyCardCallback: (id: string) => void) => cards.map( card => (
    <div className="buy-card-item" onClick={() => onBuyCardCallback(card.id)}>   
        <TypeSquareComponent type={card.type} />
        <span className="info cost">{card.cost}₽</span>
        <span className="info title">{card.name}</span>
        { card.roll && <span className="info roll">{card.roll.join('-')}</span>}
    </div>
) )

export const BuyCardsComponent = () => {
    const user = useSelector(mainUserSelector);
    const dispatch = useDispatch<AppDispatch>()
    const storeCards = useSelector(cardsSelector);

    const onBuyCard = (id: string) => {
        dispatch(buyCard(id));
    }

    const cards = useMemo(() => mapCardsToItems(storeCards, onBuyCard),[storeCards])
    useEffect( () => {
        console.log('get cards')
        dispatch(getCards())
    }, [] )

    return user.turn ? (
        <div className="buy-cards-list">
            {cards}
        </div>
    ) : <></>;
}