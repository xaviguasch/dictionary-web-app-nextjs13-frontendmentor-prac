'use client'

import { createContext, useContext, useState, useEffect } from 'react'

export const DictAppContext = createContext()

function DictAppProvider({ children }) {
  let dictState = 'this is the context'

  return <DictAppContext.Provider value={dictState}>{children}</DictAppContext.Provider>
}

export default DictAppProvider
