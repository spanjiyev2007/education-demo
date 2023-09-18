import { InputProps } from "./input.props"
import style from './input.module.css'
import cn from 'classnames'

const Input = ({className, ...props}:InputProps): JSX.Element => {
  return (
    <input className={cn(style.input, className)} {...props} />
  )
}

export default Input