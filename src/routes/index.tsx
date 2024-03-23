import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CellPhones } from '../screens/cellPhones'
import { TabletsComponent } from '../screens/tablets'
import { Computers } from '../screens/computers'
import { Acessory } from '../screens/acessory'
import { Offers } from '../screens/offers'
import { House } from '../screens/house'
import { CreatedAccount } from '../screens/createdAccount'
import { NewPassword } from '../screens/newPassword'
import { RecoverPassword } from '../screens/recoverPassword'

export const AppRoutes = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<CellPhones searchQuery={''} />} />
            <Route path='/register' element={<CreatedAccount />}/>
            <Route path="/recover-password" element={<RecoverPassword />} />
            <Route path="/my-password" element={<NewPassword />} />
            <Route path="/tablets" element={<TabletsComponent />} />
            <Route path="/computers" element={<Computers />} />
            <Route path="acessory" element={<Acessory />} />
            <Route path="offers" element={<Offers />} />
            <Route path="house" element={<House />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
