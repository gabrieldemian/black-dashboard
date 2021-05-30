import { ReactNode } from "react"

export interface Props {
  type?: string
  height?: number
  dataKey?: string
  children: ReactNode
  data: any
}