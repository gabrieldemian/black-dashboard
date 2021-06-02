import { ReactNode } from "react"

export interface Props {
  type?: 'line' | 'bar' | 'area'
  height?: number
  dataKey?: string
  children: ReactNode
  data: object[]
}