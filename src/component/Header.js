import React from 'react'

function header() {
  return (
    <div className='header'>
      <div className='logo'>
       <h1>Oppp Phone</h1>
      </div>
      <nav className='navigation'>
        <ul>
          <li><a href='/'>Phone</a></li>
          <li><a href='/'>Catogary</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Contact</a></li>

        </ul>

      </nav>
      <div className='btn'>
      <button type='button'>Login</button>
      </div>
   
    </div>
  )
}

export default header