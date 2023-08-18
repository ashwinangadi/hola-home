import LoginPage from '@/emailPassLogin/LoginPage'
import ResetPass from '@/emailPassLogin/ResetPass'
import ForgotPassword from '@/emailPassLogin/forgotPassword'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="main_page flex-center">
      {/* <LoginPage /> */}
      {/* <ForgotPassword /> */}
      <ResetPass />
    </main>
  )
}
