'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const pathMap = new Map([
  ['/', '메인페이지'],
  ['/account', '마이페이지'],
  ['/login', '로그인페이지'],
  ['/test', '테스트페이지'],
]);

function Header() {
  const currentUrl = usePathname();

  const currentPageName =
    pathMap.get(currentUrl) || '알 수 없는 페이지입니다.';

  const linkList = Array.from(pathMap.entries()).map(
    ([relUrl, pageName]) => {
      if (pageName === currentPageName) {
        return null;
      }

      return <Link href={relUrl}>{pageName}로</Link>;
    }
  );

  const spanWidth = `${(1 / pathMap.size) * 100}%`;
  const navGroupWidth = `${(1 - 1 / pathMap.size) * 100}%`;

  return (
    <header className='flex bg-slate-100 justify-between'>
      <span className={`w-[${spanWidth}]`}>
        현재 페이지: {currentPageName}
      </span>

      <nav
        className={`w-[${navGroupWidth}] 
        flex bg-slate-100 justify-between
        gap-5
        `}
      >
        {linkList}
      </nav>
    </header>
  );
}

export default Header;
