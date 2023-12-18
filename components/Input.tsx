'use client'

import React, { useState, useContext } from 'react'
import { DictAppContext } from '@/context/DictAppProvider'

function Input() {
  let { handleSendWord, wordData } = useContext(DictAppContext)
  const [searchInput, setSearchInput] = useState('')

  function handleClick() {
    handleSendWord(searchInput)
  }

  console.log(wordData)

  return (
    <div>
      <h2>Input client component</h2>
      <input
        type='text'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      <p>{wordData ? wordData?.[0]?.phonetic : 'no searched word yet'}</p>
    </div>
  )
}

export default Input
