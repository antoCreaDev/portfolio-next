import './globals.css'

export const metadata = {
  title: 'antocrea.dev',
  description: 'Anto Creative Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
