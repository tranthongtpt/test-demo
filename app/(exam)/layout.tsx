import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})
export default function ExamLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <div>{children}</div>
      </body>
    </html>
  )
}
