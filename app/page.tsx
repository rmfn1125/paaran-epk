import React from "react";

const LINKS = {
  instagram: "https://instagram.com/band_paaran",
  youtube: "https://www.youtube.com/@band_paaran",
  spotify:
    "https://open.spotify.com/album/7jj6wR2IIg0seaj9tfDVIC?si=Yd-7dKqoRJiIbrYBpGhSog",
  apple:
    "https://music.apple.com/kr/album/passing-through-the-winter-single/1880291384",
  melon: "https://www.melon.com/album/detail.htm?albumId=12886875",
  genie: "https://www.genie.co.kr/detail/albumInfo?axnm=87313695",
  linkpie: "https://linkpie.com/@band_paaran",
  visualizer:
    "https://www.youtube.com/watch?v=h2EcjZPDelc&list=RDh2EcjZPDelc&start_radio=1",
  businessMail: "mailto:band.deepblue@gmail.com",
  bookingMail: "mailto:jinainc2004@gmail.com",
  artistMail: "mailto:rmfn1125@naver.com",
} as const;

const RELEASES = [
  {
    title: "푸른 달",
    subtitle: "Blue moon",
    meta: "Single · Rock / Indie · 2026.03.16",
    image: "/blue-moon-cover.jpg",
    all: LINKS.linkpie,
    spotify: "https://open.spotify.com/track/5t6dt5rXgkm3HnA60KOIez?si=c3c4b959c73c4cc2",
    apple:
      "https://music.apple.com/kr/album/%ED%91%B8%EB%A5%B8-%EB%8B%AC/1884021847?i=1884021852",
    youtube:
      "https://music.youtube.com/watch?v=-tK2Y8u5wWc&si=cBgbyWCQSXTGlC1y",
    description:
      "언젠가 꿈에서 보았던 파랗고 큰 달에 관한 이야기입니다.\n〈푸른 달〉은 희망을 노래하지 않지만, 멈춰 있기를 바라지도 않습니다.\n바라보는 무언가가 분명하지 않더라도 끝없이 정적인 세계에서 어딘가로 움직이려 했던 흔적을 남기고자 했습니다.",
    quote: [
      "언젠가 꿈에서 보았던",
      "파랗고 큰 달에 관한 이야기입니다.",
      "멈춰 있기를 바라지도 않습니다.",
      "어딘가로 움직이려 했던 흔적을 남기고자 했습니다.",
    ],
  },
  {
    title: "우리는 같은 계절을 지나",
    subtitle: "Passing Through the Winter",
    meta: "Single · Rock / Indie · 2026.03.01",
    image: "/passing artwork.JPG",
    all: LINKS.linkpie,
    spotify: LINKS.spotify,
    apple: LINKS.apple,
    youtube: "https://music.youtube.com/watch?v=Fp_qGpCTT9g&si=z3Y_Tn1gs-7EwgjL",
    description:
      "파아란의 두 번째 싱글 〈우리는 같은 계절을 지나〉는 각자의 자리에서 긴 계절을 지나고 있는 이들에게 건네는 곡입니다.\n유난히 길게 느껴지는 시간 속에서, 결국 우리는 각자의 방식으로 이 시간을 건너고 있다 이야기하고자 했습니다.\n이 곡이 지금 겨울을 버티고 있는 분들께 작은 공감으로 닿기를 바랍니다.",
    quote: [
      "겨울을 버티고 있는 나에게,",
      "이번 계절이 유독 길게 느껴지는 이들에게",
      "이 노래를 건네고 싶습니다.",
      "늘 그랬듯 겨울은 지나갈 것이기에!",
    ],
  },
  {
    title: "비구름",
    subtitle: "Raincloud",
    meta: "Single · Rock / Indie · 2025.11.22",
    image: "/raincloud-cover.jpg",
    all: "https://linksalad.net/Paaran_Raincloud",
    spotify: "https://open.spotify.com/album/7lnnDnAWk8HWAuoEt4t4t9",
    apple: "https://music.apple.com/us/album/raincloud-single/1854316419",
    youtube: "https://music.youtube.com/watch?v=a3b5wv2wUa0&list=RDAMVMa3b5wv2wUa0",
    description:
      "밴드 파아란의 첫 번째 싱글 [비구름]은 말하지 못한 마음을 빗소리에 비유해 표현한 곡으로, 전하지 못한 감정을 잊힌 단어들로 전하는 조용한 고백과 기다림의 시간을 담았습니다.\n비가 그친 뒤에도 비가 머물던 자리처럼 계속되는 마음의 여운을 그려봅니다.",
    quote: ["언제부턴가", "나는", "하염없이", "비가 오기만 기다립니다."],
  },
] as const;
const MEMBERS = [
  {
    name: "천우진",
    role: "Vocal / Guitar · Songwriting",
    image: "/members/woojin.jpg",
  },
  {
    name: "유시현",
    role: "Guitar",
    image: "/members/sihyun.jpg",
  },
  {
    name: "곽은혁",
    role: "Bass",
    image: "/members/eunhyeok.jpg",
  },
] as const;

