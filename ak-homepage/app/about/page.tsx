import { Metadata } from 'next'
import Section from '@/components/Section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About AK - 회사 소개',
  description: '친환경 바이오 기업 에이케이의 비전, CEO 메시지, 기업 이념, 연혁을 소개합니다.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Page Hero Section */}
      <section className="relative bg-gradient-to-br from-ak-green/10 via-ak-green/5 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-ak-green sm:text-5xl md:text-6xl">
              About AK
            </h1>
            <p className="mt-6 text-xl text-gray-600 sm:text-2xl">
              친환경 바이오 기업의 비전
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <Section background="white">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          CEO 메시지
        </h2>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* CEO Photo */}
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-md overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-6xl text-gray-300">👤</div>
                  <p className="text-sm text-gray-500">CEO 사진</p>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Message */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">김명환</h3>
              <p className="mt-2 text-lg text-ak-green">대표이사</p>
            </div>

            <blockquote className="border-l-4 border-ak-green bg-gray-50 p-6 text-lg leading-relaxed text-gray-700">
              에이케이는 신뢰와 정직한 경영으로 안전한 먹거리를 생산하고 그린환경을 지키도록
              좋은 제품을 개발하고 상생과 나눔을 실천하겠습니다.
            </blockquote>

            <div className="mt-8 space-y-3 text-gray-600">
              <div className="flex items-start">
                <span className="mr-3 mt-1 text-ak-green">•</span>
                <p>새누리당 중앙위 농축산분과 부위원장 (2013.02)</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 기업 이념 Section */}
      <Section background="gray">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          기업 이념
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* 정직 */}
          <Card className="border-ak-green/20 transition-all hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ak-green/10">
                  <svg
                    className="h-8 w-8 text-ak-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <CardTitle className="text-xl text-gray-900">정직</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                정직한 경영과 투명한 기업 운영
              </p>
            </CardContent>
          </Card>

          {/* 신뢰 */}
          <Card className="border-ak-green/20 transition-all hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ak-green/10">
                  <svg
                    className="h-8 w-8 text-ak-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <CardTitle className="text-xl text-gray-900">신뢰</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                고객과의 신뢰를 최우선으로
              </p>
            </CardContent>
          </Card>

          {/* 생명사랑 */}
          <Card className="border-ak-green/20 transition-all hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ak-green/10">
                  <svg
                    className="h-8 w-8 text-ak-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <CardTitle className="text-xl text-gray-900">생명사랑</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                모든 생명을 존중하는 마음
              </p>
            </CardContent>
          </Card>

          {/* 지구사랑 */}
          <Card className="border-ak-green/20 transition-all hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ak-green/10">
                  <svg
                    className="h-8 w-8 text-ak-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <CardTitle className="text-xl text-gray-900">지구사랑</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                친환경 경영으로 지구 보호
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 연혁 Timeline Section */}
      <Section background="white">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          연혁
        </h2>
        <div className="mx-auto max-w-3xl">
          <div className="relative border-l-4 border-ak-green/30 pl-8 space-y-12">
            {/* 2023 */}
            <div className="relative">
              <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-ak-green">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
              <div className="mb-2 text-sm font-semibold text-ak-green">2023</div>
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <p className="text-gray-700">지속적인 제품 개발 및 시장 확대</p>
              </div>
            </div>

            {/* 2022.12 */}
            <div className="relative">
              <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-ak-green">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
              <div className="mb-2 text-sm font-semibold text-ak-green">2022.12</div>
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <p className="text-gray-700">DMZ 항암 장단콩/간장/된장/청국장 출시</p>
              </div>
            </div>

            {/* 2020.12 */}
            <div className="relative">
              <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-ak-green">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
              <div className="mb-2 text-sm font-semibold text-ak-green">2020.12</div>
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <p className="text-gray-700">환경공헌대상 수상</p>
              </div>
            </div>

            {/* 2016.01 */}
            <div className="relative">
              <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-ak-green">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
              <div className="mb-2 text-sm font-semibold text-ak-green">2016.01</div>
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <p className="text-gray-700">기능성 두부 특허 등록</p>
              </div>
            </div>

            {/* 2013.02 */}
            <div className="relative">
              <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-ak-green">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
              <div className="mb-2 text-sm font-semibold text-ak-green">2013.02</div>
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <p className="text-gray-700">환경부장관상 수상</p>
              </div>
            </div>

            {/* 2009.01 - Founding */}
            <div className="relative">
              <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-ak-green">
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mb-2 text-sm font-semibold text-ak-green">2009.01</div>
              <div className="rounded-lg bg-ak-green/5 p-6 shadow-sm border-2 border-ak-green/20">
                <p className="font-semibold text-gray-900">(주)에이케이 설립</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 오시는 길 Section */}
      <Section background="gray">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          오시는 길
        </h2>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <Card className="flex flex-col justify-center">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">연락처 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ak-green/10">
                    <svg
                      className="h-5 w-5 text-ak-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">주소</h3>
                    <p className="mt-1 text-gray-600">
                      충남 홍성군 홍북읍 충남대로 21<br />
                      충남테크노파크 304-2
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ak-green/10">
                    <svg
                      className="h-5 w-5 text-ak-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">전화</h3>
                    <p className="mt-1 text-gray-600">041-630-7163</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ak-green/10">
                    <svg
                      className="h-5 w-5 text-ak-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">이메일</h3>
                    <p className="mt-1 text-gray-600">contact@ak-bio.com</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-ak-green hover:bg-ak-green/90">
                    길찾기
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-200 shadow-lg lg:h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="mx-auto h-16 w-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <p className="mt-4 text-sm text-gray-500">지도 위치</p>
                  <p className="text-xs text-gray-400">충남 홍성군 홍북읍</p>
                </div>
              </div>
              {/* Optional: Uncomment to use actual Google Maps iframe */}
              {/*
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.5!2d126.6!3d36.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDM2JzAwLjAiTiAxMjbCsDM2JzAwLjAiRQ!5e0!3m2!1sen!2skr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AK Company Location"
              />
              */}
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
