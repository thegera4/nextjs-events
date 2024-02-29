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

  let btnColorStyle: string;

  switch (props.color) {
    case "delete":
      btnColorStyle = classes.delete;
      break;
    case "edit":
      btnColorStyle = classes.edit;
      break;
    default:
      btnColorStyle = classes.btn;
      break;
  }

  return props.link ?
    ( <Link href={props.link} className={btnColorStyle}>{props.children}</Link> ) :
    ( <button 
        type='button' 
        onClick={ props.onClick as MouseEventHandler<HTMLButtonElement> } 
        className={ btnColorStyle }
      >
        {props.children}
      </button> 
    )
}
export default Button