import React, { FC } from 'react'

interface IProps  {
    children: React.ReactNode
}
const AppProvider:FC<IProps> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default AppProvider
