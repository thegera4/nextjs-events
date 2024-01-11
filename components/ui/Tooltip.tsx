'use client'
import { useRef } from 'react'
import { Tooltip } from '@/types';
import styles from './Tooltip.module.css'

const Tooltip: React.FC<Tooltip> = ({ children, tooltip }) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={container}
      onMouseEnter={(clientX) => {
        if(!tooltipRef.current || !container.current) return;
        const { left } = container.current.getBoundingClientRect();
        tooltipRef.current.style.left = (parseInt(clientX.toString()) - left) + 'px';
      }}
      className={styles.container}
    >
      {children}
      <span ref={tooltipRef} className={styles.content}> {tooltip} </span>
    </div>
  )
}

export default Tooltip