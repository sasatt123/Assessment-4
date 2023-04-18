import React from 'react'
import Sidebar from '../Components for Chats/Sidebar'
import Chat from '../Components for Chats/Chat'

const Home = () => {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar/>
            <Chat/>
            
        </div>
    </div>
  )
}

export default Home