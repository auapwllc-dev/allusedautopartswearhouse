export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-16 overflow-hidden bg-background">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background z-0" />
      
      {/* Decorative lines */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-2/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-accent to-transparent" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Quality Salvage Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-pretty">
              Quality Auto Parts When You Need Them
            </h1>

            <p className="text-lg text-accent-light max-w-xl leading-relaxed">
              Professional auto salvage warehouse with an extensive inventory of used and salvage parts for all major makes and models. Fast shipping, competitive pricing, and expert service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors text-lg">
                Search Inventory
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors text-lg">
                Request a Quote
              </button>
            </div>

            <div className="flex gap-8 pt-8 text-sm">
              <div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-accent-light">Parts in Stock</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-accent-light">Customer Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">USA</div>
                <div className="text-accent-light">Fast Shipping</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/5 rounded-2xl blur-3xl" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-64 h-64 bg-gradient-to-br from-primary/30 to-accent/20 rounded-xl flex items-center justify-center border border-primary/20">
                <svg className="w-32 h-32 text-primary opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.452a6 6 0 00-3.86.454l-.612.054a6 6 0 00-2.4 10.696" />
                  <circle cx="12" cy="15" r="6" />
                </svg>
              </div>
              <p className="text-center text-accent-light max-w-xs">Extensive inventory of quality salvage auto parts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
