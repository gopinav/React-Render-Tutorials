import React, { useState } from 'react'

const initState = ['Bruce', 'Wayne']
export const ArrayUseState = () => {
  const [persons, setPerson] = useState(initState)
  const handleClick = () => {
    // persons.push('Clark')
    // persons.push('Kent')
    // setPerson(persons)

    const newPersons = [...persons]
    newPersons.push('Clark')
    newPersons.push('Kent')
    setPerson(newPersons)
  }
  console.log('ArrayUseState Render')
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map(person => (
        <div key={person}>{person}</div>
      ))}
    </div>
  )
}
