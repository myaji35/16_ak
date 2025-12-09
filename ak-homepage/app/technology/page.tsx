import { Metadata } from 'next'
import Section from '@/components/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '기술 연구소 | AK',
  description: 'AK의 혁신적인 R&D 기술과 특허, 인증 현황을 확인하세요. 친환경 농업 기술과 기능성 농산물 개발의 선두주자입니다.',
  keywords: ['AK 특허', '농업 기술', 'R&D', '친환경 인증', '기능성 농산물', '플라보노이드'],
}

interface Patent {
  number: string
  title: string
  description: string
  grade?: string
}

interface Certification {
  name: string
  issuer: string
  date: string
  type: 'certification' | 'trademark' | 'evaluation'
}

const patents: Patent[] = [
  {
    number: '10-2190631',
    title: '가축 악취 저감 음용수 제조방법',
    description: '기술보증기금 BB급 평가를 받은 혁신적인 가축 악취 저감 기술',
    grade: 'BB급'
  },
  {
    number: '10-1882688',
    title: '항암 농수산물 재배방법',
    description: '플라보노이드 함량을 극대화한 항암 기능성 농산물 재배 기술'
  },
  {
    number: '10-1790996',
    title: '농작물 토양처리제 및 방법',
    description: '친환경 토양 개량을 통한 농작물 품질 향상 기술'
  },
  {
    number: '10-1791000',
    title: '가축분뇨 처리방법',
    description: '환경 친화적인 가축분뇨 자원화 처리 기술'
  },
  {
    number: '10-2314066',
    title: '플라보노이드 고함유 쌀 생산',
    description: '일반 백미 대비 200배 이상의 플라보노이드 함유 쌀 생산 기술'
  },
  {
    number: '10-1296588',
    title: '소취수 제조방법',
    description: '악취 제거 및 환경 개선을 위한 소취수 제조 기술'
  },
  {
    number: '10-2380409',
    title: '면역증강 기능성 식품',
    description: '면역력 강화를 위한 기능성 식품 제조 및 가공 기술'
  },
  {
    number: '10-1588620',
    title: '바이오 탈취제 및 방법',
    description: '친환경 바이오 기술을 활용한 탈취제 제조 방법'
  },
  {
    number: '10-2524927',
    title: '항산화 활성 물질 추출',
    description: '고효율 항산화 활성 물질 추출 및 정제 기술'
  },
  {
    number: '10-유기-2-358',
    title: '퀘세이드비료',
    description: '유기농 인증을 받은 친환경 퀘세이드비료 제조 기술'
  }
]

const certifications: Certification[] = [
  {
    name: 'NICE 기술평가우수기업',
    issuer: 'NICE평가정보',
    date: '2021.05',
    type: 'evaluation'
  },
  {
    name: 'ECOIN 친환경 인증',
    issuer: '환경부',
    date: '인증유지',
    type: 'certification'
  },
  {
    name: '유기농자재공시',
    issuer: '국립농산물품질관리원',
    date: '친환경바이오부문',
    type: 'certification'
  },
  {
    name: '기술보증기금 BB급 평가',
    issuer: '기술보증기금',
    date: '기술력 우수 평가',
    type: 'evaluation'
  },
  {
    name: 'AK 브랜드 상표등록',
    issuer: '특허청',
    date: '상표권 보유',
    type: 'trademark'
  }
]

