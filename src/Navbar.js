import React from 'react'

function Navbar({count,somestate,handleClick}) {
    console.log("Navbar rendered");
  return (
    <div>
      <h1>im a navbar {count} {somestate}</h1>
       <button onClick={handleClick}>navbar button</button>
    </div>
  )
}

export default React.memo(Navbar);
