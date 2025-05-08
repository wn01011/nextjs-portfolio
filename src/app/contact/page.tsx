"use client";

import { useState, FormEvent } from "react";
import * as S from "./page.style";
import "./reflection-animation.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
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
        type: "success",
        message: "메시지가 성공적으로 전송되었습니다. 곧 연락드리겠습니다!",
      });

      // 폼 초기화
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // 3초 후 상태 메시지 제거
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <div className={S.container}>
      <h1 className={S.title}>연락처</h1>
      <p className={S.subtitle}>
        프로젝트 문의, 협업 제안, 또는 궁금한 점이 있으시면 언제든지
        연락해주세요.
      </p>
      <div className="flex justify-center mt-10 relative mb-40">
        <div className={S.card}>
          <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
            연락처 정보
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 justify-center">
              <span className="text-2xl">📧</span>
              <div className="text-left">
                <div className="font-medium text-gray-800 dark:text-white mb-1">
                  이메일
                </div>
                <a
                  href="mailto:wn010111@gmail.com"
                  className="text-primary-500 hover:underline"
                >
                  wn010111@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <span className="text-2xl">📱</span>
              <div className="text-left">
                <div className="font-medium text-gray-800 dark:text-white mb-1">
                  전화번호
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  010-8506-7867
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <span className="text-2xl">📍</span>
              <div className="text-left">
                <div className="font-medium text-gray-800 dark:text-white mb-1">
                  위치
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  서울특별시, 대한민국
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 반사 효과 */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-md pointer-events-none">
          <div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 w-full text-center border border-gray-100 dark:border-gray-800 reflection-effect"
            aria-hidden="true"
          >
            <h2 className="invisible">연락처 정보</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 justify-center">
                <span className="text-2xl">📧</span>
                <div className="text-left">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">
                    이메일
                  </div>
                  <a className="text-primary-500">wn010111@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center">
                <span className="text-2xl">📱</span>
                <div className="text-left">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">
                    전화번호
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    010-8506-7867
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center">
                <span className="text-2xl">📍</span>
                <div className="text-left">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">
                    위치
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    서울특별시, 대한민국
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
