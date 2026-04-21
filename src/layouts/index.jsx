import { AppSidebar } from "@/components/app-sidebar"
import { SidebarNav } from "@/components/shared/sidebar-nav"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <SidebarNav />
        <Outlet />
      </div>
    </SidebarProvider>
  )
}