const STREAMING_URL =
  "https://linksalad.net/Paaran_Raincloud";
const INSTAGRAM_URL =
  "https://instagram.com/band_paaran";
const LINKPIE_URL =
  "https://linkpie.com/@band_paaran";
const VISUALIZER_URL =
  "https://www.instagram.com/reel/DRec4P1ERm9/?igsh=MTM2ZHIwMW9qdzFkbw==";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-sky-50 to-white text-slate-900">
      {/* --- FIXED RIGHT ICON BAR --- */}
<div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5">

  {/* Instagram */}
  <a
    href="https://instagram.com/band_paaran"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-80 hover:opacity-100 transition"
  >
    <img src="/icons/instagram.png" alt="Instagram" className="w-7 h-7" />
  </a>

  {/* YouTube */}
  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-80 hover:opacity-100 transition"
  >
    <img src="/icons/youtube.png" alt="YouTube" className="w-7 h-7" />
  </a>

  {/* Spotify */}
  <a
    href="https://open.spotify.com"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-80 hover:opacity-100 transition"
  >
    <img src="/icons/spotify.png" alt="Spotify" className="w-7 h-7" />
  </a>

  {/* Apple Music */}
  <a
    href="https://music.apple.com"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-80 hover:opacity-100 transition"
  >
    <img src="/icons/applemusic.png" alt="Apple Music" className="w-7 h-7" />
  </a>

  {/* Melon */}
  <a
    href="https://www.melon.com"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-80 hover:opacity-100 transition"
  >
    <img src="/icons/melon.png" alt="Melon" className="w-7 h-7" />
  </a>

  {/* Genie */}
  <a
    href="https://www.genie.co.kr"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-80 hover:opacity-100 transition"
  >
    <img src="/icons/genie.png" alt="Genie" className="w-7 h-7" />
  </a>

</div>

  {/* ================= HERO: LEFT PHOTO / RIGHT LOGO + NAV ================= */}
<section className="relative w-full min-h-screen bg-black text-slate-50 overflow-hidden">
  {/* 상단 네비게이션 바 */}
  <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-0 bg-black/60 text-xs md:text-sm">
    <div className="flex items-center translate-x-[-30px]">
  <img
    src="/logosymbol.png"
    alt="Paaran Symbol Logo"
    className="w-20 h-20 object-contain"
  />
</div>
      <nav className="hidden md:flex items-center gap-8 text-slate-300">
    <a href="#bio" className="hover:text-slate-100 transition">Bio</a>
    <a href="#music" className="hover:text-slate-100 transition">Music</a>
    <a href="#photos" className="hover:text-slate-100 transition">Photos</a>
    <a href="#contact" className="hover:text-slate-100 transition">Contact</a>
  </nav>
  </header>

  {/* 메인 2컬럼 영역 */}
  <div className="w-full min-h-screen flex flex-col lg:flex-row pt-14">
    {/* LEFT : 사진 (왼쪽 아래 구석, 조금 줄인 크기) */}
    <div className="relative w-full lg:w-1/2 flex items-end justify-start">
      <div className="absolute left-0 bottom-0 w-[100%] h-[93%]">
        <img
          src="/artist-paaran.jpg"
          alt="파아란 프로필"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* RIGHT : 로고 + 텍스트 */}
    <div className="w-full lg:w-1/2 bg-black flex flex-col justify-center px-8 md:px-12 lg:px-16 py-10 space-y-1">
      {/* 로고: 더 크게 + 가로 중앙 */}
      <div className="flex justify-center translate-x-[-5px]">
        <div className="w-64 md:w-80 lg:w-[580px] mb-30">
          <img
            src="/logo-kor.png"
            alt="파아란 로고"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* PAARAN 영문 */}
     <div className="text-xs md:text-sm tracking-[0.15em] text-slate-300 text-center lg:text-left">
  밴드 파아란
