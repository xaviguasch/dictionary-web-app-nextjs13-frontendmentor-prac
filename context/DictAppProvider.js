'use client'

import { createContext, useContext, useState, useEffect } from 'react'

export const DictAppContext = createContext()

function DictAppProvider({ children }) {
  const [word, setWord] = useState('')
  const [wordData, setWordData] = useState({})

  useEffect(() => {
    console.log()
    console.log(`Printing word from useEffect in Context: ${word}`)

    const fetchData = async () => {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      )
      const newData = await response.json()
      setWordData(newData)
    }

    fetchData()
  }, [word])

  const handleSendWord = (searchedWord) => {
    console.log(`Printing word from Context: ${searchedWord}`)
    setWord(searchedWord)
  }

  const dictContextState = { handleSendWord, name: 'Xavi', wordData }

  console.log(wordData)

  return (
    <DictAppContext.Provider value={dictContextState}>{children}</DictAppContext.Provider>
  )
}

export default DictAppProvider
