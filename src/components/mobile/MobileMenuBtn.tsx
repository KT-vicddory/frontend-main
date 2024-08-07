'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type MobileMenuBtnType = {
  title: string;
  subtitle?: string[];
  pages: string[];
  handleMobileOpen: () => void;
};

export default function MobileMenuBtn({
  title,
  subtitle,
  pages,
  handleMobileOpen,
}: MobileMenuBtnType) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {subtitle ? (
        <li className="w-full bg-white text-[4vw] border-b border-[#eceef2] mb-4">
          <div className="flex justify-between border-b border-[#f4f4f4] px-[5.5vw] py-[3.5vw]">
            <h1 className="text-[#ea0114] font-['NanumSquareNeoExtraBold']">
              {title}
            </h1>
            <button className="w-[5vw] text-[#ea0114]" onClick={handleOpen}>
              {menuOpen ? (
                <Image
                  src="/svgs/mobileHeader/up.svg"
                  width={0}
                  height={0}
                  alt="up"
                  className="w-full"
                />
              ) : (
                <Image
                  src="/svgs/mobileHeader/down.svg"
                  width={0}
                  height={0}
                  alt="down"
                  className="w-full"
                />
              )}
            </button>
          </div>
          {menuOpen &&
            subtitle.map((sub: string, idx) => (
              <div key={sub} className="px-[5.5vw] py-[3.5vw]">
                <Link href={pages[idx]} onClick={handleMobileOpen}>
                  <h1>{sub}</h1>
                </Link>
              </div>
            ))}
        </li>
      ) : (
        <Link href={pages[0]} onClick={handleMobileOpen}>
          <li className="w-full bg-white text-[4vw] border-b border-[#eceef2] mb-4">
            <div className="flex justify-between border-b border-[#f4f4f4] px-[5.5vw] py-[3.5vw]">
              <h1 className="text-[#ea0114] font-['NanumSquareNeoExtraBold']">
                {title}
              </h1>
            </div>
          </li>
        </Link>
      )}
    </>
  );
}
