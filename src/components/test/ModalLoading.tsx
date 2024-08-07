'use client';

import { useEffect, useState } from 'react';

const images = [
  '/svgs/test/loading/0.svg',
  '/svgs/test/loading/1.svg',
  '/svgs/test/loading/2.svg',
  '/svgs/test/loading/3.svg',
  '/svgs/test/loading/4.svg',
  '/svgs/test/loading/5.svg',
  '/svgs/test/loading/6.svg',
  '/svgs/test/loading/7.svg',
];

const texts = ['야구 데이터 분석중', '성향 분석중', 'AI 퀴즈 생성중'];

export default function ModalLoading() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dots, setDots] = useState('');
  const [text, setText] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 300);

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 6 ? '' : prevDots + '.'));
    }, 400);

    return () => clearInterval(dotInterval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setText((prevIndex) => {
        setDots('');
        return (prevIndex + 1) % texts.length;
      });
    }, 5000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="relative flex justify-center flex-col items-center h-dvh w-[448px] m-auto bg-white">
      <div className="w-60 h-60">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`슬라이드 이미지 ${index}`}
            className={`absolute w-60 h-60 object-cover transition-opacity duration-0 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="mt-4 font-bold text-3xl text-[#444444]">
        {texts[text]}
        {dots}
      </div>
    </div>
  );
}
