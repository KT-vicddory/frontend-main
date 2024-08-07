'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './mobile/MobileMenu';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const handleMobileOpen = () => {
    isMobileOpen ? hideMenu() : showMenu();
  };

  const showMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    setTimeout(() => {
      setIsAnimated(!isAnimated);
    }, 0);
  };

  const hideMenu = () => {
    setIsAnimated(!isAnimated);
    setTimeout(() => {
      setIsMobileOpen(!isMobileOpen);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 930 ? setIsScrolled(true) : setIsScrolled(false);
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  return (
    <>
      <div
        className={`w-full fixed z-20 ${isHome ? (isScrolled ? 'bg-black' : 'bg-transparent') : 'bg-black'} group`}
      >
        <div className="flex justify-between h-20 max-lg:h-[13vw] w-3/4 mx-auto  text-white items-center">
          <button
            className="hidden max-lg:flex items-center h-full"
            onClick={handleMobileOpen}
          >
            <Image
              src="/svgs/mobileHeader/hamburger.svg"
              width={0}
              height={0}
              alt="menu"
              className="w-auto h-[50%]"
            />
          </button>
          <Link href="/" className="flex h-full items-center -mt-4">
            <Image
              src="/svgs/watermarkWhite.svg"
              alt="KT watermark"
              width={0}
              height={0}
              className="w-[85px] max-lg:w-auto max-lg:h-[50%]"
            />
          </Link>
          <Link href="/" className="hidden max-lg:flex items-center h-full">
            <Image
              src="/svgs/mobileHeader/ticket.svg"
              width={0}
              height={0}
              alt="menu"
              className="w-auto h-[50%]"
            />
          </Link>

          <div className="w-4/6 flex justify-between max-lg:hidden items-center">
            <Link href="/" className="w-20 flex justify-center">
              kt wiz
            </Link>
            <Link href="/" className="w-20 flex justify-center">
              wiz park
            </Link>
            <Link href="/wiznews" className="w-20 flex justify-center">
              News
            </Link>
            <Link href="/player" className="w-20 flex justify-center">
              Player
            </Link>
            <Link href="/ranking" className="w-20 flex justify-center">
              Ranking
            </Link>
            <Link
              href="https://www.ktwizstore.co.kr"
              className="w-20 flex justify-center"
            >
              Shop
            </Link>
            <Link
              href="https://www.ticketlink.co.kr/home"
              className="w-20 flex justify-center text-red-100 font-extrabold"
            >
              티켓 구매
            </Link>
          </div>
          <Link
            href="http://kt-sports.co.kr/sports/site/main.do"
            className="max-lg:hidden"
          >
            <div className="w-[102px] h-[46px] grid place-items-center border border-slate-600 rounded-md">
              <Image
                src="/images/ktsports.png"
                alt="KT sports"
                width={66}
                height={18}
              />
            </div>
          </Link>
        </div>
        <div className="hidden lg:group-hover:flex">
          <div className="w-3/4 mx-auto text-white flex justify-between items-center">
            <div className="w-[85px] h-[80px]"></div>
            <div className="flex min-h-20 pb-6 w-4/6 mx-auto justify-between">
              <div className="flex flex-col w-20 items-center hover:border-t-2 hover:border-t-red-500 whitespace-nowrap gap-2">
                <Link
                  href="/"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  kt wiz는?
                </Link>
                <Link
                  href="/"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  구단 BI
                </Link>
                <Link
                  href="/"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  회원 정책
                </Link>
                <Link
                  href="/"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  스폰서
                </Link>
                <Link
                  href="/"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  윌페이퍼
                </Link>
              </div>
              <div className="flex flex-col w-20 items-center hover:border-t-2 hover:border-t-red-500 whitespace-nowrap gap-2">
                <Link
                  href="/"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  wiz park
                </Link>
                <Link
                  href="/"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  주차 예약
                </Link>
                <Link
                  href="/"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  찾아오기
                </Link>
                <Link
                  href="/"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  익산 야구장
                </Link>
              </div>
              <div className="w-20"></div>
              <div className="flex flex-col w-20 items-center hover:border-t-2 hover:border-t-red-500 whitespace-nowrap gap-2">
                <Link
                  href="/player/pitcher"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  투수
                </Link>
                <Link
                  href="/player/batter"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  타자
                </Link>
              </div>
              <div className="flex flex-col w-20 items-center hover:border-t-2 hover:border-t-red-500 whitespace-nowrap gap-2">
                <Link
                  href="/ranking/ai"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  AI 예측
                </Link>
                <Link
                  href="/ranking/daily"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  일자별
                </Link>
                <Link
                  href="/ranking/year"
                  className="hover:text-red-90 hover:font-extrabold"
                >
                  년도별
                </Link>
              </div>
              <div className="w-20"></div>
              <div className="w-20"></div>
            </div>
            <div className="w-[102px] h-[46px]"></div>
          </div>
        </div>
      </div>
      {isMobileOpen && (
        <MobileMenu
          handleMobileOpen={handleMobileOpen}
          isMobileOpen={isMobileOpen}
          isAnimated={isAnimated}
        />
      )}
    </>
  );
}
