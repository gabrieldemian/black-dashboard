import { ChangeEventHandler } from "react";

export interface Props {
  className?: string
  icon?: string | undefined
  placeholder?: string
  type?: string
  id?: any
  value?: any
  onChange?: ChangeEventHandler
}