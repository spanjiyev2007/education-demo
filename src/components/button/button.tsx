import { ButtonProps } from "./button.props"
import style from './button.module.css'
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

const Button = ({children, appearance, arrow = 'none', ...props}:ButtonProps):JSX.Element => {
  return (
    <button className={cn(style.button, {
        [style.primary]: appearance === 'primary',
        [style.ghost]: appearance === 'ghost',
    })}
    {...props}
    >
        {children}
        {arrow !== 'none' && (
            <span className={cn(style.arrow, {
                [style.down]: arrow === 'down',
            })}><ArrowIcon /></span>
        )}
        </button>
  )
}

export default Button