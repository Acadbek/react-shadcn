import React from 'react'
import { Card } from "@/components/ui/card"
import { lazy } from 'react'
import { HeaderCards } from '@/components/header-cards'
// const HomeChart = lazy(() => import('@/components/home-chart'))
import { HomeChart } from '@/components/home-chart'

export const HomePage = () => {
  const [count, setCount] = React.useState(0);

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    desktop: {
      label: "Desktop",
      color: "var(--chart-1)",
    },
    mobile: {
      label: "Mobile",
      color: "var(--chart-2)",
    },
  }

  return (
    <section className="w-full p-3">
      <HeaderCards />
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
      <HomeChart chartConfig={chartConfig}/>
    </section>
  )
}