import React, { useState } from 'react'
import { MemoizedChildFive } from './ChildFive'

export const ParentFour = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Vishwas')

  const person = {
    fname: 'Bruce',
    lname: 'Wayne',
  }

  const handleClick = () => {}

  console.log('ParentFour Render')
  return (
    <div>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      <MemoizedChildFive name={name} person={person} handleClick={handleClick} />
    </div>
  )
}
