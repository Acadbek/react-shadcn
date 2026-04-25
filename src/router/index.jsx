import { MainLayout } from '@/layouts'
import { SomeLayout } from '@/layouts/some-layout'
import { AboutPage } from '@/pages/about'
import { HomePage } from '@/pages/home'
import { Settings } from '@/pages/settings'
import { UsersPage } from '@/pages/users'
import { Zod } from '@/pages/zod'
import Zod2 from '@/pages/zod2'
import { Route, Routes } from 'react-router-dom'

export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path='zod2' element={<Zod2 />} />
      </Route>
      <Route path='/some' element={<SomeLayout />}>
        <Route path='settings' element={<Settings />} />
        <Route path='zod' element={<Zod />} />
      </Route>
      <Route path='*' element={<div className="p-4">404 Not Found</div>} />
    </Routes>
  )
}