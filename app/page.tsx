const STREAMING_URL =
  "https://linksalad.net/Paaran_Raincloud";
const INSTAGRAM_URL =
  "https://instagram.com/band_paaran";
const LINKPIE_URL =
  "https://linkpie.com/@band_paaran";
const VISUALIZER_URL =
  "https://www.instagram.com/reel/DRec4P1ERm9/?igsh=MTM2ZHIwMW9qdzFkbw==";
const STREAMING_ALL = "https://linksalad.net/Paaran_Raincloud";
const STREAMING_SPOTIFY =
  "https://open.spotify.com/album/7lnnDnAWk8HWAuoEt4t4t9";
const STREAMING_APPLE =
  "https://music.apple.com/us/album/raincloud-single/1854316419";
const STREAMING_YT =
  "https://music.youtube.com/watch?v=a3b5wv2wUa0&list=RDAMVMa3b5wv2wUa0";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-sky-10 to-white text-slate-900">
      {/* --- FIXED RIGHT ICON BAR --- */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition"
        >
          <img src="/icons/instagram.png" alt="Instagram" className="w-8 h-8" />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition"
        >
          <img src="/icons/youtube.png" alt="YouTube" className="w-8 h-8" />
        </a>

        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition"
        >
          <img src="/icons/spotify.png" alt="Spotify" className="w-8 h-8" />
        </a>

        <a
          href="https://music.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition"
        >
          <img src="/icons/applemusic.png" alt="Apple Music" className="w-8 h-8" />
        </a>

        <a
          href="https://www.melon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition"
        >
          <img src="/icons/melon.png" alt="Melon" className="w-8 h-8" />
        </a>

        <a
          href="https://www.genie.co.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition"
        >
          <img src="/icons/genie.png" alt="Genie" className="w-8 h-8" />
        </a>
      </div>

      {/* ================= HERO: FULLSCREEN PHOTO + LEFT TEXT OVERLAY ================= */}
      <section className="relative w-full min-h-screen text-slate-50 overflow-hidden">
        {/* 배경 사진 + 어두운 그라데이션 오버레이 */}
        <div className="absolute inset-0">
          <img
            src="/artist-full.jpg"
            alt="파아란 프로필"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
        </div>

        {/* 상단 네비게이션 바 */}
        <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6 text-xs md:text-sm">
          <div className="flex items-center">
            <img
              src="/logosymbol.png"
              alt="Paaran Symbol Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center gap-10 text-slate-100 font-semibold text-sm md:text-base tracking-wide">
            <a href="#bio" className="hover:text-white transition">
              BIO
            </a>
            <a href="#music" className="hover:text-white transition">
              MUSIC
            </a>
            <a href="#photos" className="hover:text-white transition">
              PHOTOS
            </a>
            <a href="#contact" className="hover:text-white transition">
              CONTACT
            </a>
          </nav>
        </header>

        {/* 중앙 컨텐츠: 왼쪽에 로고 + 텍스트 */}
        <div className="relative z-20 w-full flex items-center min-h-[calc(100vh-80px)] px-5 md:px-8 lg:px-12">
          <div className="w-full max-w-md space-y-6 translate-y-[30px] md:translate-y-[32px]">
            {/* 한글 로고 */}
            <div className="w-52 md:w-64">
              <img
                src="/logo-kor.png"
                alt="파아란 로고"
                className="w-full h-auto object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* 텍스트 묶음 오른쪽 이동 + 자간 조정 */}
            <div className="space-y-4 translate-x-[30px] md:translate-x-[38px]">
              {/* 밴드명 / 싱글 정보 */}
              <div className="space-y-1 text-xs md:text-sm text-slate-200">
                <p className="font-semibold tracking-wide uppercase">
                  밴드 파아란
                </p>
                <p>Rock / Indie · Debut Single</p>
                <p>비구름 / Raincloud · 2025.11.22</p>
              </div>

              {/* 소개 텍스트 */}
              <p className="text-xs md:text-sm leading-relaxed text-slate-100 max-w-md tracking-normal">
                모던 록을 기반으로 다양한 장르와 사운드를 지향하는 3인조 밴드
                파아란의 첫 싱글{" "}
                <span className="font-medium">‘비구름’</span>은 말하지 못한 감정을
                빗소리에 비유해 표현한 곡으로, 잊힌 단어들로 전하는 조용한
                고백과 기다림의 시간을 담았습니다.
              </p>

              {/* 인스타 */}
              <div className="text-xs md:text-sm text-slate-200 tracking-normal">
                @band_paaran
              </div>


              {/* 버튼 (글래스 스타일) */}
              <a
                href={STREAMING_URL}
                className="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white"
              >
                LISTEN TO “비구름 / RAINCLOUD”
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE EPK CONTENT ================= */}
      <main className="w-full">
        {/* =============== ARTIST BIO (1페이지) =============== */}
{/* ================= ARTIST BIO — FULL PAGE ================= */}
<section
  id="bio"
  className="min-h-screen w-full py-24 px-6 md:px-12 lg:px-20"
>
  {/* 제목 */}
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-3xl md:text-5xl font-bold tracking-tight translate-x-[100px]">
      Artist Bio
    </h3>
    <span className="px-4 py-1 text-sm rounded-full bg-slate-800 text-white">
      profile
    </span>
  </div>

  {/* 가로줄 */}
  <div className="w-full h-px bg-slate-500 mb-10 translate-y-[10px]"></div>

  {/* 전체 콘텐츠 감싸는 그리드 */}
  <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

    {/* LEFT PHOTO (조금 작은 버전) */}
    <div className="w-full max-w-lg mx-auto shadow-lg overflow-hidden translate-y-[50px]">
      <img
        src="/artist-paaran.jpg"
        alt="파아란 밴드 프로필"
        className="w-full h-auto object-cover"
      />
    </div>
    {/* TEXT */}
    <div className="space-y-8 text-base md:text-lg leading-relaxed text-slate-800 -translate-x-[62px] translate-y-[140px]">

      <h4 className="text-xl md:text-2xl font-bold text-slate-900">
      밴드 파아란
      </h4>

      <p>
        밴드 파아란은 보컬 겸 기타 <b>천우진</b>, 기타리스트 <b>유시현</b>,
        베이시스트 <b>곽은혁</b>으로 구성된 대한민국의 3인조 밴드이다.
        모던 록을 기반으로 다양한 장르와 사운드를 지향하며,
        밴드의 이름은 “끊임없이 밀려드는 파도, 끝없이 펼쳐진 하늘,
        그것이 무엇이든 우리의 노래가 모두의 기억 속에 파아란 색으로 남길 바란다”는 의미를 담고 있다.
      </p>

      <p>
        서로 다른 전공과 환경 속에서 음악이라는 공통된 열정을 바탕으로 모인 파아란은
        첫 싱글 <b>‘비구름’</b>으로 이제 큰 파도를 타고 더 넓은 바다로 나아가려 한다.
      </p>

    </div>
  </div>
</section>


{/* =============== BAND MEMBERS (2페이지 느낌) =============== */}
<section
  id="members"
  className="min-h-screen flex flex-col justify-center py-24 px-4 md:px-8"
>
  <div className="max-w-6xl mx-auto w-full space-y-8">
    <h4 className="text-2xl md:text-3xl font-semibold tracking-tight border-l-4 border-blue-500 pl-3">
      Band Members
    </h4>

    <div className="grid gap-6 md:grid-cols-3">
      {/* Woojin */}
      <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden flex flex-col">
        <div className="w-full aspect-[4/5] overflow-hidden">
          <img
            src="/members/woojin.jpg"
            alt="천우진 프로필"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 md:p-5 space-y-1">
          <p className="text-sm font-bold text-black">천우진</p>
          <p className="text-xs text-slate-500">
            Vocal / Guitar · Songwriting
          </p>
          <p className="text-xs md:text-sm text-slate-700 mt-2 leading-relaxed">
            파아란의 보컬이자 기타리스트로, 첫 싱글 &lt;비구름&gt;의 작사·작곡을 맡았다.
            말로 다 하지 못한 마음을 음악으로 풀어내며 밴드의 정서적 색을 이끌어간다.
          </p>
        </div>
      </div>

      {/* Sihyun */}
      <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden flex flex-col">
        <div className="w-full aspect-[4/5] overflow-hidden">
          <img
            src="/members/sihyun.jpg"
            alt="유시현 프로필"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 md:p-5 space-y-1">
          <p className="text-sm font-bold text-slate-900">유시현</p>
          <p className="text-xs text-slate-500">Guitar</p>
          <p className="text-xs md:text-sm text-slate-700 mt-2 leading-relaxed">
            섬세한 질감과 톤으로 파아란의 사운드를 만들어가는 기타리스트.
            라이브에서는 디테일과 에너지를 동시에 담아낸다.
          </p>
        </div>
      </div>

      {/* Eunhyeok */}
      <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden flex flex-col">
        <div className="w-full aspect-[4/5] overflow-hidden">
          <img
            src="/members/eunhyeok.jpg"
            alt="곽은혁 프로필"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 md:p-5 space-y-1">
          <p className="text-sm font-bold text-slate-900">곽은혁</p>
          <p className="text-xs text-slate-500">Bass</p>
          <p className="text-xs md:text-sm text-slate-700 mt-2 leading-relaxed">
            곡의 바닥을 단단하게 채우는 베이시스트로,
            리듬과 멜로디 사이를 유연하게 오가며 밴드의 근간을 잡아준다.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* ========== 3PAGE : MUSIC (풀배경) ========== */}
        <section
          id="music"
          className="relative w-full min-h-screen overflow-hidden"
        >
          

          <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-24 flex flex-col justify-center gap-10">
            <div className="bg-white/85 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-10 space-y-10">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight border-l-4 border-blue-500 pl-3">
                MUSIC /{" "}
                <span className="text-slate-500 text-xl md:text-2xl">
                  1st Single
                </span>
              </h3>

              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                <div className="w-full md:w-1/3 max-w-xs">
                  <img
                    src="/raincloud-cover.jpg"
                    alt="비구름 앨범 커버"
                    className="w-full rounded-3xl shadow-lg border border-slate-100"
                  />
                </div>
                <div className="flex-1 space-y-5">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    비구름 / Raincloud
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500">
                    Single · Rock / Indie · 2025.11.22
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-slate-800">
                    밴드 파아란의 첫 번째 싱글 <b>[비구름]</b>은 말하지 못한
                    마음을 빗소리에 비유해 표현한 곡으로, 전하지 못한 감정을
                    잊힌 단어들로 전하는 조용한 고백과 기다림의 시간을
                    담았습니다. 비가 그친 뒤에도 비가 머물던 자리처럼 계속되는
                    마음의 여운을 그려봅니다.
                  </p>
                  <div className="text-xs md:text-sm text-slate-700 leading-relaxed bg-blue-20 border border-sky-100  p-4 max-w-md">
                    <p>
                      언제부턴가
                      <br />
                      나는
                      <br />
                      하염없이
                      <br />
                      비가 오기만 기다립니다.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2 text-xs md:text-sm">
                    <a
                      href={STREAMING_URL}
                      className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-sky-600 transition"
                    >
                      All Platforms
                    </a>
                    <a
                      href={STREAMING_SPOTIFY}
                      className="px-4 py-2 rounded-full border border-slate-300 hover:bg-slate-50"
                    >
                      Spotify
                    </a>
                    <a
                      href={STREAMING_APPLE}
                      className="px-4 py-2 rounded-full border border-slate-300 hover:bg-slate-50"
                    >
                      Apple Music
                    </a>
                    <a
                      href={STREAMING_YT}
                      className="px-4 py-2 rounded-full border border-slate-300 hover:bg-slate-50"
                    >
                      YouTube Music
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-xs md:text-sm text-slate-800 bg-slate-50 border border-slate-100 rounded-2xl p-6 mt-2">
                <div className="space-y-1">
                  <p className="font-semibold mb-2">Credits</p>
                  <p>Produced by 파아란</p>
                  <p>Song &amp; Lyrics by 천우진</p>
                  <p>Vocal / Guitar · 천우진</p>
                  <p>Guitar · 유시현</p>
                  <p>Bass · 곽은혁</p>
                  <p>Drums · 오준범</p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold mb-2">Production</p>
                  <p>Drums recorded at SPOT SOUND</p>
                  <p>Mixed by 오권호 (@gwon.u)</p>
                  <p>Mastered by MOTT STUDIO</p>
                  <p>Album Artwork by Honest Studio</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 4PAGE : VISUALIZER (풀배경) ========== */}
        {/* VISUALIZER – 세로형 썸네일 버전 */}
<section
  id="videos"
  className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center gap-8 py-24"
>
 
  {/* 콘텐츠 */}
  <div className="relative max-w-4xl mx-auto px-6 flex flex-col gap-8">

    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight border-l-4 border-blue-500 pl-3">
      Visualizer / Lyric Video
    </h3>

    <p className="text-base md:text-lg text-slate-700 max-w-2xl">
      인스타그램 릴 형식으로 제작된 파아란의 첫 번째 싱글 [비구름]의
      Visualizer &amp; Lyric Video
      <br />
      아래 썸네일을 클릭하면 인스타그램 릴로 이동합니다.
    </p>

    {/* 세로형 카드 */}
    <a
      href={VISUALIZER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-[220px] md:w-[260px] aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group mx-auto"
    >
      <img
        src="/insta.jpg"
        alt="비구름 Visualizer Thumbnail"
        className="w-full h-full object-cover brightness-90 group-hover:brightness-75 transition"
      />

      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/70 flex items-center justify-center bg-black/40 group-hover:bg-black/70 transition">
          <div className="ml-1">
            <div className="w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[16px] border-l-white" />
          </div>
        </div>
        <div className="mt-3 text-[10px] md:text-xs tracking-[0.25em] uppercase text-slate-100">
          Watch Visualizer
        </div>
      </div>
    </a>

    <p className="text-xs md:text-sm text-slate-500 max-w-2xl mx-auto text-center">
      공식 뮤직비디오 공개 이전, 곡의 분위기와 색감을 표현한 릴 스타일 영상입니다.
    </p>

  </div>
</section>

        {/* ========== 5PAGE : PHOTOS (풀배경) ========== */}
        <section
          id="photos"
          className="relative w-full min-h-screen overflow-hidden"
        >
          
          <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-24 flex flex-col justify-center gap-8">
            <div className="bg-white/85 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-10 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight border-l-4 border-blue-500 pl-3">
                Photos
              </h3>
              <p className="text-base md:text-lg text-slate-700 max-w-2xl">
                프로필 및 프로모션용으로 사용 가능한 공식 사진과 로고입니다.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* 1) 밴드 프로필 사진 */}
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white">
                  <img
                    src="/artist-paaran.jpg"
                    alt="파아란 밴드 프로필"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 2) 한글 로고 */}
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-black flex items-center justify-center">
                  <img
                    src="/logo-kor.png"
                    alt="파아란 로고"
                    className="w-3/4 h-auto object-contain"
                  />
                </div>

                {/* 3) 심볼 로고 */}
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-black flex items-center justify-center">
                  <img
                    src="/logosymbol.png"
                    alt="파아란 심볼 로고"
                    className="w-2/3 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 6PAGE : CONTACT (풀배경) ========== */}
        <section
          id="contact"
          className="relative w-full min-h-screen overflow-hidden"
        >
          

          <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-24 flex flex-col justify-center">
            <div className="bg-white/90 backdrop-blur-sm  shadow-xl p-6 md:p-10 space-y-10">
              <h3 className="text-xl md:text-3xl font-semibold tracking-tight border-l-4 border-blue-500 pl-3">
                Contact
              </h3>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Booking / Live Inquiry */}
                <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-200 space-y-2">
                  <p className="font-semibold text-lg">Booking / Live Inquiry</p>
                  <p>
                    Manager · <b>류진하</b>
                  </p>
                  <p>Phone · 010-2609-5721</p>
                  <p>
                    Email ·{" "}
                    <a
                      href="mailto:jinainc2004@gmail.com"
                      className="underline"
                    >
                      fbwlsgk5721@naver.com
                    </a>
                  </p>
                </div>

                {/* Press / Media */}
                <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-200 space-y-2">
                  <p className="font-semibold text-lg">Press / Media</p>
                  <p>
                    Email ·{" "}
                    <a
                      href="mailto:band.deepblue@gmail.com"
                      className="underline"
                    >
                      band.deepblue@gmail.com
                    </a>
                  </p>
                </div>

                {/* Creative / Artist Contact */}
                <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-200 space-y-2">
                  <p className="font-semibold text-lg">
                    Creative / Artist Contact
                  </p>
                  <p>Woojin Cheon</p>
                  <p>Phone · 010-5434-6389</p>
                  <p>
                    Email ·{" "}
                    <a
                      href="mailto:rmfn1125@naver.com"
                      className="underline"
                    >
                      rmfn1125@naver.com
                    </a>
                  </p>
                </div>

                {/* General / Business */}
                <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-200 space-y-2">
                  <p className="font-semibold text-lg">General / Business</p>
                  <p>
                    Email ·{" "}
                    <a
                      href="mailto:band.deepblue@gmail.com"
                      className="underline"
                    >
                      band.deepblue@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Paaran. All rights reserved.
      </footer>
    </div>
  );
}
