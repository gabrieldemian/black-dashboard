import { Line, Bar } from 'recharts'
import { Card, Chart } from '~/components'
import { lineTheme, salesData, salesDataCountry } from '~/utils'
import { barTheme } from '~/utils/chartTheme'

export default function Home() {
  return (
    <div className="container">
      <Card subtitle="Monthly" title="Sales" className="mb-4 w-full">
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
        adasdasd
        <Card subtitle="By country" title="Sales">
          <Chart type="bar" data={salesDataCountry}>
            <Bar {...barTheme} fill="var(--brand-primary)" dataKey="tshirts" />
            <Bar {...barTheme} fill="var(--brand-secondary)" dataKey="shoes" />
            <Bar {...barTheme} fill="var(--brand-terciary)" dataKey="pants" />
          </Chart>
        </Card>

        <Card subtitle="By country" title="Sales">
          <Chart type="bar" data={salesDataCountry}>
            <Bar {...barTheme} fill="var(--brand-primary)" dataKey="tshirts" />
            <Bar {...barTheme} fill="var(--brand-secondary)" dataKey="shoes" />
            <Bar {...barTheme} fill="var(--brand-terciary)" dataKey="pants" />
          </Chart>
        </Card>
      </div>
    </div>
  )
}
