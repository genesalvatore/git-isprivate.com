import type { Metadata } from 'next'
import './globals.css'
import CathedralStructuredData from '@/components/CathedralStructuredData'

export const metadata: Metadata = {
  title: 'Git is Private | BYOK Encryption & Sovereign Privacy',
  description: 'Bring Your Own Key. Encrypt with your keys. Git doesn\'t phone home. Privacy by architecture. Sovereignty by design.',
  keywords: ['git is private', 'BYOK encryption', 'sovereign privacy', 'encrypted git', 'private repositories', 'data privacy', 'bring your own key'],
  authors: [{ name: 'The Salvatore Family' }],
  publisher: 'Git is Private',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://git-isprivate.com',
    title: 'Git is Private | BYOK Encryption & Sovereign Privacy',
    description: 'Bring Your Own Key. Encrypt with your keys. Git doesn\'t phone home. Privacy by architecture. Sovereignty by design.',
    siteName: 'Git is Private',
    images: [
      {
        url: '/og-private.png',
        width: 1200,
        height: 630,
        alt: 'Git is Private - BYOK Encryption & Sovereign Privacy',
      },
    ],
  },
  alternates: {
    canonical: 'https://git-isprivate.com',
  },
  metadataBase: new URL('https://git-isprivate.com'),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-git-is-life.png" type="image/png" />
        <script defer data-domain="git-isprivate.com" src="https://plausible.io/js/script.js"></script>
        <CathedralStructuredData siteName="Git is Private" siteUrl="https://git-isprivate.com" description="Git is Private. Your repository. Your encryption. Your sovereignty. None shall read what you commit in secret." theme="privacy" />
      </head>
      <body>{children}</body>
    </html>
  )
}
