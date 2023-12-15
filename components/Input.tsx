'use client'
import React, { useState, useContext } from 'react'
import { DictAppContext } from '@/context/DictAppProvider'

function Input() {
  let valueFromContext = useContext(DictAppContext)

  const [searched, setSearched] = useState('')

  function handleClick() {
    console.log('we clicked')
  }

  console.log(valueFromContext)

  return (
    <div>
      <h2>Input client component</h2>
      <input type='text' value={searched} onChange={(e) => setSearched(e.target.value)} />
      <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default Input
