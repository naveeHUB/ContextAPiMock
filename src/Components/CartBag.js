import React from "react";
import { useCard } from "../Context/Product.Context";
import {Link} from 'react-router-dom'
export default function CartBag(){
    const {addCard, setPlaced} = useCard()
    return(
       <div>
        <h3>Cart Bag</h3>
         <div className="row py-5 mx-5" >
        {addCard?.map((data, index) => (
            <div key={index} className="card col-sm-2 me-4 ms-3 mt-4">
             <img className="card-img-top mt-2 h-100" src={data.thumbnail} alt={data.title} />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{data.title}</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                  </div>
                  <div className="fw-bold text-start">Price: ${data.price}</div>
                  <div className="fw-bold text-start">Brand: {data.brand}</div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <Link id='link' to='/cart-Bag/Orders'><button id="add" className="btn btn-outline-dark mt-auto"
                  onClick={() =>{setPlaced((placed) => [...placed,data])}}> Make Payment </button></Link>
                </div>
              </div>
            </div>
        ))}
      </div>
       </div>
    )
}