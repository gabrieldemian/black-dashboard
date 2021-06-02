import { ChangeEvent, ReactNode } from "react";

export interface Props {
  children?: ReactNode
  variant?: 'outline' | 'full'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: Boolean
}