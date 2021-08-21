import React from 'react'
import '../style/AlbumDetail.css'
const Card = (props) => {
    return (
        <>
       
            <div className="card card_div col-lg-3 col-md-5 col-10  ">
            <img
              src={props.img}
              className=" card-img"
              alt={props.title}
            />
            <div className="card-body ">
              <h5 className="card-title_2">{props.title}</h5>
            </div>
          </div>
         
        </>
    )
}

export default Card
