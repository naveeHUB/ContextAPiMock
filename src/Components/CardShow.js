import React from "react";
import Header from "./Header";
import {useCard} from '../Context/Product.Context';
import details from '../prodectData/productData.json';

export default function CardShow() {
  const {setAddCard,addCard} = useCard()

  return (
    <div>
      <Header />
      <div className="row py-5 mx-5">
      {details.products?.map((data, index) => (
          <div key={index} className="card col-sm-2 me-2 ms-3 mt-4">
           <img className="card-img-top mt-2 h-90" src={data.thumbnail} alt={data.title} />
            <div className="card-body">
              <div className="text-center">
                <h5 className="fw-bolder">{data.title}</h5>
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                </div>
                <div className= "text-start mt-3"><b>Brand :</b> {data.brand}</div>
                <div className="text-start mt-1" id="decription" ><b>Description :</b> {data.description}</div>
                <div className="text-start  mt-1"><b>Price : $</b>{data.price}</div>
                <div className=" text-start  mt-1"><b>stock : </b>{data.stock}</div>
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                {addCard.includes(data) ? <button id="add" className="btn btn-outline-dark mt-auto" onClick={() =>  {
                  let carts = addCard.filter((date) => date.id !== data.id)
                  setAddCard(carts)
                }}>
                Remove to Cart
                </button> : <button id="add" className="btn btn-outline-dark mt-auto" onClick={() =>  setAddCard((addCard) =>[...addCard,data])}>
                Add to Cart
                </button>}
                
                
              </div>
            </div>
          </div>
      ))}
    </div>
    </div>
  );
}
