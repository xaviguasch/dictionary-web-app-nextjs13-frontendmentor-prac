import Image from 'next/image'
import styles from './page.module.css'
import { UrlWithStringQuery } from 'url'

async function getWord(word: string) {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

  return await res.json()
}

export default async function Home() {
  const w = await getWord('armed')
  console.log(w[0].word)

  return (
    <main className={styles.main}>
      <h1>{w[0].word}</h1>
    </main>
  )
}
