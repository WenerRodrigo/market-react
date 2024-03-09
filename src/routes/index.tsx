import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CellPhones } from '../screens/cellPhones'

export const AppRoutes = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/cellphones" element={<CellPhones />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
