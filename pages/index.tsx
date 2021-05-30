import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'
import { Card, CustomTooltip } from '~/components'
import { lineTheme, salesData, salesDataCountry } from '~/utils'
import { barTheme } from '~/utils/chartTheme'

export default function Home() {

  return (
    <div className="container">
      <Card subtitle="Monthly" title="Sales" className="mb-8 w-full">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid stroke="var(--bg-secondary)" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              {...lineTheme}
              stroke="var(--brand-primary)"
              dataKey="tshirts"
            />
            <Line
              {...lineTheme}
              stroke="var(--brand-secondary)"
              dataKey="shoes"
            />
            <Line
              {...lineTheme}
              stroke="var(--brand-terciary)"
              dataKey="pants"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <div className="flex flex-wrap">
      <Card subtitle="By country" title="Sales" className="w-full lg:w-1/2">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={salesDataCountry}
          >
            <CartesianGrid stroke="var(--bg-secondary)" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar {...barTheme} fill="var(--brand-primary)" dataKey="tshirts" />
            <Bar {...barTheme} fill="var(--brand-secondary)" dataKey="shoes" />
            <Bar {...barTheme} fill="var(--brand-terciary)" dataKey="pants" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card subtitle="By country" title="Sales" className="w-full lg:w-1/2">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={salesDataCountry}
          >
            <CartesianGrid stroke="var(--bg-secondary)" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar {...barTheme} fill="var(--brand-primary)" dataKey="tshirts" />
            <Bar {...barTheme} fill="var(--brand-secondary)" dataKey="shoes" />
            <Bar {...barTheme} fill="var(--brand-terciary)" dataKey="pants" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      </div>
    </div>
  )
}
