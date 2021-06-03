import { Line, Bar, Area } from 'recharts'
import { Card, Chart } from '~/components'
import { lineTheme, reviewsData, salesData, salesDataCountry } from '~/utils'
import { areaTheme, barTheme } from '~/utils/chartTheme'

export default function Home() {
  return (
    <div className="page">
      <Card subtitle="Monthly" title="Sales" className="mb-4">
        <Chart data={salesData}>
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
          <Line {...lineTheme} stroke="var(--brand-terciary)" dataKey="pants" />
        </Chart>
      </Card>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 grid-flow-row">
        <Card subtitle="By country" title="Sales">
          <Chart type="bar" data={salesDataCountry}>
            <Bar {...barTheme} fill="var(--brand-primary)" dataKey="tshirts" />
            <Bar {...barTheme} fill="var(--brand-secondary)" dataKey="shoes" />
            <Bar {...barTheme} fill="var(--brand-terciary)" dataKey="pants" />
          </Chart>
        </Card>

        <Card subtitle="good and bad" title="Clients feedback">
          <Chart type="area" data={reviewsData}>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14DA94" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#14DA94" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DA145A" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#DA145A" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              dataKey="positive"
              fill="url(#colorPv)"
              {...areaTheme}
            />
            <Area
              dataKey="negative"
              fill="url(#colorUv)"
              {...areaTheme}
            />
          </Chart>
        </Card>
      </div>
    </div>
  )
}
