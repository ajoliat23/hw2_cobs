import React from 'react';
//Coding with Basir helped me out with this Cart

export default function Basket(props){
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c)=> a+c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 25;
    const freezingFee = 25;
    const totalPrice = itemsPrice + taxPrice + shippingPrice + freezingFee;
    return (
    
    <aside className='block col-1'>
       <h2>Cart Items</h2> 
       <div>
           {cartItems.length ===0 && <div>Cart is Empty</div>}
       </div>
       {cartItems.map((item)=>(
           <div key ={item.id} className='row'>
               <div className='col-2'>{item.name}</div>
               <div className='col-2'>
                   <button onClick={()=>onAdd(item)} className='add'>+</button>
                   <button onClick={()=>onRemove(item)} className='remove'>-</button>
               </div>
               <div className='col-2 text-right'>
                   {item.qty} x ${item.price.toFixed(2)}
               </div>
           </div>
       ))}
       {cartItems.length !== 0 && (
          <>
          <hr></hr>
          <div className='row dec'>
              <div className='col-2'>Items Price</div>
              <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
          </div>
          <div className='row dec'>
              <div className='col-2'>Tax Price</div>
              <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
          </div>
          <div className='row dec'>
              <div className='col-2'>Freezing Fee</div>
              <div className='col-1 text-right'>${freezingFee.toFixed(2)}</div>
          </div>
         
          <div className='row dec'>
              <div className='col-2 dec'>Shipping Price</div>
              <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
          </div>

          <div className='row'>
              <div className='col-2'><strong>Total Price</strong></div>
              <div className='col-1 text-right' id = "fineprint">${totalPrice.toFixed(2)}</div>
          </div>
          
          </> 
       )}
    </aside>
        );
}