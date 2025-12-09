'use client';

import { useState } from 'react';
import { Metadata } from 'next';

// Product Card Component
interface ProductCardProps {
  name: string;
  description: string;
  features: string[];
  stats?: string[];
  image?: string;
}

function ProductCard({ name, description, features, stats, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-ak-green/20 to-ak-gold/20 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-ak-green/40 text-6xl font-bold">{name.charAt(0)}</div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-ak-green mb-2">주요 특징</h4>
          <ul className="space-y-1">
            {features.map((feature, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-start">
                <span className="text-ak-gold mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {stats && stats.length > 0 && (
          <div className="mb-4 bg-ak-bg p-3 rounded-md">
            <h4 className="font-semibold text-ak-brown mb-2 text-sm">주요 데이터</h4>
            <ul className="space-y-1">
              {stats.map((stat, idx) => (
                <li key={idx} className="text-xs text-gray-600 flex items-start">
                  <span className="text-ak-green mr-2">▸</span>
                  <span>{stat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="w-full mt-4 bg-ak-green text-white py-2 px-4 rounded-md hover:bg-ak-green/90 transition-colors duration-200 font-medium">
          자세히 보기
        </button>
      </div>
    </div>
  );
}

// Main Page Component
export default function BusinessPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    '항암 농수산물',
    '기능성 식품',
    '친환경 축산',
    '그린 케어'
  ];

  // Tab 1: 항암 농수산물 Products
  const anticancerProducts = [
    {
      name: 'AK항암쌀',
      description: '충남 홍성 천수만 4,360만평에서 재배되는 프리미엄 항암 기능성 쌀로, 일반미 대비 월등히 높은 플라보노이드 함량을 자랑합니다.',
      features: [
        '플라보노이드 215.23mg/kg 함유',
        '일반미 대비 215배 높은 항산화 성분',
        '천수만 청정 지역 재배',
        '무농약 친환경 재배 방식'
      ],
      stats: [
        '재배 면적: 충남 홍성 천수만 4,360만평',
        '플라보노이드 함량: 215.23mg/kg',
        '일반미 대비: 215배 높은 수치',
        '항산화 효과 검증 완료'
      ]
    },
    {
      name: '항암양파',
      description: '특수 재배 기술로 생산된 고기능성 양파로, 일반 양파보다 높은 항산화 성분과 유황 화합물을 함유하고 있습니다.',
      features: [
        '고농도 케르세틴 함유',
        '유황 화합물 풍부',
        '친환경 재배 인증',
        '항염증 효과 입증'
      ],
      stats: [
        '케르세틴 함량 일반 양파 대비 1.8배',
        '유기농 인증 제품',
        '항산화 지수 우수 등급'
      ]
    },
    {
      name: '무씨차',
      description: '무씨에서 추출한 천연 건강차로, 풍부한 영양소와 항산화 성분이 함유되어 있어 일상 건강 관리에 도움을 줍니다.',
      features: [
        '천연 무씨 100% 사용',
        '풍부한 폴리페놀 함유',
        '면역력 강화 효과',
        '소화 기능 개선 도움'
      ],
      stats: [
        '폴리페놀 함량 우수',
        '무카페인 건강차',
        '1일 2~3회 섭취 권장'
      ]
    },
    {
      name: '장단콩 발효식품',
      description: '전통 장단콩을 활용한 발효 식품 시리즈로, 간장, 된장, 청국장을 생산하여 한국 전통 발효의 우수성을 계승합니다.',
      features: [
        '국산 장단콩 100% 사용',
        '전통 발효 방식 적용',
        '간장, 된장, 청국장 생산',
        '유익균 풍부'
      ],
      stats: [
        '발효 기간: 6개월 이상 숙성',
        '전통 메주 발효 방식',
        '무첨가 천연 발효',
        '프로바이오틱스 함유'
      ]
    }
  ];

  // Tab 2: 기능성 식품 Products
  const functionalFoods = [
    {
      name: '당뇨케어 "당문화에는고"',
      description: '바나바잎 추출물과 코로솔산 특허 기술을 적용한 혈당 관리 건강기능식품으로, 식후 혈당 상승을 효과적으로 억제합니다.',
      features: [
        '바나바잎 추출물 함유 (코로솔산 특허)',
        '식후 혈당 상승 억제 기능성 인정',
        '식약처 개별인정형 원료',
        '1일 1회 간편 섭취'
      ],
      stats: [
        '코로솔산 특허 기술 적용',
        '식후 혈당 억제율: 임상 검증',
        '건강기능식품 인증',
        '부작용 없는 천연 원료'
      ]
    },
    {
      name: '항암두부',
      description: '특허 제10-1588620호를 보유한 기능성 두부로, 일반 두부와 차별화된 항암 성분을 함유하고 있습니다.',
      features: [
        '특허 제10-1588620호 보유',
        '항암 성분 강화 제조법',
        '고단백 저칼로리',
        '이소플라본 고농도 함유'
      ],
      stats: [
        '특허 번호: 10-1588620',
        '이소플라본 함량 일반 두부 대비 1.5배',
        '단백질 함량 15g/100g',
        '칼로리 80kcal/100g'
      ]
    },
    {
      name: '조아라 분말',
      description: '천연 재료만을 사용한 조미료 분말로, MSG 없이 깊은 감칠맛을 내어 건강한 식생활을 지원합니다.',
      features: [
        '100% 천연 재료 사용',
        'MSG 무첨가',
        '자연 발효 감칠맛',
        '다양한 요리에 활용 가능'
      ],
      stats: [
        '천연 조미료 100%',
        '화학 첨가물 0%',
        '나트륨 저감형',
        '유통기한: 제조일로부터 2년'
      ]
    },
    {
      name: '순무씨면역오일',
      description: '순무씨에서 추출한 프리미엄 오일로, 오메가-3와 비타민이 풍부하여 면역력 강화에 도움을 줍니다.',
      features: [
        '순무씨 저온 압착 추출',
        '오메가-3 지방산 풍부',
        '비타민 E 고함유',
        '산화 방지 특수 포장'
      ],
      stats: [
        '오메가-3 함량: 35%',
        '비타민 E: 120mg/100g',
        '저온 압착 방식',
        '불포화지방산 비율 85%'
      ]
    }
  ];

  // Tab 3: 친환경 축산 Products
  const ecoLivestock = [
    {
      name: '가축 음용수 (악취저감 솔루션)',
      description: '특허 제10-2190631호를 보유한 가축 음용수 시스템으로, 축사 악취를 51% 저감하고 가축의 건강을 개선합니다.',
      features: [
        '특허 제10-2190631호 보유',
        '축사 악취 51% 저감 효과',
        '일당증체량 6.9% 향상',
        '가축 면역력 강화'
      ],
      stats: [
        '특허 번호: 10-2190631',
        '악취 저감률: 51%',
        '일당증체량 증가: 6.9%',
        '실험 기간: 2019-2020',
        '기술보증기금 평가: BB급'
      ]
    },
    {
      name: '돼지 사육 실험 결과',
      description: '2019-2020년 진행된 돼지 사육 실험에서 일당증체량 6.9% 향상과 악취 저감 효과가 입증되었습니다.',
      features: [
        '일당증체량 6.9% 향상',
        '사료 효율 개선',
        '질병 발생률 감소',
        '축사 환경 개선'
      ],
      stats: [
        '실험 기간: 2019.06 ~ 2020.12',
        '실험 두수: 500두',
        '증체량 증가: 6.9%',
        '질병 발생률 감소: 23%',
        '기술보증기금 BB급 인증'
      ]
    },
    {
      name: '사용 방법 및 적용 사례',
      description: '축종별 맞춤형 급수 시스템 적용으로 최적의 효과를 제공하며, 다양한 농가에서 검증된 실적을 보유하고 있습니다.',
      features: [
        '축종별 맞춤 급수 시스템',
        '자동 급수 장치 연동',
        '실시간 모니터링 가능',
        '간편한 설치 및 관리'
      ],
      stats: [
        '적용 농가: 150개 이상',
        '평균 악취 저감: 48%',
        '평균 증체율 향상: 5.8%',
        '농가 만족도: 92%'
      ]
    },
    {
      name: '산란닭 급이 효과',
      description: '산란닭에게 급이 후 생산된 계란에서도 항암 성분이 검출되어, 기능성 계란 생산의 가능성을 입증했습니다.',
      features: [
        '계란에서 항암 성분 검출',
        '산란율 개선',
        '계란 품질 향상',
        '닭 건강 상태 개선'
      ],
      stats: [
        '산란율 증가: 7.2%',
        '계란 플라보노이드 검출',
        '난각 강도 12% 향상',
        '폐사율 감소: 18%'
      ]
    }
  ];

  // Tab 4: 그린 케어 Products
  const greenCare = [
    {
      name: '크린 탈취수',
      description: '친환경 탈취 솔루션으로, 화학 물질 없이 자연 유래 성분만을 사용하여 악취를 제거하고 쾌적한 환경을 조성합니다.',
      features: [
        '천연 유래 성분 100%',
        '화학 물질 무첨가',
        '즉각적인 탈취 효과',
        '인체 및 환경 무해'
      ],
      stats: [
        '탈취 효과: 95% 이상',
        '지속 시간: 8시간',
        '친환경 인증 획득',
        '다양한 공간 적용 가능'
      ]
    },
    {
      name: '크린 팻치 (지방 분해 패치)',
      description: '천연 성분을 활용한 지방 분해 패치로, 피부에 부착하여 국소 부위의 지방 분해를 돕는 웰니스 제품입니다.',
      features: [
        '천연 성분 기반',
        '간편한 부착형 패치',
        '피부 자극 최소화',
        '24시간 지속 효과'
      ],
      stats: [
        '임상 시험 완료',
        '피부 자극 테스트 통과',
        '1일 1회 사용',
        '4주 사용 권장'
      ]
    },
    {
      name: '친환경 살균제',
      description: '2016년 5월 개발된 크린균 100% 사멸 효과를 입증한 친환경 살균제로, 각종 유해균을 효과적으로 제거합니다.',
      features: [
        '크린균 100% 사멸 효과 (2016.05 검증)',
        '천연 항균 성분',
        '인체 무해 성분',
        '광범위한 살균 효과'
      ],
      stats: [
        '크린균 사멸률: 100%',
        '검증 날짜: 2016.05',
        '유해균 제거율: 99.9%',
        '식품 접촉면 사용 가능',
        '환경부 인증 친환경 제품'
      ]
    },
    {
      name: '다목적 환경 솔루션',
      description: '가정, 농장, 산업 현장 등 다양한 환경에서 사용 가능한 종합 환경 관리 솔루션을 제공합니다.',
      features: [
        '다양한 공간 적용 가능',
        '맞춤형 솔루션 제공',
        '친환경 인증 제품',
        '지속 가능한 환경 관리'
      ],
      stats: [
        '적용 분야: 10개 이상',
        '고객 만족도: 94%',
        '재구매율: 87%',
        '친환경 인증 다수 보유'
      ]
    }
  ];

  const allProducts = [
    anticancerProducts,
    functionalFoods,
    ecoLivestock,
    greenCare
  ];

  return (
    <div className="min-h-screen bg-ak-bg">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ak-green to-ak-green/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">사업 및 제품</h1>
            <p className="text-xl text-white/90">친환경 바이오 솔루션</p>
            <div className="mt-8 h-1 w-24 bg-ak-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-ak-green text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-7xl mx-auto">
            {/* Category Header */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {tabs[activeTab]}
              </h2>
              <div className="h-1 w-16 bg-ak-gold mx-auto"></div>

              {/* Special Info for 항암 농수산물 */}
              {activeTab === 0 && (
                <div className="mt-6 bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold text-ak-green">재배 지역:</span> 충남 홍성 천수만
                  </p>
                  <p className="text-lg text-gray-700 mt-2">
                    <span className="font-semibold text-ak-green">재배 면적:</span> 4,360만평
                  </p>
                </div>
              )}

              {/* Special Info for 친환경 축산 */}
              {activeTab === 2 && (
                <div className="mt-6 bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
                  <p className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold text-ak-green">검증 기관:</span> 기술보증기금 BB급 인증
                  </p>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold text-ak-green">실험 기간:</span> 2019-2020
                  </p>
                </div>
              )}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allProducts[activeTab].map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  description={product.description}
                  features={product.features}
                  stats={product.stats}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-ak-brown to-ak-brown/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">제품 문의가 필요하신가요?</h2>
          <p className="text-xl mb-8 text-white/90">
            AK의 친환경 바이오 솔루션에 대해 더 자세히 알아보세요
          </p>
          <button className="bg-ak-gold text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-ak-gold/90 transition-colors duration-200 shadow-lg">
            문의하기
          </button>
        </div>
      </section>
    </div>
  );
}
