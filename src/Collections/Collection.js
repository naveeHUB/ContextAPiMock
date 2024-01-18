import React from 'react'
import Cardshow from '../Components/CardShow'
import Orders from '../Collections/Orders'
import Cartbag from '../Components/CartBag'; 
import { Routes, Route } from 'react-router-dom/dist';


export default function Collection() {
  return (
    <div>
        <Routes>
        <Route path='/' Component={Cardshow} />
        <Route path='/card-Bag' Component={Cartbag} />
        <Route path='/cart-Bag/Orders' Component={Orders} />
      </Routes>
    </div>
  )
}
