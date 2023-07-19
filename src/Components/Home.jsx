import React from 'react'
import Sidebar from '../HomeComponents/Sidebar'
import Chat from '../HomeComponents/chat'

const Home = () => {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar />
            <Chat />
        </div>
    </div>
  )
}

export default Home