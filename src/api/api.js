// API 기본 설정
const API_BASE_URL = 'http://localhost:8080/api';

// API 호출 함수
export const api = {
  // 로그인
  login: async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || '로그인에 실패했습니다.');
    }

    return await response.json();
  },

  // 회원가입
  signup: async (username, password, fullname, email) => {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        fullname,
        email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || '회원가입에 실패했습니다.');
    }

    return data;
  },
};


