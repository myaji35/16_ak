'use client'

import { useState, FormEvent } from 'react'
import { Metadata } from 'next'
import Section from '@/components/Section'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// News data from PPT
const newsArticles = [
  {
    id: 1,
    date: '2013.02',
    title: '환경부장관상 수상',
    summary: '친환경 바이오 기술의 우수성을 인정받아 환경부장관상을 수상하였습니다.',
    category: '수상',
  },
  {
    id: 2,
    date: '2020.12',
    title: '대한민국 환경공헌대상 수상',
    summary: '지속 가능한 환경 기술 개발 및 실천으로 대한민국 환경공헌대상을 수상하였습니다.',
    category: '수상',
  },
  {
    id: 3,
    date: '2010.06',
    title: 'SBS 아이디어Howmuch 출연',
    summary: '혁신적인 바이오 기술과 제품 아이디어를 소개하며 SBS 아이디어Howmuch 프로그램에 출연하였습니다.',
    category: '미디어',
  },
  {
    id: 4,
    date: '2013.09',
    title: '평택대학교 \'암을 이기는 항암밥상\' 특강',
    summary: '평택대학교에서 건강한 식생활과 항암 식단에 대한 전문 특강을 진행하였습니다.',
    category: '교육',
  },
  {
    id: 5,
    date: '2015.01',
    title: '한국경제조사연구원 보고서 발간',
    summary: '바이오 산업 동향 및 기술 혁신에 관한 한국경제조사연구원 보고서에 우수 기업으로 소개되었습니다.',
    category: '연구',
  },
  {
    id: 6,
    date: '2019.10',
    title: '한국당뇨협회+서울시약사회 교육 진행',
    summary: '당뇨 환자를 위한 건강 관리 교육을 한국당뇨협회 및 서울시약사회와 공동으로 진행하였습니다.',
    category: '교육',
  },
  {
    id: 7,
    date: '2020.08',
    title: '우한시자선총화 명예증서 수령',
    summary: '국제적인 자선 활동과 기술 지원 공헌을 인정받아 우한시자선총화로부터 명예증서를 수령하였습니다.',
    category: '수상',
  },
  {
    id: 8,
    date: '2021.05',
    title: '기술평가우수기업 인증',
    summary: '우수한 기술력과 혁신성을 인정받아 기술평가우수기업으로 인증되었습니다.',
    category: '인증',
  },
]

// Form data interface
interface FormData {
  name: string
  email: string
  phone: string
  inquiryType: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function MediaPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    inquiryType: '제품 문의',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.'
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.'
    }

    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '메시지는 최소 10자 이상 입력해주세요.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Form Data:', formData)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '제품 문의',
          message: '',
        })
        setIsSubmitted(false)
      }, 3000)
    }
  }

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <main className="min-h-screen">
      {/* Page Hero */}
      <Section background="green" className="py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ak-green mb-4">
            미디어 및 커뮤니티
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            소식과 문의
          </p>
        </div>
      </Section>

      {/* 언론보도 Section */}
      <Section id="news" background="white" className="py-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            언론보도
          </h2>
          <p className="text-lg text-gray-600">
            AK바이오의 주요 소식과 언론 보도 자료를 확인하세요.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-ak-green bg-ak-green/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {article.summary}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-ak-green border-ak-green hover:bg-ak-green hover:text-white">
                  자세히 보기
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* 문의하기 Section */}
      <Section id="contact" background="gray" className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              문의하기
            </h2>
            <p className="text-lg text-gray-600">
              궁금하신 사항이 있으시면 언제든지 문의해주세요.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        문의가 성공적으로 전송되었습니다!
                      </h3>
                      <p className="text-gray-600">
                        빠른 시일 내에 답변 드리겠습니다.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Input */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          이름 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ak-green ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="홍길동"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>

                      {/* Email Input */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          이메일 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ak-green ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="example@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone Input */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          전화번호
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ak-green"
                          placeholder="010-1234-5678"
                        />
                      </div>

                      {/* Inquiry Type Select */}
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                          문의 유형 <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ak-green"
                        >
                          <option value="제품 문의">제품 문의</option>
                          <option value="기술 문의">기술 문의</option>
                          <option value="구매 문의">구매 문의</option>
                          <option value="파트너십 문의">파트너십 문의</option>
                          <option value="기타">기타</option>
                        </select>
                      </div>

                      {/* Message Textarea */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          메시지 <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ak-green resize-none ${
                            errors.message ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="문의하실 내용을 입력해주세요. (최소 10자)"
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                        )}
                        <p className="mt-1 text-sm text-gray-500">
                          {formData.message.length} / 최소 10자
                        </p>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full bg-ak-green hover:bg-ak-green/90 text-white py-6 text-lg"
                      >
                        문의 보내기
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Box */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    연락처 정보
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Office Address */}
                  <div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-ak-green mt-1 flex-shrink-0"
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
                      <div>
                        <p className="font-medium text-gray-900 mb-1">오피스</p>
                        <p className="text-sm text-gray-600">
                          충남 홍성군 홍북읍 충남대로 21,<br />
                          충남테크노파크 304-2
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-ak-green flex-shrink-0"
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
                      <div>
                        <p className="font-medium text-gray-900 mb-1">전화</p>
                        <a href="tel:041-630-7163" className="text-sm text-gray-600 hover:text-ak-green">
                          041-630-7163
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-ak-green flex-shrink-0"
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
                      <div>
                        <p className="font-medium text-gray-900 mb-1">이메일</p>
                        <a href="mailto:contact@ak-bio.com" className="text-sm text-gray-600 hover:text-ak-green">
                          contact@ak-bio.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-ak-green mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900 mb-1">운영 시간</p>
                        <p className="text-sm text-gray-600">
                          월-금 9:00-18:00<br />
                          <span className="text-xs text-gray-500">(주말 및 공휴일 제외)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
