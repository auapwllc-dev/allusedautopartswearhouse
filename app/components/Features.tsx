const features = [
  {
    id: 1,
    icon: '📦',
    title: 'Fast Shipping',
    description: 'We ship nationwide with competitive rates. Most orders ship within 24 hours.',
  },
  {
    id: 2,
    icon: '✓',
    title: 'Quality Guaranteed',
    description: 'All parts are tested and inspected for quality. We stand behind every sale.',
  },
  {
    id: 3,
    icon: '💬',
    title: '24/7 Support',
    description: 'Our expert team is ready to help you find exactly what you need.',
  },
  {
    id: 4,
    icon: '💳',
    title: 'Competitive Pricing',
    description: 'Save up to 70% compared to new parts. Best prices guaranteed.',
  },
  {
    id: 5,
    icon: '🔧',
    title: 'Professional Service',
    description: 'Expert technicians ready to assist with installation or technical questions.',
  },
  {
    id: 6,
    icon: '🌐',
    title: 'Easy Returns',
    description: '30-day return policy. No questions asked if you&apos;re not satisfied.',
  },
]

export default function Features() {
  return (
    <section id="services" className="py-20 bg-background/50 border-t border-border">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 w-fit">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why Choose Us</span>
          </div>
          <h2 className="text-4xl font-bold">Professional Service, Competitive Pricing</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-accent-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
