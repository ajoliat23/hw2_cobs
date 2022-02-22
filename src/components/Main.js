import React, { useState } from 'react';
import Product from './Product';
import Checkout from './Checkout';


export default function MainL(props){
    const {products, onAdd} = props;
    const[visCk, setVisCk] = useState(false);
      
    return (
    <main className='block col-2'>
        <div>
            {visCk===true ? 
            <div>
                <button className='badge' onClick={()=>setVisCk(!visCk)}>X</button>
                <Checkout/> 
            </div>
            
            : 
                <div>
                    <h2 id = 'larger'>High Quality Fresh<em id="Fine">*</em> Sole</h2>
                    <p id='xtFine'>*freshly frozen</p>
                    <div className='row'>
                        {products.map((product) => (
                            <Product key={product.id} product={product} onAdd={onAdd}></Product>
                        ))} 
                    </div>
                    <button className='chkout' onClick={()=>setVisCk(!visCk)}>Checkout</button>
                    
                </div>
            }

            
            
          
        </div>
    </main>
        );
}