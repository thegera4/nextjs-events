"use client";
import { useRef } from 'react'
import Button from '../ui/Button'
import classes from './Search.module.css'

type SetFilterType = (filter: boolean) => void
type SetQueryParamsType = (queryParams: { year: string, month: string }) => void

export default function Search({ filter, setFilter, setQueryParams } : 
  { filter: boolean, setFilter: SetFilterType, setQueryParams: SetQueryParamsType }){

  const yearInputRef = useRef<HTMLSelectElement>(null)
  const monthInputRef = useRef<HTMLSelectElement>(null)

  function submitHandler(e: React.FormEvent){
    e.preventDefault()
    const selectedYear = yearInputRef.current?.value ?? ''
    const selectedMonth = monthInputRef.current?.value ?? ''
    setQueryParams({ year: selectedYear, month: selectedMonth })
    setFilter(true)
  }

  console.log('filter', filter)

  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={ yearInputRef } >
            <option value='2024'>2024</option>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label> 
          <select id='month' ref={ monthInputRef } >
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </div>
      </div>
      <Button onClick={submitHandler}>Find Events</Button>
    </form>
  )
}