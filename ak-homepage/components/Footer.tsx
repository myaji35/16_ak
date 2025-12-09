import Link from 'next/link'

const footerNavigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'CEO Message', href: '/about#ceo' },
    { name: 'History', href: '/about#history' },
  ],
  business: [
    { name: 'Products', href: '/business' },
    { name: 'Technology', href: '/technology' },
    { name: 'Patents', href: '/technology#patents' },
  ],
  support: [
    { name: 'Contact', href: '/media#contact' },
    { name: 'News', href: '/media' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-ak-green mb-4">AK</h3>
            <p className="text-sm text-gray-400 mb-4">
              Nature, Science, and Life
              <br />
              친환경 바이오 기업 AK
            </p>
            <p className="text-sm text-gray-400">
              충남 홍성군 홍북읍 충남대로 21, 충남테크노파크 304-2
              <br />
              Tel: 041-630-7163
              <br />
              Email: contact@ak-bio.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Business</h4>
            <ul className="space-y-2">
              {footerNavigation.business.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 text-center">
            &copy; {new Date().getFullYear()} AK Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
