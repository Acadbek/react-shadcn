import { Card } from "./ui/card"

export const HeaderCards = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      <Card className='h-42'></Card>
      <Card className='h-42'></Card>
      <Card className='h-42'></Card>
      <Card className='h-42'></Card>
    </div>
  )
}