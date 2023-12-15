export async function getWord(word: string) {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

  return await res.json()
}
