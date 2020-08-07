import React, { useContext } from 'react'
import { CountContext } from './ContextParent'

export const ChildA = () => {
  console.log('Child A Render')
  return (
    <>
      <div>Child A</div>
      <ChildB />
    </>
  )
}

export const MemoizedChildA = React.memo(ChildA)

export const ChildB = () => {
  console.log('Child B Render')
  return (
    <>
      <div>Child B</div>
      <ChildC />
    </>
  )
}

export const ChildC = () => {
  const count = useContext(CountContext)
  console.log('Child C Render')
  return (
    <>
      <div>Child C - Count = {count}</div>
    </>
  )
}

