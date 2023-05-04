import React from 'react'
import { useStateValue } from './StateProvider';
import "./CheckOut.css"
import CheckOutProduct from './CheckOutProduct';
import Subtotal from './Subtotal';

function CheckOut() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src="https://neilpatel.com/wp-content/uploads/2017/08/ads.jpg" alt=''/>
        {basket?.length===0?(
          <div>
            <h2>Your shopping basket is Empty</h2>
            <p>You have no items in your basket. To buy one or more items, click "Add to Cart" next to item.</p>
          </div>
        ):(
          <div>
            <h2 className='checkout_title'>Your shopping basket</h2>
            {basket.map(item=>(
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )
        }
      </div>
      {basket.length>0 && (
        <div className='checkout_right'>
          {/* <h1>Subtotal</h1> */}
          <Subtotal/>
        </div>
      )}
    </div>
  )
}

export default CheckOut;
