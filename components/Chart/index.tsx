import { Props } from 'framer-motion/types/types'
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
} from 'recharts'
import CustomTooltip from '../CustomTooltip'

export default function Chart({
  type = 'line',
  children,
  height = 300,
  data,
  dataKey = 'name'
}: Props): any {
  const renderType = (): any => {
    switch (type) {
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid stroke="var(--bg-secondary)" />
            <XAxis dataKey={dataKey} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {children}
          </LineChart>
        )
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid stroke="var(--bg-secondary)" />
            <XAxis dataKey={dataKey} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {children}
          </BarChart>
        )
      default:
        return null
    }
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      {renderType()}
    </ResponsiveContainer>
  )
}
