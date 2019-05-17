import React from 'react';
import puce from './puce.png'
import visa from './visa.jpg'
import space from  './space.jpg'

const CarteBanquaire=()=>
<div className="card">
   <h1>CREDIT CARD</h1>
   <img className="creditcard" src={puce} alt="puceBancaire"></img>
      <div className="cardaprameters">
      <div className="card-infos">
         <p className="numCB">1234 1234 1234 1234</p>
         <p className="code">5422 </p>
         <p className="text">CARDHOLDER</p>
     </div>
         
   <div className="Validthru">
     
      <p className="validation">VALID<br/> THRU <span>11/50</span></p>
      
       <img className="visa" src={visa} alt="visaBancaire"></img>
       </div>
   </div>
   </div>




export default CarteBanquaire;