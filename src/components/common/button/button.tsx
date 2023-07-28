import { PropsWithChildren } from 'react'
import styles from './button.module.scss'

type ButtonProps = {
    variant?: 'secondary' | 'primary'
    onClick: () => void,
} & PropsWithChildren;

export const Button = ({ variant, onClick, children }:ButtonProps) => {
    return <button
        className={`${styles.button} ${variant === 'secondary' ? styles.button_secondary : styles.button_primary}`}
        onClick={onClick}>{children}</button>
}