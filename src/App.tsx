import Form from './Pages/form'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Pages/logForm'
import AddCart from './Pages/AddCart'
import Cart from './Pages/cart'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Form/>} />
      <Route path='/login' element= {<Login/>} />
      <Route path='/home/:id' element= {<AddCart/>} />
      <Route path='/cart/:id' element= {<Cart/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
