import { MainLayout } from '@/layouts'
import { AboutPage } from '@/pages/about'
import { HomePage } from '@/pages/home'
import { UsersPage } from '@/pages/users'
import { Route, Routes } from 'react-router-dom'

export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
    </Routes>
  )
}