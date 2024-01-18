import React, { useState } from 'react'
import { useCard } from '../Context/Product.Context'
import { Link } from 'react-router-dom'

export default function Orders() {
    const {placed,setPlaced,setAddCard} = useCard()
    const [price,setPrice] = useState()
    function hadelquantity(e,priz){
        const quantity = parseInt(e.target.value, 10);
        const cartTotalPrice = quantity * priz;
        setPrice(cartTotalPrice);
    }
    
  return (
    <div>
         <div className='container d-flex'>
            <h5>Your Orders</h5>
            <div className='container-fluid '>
            {
                placed.map((d,index) => {
                    return(<div className='row py-5 ' key={`cart-${index}`}>
                    <div className='col-3 justifi-content-center'>
                        <img src={d.thumbnail} alt={d.title} height='200px' width='200px'/>
                    </div>

                    
                    <div className='col-3'>
                        <div className='mb-5'>
                            <h4>{d.title}</h4>
                        </div>
                        <div>
                            <p>{d.description}</p>
                        </div>
                    </div>
                    <div className='col-3'>
                    <label className='pe-3'>Quantity : </label>
                            <select name="quantity" id="quantity" className='remove' onChange={(e) => hadelquantity(e,d.price)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                    </div>
                    <div className='col-3'>
                        <div>
                        <b>price : $ </b>{d.price}
                        </div>
                        <div className='mt-2 ml-2'>
                        <b>Discount : </b>{d.discountPercentage} %
                        </div>
                        <div>
                        <button className='remove mt-5 mb-5' onClick={() =>{
                let carts = placed.filter((date) => date.id !== d.id)
                setPlaced(carts)
                }}>Remove</button>
                        </div>
                        <div><b>Total Price : {price? price : d.price}</b></div>
                        <div className='m-5'>
               <Link id='link' to='/'><button className='order' onClick={() =>{
                let carts = placed.filter((date) => date.id !== d.id)
                setPlaced(carts)
                setAddCard(carts)
                }}>Order Now</button></Link>
            </div>
                    </div>
                </div>)
                        })
            }
            </div>
        </div>
    </div>
  )
}
