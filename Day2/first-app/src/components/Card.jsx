import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}>
        <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=900&t=st=1706711685~exp=1706712285~hmac=b5615aa22605960577e47546e7c1fc1b990b3425b2b35bffc734c29a9efc46ae" alt="" width={333} style={{border: "3px solid Yellow"}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card