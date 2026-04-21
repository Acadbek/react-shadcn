import { Card } from "./ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const HeaderCards = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      <Tooltip>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
        <TooltipTrigger>
          <Card className='h-42'></Card>
        </TooltipTrigger>
        <TooltipTrigger>
          <Card className='h-42'></Card>
        </TooltipTrigger>
        <TooltipTrigger>
          <Card className='h-42'></Card>
        </TooltipTrigger>
        <TooltipTrigger>
          <Card className='h-42'></Card>
        </TooltipTrigger>
      </Tooltip>
    </div>
  )
}