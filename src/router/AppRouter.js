import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import RoutePlanningPage from '../pages/RoutePlanningPage'
import NotFound from '../pages/NotFound'

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/find" element={<RoutePlanningPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRouter
