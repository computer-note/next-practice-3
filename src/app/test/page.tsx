import UTIL_CLASS from '@/classnames/classnames';

function page() {
  const spanWidth = '30%';
  const navGroupWidth = '60%';

  return (
    <main className='flex justify-around'>
      <span className={`w-[${spanWidth}] bg-red-300`}>BLOCK ONE</span>
      <nav
        className={`w-[${navGroupWidth}] bg-green-300 flex justify-around`}
      >
        <span>BLOCK TWO</span>
        <span>BLOCK THREE</span>
      </nav>
      <div {...UTIL_CLASS['todo-card']}>테스트 스팬 </div>
    </main>
  );
}

export default page;
