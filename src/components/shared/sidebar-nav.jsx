import { SidebarTrigger } from "../ui/sidebar"

export const SidebarNav = () => {
  return (
    <div className="flex items-center border-b w-full h-10">
      <div className="flex items-center w-full">
        <SidebarTrigger />

        <h1>Navbar</h1>
      </div>
    </div>
  )
}