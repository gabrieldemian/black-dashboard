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
  value,
  onChange
}: Props): ReactElement {
  return (
    <>
      {type !== 'select' && (
        <div className={`${s.wrapper} ${className}`}>
          {icon && (
            <label htmlFor={id} className={s.icon}>
              <Svg icon={icon} />
            </label>
          )}
          <input
            value={value}
            onChange={onChange}
            id={id}
            type={type}
            placeholder={placeholder}
            className={s.input}
          />
        </div>
      )}

      {type === 'select' && (
        ''
        // <select
        //   value={value}
        //   onChange={onChange}
        // >
        //   {[10, 20, 30, 40, 50].map((pageSize: number) => (
        //     <option key={pageSize} value={pageSize}>
        //       Show {pageSize}
        //     </option>
        //   ))}
        // </select>
      )}
    </>
  )
}
