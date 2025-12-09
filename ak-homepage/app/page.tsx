import Link from 'next/link'
import { Metadata } from 'next'
import Section from '@/components/Section'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import {
  Sprout,
  Award,
  FileCheck,
  TrendingUp,
  Wheat,
  Apple,
  Droplets,
  Recycle,
  Microscope,
  Leaf
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AK | Nature, Science, and Life',
  description: '친환경 바이오 기술로 만드는 건강한 미래. 항암 농수산물, 기능성 식품, 친환경 축산, 그린 케어 제품을 제공합니다.',
  keywords: ['AK', '친환경', '바이오', '항암쌀', '기능성 식품', '친환경 축산', '그린 케어'],
  openGraph: {
    title: 'AK | Nature, Science, and Life',
    description: '친환경 바이오 기술로 만드는 건강한 미래',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-ak-green/10 via-white to-ak-gold/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block">
            <Sprout className="w-16 h-16 text-ak-green mx-auto mb-4" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Nature, Science, and Life
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
            친환경 바이오 기술로 만드는 건강한 미래
          </p>

          <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            자연에서 얻은 지혜와 과학적 혁신을 결합하여<br />
            인류의 건강과 환경을 동시에 지키는 솔루션을 제공합니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/business">
              <Button size="lg" className="bg-ak-green hover:bg-ak-green/90 text-white min-w-[160px]">
                제품 보기
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-ak-green text-ak-green hover:bg-ak-green hover:text-white min-w-[160px]">
                회사 소개
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-ak-green rounded-full flex justify-center">
              <div className="w-1 h-3 bg-ak-green rounded-full mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Bento Grid */}
      <Section background="white" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            입증된 혁신
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            과학적 연구와 실증 데이터로 검증된 AK의 기술력
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            title="플라보노이드 215배"
            description="AK항암쌀은 일반 백미 대비 215배 높은 플라보노이드 함량을 자랑합니다"
            badge="검증됨"
            stats={[
              { label: 'AK항암쌀', value: '215.23mg/kg' },
              { label: '일반백미', value: '1.00mg/kg' }
            ]}
          />

          <ProductCard
            title="악취 51% 저감"
            description="가축 음용수 실험을 통해 축산 악취를 획기적으로 감소시킵니다"
            badge="실증"
            stats={[
              { label: '악취 저감', value: '51%' },
              { label: '환경 개선', value: '95%' }
            ]}
          />

          <ProductCard
            title="10+ 특허 보유"
            description="친환경 바이오 기술 분야에서 10개 이상의 특허를 보유하고 있습니다"
            badge="기술력"
            stats={[
              { label: '등록 특허', value: '10+' },
              { label: '기술 인증', value: '5+' }
            ]}
          />
        </div>
      </Section>

      {/* Scrolling Storytelling Section */}
      <Section background="gray" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            자연에서 식탁까지
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AK의 친환경 순환 여정
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1: 흙 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-ak-brown/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Leaf className="w-8 h-8 text-ak-brown" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">1. 흙</h3>
            <p className="text-gray-600 text-center mb-4">친환경 자재</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              자연 유래 미생물과 천연 원료로 만든 친환경 토양 개량제와 비료로 건강한 토양을 만듭니다
            </p>
          </div>

          {/* Step 2: 작물 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-ak-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Wheat className="w-8 h-8 text-ak-green" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">2. 작물</h3>
            <p className="text-gray-600 text-center mb-4">기능성 농산물</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              건강한 토양에서 자란 항암 쌀, 양파, 무 등 기능성이 강화된 안전한 농산물을 생산합니다
            </p>
          </div>

          {/* Step 3: 식탁 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-ak-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Apple className="w-8 h-8 text-ak-gold" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">3. 식탁</h3>
            <p className="text-gray-600 text-center mb-4">건강보조식품</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              기능성 농산물을 가공하여 당뇨케어, 건강두부 등 일상에서 즐기는 건강한 식품을 제공합니다
            </p>
          </div>

          {/* Step 4: 환경 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-ak-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Recycle className="w-8 h-8 text-ak-green" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">4. 환경</h3>
            <p className="text-gray-600 text-center mb-4">친환경 순환</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              축산 악취 저감, 친환경 탈취제로 환경을 보호하며 지속 가능한 순환 생태계를 완성합니다
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-ak-green font-semibold">
            <Recycle className="w-5 h-5" />
            <span>지속 가능한 친환경 순환 시스템</span>
          </div>
        </div>
      </Section>

      {/* 주요 제품 하이라이트 */}
      <Section background="white" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            주요 제품
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            4가지 핵심 카테고리로 건강과 환경을 책임집니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 항암 농수산물 */}
          <ProductCard
            title="항암 농수산물"
            description="플라보노이드 함량이 높은 기능성 농산물로 건강을 지킵니다"
            imageSrc="/images/products/anti-cancer-rice.jpg"
            badge="기능성"
            link="/business/anti-cancer"
            stats={[
              { label: '항암쌀', value: '215배' },
              { label: '제품 수', value: '4종' }
            ]}
          />

          {/* 기능성 식품 */}
          <ProductCard
            title="기능성 식품"
            description="일상에서 즐기는 건강 관리, 당뇨케어와 건강 두부"
            imageSrc="/images/products/functional-food.jpg"
            badge="건강"
            link="/business/functional-food"
            stats={[
              { label: '당뇨케어', value: '실증' },
              { label: '제품 수', value: '3종' }
            ]}
          />

          {/* 친환경 축산 */}
          <ProductCard
            title="친환경 축산"
            description="가축 음용수로 악취를 줄이고 건강한 축산 환경을 만듭니다"
            imageSrc="/images/products/livestock.jpg"
            badge="환경"
            link="/business/livestock"
            stats={[
              { label: '악취 저감', value: '51%' },
              { label: '검증 완료', value: '100%' }
            ]}
          />

          {/* 그린 케어 */}
          <ProductCard
            title="그린 케어"
            description="천연 탈취제와 친환경 패치로 일상을 더 쾌적하게"
            imageSrc="/images/products/green-care.jpg"
            badge="친환경"
            link="/business/green-care"
            stats={[
              { label: '천연 성분', value: '100%' },
              { label: '제품 수', value: '2종' }
            ]}
          />
        </div>

        <div className="mt-12 text-center">
          <Link href="/business">
            <Button size="lg" variant="outline" className="border-ak-green text-ak-green hover:bg-ak-green hover:text-white">
              전체 제품 보기
            </Button>
          </Link>
        </div>
      </Section>

      {/* 신뢰 지표 Section */}
      <Section background="green" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            신뢰와 혁신
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            공인된 인증과 수상으로 입증된 AK의 기술력과 신뢰성
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 인증 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-ak-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FileCheck className="w-8 h-8 text-ak-green" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">인증</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-ak-green rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">NICE 기술평가우수기업</p>
                  <p className="text-sm text-gray-600">신용평가 기술 등급 우수</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-ak-green rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">ECOIN 인증</p>
                  <p className="text-sm text-gray-600">환경표지 인증</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-ak-green rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">유기농자재 공시</p>
                  <p className="text-sm text-gray-600">친환경 농자재 인증</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-ak-green rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">ISO 인증</p>
                  <p className="text-sm text-gray-600">품질경영시스템</p>
                </div>
              </li>
            </ul>
          </div>

          {/* 수상 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-ak-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Award className="w-8 h-8 text-ak-gold" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">수상</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-ak-gold rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">환경부장관상</p>
                  <p className="text-sm text-gray-600">2013년 환경기술 공로</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-ak-gold rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">환경공헌대상</p>
                  <p className="text-sm text-gray-600">2020년 친환경 경영 우수</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-ak-gold rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">녹색기술 인증</p>
                  <p className="text-sm text-gray-600">환경부 녹색기술센터</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-ak-gold rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">기술혁신대상</p>
                  <p className="text-sm text-gray-600">바이오 기술 부문</p>
                </div>
              </li>
            </ul>
          </div>

          {/* 언론 보도 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-ak-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <TrendingUp className="w-8 h-8 text-ak-green" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">언론 보도</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-ak-green rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">KBS 뉴스</p>
                  <p className="text-sm text-gray-600">항암쌀 기술 혁신 보도</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-ak-green rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">매일경제</p>
                  <p className="text-sm text-gray-600">친환경 바이오 기업 특집</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-ak-green rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">환경일보</p>
                  <p className="text-sm text-gray-600">악취 저감 기술 소개</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-ak-green rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">농민신문</p>
                  <p className="text-sm text-gray-600">친환경 농업 솔루션</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="w-10 h-10 text-ak-green" />
                <h3 className="text-3xl font-bold text-gray-900">연구개발의 힘</h3>
              </div>
              <p className="text-lg text-gray-600 mb-2">
                10년 이상의 연구개발 노하우와 10개 이상의 특허로
              </p>
              <p className="text-lg text-gray-600">
                친환경 바이오 기술의 새로운 기준을 만들어갑니다
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button size="lg" className="bg-ak-green hover:bg-ak-green/90 text-white">
                  회사 소개 보기
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-ak-green text-ak-green hover:bg-ak-green hover:text-white">
                  문의하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-ak-green to-ak-green/80 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            건강한 미래를 함께 만들어갑니다
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            AK의 친환경 바이오 기술로 시작하는 지속 가능한 변화
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/business">
              <Button size="lg" className="bg-white text-ak-green hover:bg-gray-100 min-w-[160px]">
                제품 둘러보기
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ak-green min-w-[160px]">
                상담 신청하기
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
