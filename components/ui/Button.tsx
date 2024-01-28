import Link from 'next/link'
import React, { FormEvent, MouseEventHandler } from 'react'
import classes from './button.module.css'

interface ButtonProps {
  link?: string
  children?: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement> | ((event?: FormEvent<HTMLFormElement>) => void)
}

const Button: React.FC<ButtonProps> = (props) => {
  return props.link ?
    ( <Link href={props.link} className={classes.btn}>{props.children}</Link> ) :
    ( <button type='button' onClick={props.onClick as MouseEventHandler<HTMLButtonElement>} className={classes.btn}>{props.children}</button> )
}
export default Button