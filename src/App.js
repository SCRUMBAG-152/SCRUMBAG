import React, {
  Component
} from "react";
import Column from "./Component/Column"
import "./App.css";

const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [{
          name: "Backlog",
          cards: [{
            name: "Card A"
          }]
        },
        {
          name: "Doing",
          cards: [{
            name: "Card B"
          }]
        },
        {
          name: "Done",
          cards: [{
            name: "Card C"
          }]
        }
      ]
    };
  }

  handleAdd = columnIndex => {
    const name = window.prompt('Name?')
    if (!name) return
    const card = {
      name
    }
    this.setState(prevState => {
      const {
        columns
      } = this.state
      columns[columnIndex].cards.push(card)
      return {
        columns
      }
    })
  }

  handleMove = (columnIndex, cardIndex, direction) => {
    this.setState(prevState => {
      const {
        columns
      } = prevState
      const [card] = columns[columnIndex].cards.splice(cardIndex, 1)
      columns[columnIndex + direction].cards.push(card)
      return {
        columns
      }
    })
  }

  render() {
    return ( <
      div className = "App" > {
        this.state.columns.map((column, columnIndex) => ( <
          Column column = {
            column
          }
          columnIndex = {
            columnIndex
          }
          key = {
            columnIndex
          }
          onMoveLeft = {
            cardIndex => this.handleMove(columnIndex, cardIndex, DIRECTION_LEFT)
          }
          onMoveRight = {
            cardIndex => this.handleMove(columnIndex, cardIndex, DIRECTION_RIGHT)
          }
          onAddCard = {
            () => this.handleAdd(columnIndex)
          }
          />
        ))
      } <
      /div>
    );
  }
}

export default App;