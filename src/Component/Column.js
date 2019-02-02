import React from "react"
import Card from "./Card"

export default ({
    column,
    columnIndex,
    onMoveRight,
    onMoveLeft,
    onAddCard
}) => ( <
    div className = "column" >
    <
    h1 > {
        column.name
    } < /h1> {
    column.cards.map((card, cardIndex) => ( <
        Card key = {
            cardIndex
        }
        card = {
            card
        }
        cardIndex = {
            cardIndex
        }
        canMoveLeft = {
            columnIndex !== 0
        }
        canMoveRight = {
            columnIndex !== 2
        }
        onMoveLeft = {
            () => onMoveLeft(cardIndex)
        }
        onMoveRight = {
            () => onMoveRight(cardIndex)
        }
        />
    ))
} <
button onClick = {
        onAddCard
    } > + < /button> < /
    div >
)