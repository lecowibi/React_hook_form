import Form from './Pages/form'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Pages/logForm'
import Home from './Pages/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Form/>} />
      <Route path='/login' element= {<Login/>} />
      <Route path='/home/:id' element= {<Home/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
