'use client';

import { useState, FormEvent } from 'react';
import * as S from './page.style';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제 환경에서는 여기에서 폼 데이터를 서버로 전송합니다.
    // 예: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    
    // 폼 제출 시뮬레이션
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'success',
        message: '메시지가 성공적으로 전송되었습니다. 곧 연락드리겠습니다!',
      });
      
      // 폼 초기화
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // 3초 후 상태 메시지 제거
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className={S.container}>
      <h1 className={S.title}>연락처</h1>
      <p className={S.subtitle}>
        프로젝트 문의, 협업 제안, 또는 궁금한 점이 있으시면 언제든지 연락해주세요.
      </p>
      
      <div className={S.contactGrid}>
        {/* 연락처 폼 */}
        <div className={S.formContainer}>
          <h2 className={S.formTitle}>메시지 보내기</h2>
          
          <form onSubmit={handleSubmit}>
            <div className={S.formGroup}>
              <label htmlFor="name" className={S.label}>
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={S.input}
                required
              />
            </div>
            
            <div className={S.formGroup}>
              <label htmlFor="email" className={S.label}>
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={S.input}
                required
              />
            </div>
            
            <div className={S.formGroup}>
              <label htmlFor="subject" className={S.label}>
                제목
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={S.input}
                required
              />
            </div>
            
            <div className={S.formGroup}>
              <label htmlFor="message" className={S.label}>
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={S.textarea}
                required
              />
            </div>
            
            {/* 제출 상태 메시지 */}
            {submitStatus.type && (
              <div
                className={`mb-4 p-3 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            
            <button
              type="submit"
              className={S.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? '전송 중...' : '메시지 보내기'}
            </button>
          </form>
        </div>
        
        {/* 연락처 정보 */}
        <div className={S.infoContainer}>
          <h2 className={S.infoTitle}>연락처 정보</h2>
          
          <div className={S.infoItem}>
            <span className={S.infoIcon}>📧</span>
            <div>
              <h3 className="font-medium mb-1 text-gray-800 dark:text-white">이메일</h3>
              <a href="mailto:example@mail.com" className={S.infoLink}>
                example@mail.com
              </a>
            </div>
          </div>
          
          <div className={S.infoItem}>
            <span className={S.infoIcon}>📱</span>
            <div>
              <h3 className="font-medium mb-1 text-gray-800 dark:text-white">전화번호</h3>
              <p className={S.infoText}>010-1234-5678</p>
            </div>
          </div>
          
          <div className={S.infoItem}>
            <span className={S.infoIcon}>🌐</span>
            <div>
              <h3 className="font-medium mb-1 text-gray-800 dark:text-white">웹사이트</h3>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className={S.infoLink}
              >
                example.com
              </a>
            </div>
          </div>
          
          <div className={S.infoItem}>
            <span className={S.infoIcon}>📍</span>
            <div>
              <h3 className="font-medium mb-1 text-gray-800 dark:text-white">위치</h3>
              <p className={S.infoText}>서울특별시, 대한민국</p>
            </div>
          </div>
          
          {/* 소셜 링크 */}
          <div>
            <h3 className="font-medium mb-3 text-gray-800 dark:text-white">소셜 미디어</h3>
            <div className={S.socialLinks}>
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className={S.socialLink}
                aria-label="GitHub"
              >
                G
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className={S.socialLink}
                aria-label="LinkedIn"
              >
                L
              </a>
              <a
                href="https://twitter.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className={S.socialLink}
                aria-label="Twitter"
              >
                T
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}