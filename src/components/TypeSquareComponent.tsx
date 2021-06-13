interface Props {
    type: number
}

export const TypeSquareComponent = ({type}: Props) => (<div className={["card__type", `type-${type}`].join(' ')} />)