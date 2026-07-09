'use client'

import { useState } from 'react'

const inventoryCategories = [
  { id: 1, name: 'Engines', description: 'Complete and partial engines for all makes', count: 1200 },
  { id: 2, name: 'Transmissions', description: 'Manual and automatic transmissions', count: 850 },
  { id: 3, name: 'Doors & Windows', description: 'Complete doors and glass assemblies', count: 2100 },
  { id: 4, name: 'Mirrors & Lights', description: 'Mirrors, headlights, tail lights', count: 1800 },
  { id: 5, name: 'Suspensions', description: 'Springs, shocks, and suspension components', count: 950 },
  { id: 6, name: 'Electrical', description: 'Starters, alternators, modules', count: 1300 },
]

export default function Inventory() {
  const [selectedCategory, setSelectedCategory] = useState(1)

  return (
    <section id="inventory" className="py-20 bg-background border-t border-border">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 w-fit">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Extensive Selection</span>
          </div>
          <h2 className="text-4xl font-bold">Parts By Category</h2>
          <p className="text-accent-light leading-relaxed">
            Browse our extensive inventory organized by category. With over 10,000 parts in stock, we&apos;re confident we have what you need.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inventoryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-6 rounded-lg border-2 transition-all text-left ${
                selectedCategory === category.id
                  ? 'border-primary bg-primary/10'
                  : 'border-border bg-background/50 hover:border-primary/50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-accent-light mb-3">{category.description}</p>
                  <div className="text-2xl font-bold text-primary">{category.count}</div>
                  <div className="text-xs text-accent-light">parts available</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Search CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Can&apos;t find what you need?</h3>
              <p className="text-accent-light">Contact our team and we&apos;ll help you locate the exact part you&apos;re looking for.</p>
            </div>
            <button className="px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors whitespace-nowrap">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
