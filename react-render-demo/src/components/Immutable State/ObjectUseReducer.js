import React, { useReducer } from 'react'

const initialState = {
  fname: 'Bruce',
  lname: 'Wayne'
}

const reducer = (state, action) => {
  const newState = { ...state }
  switch (action) {
    case 'firstName':
      // state.fname = 'Clark'
      // return state
      newState.fname = 'Clark'
      return newState
    case 'lastName':
      // state.lname = 'Kent'
      // return state
      newState.lname = 'Clark'
      return newState
    case 'resetName':
      return initialState
    default:
      return state
  }
}

export const ObjectUseReducer = () => {
  const [person, dispatch] = useReducer(reducer, initialState)

  console.log('ObjectUseReducer Render')
  return (
    <div>
      <div>
        {person.fname} {person.lname}
      </div>
      <button onClick={() => dispatch('firstName')}>Change first name</button>
      <button onClick={() => dispatch('lastName')}>Change last name</button>
      <button onClick={() => dispatch('resetName')}>Reset name</button>
    </div>
  )
}
