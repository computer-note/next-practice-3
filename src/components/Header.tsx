'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthContext } from '@/providers/AuthProvider';

const pathMap = new Map([
  ['/', '메인페이지'],
  ['/account', '마이페이지'],
  ['/login', '로그인페이지'],
  ['/test', '테스트페이지'],
]);

function Header() {
  const curPath = usePathname();
  const { isLogin, user } = useAuthContext();

  const curPageName =
    pathMap.get(curPath) || '알 수 없는 페이지입니다.';

  const filteredPathList = Array.from(pathMap.entries()).filter(
    ([path]) => path !== curPath
  );

  const spanWidth = `${(1 / pathMap.size) * 100}%`;
  const navGroupWidth = `${(1 - 1 / pathMap.size) * 100}%`;

  return (
    <header className='flex bg-slate-200 justify-between'>
      <div className='flex flex-col'>
        <span>로그인 상태: {`${isLogin}`}</span>
        <span>로그인한 유저: {user && user.username}</span>
      </div>

      <span className={`w-[${spanWidth}]`}>
        현재 페이지: {curPageName}
      </span>

      <nav
        className={`w-[${navGroupWidth}] 
        flex justify-between gap-5`}
      >
        {filteredPathList.map(([path, pageName]) => (
          <Link key={path} href={path}>
            {pageName}로
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
