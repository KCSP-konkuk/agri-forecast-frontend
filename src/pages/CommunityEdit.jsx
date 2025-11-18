import Layout from '../components/Layout';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CommunityEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '이번 주 배추 도매가 동향 공유합니다',
    category: '도매 정보',
    content: '전주 대비 3~5% 변동. 물량 증가와 기온 하락에 따른 수요 변화가 주요 원인입니다...',
    file: null,
    existingFile: '2023-10-27-배추-도매가.xlsx'
  });

  useEffect(() => {
    // TODO: API 호출로 기존 글 데이터 가져오기
    // fetch(`/api/community/${id}`)
    //   .then(res => res.json())
    //   .then(data => setFormData(data));
  }, [id]);

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
    // TODO: API 호출로 글 수정
    console.log('글 수정:', formData);
    navigate(`/community/${id}`);
  };

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      // TODO: API 호출로 글 삭제
      console.log('글 삭제:', id);
      navigate('/community');
    }
  };

  return (
    <Layout>
      <main className="flex-1 py-10">
        <div className="mx-auto w-full max-w-[960px] px-6">
          <h1 className="text-3xl font-extrabold text-[#131b0e] mb-6">글 수정</h1>
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
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#131b0e] mb-1">첨부파일 변경</label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="block w-full text-sm text-[#6d974e] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#ecf3e7] file:text-[#131b0e] hover:file:bg-[#d9e7d0] cursor-pointer"
              />
              {formData.existingFile && (
                <p className="mt-1 text-xs text-[#6d974e]">기존 파일: {formData.existingFile}</p>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                className="px-5 h-10 rounded-lg bg-[#64cf17] text-[#131b0e] font-bold hover:bg-opacity-90"
              >
                수정 완료
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="px-5 h-10 rounded-lg bg-[#f87171] text-white font-bold hover:bg-[#ef4444]"
              >
                글 삭제
              </button>
              <Link
                to={`/community/${id || ''}`}
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

