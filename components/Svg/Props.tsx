import { MouseEventHandler } from "react";

export interface Props {
  icon: string
  className?: string
  onClick?: MouseEventHandler<HTMLElement>
}