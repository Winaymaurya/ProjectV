import React from 'react'
import '../componets/review.css'
const ReviewCard = (props) => {
  return (
    <>
    <div className="cardR">
  <h3 className="card__title">{props?.Cname}
  </h3>
  <p className="card__content">{props?.com} </p>
  <div className="card__date">
   {props?.date}
  </div>
</div>

    </>
  )
}

export default ReviewCard