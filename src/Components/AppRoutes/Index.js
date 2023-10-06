import React from 'react'
import {BrowserRouter,Routers,Route} from 'react-router-dom'
import Dashbord from '../Pages/Dashbord/Index'
import Inventory from '../Pages/Inventory/Index'
import Orders from '../Pages/Orders/Index'
import Customers from '../Pages/Costomers/Index'

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
      <Routers>
        <Route path='' element={<Dashbord/>}></Route>
        <Route path='/Inventory' element={<Inventory/>}></Route>
        <Route path='/Orders' element={<Orders/>}></Route>
        <Route path='/Customers' element={<Customers/>}></Route>
      </Routers>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes