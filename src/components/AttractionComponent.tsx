import { Attraction } from "../utils/types";

interface Props {
    card: Attraction
}

export const AttractionComponent = ({card}: Props) => (<div className={`card attraction`}>
        <span className="info title">{card.name}</span>
        <span className="info cost">{card.cost}₽</span>
    </div>)