'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-background font-bold text-lg">
            A
          </div>
          <span className="font-bold text-lg hidden sm:inline">AUAPW</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#inventory" className="text-sm font-medium hover:text-primary transition-colors">
            Inventory
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors">
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container-custom flex flex-col gap-4 py-4">
            <Link href="#inventory" className="text-sm font-medium hover:text-primary">
              Inventory
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <button className="px-6 py-2 bg-primary text-background font-semibold rounded-lg w-full">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
