import React, { ReactElement } from 'react'
import Svg from '../Svg'

interface Props {}

export default function Nav({}: Props): ReactElement {
  return (
    <>
      <div className="z-10 bg-secondary container h-10 flex justify-between items-center fixed top-0 left-0 right-0">

        <div>
          <small className="m-0">Dashboard</small>
        </div>

        <div>
          <Svg icon="menu" className="cursor-pointer h-5 w-5" />
        </div>

      </div>

      {/* Offset */}
      <div className="h-10" />
    </>
  )
}
