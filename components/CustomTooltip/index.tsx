import React, { ReactElement } from 'react'

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
      <div className="bg-primary p-4 rounded-md">
        {payload.map((item: any, index: number) => (
          <p key={index} className="mb-0">{`${item.name}: ${item.value}`}</p>
        ))}
      </div>
    )
  }

  return null
}
