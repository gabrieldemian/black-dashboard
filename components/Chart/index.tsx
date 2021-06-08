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
  AreaChart,
} from 'recharts'
import CustomTooltip from '../CustomTooltip'

export default function Chart({
  type = 'line',
  children,
  height = 308,
  data,
  dataKey = 'name',
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
      case 'area':
        return (
          <AreaChart data={data}>
            <CartesianGrid stroke="var(--bg-secondary)" />
            <XAxis dataKey={dataKey} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            {children}
          </AreaChart>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative h-full w-full">
      <ResponsiveContainer width="100%" height={height}>
      {renderType()}
    </ResponsiveContainer>
    </div>
  )
}
