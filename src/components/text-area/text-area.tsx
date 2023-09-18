import { TextAreaProps } from "./text-area.props"
import style from './text-area.module.css'
import cn from 'classnames'

const TextArea = ({className, ...props}:TextAreaProps): JSX.Element => {
  return (
    <textarea className={cn(style.TextArea, className)} {...props} />
  )
}

export default TextArea