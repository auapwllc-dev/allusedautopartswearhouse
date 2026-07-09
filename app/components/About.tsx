export default function About() {
  return (
    <section id="about" className="py-20 bg-background border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Area */}
          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl" />
            <div className="relative z-10 w-full h-full bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl flex items-center justify-center border border-primary/20">
              <svg className="w-48 h-48 text-primary opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 w-fit">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">About Us</span>
              </div>
              <h2 className="text-4xl font-bold">Your Trusted Auto Parts Partner</h2>
            </div>

            <div className="flex flex-col gap-4 text-accent-light leading-relaxed">
              <p>
                All Used Auto Parts Warehouse has been serving the automotive community for over 15 years. We&apos;ve built our reputation on quality parts, competitive pricing, and exceptional customer service.
              </p>
              <p>
                Our facility houses an extensive inventory of salvage parts from vehicles of all makes and models. Every part is carefully inspected and tested to ensure it meets our high quality standards.
              </p>
              <p>
                Whether you&apos;re a DIY enthusiast, professional mechanic, or fleet manager, we have the parts and expertise you need at prices that won&apos;t break the bank.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-background/50 rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-accent-light">Years in Business</div>
              </div>
              <div className="p-4 bg-background/50 rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-xs text-accent-light">Happy Customers</div>
              </div>
              <div className="p-4 bg-background/50 rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-xs text-accent-light">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
