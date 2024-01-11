import Link from 'next/link'
import React from 'react'
import classes from './button.module.css'

interface ButtonProps {
  link?: string
  children?: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
  return props.link ?
    ( <Link href={props.link} className={classes.btn}>{props.children}</Link> ) :
    ( <button type='button' onClick={props.onClick} className={classes.btn}>{props.children}</button> )
}
export default Button