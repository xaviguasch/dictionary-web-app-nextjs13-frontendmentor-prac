export async function getWord(word) {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  const data = await res.json()

  return Response.json({ data })
}
