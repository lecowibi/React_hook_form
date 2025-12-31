import Form from './Pages/form'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Pages/logForm'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Form/>} />
      <Route path='/login' element= {<Login/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