const LOGOS = [
  { src: "/logosymbol.png", alt: "Paaran symbol logo" },
  { src: "/logo-kor.png", alt: "Paaran Korean logo" },
  { src: "/logoblue.png", alt: "Paaran blue logo" },
  { src: "/logokorblue.png", alt: "Paaran Korean blue logo" },
] as const;

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-8 md:mb-10">
      <div className="flex items-center gap-3 md:gap-4">
        <span className="text-[18px] leading-none text-[var(--strong)] md:text-[22px]">
          🌊
        </span>
        <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text)] md:text-[32px]">
          {title}
        </h2>
      </div>
      <div className="mt-5 h-px w-full bg-[var(--line)]" />
    </div>
  );
}

function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-9 items-center rounded-full border border-[var(--line)] bg-white px-4 text-[13px] font-medium text-[var(--text)] transition hover:border-[var(--text)]"
    >
      {children}
    </a>
  );
}

function SideIconBar() {
  const items = [
    { href: LINKS.instagram, src: "/icons/instagram.png", alt: "Instagram" },
    { href: LINKS.youtube, src: "/icons/youtube.png", alt: "YouTube" },
    { href: LINKS.spotify, src: "/icons/spotify.png", alt: "Spotify" },
    { href: LINKS.apple, src: "/icons/applemusic.png", alt: "Apple Music" },
    { href: LINKS.melon, src: "/icons/melon.png", alt: "Melon" },
    { href: LINKS.genie, src: "/icons/genie.png", alt: "Genie" },
  ] as const;

  return (
    <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-6 lg:flex">
      {items.map((item) => (
        <a
          key={item.alt}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 transition hover:opacity-100"
        >
          <img src={item.src} alt={item.alt} className="h-8 w-8" />
        </a>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-slate-50">
      <div className="absolute inset-0">
        <img
          src="/artist-full.jpg"
          alt="파아란 프로필"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
      </div>

      <header className="relative z-20 flex items-center justify-between px-6 py-6 text-xs md:px-12 md:text-sm">
        <div className="flex items-center">
          <img
            src="/logosymbol.png"
            alt="Paaran Symbol Logo"
            className="h-16 w-16 object-contain md:h-20 md:w-20"
          />
        </div>

        <nav className="hidden items-center gap-10 text-sm font-semibold tracking-wide text-slate-100 md:flex md:text-base">
          <a href="#discography" className="transition hover:text-white">
            RELEASE
          </a>
          <a href="#intro" className="transition hover:text-white">
            BIO
          </a>
          <a href="#photos" className="transition hover:text-white">
            ARCHIVE
          </a>
          <a href="#photos" className="transition hover:text-white">
            PHOTOS
          </a>
          <a href="#contact" className="transition hover:text-white">
            CONTACT
          </a>
        </nav>
      </header>

      <div className="relative z-20 flex min-h-[calc(100vh-80px)] w-full items-center px-5 md:px-8 lg:px-12">
        <div className="w-full max-w-md translate-y-[30px] space-y-6 md:translate-y-[32px]">
          <div className="w-52 md:w-64">
            <img
              src="/logo-kor.png"
              alt="파아란 로고"
              className="h-auto w-full object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
            />
          </div>

          <div className="translate-x-[30px] space-y-3 md:translate-x-[38px]">
            <div className="space-y-1 text-xs text-slate-200 md:text-sm">
              <p className="font-semibold uppercase tracking-wide">밴드 파아란</p>
              <p>Rock / Indie · Single</p>
              <p>우리는 같은 계절을 지나 / Passing Through the winter · 2026.03.01</p>
            </div>

            <div className="max-w-md space-y-2 text-[11px] leading-relaxed tracking-normal text-slate-100 md:text-sm">
              <p>겨울을 버티고 있는 나에게,</p>
              <p>이번 계절이 유독 길게 느껴지는 이들에게 이 노래를 건네고 싶습니다.</p>
              <p>늘 그랬듯 겨울은 지나갈 것이기에!</p>
            </div>

            <div className="text-xs tracking-normal text-slate-200 md:text-sm">
              @band_paaran
            </div>

            <a
              href={LINKS.visualizer}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/30 bg-white/20 px-6 py-2 text-white backdrop-blur-md"
            >
              LISTEN TO “우리는 같은 계절을 지나”
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function NotionEPKSection() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[rgba(247,247,245,0.88)] backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 md:px-10 xl:px-20">
          <a href="#intro" className="flex items-center gap-3">
            <img
              src="/logosymbol.png"
              alt="Paaran symbol"
              className="h-9 w-9 object-contain"
            />
            <span className="text-[14px] font-semibold tracking-[-0.02em]">
              Paaran — EPK
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-[13px] font-medium text-[var(--muted)] md:flex">
            <a href="#intro" className="hover:text-[var(--text)]">
              Introduction
            </a>
            <a href="#members" className="hover:text-[var(--text)]">
              Members
            </a>
            <a href="#discography" className="hover:text-[var(--text)]">
              Discography
            </a>
            <a href="#photos" className="hover:text-[var(--text)]">
              Photos
            </a>
            <a href="#contact" className="hover:text-[var(--text)]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-10 md:px-10 md:pt-14 xl:px-20">
        <section id="intro" className="mb-20 scroll-mt-24 md:mb-28">
          <SectionHeading title="Introduction" />

          <div className="mb-10 flex gap-4 md:mb-12 md:gap-5">
            <div className="mt-1 h-auto min-h-[72px] w-1 bg-[var(--strong)]" />
            <div className="space-y-1.5">
              <p className="text-[15px] leading-[1.75] text-[var(--text)]">
                파아란은 보컬 겸 기타 <strong>천우진</strong>, 기타 <strong>유시현</strong>, 베이스 <strong>곽은혁</strong>으로 구성된 대한민국의 3인조 밴드이며, “끊임없이 밀려드는 파도, 끝없이 펼쳐진 하늘, 그것이 무엇이든 우리의 노래가 모두의 기억 속에 파아란 색으로 남길 바란다”라는 뜻을 담고 있습니다. 
              </p>
              <p className="text-[15px] leading-[1.75] text-[var(--muted)]">
                The name Paaran holds the wish that our songs remain as a vivid blue memory — like waves, sky, and everything expansive that lingers long after the sound fades.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <img
              src="/artist-paaran.jpg"
              alt="파아란 프로필 사진 1"
              className="aspect-[1.15/1] w-full object-cover"
            />
            <img
              src="/artist2.jpg"
              alt="파아란 프로필 사진 2"
              className="aspect-[1.15/1] w-full object-cover"
            />
          </div>
        </section>

        <section id="members" className="mb-20 scroll-mt-24 md:mb-28">
          <SectionHeading title="Members" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {MEMBERS.map((member) => (
              <article key={member.name}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[0.82/1] w-full object-cover"
                />
                <div className="mt-4 space-y-1.5">
                  <h3 className="text-[18px] font-semibold tracking-[-0.02em]">
                    {member.name}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[var(--muted)]">
                    {member.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="discography" className="mb-20 scroll-mt-24 md:mb-28">
          <SectionHeading title="Discography" />

          <div className="space-y-16 md:space-y-24">
            {RELEASES.map((release) => (
              <article
                key={release.title}
                className="grid grid-cols-1 gap-8 md:grid-cols-[320px_1fr] md:gap-12"
              >
                <img
                  src={release.image}
                  alt={release.title}
                  className="aspect-square w-full object-cover md:max-w-[320px]"
                />
                <div className="space-y-4 md:pt-1">
                  <div>
                    <h3 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em]">
                      {release.title}
                    </h3>
                    <p className="mt-1 text-[16px] text-[var(--muted)]">
                      {release.subtitle}
                    </p>
                  </div>

                  <p className="text-[14px] text-[var(--muted)]">
                    {release.meta}
                  </p>

                  <p className="max-w-[62ch] text-[15px] leading-[1.8]">
                    {release.description}
                  </p>

                  <blockquote className="border-l border-[var(--strong)] pl-4 text-[15px] leading-[1.8] text-[var(--muted)]">
                    {release.quote.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </blockquote>

                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <LinkButton href={release.all}>All Platforms</LinkButton>
                    <LinkButton href={release.spotify}>Spotify</LinkButton>
                    <LinkButton href={release.apple}>Apple Music</LinkButton>
                    <LinkButton href={release.youtube}>YouTube Music</LinkButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20 md:mb-28">
          <SectionHeading title="Music & Video" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <div className="aspect-[16/9] w-full overflow-hidden bg-black">
  <iframe
    className="h-full w-full"
    src="https://www.youtube.com/embed/h2EcjZPDelc"
    title="Paaran Visualizer"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[24px] font-bold leading-[1.2] tracking-[-0.03em]">
                Visualizer / Performance Video
              </h3>
              <p className="text-[15px] leading-[1.75] text-[var(--text)]">
                〈우리는 같은 계절을 지나〉의 퍼포먼스 비디오와 비주얼라이저를 통해 파아란의 현재 사운드와 무드를 함께 확인할 수 있습니다. 영상은 곡의 감정선을 직접적으로 전달하는 핵심 자료로 활용할 수 있습니다.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                <LinkButton href={LINKS.visualizer}>Watch Video</LinkButton>
                <LinkButton href={LINKS.youtube}>Channel</LinkButton>
              </div>
            </div>
          </div>
        </section>

        <section id="photos" className="mb-20 scroll-mt-24 md:mb-28">
          <SectionHeading title="Photos & Logos" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <img
              src="/artist-paaran.jpg"
              alt="공식 사진 1"
              className="aspect-[1.15/1] w-full object-cover"
            />
            <img
              src="/artist2.jpg"
              alt="공식 사진 2"
              className="aspect-[1.15/1] w-full object-cover"
            />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:mt-14 md:grid-cols-4 md:gap-8">
            {LOGOS.map((logo, index) => (
  <div
    key={logo.src}
    className={`flex items-center justify-center border border-neutral-200 px-8 py-10 ${
      index < 2 ? "bg-black" : "bg-white"
    }`}
  >
    <img
      src={logo.src}
      alt={logo.alt}
      className="max-h-16 w-auto object-contain"
    />
  </div>
))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <SectionHeading title="Contact" />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="bg-[var(--panel)] p-6">
              <h3 className="text-[16px] font-semibold tracking-[-0.02em]">
                General / Business
              </h3>
              <div className="mt-4 space-y-2 text-[14px] leading-[1.7] text-[var(--text)]">
                <a href={LINKS.businessMail} className="block">
                  band.deepblue@gmail.com
                </a>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-[var(--muted)] hover:text-[var(--text)]"
                >
                  instagram @band_paaran
                </a>
              </div>
            </div>

            <div className="bg-[var(--panel)] p-6">
              <h3 className="text-[16px] font-semibold tracking-[-0.02em]">
                Booking / Live Inquiry
              </h3>
              <div className="mt-4 space-y-2 text-[14px] leading-[1.7] text-[var(--text)]">
                <p>Manager · 류진하 Jinha Ryu</p>
                <p>010-2609-5721</p>
                <a href={LINKS.bookingMail} className="block">
                  jinainc2004@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-[var(--panel)] p-6">
              <h3 className="text-[16px] font-semibold tracking-[-0.02em]">
                Creative / Artist Contact
              </h3>
              <div className="mt-4 space-y-2 text-[14px] leading-[1.7] text-[var(--text)]">
                <p>천우진 Woojin Chun</p>
                <p>010-5434-6389</p>
                <a href={LINKS.artistMail} className="block">
                  rmfn1125@naver.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-[var(--line)] pt-10">
            <h3 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em]">
              E.O.D
            </h3>
            <p className="mt-4 max-w-[72ch] text-[15px] leading-[1.8] text-[var(--text)]">
              끊임없이 밀려드는 파도와 끝없이 펼쳐진 하늘처럼, 파아란의 음악이 누군가를 위로할 수 있게 되기를 바랍니다. We hope Paaran’s music can become a source of comfort for someone, like endlessly rolling waves and an ever-expanding sky.
            </p>
            <p className="mt-10 text-[13px] text-[var(--muted)]">
              © {new Date().getFullYear()} Paaran. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <SideIconBar />
      <HeroSection />
      <NotionEPKSection />
    </div>
  );
}