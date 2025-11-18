import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default function Community() {
  return (
    <Layout>
      <main className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          {/* PageHeading Start */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#131b0e] text-4xl font-black leading-tight tracking-[-0.033em]">커뮤니티 게시판</p>
              <p className="text-[#6d974e] text-base font-normal leading-normal">농산물 도소매상들을 위한 정보 공유 및 소통 공간입니다.</p>
            </div>
          </div>
          {/* PageHeading End */}
          
          {/* Chips Start */}
          <div className="flex gap-3 p-3 overflow-x-hidden border-b border-solid border-b-[#ecf3e7]">
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#64cf17] pl-4 pr-4">
              <p className="text-[#131b0e] text-sm font-bold leading-normal">전체</p>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#ecf3e7] pl-4 pr-4 hover:bg-[#d9e7d0]">
              <p className="text-[#131b0e] text-sm font-medium leading-normal">도매 정보</p>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#ecf3e7] pl-4 pr-4 hover:bg-[#d9e7d0]">
              <p className="text-[#131b0e] text-sm font-medium leading-normal">소매 노하우</p>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#ecf3e7] pl-4 pr-4 hover:bg-[#d9e7d0]">
              <p className="text-[#131b0e] text-sm font-medium leading-normal">구인/구직</p>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#ecf3e7] pl-4 pr-4 hover:bg-[#d9e7d0]">
              <p className="text-[#131b0e] text-sm font-medium leading-normal">자유게시판</p>
            </button>
          </div>
          {/* Chips End */}
          
          {/* ToolBar Start */}
          <div className="flex justify-between gap-2 px-4 py-3">
            <div className="flex gap-2">
              <button className="p-2 text-[#131b0e] rounded-lg hover:bg-[#ecf3e7]">
                <span className="material-symbols-outlined" style={{fontSize: '24px'}}>sort</span>
              </button>
            </div>
            <Link to="/community/write" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#64cf17] text-[#131b0e] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4 hover:bg-opacity-80">
              <span className="material-symbols-outlined" style={{fontSize: '20px'}}>edit</span>
              <span className="truncate">글쓰기</span>
            </Link>
          </div>
          {/* ToolBar End */}
          
          {/* Table Start */}
          <div className="px-4 py-3 @container">
            <div className="flex overflow-hidden rounded-lg border border-[#d9e7d0] bg-[#fafcf8]">
              <table className="flex-1">
                <thead>
                  <tr className="bg-[#fafcf8]">
                    <th className="px-4 py-3 text-left text-[#131b0e] w-[45%] text-sm font-medium leading-normal">제목</th>
                    <th className="px-4 py-3 text-left text-[#131b0e] w-[15%] text-sm font-medium leading-normal">작성자</th>
                    <th className="px-4 py-3 text-left text-[#131b0e] w-[15%] text-sm font-medium leading-normal">작성일</th>
                    <th className="px-4 py-3 text-left text-[#131b0e] w-[10%] text-sm font-medium leading-normal">조회수</th>
                    <th className="px-4 py-3 text-left text-[#131b0e] w-[15%] text-sm font-medium leading-normal">댓글 수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-t-[#d9e7d0] hover:bg-[#ecf3e7] cursor-pointer">
                    <td className="h-[72px] px-4 py-2 w-[45%] text-[#131b0e] text-sm font-normal leading-normal">
                      <Link to="/community/1" className="block">이번 주 배추 도매가 동향 공유합니다</Link>
                    </td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">김도매</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">2023-10-27</td>
                    <td className="h-[72px] px-4 py-2 w-[10%] text-[#6d974e] text-sm font-normal leading-normal">152</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">8</td>
                  </tr>
                  <tr className="border-t border-t-[#d9e7d0] hover:bg-[#ecf3e7] cursor-pointer">
                    <td className="h-[72px] px-4 py-2 w-[45%] text-[#131b0e] text-sm font-normal leading-normal">효과적인 재고 관리 노하우 있으신가요?</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">박소매</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">2023-10-27</td>
                    <td className="h-[72px] px-4 py-2 w-[10%] text-[#6d974e] text-sm font-normal leading-normal">280</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">15</td>
                  </tr>
                  <tr className="border-t border-t-[#d9e7d0] hover:bg-[#ecf3e7] cursor-pointer">
                    <td className="h-[72px] px-4 py-2 w-[45%] text-[#131b0e] text-sm font-normal leading-normal">OO지역 농산물 운송 파트너 구합니다.</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">최운송</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">2023-10-26</td>
                    <td className="h-[72px] px-4 py-2 w-[10%] text-[#6d974e] text-sm font-normal leading-normal">98</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">3</td>
                  </tr>
                  <tr className="border-t border-t-[#d9e7d0] hover:bg-[#ecf3e7] cursor-pointer">
                    <td className="h-[72px] px-4 py-2 w-[45%] text-[#131b0e] text-sm font-normal leading-normal">신선도 유지를 위한 포장 팁</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">이유통</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">2023-10-26</td>
                    <td className="h-[72px] px-4 py-2 w-[10%] text-[#6d974e] text-sm font-normal leading-normal">450</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">22</td>
                  </tr>
                  <tr className="border-t border-t-[#d9e7d0] hover:bg-[#ecf3e7] cursor-pointer">
                    <td className="h-[72px] px-4 py-2 w-[45%] text-[#131b0e] text-sm font-normal leading-normal">가을 무 가격 전망에 대한 질문</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">정농부</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">2023-10-25</td>
                    <td className="h-[72px] px-4 py-2 w-[10%] text-[#6d974e] text-sm font-normal leading-normal">120</td>
                    <td className="h-[72px] px-4 py-2 w-[15%] text-[#6d974e] text-sm font-normal leading-normal">5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Table End */}
          
          {/* Pagination Start */}
          <div className="flex items-center justify-center gap-4 p-4 mt-4">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-[#131b0e] hover:bg-[#ecf3e7]">
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#64cf17] text-[#131b0e] text-sm font-bold">1</button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-[#131b0e] hover:bg-[#ecf3e7] text-sm">2</button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-[#131b0e] hover:bg-[#ecf3e7] text-sm">3</button>
            <span className="text-[#6d974e]">...</span>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-[#131b0e] hover:bg-[#ecf3e7] text-sm">10</button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-[#131b0e] hover:bg-[#ecf3e7]">
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>
          {/* Pagination End */}
        </div>
      </main>
    </Layout>
  );
}



