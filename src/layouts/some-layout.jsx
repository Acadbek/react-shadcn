import { SomeNavbar } from '@/components/settings/navbar'
import { Outlet } from 'react-router-dom'

export const SomeLayout = () => {
  return (
    <div className="some-layout">
      <SomeNavbar />
      <Outlet />
    </div>
  )
}