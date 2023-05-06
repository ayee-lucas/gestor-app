import './globals.css'
import { monsterrat } from './fonts'


export const metadata = {
  title: 'Gestor de Hoteles',
  description: 'Gestor de Hoteles en NextJS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={monsterrat.className}>{children}</body>
    </html>
  )
}
