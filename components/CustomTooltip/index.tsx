import React, { ReactElement } from 'react'
import { Card } from '~/components'

interface Props {
  active?: boolean
  payload?: any
}

export default function CustomTooltip({
  active,
  payload,
}: Props): ReactElement | null {
  if (active && payload && payload.length) {
    return (
      <Card className="bg-secondary">
        {payload.map((item: any, index: number) => (
          <p key={index} className="mb-0">{`${item.name}: ${item.value}`}</p>
        ))}
      </Card>
    )
  }

  return null
}
