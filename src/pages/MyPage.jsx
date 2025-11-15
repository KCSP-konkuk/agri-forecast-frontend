import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MyPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 로그인 상태 확인
    const userData = localStorage.getItem('user');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn || !userData) {
      // 로그인 안 되어 있으면 로그인 페이지로 이동
      navigate('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    // 로그아웃 확인
    if (window.confirm('로그아웃 하시겠습니까?')) {
      // localStorage에서 로그인 정보 삭제
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
      
      // 헤더 업데이트를 위한 커스텀 이벤트 발생
      window.dispatchEvent(new Event('loginStatusChanged'));
      
      // 홈 페이지로 이동
      navigate('/');
    }
  };

  if (!user) {
    return null; // 로그인 체크 중이면 아무것도 렌더링하지 않음
  }

  return (
    <Layout>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5 sm:py-10 px-4">
            <div className="layout-content-container flex w-full max-w-6xl flex-1 flex-col lg:flex-row gap-8">
              {/* Side Navigation */}
              <aside className="flex-shrink-0 w-full lg:w-64">
                <div className="flex flex-col gap-6 bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark h-full">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" alt="User profile picture" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABR5lA_xfTMGA4GQnJsPJtRDbxvblgln9YnvalBT4vXu9cySy0-c_4fH1ht-gkeZxLxz9zf-0lRKOhAU1XcNR7mGPkUwwvAHmG2jVaYJCVFeygXXI32BHHUe7261gH0ZfKqxWeMWo8wYGdDhlCyUd6LlxkFa-xt20OnHy_ZD4PZWutZi5TTlfrpvxEvykyNGK0JcF5pe8555C1l4ulzQ58Ikopdp6LxajE0YUaSR8hQXLCg26L-Ja4OTnSwWqwNJpMNXezP9tD12U")'}}></div>
                      <div className="flex flex-col">
                        <h1 className="text-lg font-bold">{user.name || '사용자'}</h1>
                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{user.username || 'user@example.com'}</p>
                      </div>
                    </div>
                    <nav className="flex flex-col gap-2 mt-4">
                      <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-primary/10 text-primary" href="#">
                        <span className="material-symbols-outlined text-xl">person</span>
                        <p className="text-base font-semibold">계정 정보</p>
                      </a>
                      <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
                        <span className="material-symbols-outlined text-xl">notifications</span>
                        <p className="text-base font-medium">알림 설정</p>
                      </a>
                      <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
                        <span className="material-symbols-outlined text-xl">star</span>
                        <p className="text-base font-medium">선호 농산물</p>
                      </a>
                    </nav>
                  </div>
                  <div className="flex flex-col gap-4 mt-auto">
                    <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
                      <span className="material-symbols-outlined text-xl">help</span>
                      <p className="text-base font-medium">고객 지원</p>
                    </a>
                    <button 
                      onClick={handleLogout}
                      className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-red-500/10 text-red-500 text-base font-bold transition-colors duration-200 hover:bg-red-500/20"
                    >
                      <span className="truncate">로그아웃</span>
                    </button>
                  </div>
                </div>
              </aside>
              
              {/* Main Content */}
              <main className="flex-1 flex flex-col gap-8">
                <div className="bg-surface-light dark:bg-surface-dark p-6 sm:p-8 rounded-lg border border-border-light dark:border-border-dark">
                  {/* Page Heading */}
                  <div className="flex flex-wrap justify-between gap-4 pb-8 border-b border-border-light dark:border-border-dark">
                    <div className="flex min-w-72 flex-col gap-2">
                      <p className="text-3xl font-black tracking-tight">계정 정보</p>
                      <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">개인 정보를 관리하고 비밀번호를 변경할 수 있습니다.</p>
                    </div>
                  </div>
                  
                  {/* Content Sections */}
                  <div className="pt-8 flex flex-col gap-8">
                    {/* Profile Information Section */}
                    <section className="flex flex-col gap-6">
                      <h3 className="text-xl font-bold">프로필 정보</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="flex flex-col">
                          <p className="text-base font-medium pb-2">이름</p>
                          <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-14 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark p-4 text-base" defaultValue="김농부"/>
                        </label>
                        <label className="flex flex-col">
                          <p className="text-base font-medium pb-2">이메일</p>
                          <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-14 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark p-4 text-base" disabled={true} defaultValue="kim.farmer@example.com"/>
                        </label>
                        <label className="flex flex-col">
                          <p className="text-base font-medium pb-2">연락처</p>
                          <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-14 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark p-4 text-base" defaultValue="010-1234-5678"/>
                        </label>
                      </div>
                    </section>
                    
                    {/* Password Change Section */}
                    <section className="flex flex-col gap-6 border-t border-border-light dark:border-border-dark pt-8">
                      <h3 className="text-xl font-bold">비밀번호 변경</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="flex flex-col">
                          <p className="text-base font-medium pb-2">현재 비밀번호</p>
                          <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-14 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark p-4 text-base" placeholder="••••••••" type="password"/>
                        </label>
                        <label className="flex flex-col">
                          <p className="text-base font-medium pb-2">새 비밀번호</p>
                          <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-14 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark p-4 text-base" placeholder="새 비밀번호 입력" type="password"/>
                        </label>
                      </div>
                    </section>
                    
                    {/* Account Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-light dark:border-border-dark pt-8">
                      <button className="text-red-500 font-semibold hover:underline">계정 탈퇴</button>
                      <div className="flex gap-4">
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark text-base font-bold transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600">
                          <span className="truncate">취소</span>
                        </button>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold transition-colors duration-200 hover:bg-primary/90">
                          <span className="truncate">변경사항 저장</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}



