import Link from 'next/link'
import React, { FormEvent, MouseEventHandler } from 'react'
import classes from './Button.module.css'

interface ButtonProps {
  link?: string
  children?: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement> | ((event?: FormEvent<HTMLFormElement>) => void)
  color?: string
}

const Button: React.FC<ButtonProps> = (props) => {

  const isDeleteBtn = props.color === 'delete'

  return props.link ?
    ( <Link href={props.link} className={isDeleteBtn ? classes.delete : classes.btn}>{props.children}</Link> ) :
    ( <button 
        type='button' 
        onClick={ props.onClick as MouseEventHandler<HTMLButtonElement> } 
        className={ isDeleteBtn ? classes.delete : classes.btn }
      >
        {props.children}
      </button> 
    )
}
export default Button