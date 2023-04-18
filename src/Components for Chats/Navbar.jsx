import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chismis</span>
      <div className='user'>
        <img src="https://pabitraeditography.com/wp-content/uploads/2022/07/girl-png1-min-819x1024.png" alt="" />
        <span>Marc</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar