import { TextProps } from "./text.props"
import style from './text.module.css'
import cn from 'classnames'

const Text = ({ size = 'm', children }: TextProps): JSX.Element => {
    return (
        <p className={cn(style.p, {
            [style.s]: size == 's',
            [style.m]: size == 'm',
            [style.l]: size == 'l',
        })}>{children}</p>
    )
}

export default Text