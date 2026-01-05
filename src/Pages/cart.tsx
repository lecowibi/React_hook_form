import {  removeFromCart, clearCart } from '../feature/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom"
import { useEffect } from 'react';

const Cart = () => {
  const dispatch=useAppDispatch();
  const {id}=useParams();

useEffect(() => {
 const fetchUser=async()=>{
  try{
    await axios.get(`http://localhost:3000/users/${id}`)
  }
  catch(error){
    console.log("User detail not found")
  }
 }
 fetchUser();
}, [])


const cartItems=useAppSelector(state=>state.cart.items);
  const total=cartItems.reduce((sum,item)=>sum + item.price * item.quantity,0)
  
  return (
    <div className='h-lvh w-full flex flex-col items-center justify-center gap-3'>
       <h2 className='font-bold text-2xl'>Cart</h2>
{
  (cartItems.length===0)?(
    <p >Cart is empty</p>
  ):( <ul className='flex flex-col gap-10 shadow-lg rounded-xl p-4 px-10 py-20'>
      {
        
        cartItems.map(item=>(
          <div key={item.id} className='flex justify-between w-full'>
            {item.title} x {item.quantity} = Rs. {item.price * item.quantity}
            
            <button onClick={()=>dispatch(removeFromCart(item.id))} className='ml-10 bg-black text-white p-1.5 px-3 rounded-md '>Remove</button>


          </div>
        ))
      }
    </ul>)
}
<p className='font-bold'>Total: <span className='font-normal'>Nrs.{total}</span></p>
    
   
    <div className='w-1/4 flex justify-between '>
    <Link to={`/home/${id}`} onClick={()=>dispatch(clearCart())} className='bg-white text-black p-1.5 px-3 shadow-lg rounded-md '>Back</Link>
    <button onClick={()=>dispatch(clearCart())} className='bg-black text-white p-1.5 px-3 rounded-md '>Clear Cart</button>
    </div>
      
    </div>
  )
}

export default Cart
