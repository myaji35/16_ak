import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface ProductCardProps {
  title: string
  description: string
  imageSrc?: string
  badge?: string
  link?: string
  stats?: { label: string; value: string }[]
}

export default function ProductCard({
  title,
  description,
  imageSrc,
  badge,
  link,
  stats,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {imageSrc && (
        <div className="relative h-48 w-full bg-gray-100">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
          {badge && (
            <span className="absolute top-4 right-4 bg-ak-green text-white text-xs px-3 py-1 rounded-full">
              {badge}
            </span>
          )}
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      {stats && stats.length > 0 && (
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-ak-green">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      )}

      {link && (
        <CardFooter>
          <Button variant="outline" className="w-full text-ak-green border-ak-green hover:bg-ak-green hover:text-white">
            자세히 보기
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
