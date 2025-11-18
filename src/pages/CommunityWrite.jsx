import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CommunityWrite() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '도매 정보',
    content: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: API 호출로 글 등록
    console.log('글 등록:', formData);
    navigate('/community');
  };

  return (
    <Layout>
      <main className="flex-1 py-10">
        <div className="mx-auto w-full max-w-[960px] px-6">
          <h1 className="text-3xl font-extrabold text-[#131b0e] mb-6">글 쓰기</h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#131b0e] mb-1">제목</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-[#d9e7d0] bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#64cf17]"
                  placeholder="제목을 입력하세요"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#131b0e] mb-1">카테고리</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-[#d9e7d0] bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#64cf17]"
                >
                  <option>도매 정보</option>
                  <option>소매 노하우</option>
                  <option>구인/구직</option>
                  <option>자유게시판</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#131b0e] mb-1">내용</label>
              <textarea
                rows="12"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-[#d9e7d0] bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#64cf17]"
                placeholder="내용을 입력하세요"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#131b0e] mb-1">첨부파일</label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="block w-full text-sm text-[#6d974e] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#ecf3e7] file:text-[#131b0e] hover:file:bg-[#d9e7d0] cursor-pointer"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                className="px-5 h-10 rounded-lg bg-[#64cf17] text-[#131b0e] font-bold hover:bg-opacity-90"
              >
                등록
              </button>
              <Link
                to="/community"
                className="px-5 h-10 inline-flex items-center rounded-lg bg-[#ecf3e7] text-[#131b0e] hover:bg-[#d9e7d0]"
              >
                취소
              </Link>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}

