import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import IntroDetailsPage from '../pages/IntroDetailsPage'
import RoutePlanningPage from '../pages/RoutePlanningPage'
import RouteDetailsPage from '../pages/RouteDetailsPage'
import NotFound from '../pages/NotFound'

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/intro" element={<IntroDetailsPage />} />
    <Route path="/step2" element={<RoutePlanningPage />} />
    <Route path="/route-details" element={<RouteDetailsPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRouter
