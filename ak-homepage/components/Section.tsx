interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'green'
}

export default function Section({ children, className = '', id, background = 'white' }: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    green: 'bg-ak-green/5',
  }

  return (
    <section id={id} className={`py-16 ${bgColors[background]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
