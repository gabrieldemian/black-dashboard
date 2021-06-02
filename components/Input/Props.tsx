import { ChangeEvent } from "react";

export interface Props {
  className?: string
  icon?: string | undefined
  placeholder?: string
  type?: any
  id?: any
  value?: any
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}