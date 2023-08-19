import Image from 'next/image'
import LoginPage from './login/page'

export default function Home() {
  return (
    <main className="main_page flex-center">
      <LoginPage />
    </main>
  )
}
