"use client";

import React, { useState } from "react";
import Image from "next/image";

// Stitch Assets Map
const STITCH_IMAGES = {
  hero: "/images/stitch/01_hero_pool_pavilion.jpg",
  poolDeck: "/images/stitch/02_pool_deck.jpg",
  bedroom: "/images/stitch/03_master_bedroom.jpg",
  livingRoom: "/images/stitch/04_living_room.jpg",
  diningTable: "/images/stitch/05_dining_table.jpg",
  morningBedroom: "/images/stitch/06_morning_bedroom.jpg",
  gardenBreakfast: "/images/stitch/07_garden_breakfast.jpg",
  twilight: "/images/stitch/08_twilight_view.jpg",
};

export default function AmaraVillaLandingPage() {
  // Interactive State
  const [activeTab, setActiveTab] = useState<"pagi" | "siang" | "malam">("pagi");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [floorplanOpen, setFloorplanOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Form State
  const [checkIn, setCheckIn] = useState("2026-11-09");
  const [checkOut, setCheckOut] = useState("2026-11-11");
  const [guests, setGuests] = useState("2 Dewasa");

  const faqs = [
    {
      q: "Apakah seluruh villa untuk kami?",
      a: "Ya. Reservasi Amara adalah penyewaan satu villa utuh. Seluruh fasilitas, termasuk kolam renang privat, ruang makan, dan taman, sepenuhnya menjadi milik rombongan Anda selama menginap tanpa tamu lain.",
    },
    {
      q: "Bagaimana dengan waktu check-in & check-out?",
      a: "Waktu check-in dimulai pukul 14:00 WITA dan check-out pukul 12:00 WITA. Opsi early check-in atau late check-out dapat disesuaikan tergantung ketersediaan pada hari tersebut.",
    },
    {
      q: "Berapa lama minimum menginap?",
      a: "Kami menerapkan batas minimum menginap 2 malam pada hari biasa, dan 3 malam selama musim liburan tinggi (Juli - Agustus, Desember - Januari).",
    },
    {
      q: "Apakah saya bisa langsung memesan untuk acara khusus?",
      a: "Tentu. Amara sangat cocok untuk perayaan intim, makan malam keluarga terkurasi, atau retret privat berkapasitas maksimal 12 orang dengan koordinasi sebelumnya bersama concierge kami.",
    },
    {
      q: "Bagaimana kebijakan pembatalannya?",
      a: "Pengembalian dana penuh tersedia untuk pembatalan hingga 14 hari sebelum tanggal kedatangan. Kami juga memfasilitasi perubahan tanggal satu kali tanpa biaya tambahan.",
    },
  ];

  const galleryItems = [
    { src: STITCH_IMAGES.hero, title: "Infinity Pool & Bale Bengong", desc: "Suasana pagi tropis di Ubud" },
    { src: STITCH_IMAGES.poolDeck, title: "Private Deck & Valley View", desc: "Kolam renang 15 meter menghadap lembah" },
    { src: STITCH_IMAGES.bedroom, title: "Kamar Tidur Utama", desc: "Material kayu jati dengan linen premium" },
    { src: STITCH_IMAGES.livingRoom, title: "Ruang Tamu Terbuka", desc: "Sirkulasi udara alami dan cahaya lembut" },
    { src: STITCH_IMAGES.diningTable, title: "Meja Makan Arsitektural", desc: "Dikelilingi tanaman tropis dan lampu rotan" },
    { src: STITCH_IMAGES.morningBedroom, title: "Sinar Pagi di Kamar", desc: "Bangun mengikuti ritme cahaya alami" },
    { src: STITCH_IMAGES.gardenBreakfast, title: "Sarapan di Meja Taman", desc: "Buah tropis segar dan kopi Kintamani" },
    { src: STITCH_IMAGES.twilight, title: "Pemandangan Senja Ubud", desc: "Ketenangan magis saat matahari terbenam" },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div className="bg-[#FAF8F5] text-stone-900 font-sans selection:bg-stone-900 selection:text-white min-h-screen">
      {/* ─── BEGIN: Navigation ─── */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            className="font-serif tracking-widest text-2xl font-medium text-stone-900 uppercase hover:opacity-80 transition-opacity"
            href="#"
          >
            AMARA
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 text-[13px] tracking-wide text-stone-600 font-medium">
            <a className="hover:text-stone-900 transition-colors" href="#tentang">
              Tentang Amara
            </a>
            <a className="hover:text-stone-900 transition-colors" href="#ruang">
              Ruang &amp; Galeri
            </a>
            <a className="hover:text-stone-900 transition-colors" href="#pengalaman">
              Pengalaman
            </a>
            <a className="hover:text-stone-900 transition-colors" href="#faq">
              Tanya Jawab
            </a>
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              className="inline-flex items-center gap-1.5 text-xs font-medium px-5 py-2.5 rounded-full border border-stone-800 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-200"
              href="#reservasi"
            >
              <span>Rencanakan Menginap</span>
              <span className="text-sm leading-none">↗</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-200/50 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-[#FAF8F5] px-6 py-4 space-y-3 text-sm font-medium">
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-700 hover:text-stone-900"
            >
              Tentang Amara
            </a>
            <a
              href="#ruang"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-700 hover:text-stone-900"
            >
              Ruang &amp; Galeri
            </a>
            <a
              href="#pengalaman"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-700 hover:text-stone-900"
            >
              Pengalaman
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-700 hover:text-stone-900"
            >
              Tanya Jawab
            </a>
          </div>
        )}
      </header>
      {/* ─── END: Navigation ─── */}

      <main>
        {/* ─── BEGIN: HeroSection ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-12">
          {/* Main Visual Frame */}
          <div className="relative w-full h-[650px] lg:h-[720px] rounded-3xl overflow-hidden shadow-sm">
            <Image
              src={STITCH_IMAGES.hero}
              alt="Amara Villa Ubud infinity pool and pavilion in sunlight"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />

            {/* Subtle Vignette / Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

            {/* Huge Lowercase Center Overlay Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="font-serif text-[18vw] font-light text-white/30 tracking-tight leading-none">
                amara
              </span>
            </div>

            {/* Hero Bottom Content */}
            <div className="absolute bottom-10 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl text-white">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] uppercase tracking-wider text-white mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  A private estate in Bali
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif tracking-tight text-white leading-tight">
                  Ruang untuk berhenti sejenak.
                </h1>
              </div>

              {/* Bottom Right Floating Feature Pill */}
              <div className="bg-white/20 backdrop-blur-md border border-white/25 text-white p-4 rounded-2xl max-w-xs flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold leading-snug">Satu Villa.</p>
                  <p className="text-[11px] text-white/80">Sepenuhnya untuk Anda.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setFloorplanOpen(true)}
                  className="text-xs underline underline-offset-4 font-medium flex items-center gap-0.5 hover:text-white/80 transition-opacity"
                >
                  Denah <span>↗</span>
                </button>
              </div>
            </div>
          </div>

          {/* Floating Availability & Booking Selector Bar */}
          <div className="mt-4 bg-white rounded-3xl p-4 lg:p-6 border border-stone-200 shadow-sm" id="reservasi">
            <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-center">
              {/* Column 1: Dates selector label */}
              <div className="lg:col-span-3 px-3">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                  Kapan Anda Ingin Beristirahat?
                </label>
                <div className="text-sm font-medium text-stone-800 mt-1">Pilih Tanggal Menginap</div>
              </div>

              {/* Column 2: Check-In */}
              <div className="lg:col-span-2 border-t md:border-t-0 md:border-l border-stone-200 px-3">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                  Check In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full border-none p-0 mt-1 text-sm font-medium text-stone-800 focus:ring-0 bg-transparent outline-none cursor-pointer"
                />
              </div>

              {/* Column 3: Check-Out */}
              <div className="lg:col-span-2 border-t md:border-t-0 md:border-l border-stone-200 px-3">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                  Check Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full border-none p-0 mt-1 text-sm font-medium text-stone-800 focus:ring-0 bg-transparent outline-none cursor-pointer"
                />
              </div>

              {/* Column 4: Tamu */}
              <div className="lg:col-span-2 border-t md:border-t-0 md:border-l border-stone-200 px-3">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                  Tamu
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full border-none p-0 mt-1 text-sm font-medium text-stone-800 focus:ring-0 bg-transparent outline-none cursor-pointer"
                >
                  <option value="2 Dewasa">2 Dewasa</option>
                  <option value="4 Dewasa">4 Dewasa</option>
                  <option value="6 Dewasa (Penuh)">6 Dewasa (Penuh)</option>
                </select>
              </div>

              {/* Column 5: Submit CTA */}
              <div className="lg:col-span-3 flex justify-end">
                <button
                  className="w-full sm:w-auto px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium tracking-wide rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-sm"
                  type="submit"
                >
                  <span>Lanjutkan reservasi</span>
                  <span>↗</span>
                </button>
              </div>
            </form>

            <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between text-[11px] text-stone-500 px-3 gap-2">
              <span>
                Tarif mulai <strong className="text-stone-900 font-semibold">Rp 8.200.000 / malam</strong>
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Termasuk sarapan kurasi setiap pagi &amp; penjemputan bandara</span>
            </div>
          </div>
        </section>
        {/* ─── END: HeroSection ─── */}

        {/* ─── BEGIN: SectionThePlace ─── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-t border-stone-200/80" id="tentang">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Section Index Identifier */}
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-2">01 — The Place</p>
              <p className="text-stone-500 font-serif text-lg italic">Rasa tenang yang terasa seperti rumah.</p>
            </div>

            {/* Editorial Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-stone-900 leading-tight">
                Beberapa tempat memberi Anda pemandangan. <br className="hidden sm:inline" />
                Yang satu ini memberi Anda jeda.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 text-stone-600 font-normal leading-relaxed text-sm">
                <p>
                  Di antara hijaunya pepohonan Ubud, Amara membayangkan cara menginap yang lebih sederhana. Pagi tanpa
                  alarm. Percakapan tanpa terburu-buru. Satu rumah untuk Anda dan orang-orang terdekat.
                </p>
                <p>
                  Dirancang dengan perpaduan arsitektur vernakular Bali dan ketenangan modern. Tidak ada keramaian tamu
                  lain, hanya suara dedaunan, gemericik air, dan ruang yang benar-benar privat.
                </p>
              </div>
              <div className="pt-4">
                <a
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-900 hover:text-stone-600 transition-colors"
                  href="#pengalaman"
                >
                  <span>Kenali Amara</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ─── END: SectionThePlace ─── */}

        {/* ─── BEGIN: SectionSanctuaryGallery ─── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16" id="ruang">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-2 block">
                02 — Your Private Sanctuary
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900">
                Masuk. Tarik napas. <br />
                Merasa di rumah.
              </h2>
            </div>
            <div className="max-w-md text-right md:text-left">
              <p className="text-xs text-stone-500 mb-2">Material alami, cahaya yang hangat, dan ruang untuk menjadi diri sendiri.</p>
              <button
                type="button"
                onClick={() => setGalleryOpen(true)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-stone-600 cursor-pointer"
              >
                Lihat semua galeri foto ↗
              </button>
            </div>
          </div>

          {/* Editorial Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Large Photo */}
            <div
              onClick={() => setGalleryOpen(true)}
              className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-stone-100 min-h-[460px] cursor-pointer"
            >
              <Image
                src={STITCH_IMAGES.poolDeck}
                alt="Outdoor swimming pool and open deck at Amara"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-2xl font-light">Langit terbuka. Waktu milik Anda.</p>
                <p className="text-xs text-white/80 mt-1">Kolam renang privat 15 meter menghadap lembah</p>
              </div>
            </div>

            {/* Sub Grid Right Side */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Card 1 */}
              <div
                onClick={() => setGalleryOpen(true)}
                className="group relative rounded-3xl overflow-hidden bg-stone-100 h-64 cursor-pointer"
              >
                <Image
                  src={STITCH_IMAGES.bedroom}
                  alt="Warm master bedroom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <span className="text-[10px] uppercase tracking-wider opacity-80 block">Kamar Tidur Utama</span>
                  <p className="font-serif text-xl font-light">Bangun lebih pelan.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                onClick={() => setGalleryOpen(true)}
                className="group relative rounded-3xl overflow-hidden bg-stone-100 h-64 cursor-pointer"
              >
                <Image
                  src={STITCH_IMAGES.livingRoom}
                  alt="Open living room with timber furniture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <span className="text-[10px] uppercase tracking-wider opacity-80 block">Ruang Berkumpul</span>
                  <p className="font-serif text-xl font-light">Ruang untuk bercerita.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specification Ribbon */}
          <div className="mt-6 py-4 px-6 rounded-2xl bg-white border border-stone-200 flex flex-wrap items-center justify-between text-xs text-stone-600 gap-4">
            <span className="font-semibold text-stone-900 tracking-wide">AMARA PRIVATE VILLA</span>
            <span>• 3 Kamar Tidur Berpenyejuk Udara</span>
            <span>• Hingga 6 Tamu Dewasa</span>
            <span>• Kolam Renang Privat &amp; Bale Bengong</span>
            <span>• Butler &amp; Chef On-Demand</span>
          </div>
        </section>
        {/* ─── END: SectionSanctuaryGallery ─── */}

        {/* ─── BEGIN: SectionAmenities ─── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-t border-stone-200/80" id="fasilitas">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-2">03 — Fasilitas Terkurasi</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900">
              Semua yang perlu. Tanpa yang berlebih.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Feature 1: Narrative Card */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-medium text-stone-900 mb-3">
                  Lebih banyak bersama. Lebih sedikit terganggu.
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Satu villa utuh hanya untuk rombongan Anda. Tidak ada tamu asing di lorong atau kebisingan hotel
                  konvensional.
                </p>
              </div>
              <div className="pt-8">
                <span className="text-xs font-mono text-stone-400 tracking-wider">01 // EKSKLUSIVITAS PENUH</span>
              </div>
            </div>

            {/* Center Image Card */}
            <div className="relative rounded-3xl overflow-hidden bg-stone-100 min-h-[320px]">
              <Image
                src={STITCH_IMAGES.diningTable}
                alt="Interior architectural dining table with organic lamps"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Feature 2: Room Capacity & Specs */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
                  Room for Six People
                </div>
                <div className="font-serif text-5xl font-light text-stone-900 mb-6">
                  06 <span className="text-sm font-sans font-normal text-stone-500">tamu satu rumah</span>
                </div>
                <ul className="space-y-3.5 text-xs text-stone-600">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                    <span>Kolam renang privat &amp; dek berjemur</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                    <span>3 kamar tidur dengan kamar mandi semi-terbuka</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                    <span>Kecepatan Wi-Fi tinggi &amp; ruang kerja hening</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                    <span>Dapur lengkap &amp; taman tropis rimbun</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8 border-t border-stone-100">
                <span className="text-xs font-mono text-stone-400 tracking-wider">02 // SPESIFIKASI PROPERTI</span>
              </div>
            </div>
          </div>
        </section>
        {/* ─── END: SectionAmenities ─── */}

        {/* ─── BEGIN: SectionDailyRhythm ─── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-t border-stone-200/80" id="pengalaman">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-2 block">
                04 — Ritme Harian
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-stone-900">
                Hari yang indah, tanpa banyak rencana.
              </h2>
            </div>

            {/* Interactive Phase Pill Indicator */}
            <div className="inline-flex p-1 bg-stone-200/60 rounded-full text-xs font-medium text-stone-600">
              <button
                type="button"
                onClick={() => setActiveTab("pagi")}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeTab === "pagi" ? "bg-white text-stone-900 shadow-sm" : "hover:text-stone-900"
                }`}
              >
                01 — Pagi
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("siang")}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeTab === "siang" ? "bg-white text-stone-900 shadow-sm" : "hover:text-stone-900"
                }`}
              >
                02 — Siang
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("malam")}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeTab === "malam" ? "bg-white text-stone-900 shadow-sm" : "hover:text-stone-900"
                }`}
              >
                03 — Malam
              </button>
            </div>
          </div>

          {/* Tab Content Cards */}
          {activeTab === "pagi" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {/* Morning Light Visual Card */}
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden h-80 bg-stone-100">
                  <Image
                    src={STITCH_IMAGES.morningBedroom}
                    alt="Morning sun rays spilling into bedroom"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light text-stone-900">Bangun mengikuti cahaya.</h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Biarkan tirai katun tipis menyaring sinar matahari pertama. Nikmati secangkir kopi Kintamani di teras
                    pribadi sebelum dunia terbangun.
                  </p>
                </div>
              </div>

              {/* Garden View Visual Card */}
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden h-80 bg-stone-100">
                  <Image
                    src={STITCH_IMAGES.gardenBreakfast}
                    alt="Lush green garden breakfast setup"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light text-stone-900">Buka pintu ke taman.</h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Suara gemerisik daun bambu dan aroma tanah basah. Sarapan buah tropis segar disajikan di meja makan
                    kayu jati.
                  </p>
                  <a className="inline-block text-xs font-semibold text-stone-900 hover:underline mt-2" href="#reservasi">
                    Sarapan kurasi untuk Anda ↗
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "siang" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden h-80 bg-stone-100">
                  <Image
                    src={STITCH_IMAGES.poolDeck}
                    alt="Afternoon sunlight by infinity pool"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light text-stone-900">Berenang di bawah sinar tropis.</h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Air kolam yang jernih memantulkan langit biru Ubud. Bersantai di bale bengong dengan buku favorit dan
                    semilir angin lembah.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden h-80 bg-stone-100">
                  <Image
                    src={STITCH_IMAGES.diningTable}
                    alt="Curated afternoon tea and dining"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light text-stone-900">Santap siang penuh privasi.</h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Nikmati sajian segar kurasi chef on-demand, mulai dari kelapa muda dingin hingga hidangan lokal khas Bali
                    yang disiapkan di dapur pribadi Anda.
                  </p>
                  <a className="inline-block text-xs font-semibold text-stone-900 hover:underline mt-2" href="#reservasi">
                    Layanan Butler &amp; Chef ↗
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "malam" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden h-80 bg-stone-100">
                  <Image
                    src={STITCH_IMAGES.twilight}
                    alt="Twilight view across Ubud"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light text-stone-900">Momen senja yang magis.</h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Langit lembah berubah ungu keemasan. Lampu-lampu hangat mulai berpendar, menciptakan atmosfer hening
                    yang tak terlupakan.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden h-80 bg-stone-100">
                  <Image
                    src={STITCH_IMAGES.livingRoom}
                    alt="Warm living pavilion at night"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light text-stone-900">Malam tanpa kebisingan.</h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Percakapan hangat di ruang berkumpul atau tidur lelap diiringi orkestra malam hutan tropis Ubud.
                  </p>
                  <a className="inline-block text-xs font-semibold text-stone-900 hover:underline mt-2" href="#reservasi">
                    Pesan Pengalaman Menginap ↗
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>
        {/* ─── END: SectionDailyRhythm ─── */}

        {/* ─── BEGIN: SectionFAQ ─── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-t border-stone-200/80" id="faq">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-2 block">
                05 — Tanya Jawab
              </span>
              <h2 className="text-3xl font-serif font-light text-stone-900 mb-4">
                Hal kecil, yang baik diketahui.
              </h2>
              <p className="text-xs text-stone-500 leading-relaxed mb-6">
                Butuh petunjuk tambahan seputar area Ubud atau detail reservasi? Hubungi tim butler kami kapan saja.
              </p>
              <a
                className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full border border-stone-300 text-stone-800 hover:bg-stone-900 hover:text-white transition-all"
                href="#reservasi"
              >
                <span>Panduan Kawasan Ubud</span>
                <span>↗</span>
              </a>
            </div>

            <div className="lg:col-span-8 divide-y divide-stone-200/70">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={faq.q} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center text-left font-medium cursor-pointer text-sm text-stone-900"
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`text-stone-400 transform transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ↓
                      </span>
                    </button>
                    {isOpen && (
                      <p className="text-stone-600 text-xs mt-3 leading-relaxed animate-fade-in">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* ─── END: SectionFAQ ─── */}

        {/* ─── BEGIN: BannerCTA ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="relative rounded-3xl overflow-hidden h-[420px] flex items-center justify-center text-center">
            <Image
              src={STITCH_IMAGES.twilight}
              alt="Tranquil twilight view of Ubud tropics"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[1px]" />
            <div className="relative z-10 max-w-xl px-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-stone-300 font-medium">
                Somewhere you can just be
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
                Sisakan ruang untuk diri sendiri.
              </h2>
              <div>
                <a
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-stone-100 text-stone-900 rounded-full text-xs font-semibold tracking-wide shadow-lg transition-all"
                  href="#reservasi"
                >
                  <span>Rencanakan tinggal Anda</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ─── END: BannerCTA ─── */}
      </main>

      {/* ─── BEGIN: Footer ─── */}
      <footer className="border-t border-stone-200 bg-[#FAF8F5] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-stone-200">
            <div>
              <span className="font-serif tracking-widest text-xl font-medium text-stone-900 uppercase">
                AMARA
              </span>
              <p className="text-xs text-stone-500 mt-1">Heningnya santai di Ubud. Setiap sudut dirancang dengan sengaja.</p>
            </div>
            <nav className="flex flex-wrap gap-8 text-xs font-medium text-stone-600">
              <a className="hover:text-stone-900 transition-colors" href="#tentang">
                Tentang
              </a>
              <a className="hover:text-stone-900 transition-colors" href="#ruang">
                Galeri
              </a>
              <a className="hover:text-stone-900 transition-colors" href="#fasilitas">
                Fasilitas
              </a>
              <a className="hover:text-stone-900 transition-colors" href="#faq">
                FAQ
              </a>
              <a className="hover:text-stone-900 transition-colors font-semibold text-stone-900" href="#reservasi">
                Rencanakan Menginap ↗
              </a>
            </nav>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-stone-400 pt-8 gap-4">
            <p>© 2026 Amara Private Villa Bali. Hak cipta dilindungi.</p>
            <div className="flex gap-6">
              <a className="hover:underline" href="#">
                Kebijakan Privasi
              </a>
              <a className="hover:underline" href="#">
                Ketentuan Layanan
              </a>
              <a className="hover:underline" href="#">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* ─── END: Footer ─── */}

      {/* ─── MODAL: Floorplan (Denah) ─── */}
      {floorplanOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 animate-scale-in">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                  Denah &amp; Tata Letak
                </span>
                <h3 className="font-serif text-2xl font-medium text-stone-900">AMARA Private Villa Sanctuary</h3>
              </div>
              <button
                type="button"
                onClick={() => setFloorplanOpen(false)}
                className="text-stone-400 hover:text-stone-900 text-2xl font-light leading-none p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-stone-600 leading-relaxed border-y border-stone-100 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60">
                  <span className="font-semibold text-stone-900 block mb-1">Pavilion Utama (180 m²)</span>
                  <p>Ruang keluarga semi-terbuka, meja makan kayu jati, dapur basah &amp; kering, guest powder room.</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60">
                  <span className="font-semibold text-stone-900 block mb-1">3 Suites (3 x 65 m²)</span>
                  <p>King-size bed, kamar mandi semi-outdoor dengan freestanding tub teraso, wardrobe walk-in.</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60">
                  <span className="font-semibold text-stone-900 block mb-1">Outdoor (450 m²)</span>
                  <p>15m infinity pool, sundeck kayu ulin, bale bengong, yoga pavilion, dan taman tropis bertingkat.</p>
                </div>
              </div>
              <p className="text-stone-500 italic pt-2">
                *Denah arsitektur skala lengkap dikirimkan bersama paket konfirmasi reservasi via Concierge kami.
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setFloorplanOpen(false)}
                className="px-6 py-2.5 rounded-full text-xs font-medium text-stone-600 hover:bg-stone-100 transition-colors"
              >
                Tutup
              </button>
              <a
                href="#reservasi"
                onClick={() => setFloorplanOpen(false)}
                className="px-6 py-2.5 rounded-full text-xs font-medium bg-stone-900 text-white hover:bg-stone-800 transition-colors"
              >
                Pilih Tanggal Menginap ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ─── MODAL: Full Gallery Lightbox ─── */}
      {galleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col p-4 sm:p-8 overflow-y-auto">
          <div className="max-w-6xl w-full mx-auto space-y-6 animate-scale-in">
            <div className="flex justify-between items-center text-white pb-4 border-b border-white/20">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/60">Galeri Foto Eksklusif</span>
                <h3 className="font-serif text-2xl font-light">Amara Private Villa Ubud</h3>
              </div>
              <button
                type="button"
                onClick={() => setGalleryOpen(false)}
                className="text-white/80 hover:text-white text-3xl font-light p-2 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div key={item.src} className="group relative rounded-2xl overflow-hidden bg-stone-900 h-64">
                  <Image src={item.src} alt={item.title} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-serif text-lg font-light">{item.title}</p>
                    <p className="text-[11px] text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-6">
              <button
                type="button"
                onClick={() => setGalleryOpen(false)}
                className="px-8 py-3 rounded-full bg-white text-stone-900 text-xs font-semibold hover:bg-stone-100 transition-colors cursor-pointer"
              >
                Kembali ke Halaman
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── MODAL: Booking Confirmation Feedback ─── */}
      {bookingSuccess && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center space-y-4 animate-scale-in">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl">
              ✓
            </div>
            <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
              Permintaan Reservasi
            </span>
            <h3 className="font-serif text-2xl font-medium text-stone-900">
              Villa Tersedia untuk Anda
            </h3>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60 text-left text-xs space-y-2 text-stone-600">
              <div className="flex justify-between">
                <span>Check-In:</span>
                <strong className="text-stone-900">{checkIn}</strong>
              </div>
              <div className="flex justify-between">
                <span>Check-Out:</span>
                <strong className="text-stone-900">{checkOut}</strong>
              </div>
              <div className="flex justify-between">
                <span>Jumlah Tamu:</span>
                <strong className="text-stone-900">{guests}</strong>
              </div>
              <div className="flex justify-between border-t border-stone-200 pt-2">
                <span>Estimasi:</span>
                <strong className="text-stone-900">Rp 16.400.000 (2 Malam)</strong>
              </div>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              Tim Concierge Amara akan menghubungi Anda melalui WhatsApp / Email dalam waktu 15 menit untuk memandu detail penjemputan dan preferensi sarapan kurasi.
            </p>
            <button
              type="button"
              onClick={() => setBookingSuccess(false)}
              className="w-full py-3 rounded-full bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition-colors"
            >
              Selesai
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
