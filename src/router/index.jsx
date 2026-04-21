import { MainLayout } from '@/layouts'
import { AboutPage } from '@/pages/about'
import { HomePage } from '@/pages/home'
import { Route, Routes } from 'react-router-dom'

export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}