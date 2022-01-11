import React from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { CHARACTERS } from "./charactersData"

export const ReactDnD: React.FC = () => {
  const horse: string = "♘"
  return (
    <DndProvider backend={HTML5Backend}>
      <span>{horse}</span>
      <ul>
        {CHARACTERS.map(({ id, name }) => {
          return (
            <li key={id}>
              <p>{name}</p>
            </li>
          )
        })}
      </ul>
    </DndProvider>
  )
}
