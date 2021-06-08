import { PropsWithChildren, ReactElement } from 'react'
import { Props } from './Props'
import cn from 'classnames'

export default function Card({
  children,
  subtitle,
  title,
  className = '',
  noPadding,
  height,
  style,
  ...other
}: PropsWithChildren<Props>): ReactElement {
  return (
    <div
      style={style}
      className={cn(
        `bg-primary shadow-xl rounded-xl text-primary ${
          noPadding ? 'p-0' : 'p-4'
        }`,
        className
      )}
      {...other}
    >
      {subtitle && <small>{subtitle}</small>}
      {title && <h4 className="mt-0">{title}</h4>}
      {children}
    </div>
  )
}
