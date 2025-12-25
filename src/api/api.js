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
};

