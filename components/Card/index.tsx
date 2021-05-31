import React, { PropsWithChildren, ReactElement } from 'react'
import { Props } from './Props'

export default function Card({ children, subtitle, title, className }: PropsWithChildren<Props>): ReactElement {
  return (
    <div className={`bg-primary p-4 shadow-xl rounded-md text-primary ${className}`}>
      {subtitle && <small>{subtitle}</small>}
      {title && <h4 className="mt-0">{title}</h4>}
      {children}
    </div>
  )
}
