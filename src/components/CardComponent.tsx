import { Card } from "../utils/types";
import { TypeSquareComponent } from "./TypeSquareComponent";

interface Props {
    card: Card
}

export const CardComponent = ({card}: Props) => (<div className={`card type-${card.type}`}>
    <span className="info title">{card.name}</span>
    <TypeSquareComponent type={card.type} />
    <span className="info cost">{card.cost}₽</span>
    <span className="info roll">{card.roll.join('-')}</span>
</div>)