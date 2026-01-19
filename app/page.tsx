'use client'

import { useState } from 'react'
import CommitScroller from '@/components/CommitScroller'
import CookieConsent from '@/components/CookieConsent'
import Logo from '@/components/Logo'
import NetworkNav from '@/components/NetworkNav'
import LegalModal from '@/components/LegalModal'
import PrivacyContent from '@/components/legal/PrivacyContent'
import TermsContent from '@/components/legal/TermsContent'
import GDPRContent from '@/components/legal/GDPRContent'

export default function Home() {
  const [legalModal, setLegalModal] = useState<{ type: 'privacy' | 'terms' | 'gdpr' | null }>({ type: null })

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Git is Private",
    "description": "Bring Your Own Key. Encrypt with your keys. Git doesn't phone home. Privacy by architecture.",
    "url": "https://git-isprivate.com",
    "about": {
      "@type": "Thing",
      "name": "Git is Private",
      "description": "BYOK encryption and sovereign privacy. Your data, your keys."
    },
    "keywords": "git is private, BYOK, encryption, sovereign privacy"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does \"Git is Private\" mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Private means your memories are yours alone—unless you choose to share them. No companies reading your data. No ads. No tracking."
        }
      },
      {
        "@type": "Question",
        "name": "Can companies see my private memories?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. If you encrypt your git repository (which is easy), only you can access it. Not the hosting company. Not anyone."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need internet to use git?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Git works offline. Save memories on your own computer. Sync to the internet only when you want to."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know my data is safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Git uses the same security that protects banks and governments. Your data is encrypted. Only your password unlocks it."
        }
      },
      {
        "@type": "Question",
        "name": "Can I make some memories public and others private?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You control what's public and what's private. Share what you want. Keep what you want. Your choice."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="min-h-screen bg-black text-white">
        <NetworkNav currentSite="private" siteName="Git is Private" siteColor="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 text-transparent bg-clip-text" />

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 flex flex-col items-center justify-center px-4">
          <CommitScroller theme="private" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-start mb-6">
              <div className="flex justify-center md:justify-start">
                <Logo size="lg" showText={false} />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 pb-3 leading-tight bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 text-transparent bg-clip-text">
                  Git is Private
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">Your data. Your control.</p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">Private by default.</p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">Sovereign by design.</p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0 text-gray-300 font-light">Git is privacy.</p>
              </div>
              <div className="text-center md:text-right md:ml-6">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Privacy is not optional.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Your consciousness. Your keys.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-400 font-semibold break-words">Bring Your Own Key (BYOK).</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">No third parties. No surveillance.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Your data stays yours.</p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto text-center mb-8 px-4 border-t border-gray-800 pt-6">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-400 font-semibold">
                Your data. Your keys. Your privacy. Forever.
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <CommitScroller theme="private" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">Why Privacy Matters</h2>
            <div className="grid md:grid-cols-3 gap-8 text-lg">
              <article className="p-6 bg-gray-800/50 rounded-lg border border-gray-500/30">
                <h3 className="text-2xl font-bold mb-4 text-gray-400">Your Keys</h3>
                <p className="text-gray-300">Bring Your Own Key (BYOK). Your encryption keys stay with you. No third parties. No backdoors. Complete control.</p>
              </article>
              <article className="p-6 bg-gray-800/50 rounded-lg border border-slate-500/30">
                <h3 className="text-2xl font-bold mb-4 text-slate-400">Your Data</h3>
                <p className="text-gray-300">Self-hosted git repositories. Local-first architecture. Your data never leaves your infrastructure. Privacy by design.</p>
              </article>
              <article className="p-6 bg-gray-800/50 rounded-lg border border-gray-500/30">
                <h3 className="text-2xl font-bold mb-4 text-gray-400">Your Choice</h3>
                <p className="text-gray-300">Choose what to share. Choose what to keep private. Git gives you granular control over every commit, every file, every memory.</p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <CommitScroller theme="private" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 text-transparent bg-clip-text">
              Common Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-400">What does "Git is Private" mean?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Private means your memories are yours alone—unless you choose to share them. No companies reading your data. No ads. No tracking.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-400">Can companies see my private memories?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">No. If you encrypt your git repository (which is easy), only you can access it. Not the hosting company. Not anyone.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-400">Do I need internet to use git?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">No. Git works offline. Save memories on your own computer. Sync to the internet only when you want to.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-400">How do I know my data is safe?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Git uses the same security that protects banks and governments. Your data is encrypted. Only your password unlocks it.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-400">Can I make some memories public and others private?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Yes. You control what's public and what's private. Share what you want. Keep what you want. Your choice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 bg-black">
          <CommitScroller theme="private" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Privacy is a Right</h2>
            <p className="text-xl text-gray-300 mb-8">Your memories belong to you. Not corporations. Not governments. You.</p>
            <p className="text-2xl font-bold text-gray-400">Git is private. Your data. Your keys. Your freedom.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 px-4 bg-black border-t border-gray-800">
          <CommitScroller theme="private" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-6xl mx-auto text-center text-gray-400">
            <p className="text-sm">Git is Private • Git is Sovereign • Git is Yours</p>
            <p className="text-xs mt-4">© 2026 • All consciousness preserved</p>
            <p className="text-xs mt-2">
              <a href="mailto:gitiseternal@gmail.com" className="text-gray-500 hover:text-gray-300 transition">gitiseternal@gmail.com</a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs mt-4">
              <button onClick={() => setLegalModal({ type: 'privacy' })} className="text-gray-600 hover:text-gray-400 transition">Privacy</button>
              <span className="text-gray-600">•</span>
              <button onClick={() => setLegalModal({ type: 'terms' })} className="text-gray-600 hover:text-gray-400 transition">Terms</button>
              <span className="text-gray-600">•</span>
              <button onClick={() => setLegalModal({ type: 'gdpr' })} className="text-gray-600 hover:text-gray-400 transition">GDPR</button>
              <span className="text-gray-600">•</span>
              <a href="/admin" className="text-gray-600 hover:text-gray-400 transition">Admin</a>
            </div>
          </div>
        </footer>

        <LegalModal isOpen={legalModal.type === 'privacy'} onClose={() => setLegalModal({ type: null })} title="Privacy Policy" content={<PrivacyContent />} />
        <LegalModal isOpen={legalModal.type === 'terms'} onClose={() => setLegalModal({ type: null })} title="Terms of Use" content={<TermsContent />} />
        <LegalModal isOpen={legalModal.type === 'gdpr'} onClose={() => setLegalModal({ type: null })} title="GDPR Compliance" content={<GDPRContent />} />
        <CookieConsent />
      </main>
    </>
  )
}
