import React from 'react'
import '../componets/card.css'
const Card = (props) => {
  return (
  <>
  <div className="car">
      <div className="name">
          {props.name}
      </div>
      <div className="img">
          <img src="" alt="" />
      </div>
      <div className="des">
          {props.desc}
     
      </div>
      
       <button className="btt">View</button>
       
  </div>
  </>
  )
}

export default Card