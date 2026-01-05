import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hook"
import { fetchProducts } from "../feature/cart/productSlice"
import { addToCart } from "../feature/cart/cartSlice"
import { useParams } from "react-router-dom"
import axios from "axios"
type userid = {
    id: number,
    Name: string
}

function AddCart() {
  const dispatch = useAppDispatch()
  const {id}=useParams();
  const [user,setUser]=useState<userid>();
 
  const { items, loading, error } = useAppSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  

  useEffect(() => {
  
     const fetchUser=async()=>{
     try{ 
        const res=await axios.get(`http://localhost:3000/users/${id}`)
        setUser(res.data);
    }
   catch(error){
    console.log("couldn't fetch user detail",error)
   }
}
   fetchUser();
  }, [id])


  if (loading)
    return <p className="text-center mt-20 text-xl">Loading...</p>

  if (error)
    return <p className="text-center mt-20 text-red-500">{error}</p>
     


  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between mb-10">  
        <h2 className="text-2xl font-bold">Products</h2>
         {
                user?(
                    <p className="text-center">--Welcome back <span className="font-bold">{user.Name}</span>--</p>
                ):(
                    <p>Loading User Data</p>
                )
            }
        <Link to={`/cart/${id}`} className="text-blue-500 font-bold">
          Go to Cart
        </Link>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(product => (
          <li
            key={product.id}
            className="p-6 shadow-xl rounded-2xl bg-white hover:scale-105 transition"
          >
                <img
        src={product.image}
        alt={product.title} 
        className="mt-2 w-40 h-40 object-cover rounded-lg ml-25"
      />
            <h3 className="font-bold">{product.title}</h3>
            <p className="mt-2">Rs. {product.price}</p>
         

            <button
              className="mt-6 bg-black text-white px-4 py-2 rounded-xl"
              onClick={() =>
                dispatch(addToCart(product))
              }
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AddCart