</div>




      {/* 정보 */}
      <div className="text-xs md:text-sm text-slate-300 space-y-1">
        <p>Rock / Indie · Debut Single</p>
        <p>비구름 / Raincloud · 2025.11.22</p>
      </div>

      {/* 소개글 */}
      <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-lg">
        모던 록을 기반으로 다양한 장르와 사운드를 지향하는 3인조 밴드 파아란의 첫 싱글
        <span className="font-medium"> ‘비구름’</span>은 말하지 못한 감정을 빗소리에 비유해 표현한 곡으로,
        잊힌 단어들로 전하는 조용한 고백과 기다림의 시간을 담았습니다.
      </p>

      {/* 버튼 */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href={STREAMING_URL}
          className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white
 text-xs md:text-sm tracking-[0.25em] uppercase hover:bg-sky-300 transition"
        >
          LISTEN TO “비구름 / RAINCLOUD”
        </a>

        <a
          href={INSTAGRAM_URL}
          className="text-xs md:text-sm underline underline-offset-4 text-slate-300 hover:text-white"
        >
          @band_paaran
        </a>
      </div>
    </div>
  </div>
</section>



      {/* ================= CORE EPK CONTENT ================= */}
      <main className="max-w-5xl mx-auto px-6 md:px-10 py-32 space-y-20">
        {/* BIO */}
        <section id="bio" className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight border-l-4 border-blue-500 pl-3">
            Artist Bio
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            밴드 파아란은 보컬 겸 기타 <b>천우진</b>, 기타리스트{" "}
            <b>유시현</b>, 베이시스트 <b>곽은혁</b>으로 구성된 대한민국의
            3인조 밴드이다. 모던 록을 기반으로 다양한 장르와 사운드를
            지향하며, 밴드의 이름은 “끊임없이 밀려드는 파도, 끝없이
            펼쳐진 하늘, 그것이 무엇이든 우리의 노래가 모두의 기억 속에
            파아란 색으로 남길 바란다”는 의미를 담고 있다.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-800">
            서로 다른 전공과 환경 속에서 음악이라는 공통된 열정을
            바탕으로 모인 파아란은 첫 싱글 <b>‘비구름’</b>으로 이제 큰
            파도를 타고 더 넓은 바다로 나아가려 한다.
          </p>
        </section>

        {/* MUSIC */}
        <section id="music" className="space-y-40">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 max-w-xs">
              <img
                src="/raincloud-cover.jpg"
                alt="비구름 앨범 커버"
                className="w-full rounded-3xl shadow-lg border border-slate-100"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                비구름 / Raincloud
              </h3>
              <p className="text-xs md:text-sm text-slate-500">
                Single · Rock / Indie · 2025.11.22
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-800">
                밴드 파아란의 첫 번째 싱글 <b>[비구름]</b>은 말하지 못한
                마음을 빗소리에 비유해 표현한 곡으로, 전하지 못한
                감정을 잊힌 단어들로 전하는 조용한 고백과 기다림의
                시간을 담았습니다. 비가 그친 뒤에도 비가 머물던 자리처럼
                계속되는 마음의 여운을 그려봅니다.
              </p>
              <div className="text-xs md:text-sm text-slate-700 leading-relaxed bg-sky-50 border border-sky-100 rounded-2xl p-4">
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

              <div className="flex flex-wrap gap-2 pt-2 text-xs md:text-sm">
                <a
                  href={STREAMING_URL}
                  className="px-4 py-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
                >
                  All Platforms
                </a>
                <a
                  href={STREAMING_URL}
                  className="px-4 py-2 rounded-full border border-slate-300 hover:bg-slate-50"
                >
                  Spotify
                </a>
                <a
                  href={STREAMING_URL}
                  className="px-4 py-2 rounded-full border border-slate-300 hover:bg-slate-50"
                >
                  Apple Music
                </a>
                <a
                  href={STREAMING_URL}
                  className="px-4 py-2 rounded-full border border-slate-300 hover:bg-slate-50"
                >
                  YouTube Music
                </a>
              </div>
            </div>
          </div>

          {/* Credits */}
          <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm text-slate-800 bg-slate-50 border border-slate-100 rounded-2xl p-6">
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
        </section>

        {/* VISUALIZER */}
        <section id="videos" className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight border-l-4 border-blue-500 pl-3">
            Visualizer / Lyric Video
          </h3>
          <p className="text-sm md:text-base text-slate-700">
            비구름의 무드를 시각적으로 담아낸 인스타그램 릴 형태의
            비주얼라이저 &amp; 리릭 비디오입니다.
          </p>
          <a
            href={VISUALIZER_URL}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-slate-900 text-white text-xs md:text-sm tracking-[0.25em] uppercase hover:bg-slate-700 transition"
          >
            Watch on Instagram
          </a>
        </section>

        {/* PHOTOS */}
        <section id="photos" className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight border-l-4 border-blue-500 pl-3">
            Photos
          </h3>
          <p className="text-sm md:text-base text-slate-700">
            프로필 및 프로모션용으로 사용 가능한 공식 사진입니다.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white">
              <img
                src="/artist-paaran.jpg"
                alt="파아란 밴드 프로필"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-900 flex items-center justify-center">
              <img
                src="/logo-kor.png"
                alt="파아란 로고"
                className="w-3/4 h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight border-l-4 border-blue-500 pl-3">
            Contact
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base text-slate-800">
            <div className="space-y-1">
              <p className="font-semibold">Booking / Press</p>
              <p>천우진 (Woojin Cheon)</p>
              <p>Phone · 010-5434-6389</p>
              <p>
                Business Email ·{" "}
                <a
                  href="mailto:band.deepblue@gmail.com"
                  className="underline"
                >
                  band.deepblue@gmail.com
                </a>
              </p>
              <p>
                Personal Email ·{" "}
                <a
                  href="mailto:rmfn1125@naver.com"
                  className="underline"
                >
                  rmfn1125@naver.com
                </a>
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Links</p>
              <p>
                Instagram ·{" "}
                <a href={INSTAGRAM_URL} className="underline">
                  @band_paaran
                </a>
              </p>
              <p>
                Link Hub ·{" "}
                <a href={LINKPIE_URL} className="underline">
                  linkpie.com/@band_paaran
                </a>
              </p>
              <p>
                Streaming ·{" "}
                <a href={STREAMING_URL} className="underline">
                  비구름 / Raincloud (All Platforms)
                </a>
              </p>
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
