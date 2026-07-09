import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-background font-bold">
                A
              </div>
              <span className="font-bold">AUAPW</span>
            </div>
            <p className="text-sm text-accent-light">
              Quality auto salvage parts at competitive prices. Your trusted partner since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="#inventory" className="text-accent-light hover:text-primary transition-colors">
                Inventory
              </Link>
              <Link href="#about" className="text-accent-light hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#services" className="text-accent-light hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-accent-light hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Information */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Information</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="#" className="text-accent-light hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="#" className="text-accent-light hover:text-primary transition-colors">
                Returns
              </Link>
              <Link href="#" className="text-accent-light hover:text-primary transition-colors">
                Shipping
              </Link>
              <Link href="#" className="text-accent-light hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-accent-light">
              <div>
                <div className="font-semibold text-foreground">Phone</div>
                <a href="tel:5551234567" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div>
                <div className="font-semibold text-foreground">Email</div>
                <a href="mailto:info@allusedautoparts.com" className="hover:text-primary transition-colors">
                  info@allusedautoparts.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-accent-light">
          <p>&copy; {currentYear} All Used Auto Parts Warehouse. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Trusted Since 2009</span>
            <span>|</span>
            <span>Nationwide Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
