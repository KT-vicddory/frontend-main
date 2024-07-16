'use client';

import Image from 'next/image';
import MobileMenuBtn from './MobileMenuBtn';

type handleMobileType = {
  handleMobileOpen: () => void;
  isMobileOpen: boolean;
  isAnimated: boolean;
};

export default function MobileMenu({
  handleMobileOpen,
  isMobileOpen,
  isAnimated,
}: handleMobileType) {
  return (
    <>
      <div
        className={`absolute z-20 ${isMobileOpen ? 'max-lg:flex' : 'hidden'} justify-between items-start w-full min-h-screen bg-[rgba(0,0,0,0.7)]`}
      >
        <ul
          className={`w-[80%] bg-[#f4f4f4] absolute top-0 left-0 transition-transform duration-1000 ${isAnimated ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <MobileMenuBtn
            title="kt wiz"
            subtitle={['kt wiz는?', '구단 BI', '회원정책']}
          />
          <MobileMenuBtn
            title="wiz park"
            subtitle={[
              '수원 kt wiz park',
              '주차 예약',
              '찾아오기',
              '익산야구장',
            ]}
          />
          <MobileMenuBtn title="News" />
          <MobileMenuBtn
            title="Player"
            subtitle={['코칭 스텝', '투수', '타자']}
          />
          <MobileMenuBtn
            title="Ranking"
            subtitle={['AI 예측', '연도별', '일자별']}
          />
          <MobileMenuBtn title="성향 테스트" />
          <MobileMenuBtn title="Shop" />
          <MobileMenuBtn title="티켓 구매" />
        </ul>
        <button
          onClick={handleMobileOpen}
          className={`absolute top-0 right-0 transition-opacity duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src="/svgs/header/close.svg"
            width={0}
            height={0}
            alt="close button"
            className="w-[8.5vw] mr-[2vw] mt-[2vw]"
          />
        </button>
      </div>
    </>
  );
}