import React from 'react'

export default function Header(props) {
  return (
    <div>
      <nav id="Navbar">
     <div className='head'>
       <h3 id="Nav">{props.title}</h3>
           <ul>
            
             <li><a href="#">Home</a></li>
             <li><a href="#">About</a></li>
           </ul>
     </div>
   </nav>
    </div>
  )
}
