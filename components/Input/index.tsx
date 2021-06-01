import { ReactElement } from 'react'
import { Svg } from '~/components'
import { Props } from './Props'
import s from './Input.module.css'

export default function Input({
  className,
  icon,
  placeholder,
  type = 'text',
  id = Math.random() + '',
}: Props): ReactElement {
  return (
    <>
      {type && (
        <div className={`${s.wrapper} ${className}`}>
          {icon && (
            <label htmlFor={id} className={s.icon}>
              <Svg icon={icon} />
            </label>
          )}
          <input id={id} type={type} placeholder={placeholder} className={s.input} />
        </div>
      )}
    </>
  )
}
