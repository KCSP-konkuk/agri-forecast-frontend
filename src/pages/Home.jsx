import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <main className="p-10 space-y-8">
        <div className="flex flex-wrap justify-between gap-3">
          <p className="text-text-main dark:text-gray-100 text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
            메인 대시보드
          </p>
        </div>

        <section>
          <h2 className="text-text-main dark:text-gray-100 text-lg font-bold mb-4">오늘의 주요 농산물 가격</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-primary-light dark:bg-primary/10 border border-primary/20 dark:border-primary/30">
              <p className="text-text-main dark:text-gray-200 text-base font-medium">배추 (1포기)</p>
              <p className="text-text-main dark:text-gray-100 tracking-light text-2xl font-bold leading-tight">3,500원</p>
              <p className="text-price-up text-base font-medium leading-normal">▲ 5.2%</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-primary-light dark:bg-primary/10 border border-primary/20 dark:border-primary/30">
              <p className="text-text-main dark:text-gray-200 text-base font-medium">쌀 (20kg)</p>
              <p className="text-text-main dark:text-gray-100 tracking-light text-2xl font-bold leading-tight">48,000원</p>
              <p className="text-price-down text-base font-medium leading-normal">▼ 1.5%</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-primary-light dark:bg-primary/10 border border-primary/20 dark:border-primary/30">
              <p className="text-text-main dark:text-gray-200 text-base font-medium">사과 (1개)</p>
              <p className="text-text-main dark:text-gray-100 tracking-light text-2xl font-bold leading-tight">2,100원</p>
              <p className="text-price-up text-base font-medium leading-normal">▲ 3.8%</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-primary-light dark:bg-primary/10 border border-primary/20 dark:border-primary/30">
              <p className="text-text-main dark:text-gray-200 text-base font-medium">돼지고기 (600g)</p>
              <p className="text-text-main dark:text-gray-100 tracking-light text-2xl font-bold leading-tight">12,500원</p>
              <p className="text-text-main dark:text-gray-200 text-base font-medium leading-normal">― 0.0%</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-text-main dark:text-gray-100 text-[22px] font-bold leading-tight pb-3 pt-5">주요 품목 가격 예측</h2>
              <div className="flex gap-3 pb-4 overflow-x-auto">
                <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-primary pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">배추</p>
                </div>
                <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-primary-light dark:bg-primary/20 pl-4 pr-4">
                  <p className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal">쌀</p>
                </div>
                <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-primary-light dark:bg-primary/20 pl-4 pr-4">
                  <p className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal">사과</p>
                </div>
                <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-primary-light dark:bg-primary/20 pl-4 pr-4">
                  <p className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal">돼지고기</p>
                </div>
                <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-primary-light dark:bg-primary/20 pl-4 pr-4">
                  <p className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal">고등어</p>
                </div>
              </div>
              <div className="rounded-xl bg-primary-light dark:bg-primary/10 p-6 border border-primary/20 dark:border-primary/30">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-text-main dark:text-gray-100">배추 가격 추이 및 3개월 예측</h3>
                  <div className="flex gap-2 rounded-lg bg-white dark:bg-background-dark p-1 border border-primary/20 dark:border-primary/30">
                    <button className="px-3 py-1 text-xs font-medium rounded-md text-text-main dark:text-gray-300">1개월</button>
                    <button className="px-3 py-1 text-xs font-medium rounded-md bg-primary text-white">3개월</button>
                    <button className="px-3 py-1 text-xs font-medium rounded-md text-text-main dark:text-gray-300">6개월</button>
                    <button className="px-3 py-1 text-xs font-medium rounded-md text-text-main dark:text-gray-300">1년</button>
                  </div>
                </div>
                <div className="w-full h-80 flex items-center justify-center bg-white dark:bg-background-dark rounded-lg">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrRtWj0jc7EX70LvmTMNIuVVntBtd-nrbWxbKukyWU9-Wv5HLt_lr9G88ZwpzjoBAhQ2cE30SexQB-T1qAiECSy4XwJhtyNT6zqyjQdgGUi3KSdfcMuVkdeNKhec_GhTypRR_h_9aQDkaamL3D0lXXYCHGugJLP5ihD3LOWTN5q6MukRof12pNnm3jKQms19bf0bTvLPjbFVaa93QaribeBpEzrn5rxic6qBnK_n1sW8NLp_72vbFae6LIdBb9XincviC453TTAYE" alt="Price forecast chart" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <section>
              <h2 className="text-text-main dark:text-gray-100 text-[22px] font-bold leading-tight pb-3 pt-5">최신 시장 동향 및 뉴스</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-primary-light dark:bg-primary/10 border border-primary/20 dark:border-primary/30 space-y-2">
                  <p className="font-bold text-text-main dark:text-gray-100">"역대급 폭염 예고, 채소 가격 급등 우려"</p>
                  <p className="text-sm text-text-main/80 dark:text-gray-300">기상청 발표에 따르면 올 여름 기록적인 폭염이 예상되어 노지 채소 수급에 비상이 걸릴 것으로 보입니다.</p>
                  <div className="text-xs text-text-main/60 dark:text-gray-400">농업 신문 · 2024-05-21</div>
                </div>

                <div className="p-4 rounded-xl bg-primary-light dark:bg-primary/10 border border-primary/20 dark:border-primary/30 space-y-2">
                  <p className="font-bold text-text-main dark:text-gray-100">"정부, 농산물 가격 안정을 위한 비축 물량 방출 결정"</p>
                  <p className="text-sm text-text-main/80 dark:text-gray-300">농림축산식품부는 주요 농산물 가격 안정을 위해 비축된 물량을 시장에 공급할 것이라고 밝혔습니다.</p>
                  <div className="text-xs text-text-main/60 dark:text-gray-400">연합뉴스 · 2024-05-20</div>
                </div>

                <div className="p-4 rounded-xl bg-primary-light dark:bg-primary/10 border border-primary/20 dark:border-primary/30 space-y-2">
                  <p className="font-bold text-text-main dark:text-gray-100">"수입 과일 관세 인하, 국내 과일 시장에 미칠 영향은?"</p>
                  <p className="text-sm text-text-main/80 dark:text-gray-300">정부의 수입 과일 관세 인하 조치가 장바구니 물가 안정에 기여할지, 국내 과수 농가에 타격을 줄지 주목됩니다.</p>
                  <div className="text-xs text-text-main/60 dark:text-gray-400">경제 일보 · 2024-05-19</div>
                </div>

                <div className="p-4 rounded-xl bg-accent/20 dark:bg-accent/10 border border-accent/30 dark:border-accent/30 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent text-xl">warning</span>
                    <p className="font-bold text-text-main dark:text-accent">[긴급] 강원도 지역 냉해 피해 발생, 배추 생산량 감소 전망</p>
                  </div>
                  <div className="text-xs text-text-main/60 dark:text-gray-400 pl-8">AgriForecast 분석팀 · 2024-05-22</div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>
    </Layout>
  );
}



