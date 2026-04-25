import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import { useContext } from "react"
import { DialogContext } from "@/context/dialog-context"

export const SomeNavbar = () => {
  const { setIsDialogOpen } = useContext(DialogContext)
  return (
    <div className='border-b flex items-center justify-between p-4'>
      <h1>LOGO</h1>
      <Button onClick={() => setIsDialogOpen(true)} className='w-20'>
        <Plus />
      </Button>
    </div>
  )
}