import React from 'react'
import './App.css'
import { UseState } from './components/UseState/UseState'
import { UseReducer } from './components/UseReducer/UseReducer'
import { ObjectUseState } from './components/Immutable State/ObjectUseState'
import { ArrayUseState } from './components/Immutable State/ArrayUseState'
import { ObjectUseReducer } from './components/Immutable State/ObjectUseReducer'
import { ArrayUseReducer } from './components/Immutable State/ArrayUseReducer'
import { Parent } from './components/Parent Child/Parent'

function App () {
  return (
    <div className='App'>
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseReducer /> */}
      {/* <ArrayUseReducer /> */}
      <Parent />
    </div>
  )
}

export default App
