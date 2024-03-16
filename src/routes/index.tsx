import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CellPhones } from '../screens/cellPhones'
import { TabletsComponent } from '../screens/tablets'
import { Computers } from '../screens/computers'
import { Acessory } from '../screens/acessory'
import { Offers } from '../screens/offers'
import { House } from '../screens/house'

export const AppRoutes = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/cellphones" element={<CellPhones />} />
            <Route path="/tablets" element={<TabletsComponent />} />
            <Route path="/computers" element={<Computers />} />
            <Route path="/acessory" element={<Acessory />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/house" element={<House />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
