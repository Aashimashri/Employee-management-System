import './App.css'

import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponents from './components/FooterComponents'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path='/' element={<ListEmployeeComponent/>}>

      </Route>
      <Route path='/employees' element={<ListEmployeeComponent/>}>

      </Route>
      <Route path='/add-employee' element={<EmployeeComponent/>}>

      </Route>
      <Route path='/edit-employee/:id' element={<EmployeeComponent/>}>

      </Route>



    </Routes>    
    <FooterComponents/>
    </BrowserRouter>
          
    </>
  )
}

export default App
