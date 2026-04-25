import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DialogContext } from "@/context/dialog-context"
import { useContext } from "react"

export const CreateUserDialog = () => {
  const { isDialogOpen, setIsDialogOpen } = useContext(DialogContext)

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
       
      </DialogContent>
    </Dialog>
  )
}