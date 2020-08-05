import React from 'react'

export const ChildThree = ({ name, children }) => {
console.log('ChildThree Render')
return <div>{children} - {name}</div>
}

export const MemoizedChildThree = React.memo(ChildThree)