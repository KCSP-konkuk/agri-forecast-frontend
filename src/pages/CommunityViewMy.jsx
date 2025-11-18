import Layout from '../components/Layout';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CommunityViewMy() {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: '이번 주 배추 도매가 동향 공유합니다',
    author: '나',
    date: '2023-10-27',
    views: 152,
    content: '이번 주 배추 도매가는 전주 대비 3~5% 등락을 보였습니다. 주요 원인은 물량 증가와 기온 하락으로 인한 수요 변화입니다.',
    details: [
      '가락시장 평균 거래가: 7,800원/10kg',
      '중도매인 매입 원가 상승폭 제한',
      '주중 대비 주말 수요 회복'
    ],
    comments: [
      { author: '박소매', date: '2023-10-27', content: '재고 비축 팁 공유 감사합니다!' },
      { author: '정농부', date: '2023-10-27', content: '지역별 편차도 있나요?' }
    ]
  });
  const [comment, setComment] = useState('');

  useEffect(() => {
    // TODO: API 호출로 글 데이터 가져오기
    // fetch(`/api/community/${id}`)
    //   .then(res => res.json())
    //   .then(data => setPost(data));
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    // TODO: API 호출로 댓글 등록
    console.log('댓글 등록:', comment);
    setComment('');
    // 댓글 목록 새로고침
  };

  return (
    <Layout>
      <main className="flex-1 py-10">
        <div className="mx-auto w-full max-w-[960px] px-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-extrabold text-[#131b0e]">내 글 보기</h1>
            <Link
              to={`/community/${id}/edit`}
              className="px-5 h-10 inline-flex items-center justify-center rounded-lg bg-[#64cf17] text-[#131b0e] font-bold hover:bg-opacity-90"
            >
              글 수정
            </Link>
          </div>

          <div className="bg-white/40 border border-[#d9e7d0] rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#131b0e] mb-3">{post.title}</h2>
            <p className="text-sm text-[#6d974e] mb-4">
              작성자: {post.author} | 작성일: {post.date} | 조회수: {post.views}
            </p>
            <p className="text-[#131b0e] leading-relaxed">{post.content}</p>
            {post.details && post.details.length > 0 && (
              <ul className="list-disc pl-6 mt-3 text-[#131b0e]">
                {post.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
          </div>

          <section className="mt-8">
            <h3 className="text-lg font-bold text-[#131b0e] mb-3">댓글 {post.comments.length}</h3>
            <div className="space-y-3">
              {post.comments.map((comment, index) => (
                <div key={index} className="p-4 border border-[#d9e7d0] rounded-lg bg-[#fafcf8]">
                  <p className="text-sm text-[#131b0e]">
                    <span className="font-semibold">{comment.author}</span> · {comment.date}
                    <br />
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
            <form className="mt-4 flex gap-2" onSubmit={handleCommentSubmit}>
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-[#d9e7d0] bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#64cf17]"
                placeholder="댓글을 입력하세요"
              />
              <button
                type="submit"
                className="px-4 h-10 rounded-lg bg-[#64cf17] text-[#131b0e] font-bold hover:bg-opacity-90"
              >
                등록
              </button>
            </form>
          </section>
        </div>
      </main>
    </Layout>
  );
}

