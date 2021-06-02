import { MouseEventHandler, ReactNode } from "react";

export interface Props {
  children?: ReactNode
  variant?: 'outline' | 'full'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: Boolean
}