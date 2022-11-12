import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'

const AppBody = () => {
  return (
      <div className='app_body'>
          <Sidebar /> 
          <Chat />  
      </div>
  )
}

export default AppBody