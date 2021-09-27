import {createContext, useState} from "react";

export const DisplayContext = createContext({
  displayArray: {
    row: Number,
    col: Number,
  },
  actions: {
    handleSetRow(){},
    handleSetCol(){},
  }
})

const {Provider} = DisplayContext;

export const DisplayProvider = ({children}) => {
  const [row, setRow] = useState(4)
  const [col, setCol] = useState(4)

  const handleSetRow = value => {
    setRow(value)
  }

  const handleSetCol = value => {
    setCol(value)
  }

  const initialState = {
    displayArray: {
      row: row,
      col: col,
    },
    actions: {
      handleSetRow: handleSetRow,
      handleSetCol: handleSetCol,
    }
  }

  return (
    <Provider value={initialState}>
      {children}
    </Provider>
  )
}