import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  // 테스트 계정 (실제 DB 연결 전까지 사용)
  const mockAccounts = [
    { username: 'admin', password: '123456', name: '관리자' },
    { username: 'test', password: 'password', name: '테스트 사용자' },
    { username: 'sanghyuk01', password: 'test1234', name: '김상혁' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 입력값 검증
    if (!formData.username || !formData.password) {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    // mock 계정에서 일치하는 계정 찾기
    const user = mockAccounts.find(
      account => account.username === formData.username && account.password === formData.password
    );

    if (user) {
      // 로그인 성공
      console.log('로그인 성공:', user);
      // 로그인 상태 저장
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');
      
      // 헤더 업데이트를 위한 커스텀 이벤트 발생
      window.dispatchEvent(new Event('loginStatusChanged'));
      
      // 홈 페이지로 이동
      navigate('/');
    } else {
      // 로그인 실패
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="flex flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full">
          {/* Left Branding Section */}
          <div
            className="relative hidden md:flex flex-col justify-between p-12 bg-cover bg-center"
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMfkB3a2ifCryhSREMUjWlbHIveaIljlCc6kdtsfehQbMjLll3VNwa1ut4ux8hxP3ChAsIkCjw52-8CHL24BdOQzcUpmejniwxAKPk4jDS2M-OnA95bzDT09kOonfAhvmRdmJG53B0wBHClwFEQDepOJ7PlyXuOM4AjXBbJvQw-i1G00HcWvUP2dERIu_0vOrlt1RbBAogd1xIzRlhc5bqUW4nAzjjzN06RUZjfxYHGFVKvxnFjHHLrtW5IbbjGwtghD3tctzXAlc")'}}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div className="relative z-10 flex flex-col gap-4 text-white">
              <Link to="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-4xl text-primary">analytics</span>
                <h1 className="text-2xl font-bold">AgriForecaster</h1>
              </Link>
            </div>
            <div className="relative z-10">
              <h2 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                데이터로 농산물의<br />미래 가치를 예측하세요
              </h2>
              <p className="text-white/80 text-lg mt-4">정확한 가격 예측으로 성공적인 농업 비즈니스를 계획하세요.</p>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="flex items-center justify-center w-full bg-off-white dark:bg-background-dark p-6 sm:p-8 lg:p-12">
            <div className="w-full max-w-md">
              {/* Heading */}
              <div className="flex min-w-72 flex-col gap-3 mb-8">
                <p className="text-charcoal-gray dark:text-background-light text-4xl font-black leading-tight tracking-[-0.033em]">
                  로그인
                </p>
                <p className="text-muted-blue dark:text-gray-400 text-base font-normal leading-normal">
                  플랫폼에 오신 것을 환영합니다. 계정에 로그인하세요.
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* ID */}
                <div className="flex flex-col">
                  <label className="flex flex-col w-full">
                    <p className="text-charcoal-gray dark:text-background-light text-base font-medium leading-normal pb-2">
                      아이디
                    </p>
                    <input
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="form-input flex w-full rounded-lg text-charcoal-gray dark:text-background-light focus:outline-0 focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base transition-colors"
                      placeholder="아이디를 입력하세요"
                      type="text"
                      required
                    />
                  </label>
                </div>

                {/* Password */}
                <div className="flex flex-col">
                  <label className="flex flex-col w-full">
                    <p className="text-charcoal-gray dark:text-background-light text-base font-medium leading-normal pb-2">
                      비밀번호
                    </p>
                    <div className="flex w-full items-stretch">
                      <input
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input flex w-full rounded-l-lg text-charcoal-gray dark:text-background-light focus:outline-0 focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] pr-2 text-base transition-colors border-r-0"
                        placeholder="비밀번호를 입력하세요"
                        type={showPassword ? 'text' : 'password'}
                        required
                      />
                      <div
                        className="text-gray-400 dark:text-gray-500 flex border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 items-center justify-center pr-[15px] rounded-r-lg border-l-0 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Error message */}
                {error && (
                  <div className="text-red-600 text-sm font-medium text-center bg-red-50 dark:bg-red-900/20 py-2 px-4 rounded-lg border border-red-200 dark:border-red-800">
                    {error}
                  </div>
                )}

                {/* Login Button */}
                <button
                  type="submit"
                  className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-green-brand hover:bg-green-brand-light text-white text-base font-bold transition-colors"
                >
                  로그인
                </button>
              </form>

              {/* 테스트 계정 안내 (개발용) */}
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-xs text-blue-800 dark:text-blue-300 font-semibold mb-2">테스트 계정 (개발용):</p>
                <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-1">
                  <li>• 아이디: <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">admin</code> / 비밀번호: <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">123456</code></li>
                  <li>• 아이디: <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">test</code> / 비밀번호: <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">password</code></li>
                  <li>• 아이디: <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">sanghyuk01</code> / 비밀번호: <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">test1234</code></li>
                </ul>
              </div>

              {/* Links */}
              <div className="mt-8 text-center text-sm font-medium space-y-2">
                <p className="text-charcoal-gray dark:text-gray-400">
                  아직 회원이 아니신가요?
                  <Link className="font-bold text-muted-blue hover:underline ml-1" to="/signup">회원가입</Link>
                </p>
                <div className="flex justify-center gap-4 mt-2">
                  <Link className="font-bold text-muted-blue hover:underline" to="/find-id">아이디 찾기</Link>
                  <span className="text-gray-400 dark:text-gray-500">|</span>
                  <Link className="font-bold text-muted-blue hover:underline" to="/reset-password">비밀번호 재설정</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