export default function TechnologyPage() {
  const akRiceValue = 215.23
  const normalRiceValue = 1.00
  const maxValue = 220
  const akPercentage = (akRiceValue / maxValue) * 100
  const normalPercentage = (normalRiceValue / maxValue) * 100

  return (
    <main className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-ak-green to-ak-green/90 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
              기술 연구소
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              R&D와 혁신을 통해 농업의 미래를 만들어갑니다
            </p>
          </div>
        </div>
      </section>

      {/* 특허 아카이브 Section */}
      <Section id="patents" background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            특허 아카이브
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AK는 지속적인 연구개발을 통해 농업 기술 혁신을 선도하고 있습니다.
            <br />
            10건 이상의 특허 기술로 친환경 농업의 새로운 표준을 만들어갑니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {patents.map((patent) => (
            <Card
              key={patent.number}
              className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-ak-green/50"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-mono text-ak-green bg-ak-green/10 px-3 py-1 rounded-full">
                    {patent.number}
                  </span>
                  {patent.grade && (
                    <span className="text-xs font-semibold text-white bg-ak-gold px-2 py-1 rounded">
                      {patent.grade}
                    </span>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight">
                  {patent.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {patent.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* R&D 데이터 Section */}
      <Section id="research-data" background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            R&D 데이터
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            과학적 검증을 통해 입증된 AK의 기술력
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-ak-green/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                플라보노이드 함량 비교 분석
              </CardTitle>
              <CardDescription className="text-center text-base">
                충남대학교 농업과학연구소 검사성적서 (2023.10.26)
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="space-y-8">
                {/* AK 항암쌀 */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-semibold text-gray-900">
                        AK항암쌀
                      </span>
                      <span className="ml-3 text-2xl font-bold text-ak-green">
                        215.23 mg/kg
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      {Math.round(akRiceValue / normalRiceValue)}배
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-ak-green to-ak-green/80 h-8 rounded-full flex items-center justify-end pr-4 transition-all duration-1000 ease-out"
                      style={{ width: `${akPercentage}%` }}
                    >
                      <span className="text-white text-sm font-medium">
                        최우수
                      </span>
                    </div>
                  </div>
                </div>

                {/* 일반 백미 */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-semibold text-gray-900">
                        일반백미
                      </span>
                      <span className="ml-3 text-2xl font-bold text-gray-600">
                        1.00 mg/kg
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      기준
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div
                      className="bg-gray-400 h-8 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${normalPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* 분석 요약 */}
              <div className="mt-10 p-6 bg-ak-green/5 rounded-lg border border-ak-green/20">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  분석 결과
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-ak-green mr-2">•</span>
                    <span>
                      AK항암쌀은 일반 백미 대비 <strong className="text-ak-green">215배</strong> 높은 플라보노이드 함량 검출
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ak-green mr-2">•</span>
                    <span>
                      플라보노이드는 강력한 항산화 및 항염 효과를 가진 기능성 성분
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ak-green mr-2">•</span>
                    <span>
                      특허 기술(10-2314066)을 통한 체계적 재배 및 가공 공정 적용
                    </span>
                  </li>
                </ul>
              </div>

              {/* 검사기관 정보 */}
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>검사기관: 충남대학교 농업과학연구소</p>
                <p>검사일자: 2023년 10월 26일</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 인증 및 상표 Section */}
      <Section id="certifications" background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            인증 및 상표
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            공신력 있는 기관의 인증을 통해 검증된 AK의 기술력과 품질
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const bgColors = {
              certification: 'bg-gradient-to-br from-green-50 to-green-100/50',
              evaluation: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
              trademark: 'bg-gradient-to-br from-amber-50 to-amber-100/50'
            }

            const borderColors = {
              certification: 'border-green-200',
              evaluation: 'border-blue-200',
              trademark: 'border-amber-200'
            }

            const iconColors = {
              certification: 'text-green-600',
              evaluation: 'text-blue-600',
              trademark: 'text-amber-600'
            }

            return (
              <Card
                key={index}
                className={`${bgColors[cert.type]} ${borderColors[cert.type]} border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4">
                    {cert.type === 'certification' && (
                      <svg className={`w-16 h-16 ${iconColors[cert.type]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {cert.type === 'evaluation' && (
                      <svg className={`w-16 h-16 ${iconColors[cert.type]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    )}
                    {cert.type === 'trademark' && (
                      <svg className={`w-16 h-16 ${iconColors[cert.type]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    )}
                  </div>
                  <CardTitle className="text-xl leading-tight mb-2">
                    {cert.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-1">
                  <p className="text-sm font-medium text-gray-700">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-600">
                    {cert.date}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 인증 정보 요약 */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              AK의 신뢰성을 보증합니다
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-ak-green mb-2">10+</div>
                <div className="text-sm text-gray-600">보유 특허</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ak-green mb-2">BB급</div>
                <div className="text-sm text-gray-600">기술보증기금 평가</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ak-green mb-2">5+</div>
                <div className="text-sm text-gray-600">주요 인증</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
