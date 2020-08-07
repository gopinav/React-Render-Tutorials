import React from 'react'
import './App.css'
import { UseState } from './components/UseState/UseState'
import { UseReducer } from './components/UseReducer/UseReducer'
import { ObjectUseState } from './components/Immutable State/ObjectUseState'
import { ArrayUseState } from './components/Immutable State/ArrayUseState'
import { ObjectUseReducer } from './components/Immutable State/ObjectUseReducer'
import { ArrayUseReducer } from './components/Immutable State/ArrayUseReducer'
import { Parent } from './components/Parent Child/Parent'
import { ParentOne } from './components/Optimization/ParentOne'
import { OptimizedParentOne } from './components/Optimization/OptimizedParentOne'
import { ChildOne } from './components/Optimization/ChildOne'
import { GrandParent } from './components/Optimization/GrandParent'
import { ParentTwo } from './components/Optimization/ParentTwo'
import { ParentThree } from './components/Incorrect Optimization/ParentThree.js'
import { ParentFour } from './components/Incorrect Optimization/ParentFour'
import { ContextParent } from './components/Context/ContextParent'
import { ChildA } from './components/Context/ContextChildren'

function App () {
  return (
    <div className='App'>
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseReducer /> */}
      {/* <ArrayUseReducer /> */}
      {/* <Parent /> */}
      {/* <ParentOne /> */}
      {/* <OptimizedParentOne>
        <ChildOne />
      </OptimizedParentOne> */}
      {/* <GrandParent /> */}
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}
      {/* <ContextParent /> */}
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  )
}

export default App
