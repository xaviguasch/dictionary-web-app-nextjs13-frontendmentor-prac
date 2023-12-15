import Input from '@/components/Input'
import styles from './page.module.css'

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1>Dictionary Web App</h1>
      <Input />
    </main>
  )
}
