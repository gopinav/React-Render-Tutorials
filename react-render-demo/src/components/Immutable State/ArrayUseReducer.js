import React, { useReducer } from 'react'

const initialState = ['Bruce', 'Wayne']

const reducer = (state, action) => {
  const newState = [...state]
  switch (action) {
    case 'addNames':
      // state.push('Clark')
      // state.push('Kent')
      // return state
    newState.push('Clark')
    newState.push('Kent')
    return newState
    case 'resetName':
      return initialState
    default:
      return state
  }
}

export const ArrayUseReducer = () => {
  const [persons, dispatch] = useReducer(reducer, initialState)

  console.log('ArrayUseReducer Render')
  return (
    <div>
      <button onClick={() => dispatch('addNames')}>Add names</button>
      {persons.map(person => (
        <div key={person}>{person}</div>
      ))}
    </div>
  )
}
