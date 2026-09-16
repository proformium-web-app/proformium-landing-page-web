<!DOCTYPE html>

<html class="scroll-smooth" lang="tr" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Proformium | KOBİ'ler İçin Akıllı Teklif ve Takip Uygulaması</title>
<link href="https://fonts.googleapis.com" rel="preconnect">
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet">
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: "#8B1F3C",
            "primary-dark": "#6B142D",
            "primary-light": "#A82B4B",
            "primary-50": "#FDF2F4",
            "primary-100": "#FBE6EA",
            "background-light": "#F8FAFC",
            "background-dark": "#0B0F17",
          },
          fontFamily: {
            sans: ["'Plus Jakarta Sans'", "sans-serif"],
            display: ["'Space Grotesk'", "sans-serif"],
          },
          borderRadius: {
            DEFAULT: "1rem",
            '2xl': "1.25rem",
            '3xl': "1.75rem",
          },
          boxShadow: {
            'glow': '0 20px 40px -15px rgba(139, 31, 60, 0.25)',
            'card-soft': '0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.02)',
          }
        },
      },
    };
  </script>
<style>
    .glass-card {
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    .text-gradient {
      background: linear-gradient(135deg, #8B1F3C 0%, #C0325A 60%, #E25579 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .dark .text-gradient {
      background: linear-gradient(135deg, #F06A8C 0%, #E25579 50%, #FDA4AF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans antialiased transition-colors duration-300">
<header class="sticky top-0 z-50 bg-white/80 dark:bg-[#0B0F17]/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/20">
<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 100 100">
<path d="M22 14h36c19.88 0 36 16.12 36 36 0 19.88-16.12 36-36 36H36v-20h22c8.84 0 16-7.16 16-16s-7.16-16-16-16H22V14z"></path>
<rect height="6" rx="3" width="28" x="22" y="32"></rect>
<rect height="6" rx="3" width="28" x="22" y="42"></rect>
<rect height="6" rx="3" width="20" x="22" y="52"></rect>
</svg>
</div>
<span class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-display">Proformium</span>
</div>
<nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
<a class="hover:text-primary transition-colors" href="#sorun-cozum">Neden Proformium?</a>
<a class="hover:text-primary transition-colors" href="#nasil-calisir">İki Ana Güç</a>
<a class="hover:text-primary transition-colors" href="#ozellikler">Özellikler</a>
<a class="hover:text-primary transition-colors" href="#sektorler">Sektörler</a>
<a class="hover:text-primary transition-colors" href="#fiyatlandirma">Fiyatlandırma</a>
<a class="hover:text-primary transition-colors" href="#faq">S.S.S.</a>
</nav>
<div class="flex items-center gap-4">
<button aria-label="Tema Değiştir" class="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" id="theme-toggle">
<span class="material-symbols-outlined dark:hidden">dark_mode</span>
<span class="material-symbols-outlined hidden dark:inline">light_mode</span>
</button>
<a class="hidden sm:inline-flex text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary px-3 py-2" href="https://app.proformium.com/giris">Giriş Yap</a>
<a class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm shadow-md shadow-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98]" href="https://app.proformium.com/kayit">
          Ücretsiz Dene
        </a>
</div>
</div>
</header>
<section class="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
<div class="absolute inset-0 pointer-events-none overflow-hidden">
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 dark:bg-primary/20 blur-[130px] rounded-full"></div>
<div class="absolute -top-10 -left-20 w-72 h-72 bg-rose-200/40 dark:bg-rose-900/20 blur-3xl rounded-full"></div>
</div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
<div class="lg:col-span-6 space-y-8 text-left">
<div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 text-primary dark:text-rose-300 text-xs sm:text-sm font-semibold tracking-wide">
<span class="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
<span class="">✨ KOBİ'ler İçin Akıllı Teklif ve Takip Uygulaması</span>
</div>
<h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] font-display">
            Teklif Oluştur. <br>
            Gönder. Takip Et. <br>
<span class="text-gradient">Satışı Kapat.</span>
</h1>
<p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
            Müşterilerinize WhatsApp'tan profesyonel teklifler gönderin, açtıklarında anında haberiniz olsun. Tedarikçilerden zahmetsizce fiyat toplayın. Takipsizlikten kaçan satışlara son verin.
          </p>
<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
<a class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-base shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98]" href="https://app.proformium.com/kayit">
<span class="">14 Gün Ücretsiz Dene</span>
<span class="material-symbols-outlined text-lg">arrow_forward</span>
</a>
<a class="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-base transition-all" href="#nasil-calisir">
<span class="material-symbols-outlined text-primary text-2xl">play_circle</span>
<span class="">Nasıl Çalıştığını Gör</span>
</a>
</div>
<div class="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
<span class="flex items-center gap-1.5"><span class="text-primary font-bold">✓</span> Kredi kartı gerekmez</span>
<span class="flex items-center gap-1.5"><span class="text-primary font-bold">✓</span> 1 dakikada kurulum</span>
<span class="flex items-center gap-1.5"><span class="text-primary font-bold">✓</span> AB Frankfurt sunucularında güvenli</span>
</div>
</div>
<div class="lg:col-span-6 relative">
<div class="relative w-full max-w-xl mx-auto">
<div class="relative rounded-2xl p-4 sm:p-5 bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xl backdrop-blur-md transform lg:rotate-[-2deg] transition-all hover:rotate-0 duration-500">
<div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-full bg-rose-400"></div>
<div class="w-3 h-3 rounded-full bg-amber-400"></div>
<div class="w-3 h-3 rounded-full bg-emerald-400"></div>
<span class="text-xs text-slate-400 ml-2 font-mono">app.proformium.com/dashboard</span>
</div>
<div class="flex items-center gap-2">
<span class="px-2 py-0.5 text-[11px] font-bold rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">Canlı Takip</span>
</div>
</div>
<div class="grid grid-cols-3 gap-3 mb-4">
<div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
<p class="text-[11px] text-slate-500 dark:text-slate-400">Açık Teklifler</p>
<p class="text-lg font-bold text-slate-900 dark:text-white">₺284.500</p>
<span class="text-[10px] text-emerald-600 font-semibold">+18% bu ay</span>
</div>
<div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
<p class="text-[11px] text-slate-500 dark:text-slate-400">Okunma Oranı</p>
<p class="text-lg font-bold text-primary dark:text-rose-400">%94.2</p>
<span class="text-[10px] text-slate-500">WhatsApp ile</span>
</div>
<div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
<p class="text-[11px] text-slate-500 dark:text-slate-400">Kapanan Satış</p>
<p class="text-lg font-bold text-emerald-600 dark:text-emerald-400">42 Adet</p>
<span class="text-[10px] text-emerald-600 font-semibold">Hedef üstü</span>
</div>
</div>
<div class="space-y-2 text-xs">
<div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50/70 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
<span class="font-medium text-slate-700 dark:text-slate-200">Arslan Mimarlık Projesi</span>
</div>
<span class="font-semibold text-slate-900 dark:text-slate-100">₺142.000</span>
</div>
<div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50/70 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-amber-500"></span>
<span class="font-medium text-slate-700 dark:text-slate-200">Oto Bakım Paketi (34 AB 982)</span>
</div>
<span class="font-semibold text-slate-900 dark:text-slate-100">₺18.500</span>
</div>
</div>
</div>
<div class="relative -mt-16 sm:-mt-24 ml-auto w-[90%] sm:w-[85%] rounded-2xl p-5 sm:p-6 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 shadow-2xl z-20 transform hover:-translate-y-1 transition-all duration-300">
<div class="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
<div>
<span class="inline-block px-2.5 py-1 rounded bg-primary/10 text-primary dark:text-rose-300 font-bold text-xs tracking-wider">PROFORMA FATURA</span>
<p class="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mt-1">PRF-2026-084</p>
</div>
<div class="text-right">
<span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/70 px-2 py-0.5 rounded-full">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Müşteri Onayına Hazır
                  </span>
<p class="text-[10px] text-slate-400 mt-0.5">Geçerlilik: 7 Gün</p>
</div>
</div>
<div class="space-y-2 mb-4 text-xs">
<div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 font-medium">
<span class="">Açıklama</span>
<span class="">Tutar</span>
</div>
<div class="flex justify-between py-1 text-slate-800 dark:text-slate-200">
<span class="">Isı Yalıtımlı Alüminyum Doğrama & Montaj</span>
<span class="font-semibold">₺48.000</span>
</div>
<div class="flex justify-between py-1 text-slate-800 dark:text-slate-200">
<span class="">Temperli Konfor Cam Paketi (12 Takım)</span>
<span class="font-semibold">₺20.450</span>
</div>
</div>
<div class="pt-3 border-t border-dashed border-slate-200 dark:border-slate-700 flex items-end justify-between">
<div>
<div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-primary/30 bg-primary-50 dark:bg-primary/20 text-primary dark:text-rose-300 text-[10px] font-bold uppercase tracking-wider">
<span class="material-symbols-outlined text-xs">draw</span> Dijital Kaşe & İmzalı
                  </div>
</div>
<div class="text-right">
<p class="text-[11px] text-slate-400 font-medium">Genel Toplam (KDV Dahil)</p>
<p class="text-xl sm:text-2xl font-black text-primary dark:text-rose-400 font-display">₺68.450</p>
</div>
</div>
</div>
<div class="absolute -top-4 -left-4 sm:-left-8 z-30 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl animate-bounce duration-1000">
<span class="flex h-3 w-3 rounded-full bg-emerald-500"></span>
<div>
<p class="text-xs font-bold text-slate-900 dark:text-white">Müşteri Teklifi Açtı</p>
<p class="text-[10px] text-slate-400">2 dakika önce incelendi</p>
</div>
</div>
<div class="absolute -bottom-5 left-6 sm:left-12 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 text-white shadow-lg">
<span class="material-symbols-outlined text-sm">send</span>
<span class="text-xs font-bold">⚡ WhatsApp ile İletildi</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="py-20 bg-white dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800" id="sorun-cozum"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 bg-gradient-to-tr from-primary-50/70 via-white to-rose-50/50 dark:from-slate-900 dark:via-[#0E131F] dark:to-primary/10 border border-slate-200/80 dark:border-slate-800 shadow-sm"><div class="flex flex-col gap-10"><div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800"><div class="max-w-3xl space-y-3"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 text-primary dark:text-rose-300 text-xs font-bold font-mono tracking-widest uppercase"><span class="w-1.5 h-1.5 rounded-full bg-primary"></span><span class="">KARŞILAŞTIRMA</span></div><h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug font-display">Sorun PDF hazırlayamamak değil; <span class="text-primary dark:text-rose-400">"Düşüneyim" diyen müşteriyi unutmak</span> ve satışı başkasına kaptırmak.</h2><p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">KOBİ'lerin teklif süreçlerindeki en büyük 3 sızıntıyı belirledik ve Proformium ile kökten çözdük.</p></div><div class="shrink-0"><a href="#ozellikler" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm text-sm font-bold text-primary dark:text-rose-400 hover:text-primary-dark transition-all group"><span class="">Tüm özellikleri inceleyin</span><span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span></a></div></div><div class="w-full"><div class="overflow-x-auto"><table class="w-full text-left border-collapse"><thead class="border-b border-slate-200 dark:border-slate-800"><tr class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"><th class="pb-4 font-semibold text-slate-500 dark:text-slate-400">Özellik / Senaryo</th><th class="pb-4 px-3 sm:px-4 text-center whitespace-nowrap">Klasik Yöntem</th><th class="pb-4 px-3 sm:px-4 text-center whitespace-nowrap text-primary dark:text-rose-400">Proformium</th></tr></thead><tbody class="divide-y divide-slate-200/70 dark:divide-slate-800/80 text-xs sm:text-sm"><tr class="group"><td class="py-5 pr-4"><div class="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">Unutulan Takipler</div><p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Teklifi gönderdikten sonra araya günlük işler girer, müşteri rakibe gider.</p></td><td class="py-5 px-3 sm:px-4 text-center align-middle whitespace-nowrap"><div class="inline-flex flex-col items-center gap-1.5"><div class="w-8 h-8 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200/80 dark:border-rose-900/50 text-rose-500 flex items-center justify-center"><span class="material-symbols-outlined text-base font-bold">close</span></div><span class="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:inline-block">Unutulur & Satış Kaçar</span></div></td><td class="py-5 px-3 sm:px-4 text-center align-middle whitespace-nowrap"><div class="inline-flex flex-col items-center gap-1.5"><div class="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center"><span class="material-symbols-outlined text-base font-bold">check</span></div><span class="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold hidden sm:inline-block">Otomatik Hatırlatma</span></div></td></tr><tr class="group"><td class="py-5 pr-4"><div class="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">WhatsApp'ta Kaybolan Dosyalar</div><p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">PDF açılmaz, revize istendiğinde eski ve yeni dosyalar birbirine karışır.</p></td><td class="py-5 px-3 sm:px-4 text-center align-middle whitespace-nowrap"><div class="inline-flex flex-col items-center gap-1.5"><div class="w-8 h-8 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200/80 dark:border-rose-900/50 text-rose-500 flex items-center justify-center"><span class="material-symbols-outlined text-base font-bold">close</span></div><span class="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:inline-block">Karışıklık & Açılmayan PDF</span></div></td><td class="py-5 px-3 sm:px-4 text-center align-middle whitespace-nowrap"><div class="inline-flex flex-col items-center gap-1.5"><div class="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center"><span class="material-symbols-outlined text-base font-bold">check</span></div><span class="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold hidden sm:inline-block">Özel Canlı Web Linki</span></div></td></tr><tr class="group"><td class="py-5 pr-4"><div class="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">Excel'de Saatler Süren Fiyat Arama</div><p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Tedarikçileri tek tek arayıp WhatsApp'tan sormak, Excel'de karşılaştırmak saatlerinizi çalar.</p></td><td class="py-5 px-3 sm:px-4 text-center align-middle whitespace-nowrap"><div class="inline-flex flex-col items-center gap-1.5"><div class="w-8 h-8 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200/80 dark:border-rose-900/50 text-rose-500 flex items-center justify-center"><span class="material-symbols-outlined text-base font-bold">close</span></div><span class="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:inline-block">Saatler Süren Manuel İş</span></div></td><td class="py-5 px-3 sm:px-4 text-center align-middle whitespace-nowrap"><div class="inline-flex flex-col items-center gap-1.5"><div class="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center"><span class="material-symbols-outlined text-base font-bold">check</span></div><span class="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold hidden sm:inline-block">Yan Yana Teklif Toplama</span></div></td></tr></tbody></table></div></div></div></div></div></section>
<section class="py-24" id="nasil-calisir"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
    <span class="text-xs font-bold uppercase tracking-widest text-primary">NASIL ÇALIŞIR?</span>
    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
      Teklifi Hazırla, Gönder, Takip Et ve <span class="text-primary">Satışı Kapat</span>
    </h2>
    <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
      Karmaşık süreçlere boğulmadan dakikalar içinde profesyonel teklif akışınızı yönetin.
    </p>
  </div>

<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
    <!-- Left Column: Step 01 & Step 02 -->
    <div class="lg:col-span-4 flex flex-col gap-10 lg:gap-14 text-left lg:text-right">
      <div>
        <div class="text-4xl lg:text-5xl font-bold text-primary/80 tracking-tight font-display mb-2">01</div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Müşteriyi ve Kalemleri Seç</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Kayıtlı ürün ve müşteri hafızasından saniyeler içinde teklif içeriğini doldurun.
        </p>
      </div>

      <div>
        <div class="text-4xl lg:text-5xl font-bold text-primary/80 tracking-tight font-display mb-2">02</div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">WhatsApp ile Tek Tıkla Paylaş</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          PDF indirme derdi olmadan, firmaya özel şık bağlantı tek dokunuşla müşterinize gitsin.
        </p>
      </div>
    </div>
    
    <!-- Center Column: Elevated Dashboard Mockup -->
    <div class="lg:col-span-4 flex justify-center items-center relative">
      <div class="relative w-full max-w-lg">
        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 transform hover:scale-[1.01] transition-transform duration-300">
          <div class="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-800">
            <div class="flex items-center gap-1.5">
              <div class="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            </div>
            <span class="text-[11px] font-mono text-slate-400">app.proformium.com</span>
            <span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400">Canlı</span>
          </div>
          <img class="w-full h-auto object-cover block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD2mtSN1nrnIcrpj7sZ8it16H7FY8i31ODwHRsm7AJi2VhaXZU-pblTvkBGdlgoa4oWwxWcdIoN6Rs9-F9_P1qkapepgHBo6YnD2mwrWi6T3r_JfSReGOqlzkJNcHrPPVgGpKks6Zm--cvF9Kukmys3XUSq9tePq66tPVfTl35i7MTaOBgPD-YYgt1rzRUmjCOZcQRN-DzAmaGAfTBdYp7obIxBwD71sG5GpwZhdubi2bZaiImUuiR" alt="Proformium Dashboard">
        </div>
    
        <!-- Subtle floating badges -->
        <div class="absolute -top-3 -right-3 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-100">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span class="">Canlı Bildirim</span>
        </div>
        <div class="absolute -bottom-3 -left-3 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-white shadow-lg text-xs font-semibold">
          <span class="material-symbols-outlined text-sm">visibility</span>
          <span class="">Müşteri Görüntüledi</span>
        </div>
      </div>
    </div>
    
    <!-- Right Column: Step 03 & Step 04 -->
    <div class="lg:col-span-4 flex flex-col gap-10 lg:gap-14 text-left">
      <div>
        <div class="text-4xl lg:text-5xl font-bold text-primary/80 tracking-tight font-display mb-2">03</div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Görüntülendiği An Haberdar Ol</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Müşteri teklifi açtığı saniye zaman damgasıyla haberiniz olsun; sessizlik ve belirsizlik bitsin.
        </p>
      </div>
    
      <div>
        <div class="text-4xl lg:text-5xl font-bold text-primary/80 tracking-tight font-display mb-2">04</div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Takip Et & Satışı Kapat</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Süresi gelen teklifleri hatırlatın, revizyonları anında yönetin ve satışı kazanın.
        </p>
      </div>
    </div>

</div>
</div></section>
<section class="py-20 bg-white dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800" id="ozellikler"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
    <span class="text-xs font-bold uppercase tracking-widest text-primary">NEDEN PROFORMIUM?</span>
    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
      KOBİ'lerin Proformium'u <span class="text-gradient">Tercih Etme Nedenleri</span>
    </h2>
    <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
      Masa başında saatler kaybetmeyin, sahadayken cep telefonunuzdan tüm ticareti güvenle yönetin.
    </p>
  </div>

<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
    <!-- Left Column: Generous Floating Proforma Document Asset with ambient glows -->
    <div class="lg:col-span-6 relative flex justify-center items-center">
      <div class="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-rose-100/50 to-transparent dark:from-primary/20 dark:via-transparent rounded-3xl blur-2xl pointer-events-none"></div>
      <div class="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 group transition-all duration-500 hover:shadow-glow">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiPOReN1LvMzUDUe7lTMqmd_sABehqkMqibqPuvpx-QEWdsx5PUGSNKkYSklNGTpNdyNJEEwp33wd1KRCG27MnS9NJotYnfQ6tI4OKH7-Rhl--AltndudxKDu7f5VRKZgsm-lFDEloAB5g0eI9DvO2I2_HJCF7ad0RbYm7lVkvk1aWQjl2csc809nw9Vtv0jQ-uakdnJYlpycFMNDWSP5XtZVTZQ-cJUDOREGaqEWl9Greplp2hCfa" alt="Profesyonel Proformium Fiyat Teklifi ve Dijital Kaşeli Belgeler" class="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500 block">
        <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-lg flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-xl">verified</span>
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white">Resmi & Kurumsal Görünüm</h4>
              <p class="text-xs text-slate-500 dark:text-slate-400">Dijital kaşe ve imzalı şablonlar</p>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 hidden sm:inline-block">Anında Hazır</span>
        </div>
      </div>
    </div>

    <!-- Right Column: Vertical List of 5 Polished Feature Cards -->
    <div class="lg:col-span-6 flex flex-col gap-6">
      <!-- Item 1 -->
      <div class="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-background-light dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 hover:bg-white dark:hover:bg-slate-800/70 transition-all group">
        <div class="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
          <span class="material-symbols-outlined text-2xl">schedule</span>
        </div>
        <div class="space-y-1.5">
          <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Zaman Damgalı Görüntülenme Takibi
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Müşteriniz teklif linkine tıkladığı an haberiniz olsun. Teklifi ne zaman açtığını, kaç kez incelediğini ve en son ne zaman baktığını anlık görün.
          </p>
        </div>
      </div>
    
      <!-- Item 2 -->
      <div class="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-background-light dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 hover:bg-white dark:hover:bg-slate-800/70 transition-all group">
        <div class="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
          <span class="material-symbols-outlined text-2xl">chat</span>
        </div>
        <div class="space-y-1.5">
          <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Tek Tıkla WhatsApp Paylaşımı
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Ayrı ayrı dosya kaydetme derdi olmadan, hazır nezaket metni ve direkt müşteri linkiyle tek dokunuşla WhatsApp'tan paylaşın.
          </p>
        </div>
      </div>
    
      <!-- Item 3 -->
      <div class="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-background-light dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 hover:bg-white dark:hover:bg-slate-800/70 transition-all group">
        <div class="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
          <span class="material-symbols-outlined text-2xl">history_edu</span>
        </div>
        <div class="space-y-1.5">
          <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Müşteri ve Ürün Hafızası
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Daha önce bu müşteriye hangi fiyattan vermiştiniz? Kalem adını yazmaya başlar başlamaz son birim fiyatınız ve iskonto oranınız otomatik önerilir.
          </p>
        </div>
      </div>
    
      <!-- Item 4 -->
      <div class="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-background-light dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 hover:bg-white dark:hover:bg-slate-800/70 transition-all group">
        <div class="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-primary dark:text-rose-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
          <span class="material-symbols-outlined text-2xl">draw</span>
        </div>
        <div class="space-y-1.5">
          <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Dijital Kaşe & Parmakla İmza
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Şirket kaşenizi yükleyin veya telefon ekranına parmağınızla imza atarak saniyeler içinde resmi görünümlü, güven veren proforma belgesi oluşturun.
          </p>
        </div>
      </div>
    
      <!-- Item 5 -->
      <div class="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-background-light dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 hover:bg-white dark:hover:bg-slate-800/70 transition-all group">
        <div class="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
          <span class="material-symbols-outlined text-2xl">update</span>
        </div>
        <div class="space-y-1.5">
          <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Kusursuz Revizyon ve Sürüm Takibi
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Rev.1, Rev.2 geçmişi şeffafça korunur. Müşterideki link her zaman en son güncel tutarı gösterir, çift başlılık ve karışıklık yaşanmaz.
          </p>
        </div>
      </div>
    </div>

</div>
</div></section>
<section class="py-24" id="sektorler"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Section Header -->
  <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 text-primary dark:text-rose-300 text-xs font-bold font-mono tracking-widest uppercase">
      <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
      <span class="">SEKTÖREL DİNAMİKLERE UYUMLU</span>
    </div>
    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
      Hangi Sektördesiniz? <span class="text-primary dark:text-rose-400">Proformium Size Hazır.</span>
    </h2>
    <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
      Türkiye'de her gün yüzlerce işletme farklı dinamiklerine göre Proformium kullanıyor.
    </p>
  </div>

<!-- Sector Selector Navigation Tabs -->

<div class="flex items-center justify-center mb-10 overflow-x-auto pb-2">
    <div class="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm gap-2" id="sector-tabs" role="tablist">
      <button type="button" class="sector-tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all bg-primary text-white shadow-md shadow-primary/25" data-target="sector-oto">
        <span class="">🚗</span>
        <span class="">Oto Servis & Ekspertiz</span>
      </button>
      <button type="button" class="sector-tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800" data-target="sector-mobilya">
        <span class="">🛋️</span>
        <span class="">Mobilya & İç Mimari</span>
      </button>
      <button type="button" class="sector-tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800" data-target="sector-klima">
        <span class="">❄️</span>
        <span class="">Klima & Tesisat</span>
      </button>
      <button type="button" class="sector-tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800" data-target="sector-cam">
        <span class="">🪟</span>
        <span class="">Cam Balkon & Alüminyum</span>
      </button>
    </div>
  </div>

<!-- Sector Interactive Showcase Panels -->

<div id="sector-panels-container" class="mb-12">
    <!-- Panel 1: Oto Servis & Ekspertiz (Active) -->
    <div id="sector-oto" class="sector-panel block rounded-3xl p-6 sm:p-10 lg:p-12 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl transition-all">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left: Sector Highlights -->
        <div class="lg:col-span-6 space-y-6 text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold">
            <span class="material-symbols-outlined text-base">directions_car</span>
            <span class="">Oto Servis & Ekspertiz İçin Özel</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display leading-snug">
            Plaka ile 30 saniyede teklif, parça ve işçilik net ayrımı.
          </h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Serviste araç bekletmeye, karmaşık kâğıt formlarla müşteri kafasını karıştırmaya son. Müşterinin WhatsApp'ına direkt ruhsat detaylı profesyonel teklif gönderin, anında onay alın.
          </p>
          <ul class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-sm font-bold">check</span>
              </span>
              <span class="">Plaka bazlı teklif arama ve araç servis geçmişi tek ekranda</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-sm font-bold">check</span>
              </span>
              <span class="">Yedek parça ve usta işçilik kalemlerini şeffafça ayrı gösterme</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-sm font-bold">check</span>
              </span>
              <span class="">Araç sahibine WhatsApp'tan tek tıkla onaylatma & canlı okundu bildirimi</span>
            </li>
          </ul>
          <div class="flex flex-wrap items-center gap-2 pt-2">
            <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">#OtoServis</span>
            <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">#YedekParça</span>
            <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">#PlakaSorgu</span>
          </div>
          <div>
            <a href="https://app.proformium.com/kayit" class="inline-flex items-center gap-2 text-sm font-bold text-primary dark:text-rose-400 hover:text-primary-dark transition-colors">
              <span class="">Oto Servis Şablonunu Gör</span>
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </div>

        <!-- Right: Proposal Mockup -->
        <div class="lg:col-span-6">
          <div class="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-5 sm:p-6 shadow-inner relative">
            <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700 mb-4">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">TEKLİF DETAYI</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono">34 ATS 1908 • Ford Focus</h4>
              </div>
              <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-600 border border-amber-200 dark:border-amber-900/50 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
                <span class="">Onay Bekliyor</span>
              </span>
            </div>
            <div class="space-y-2.5 mb-5 text-xs">
              <div class="flex justify-between items-center p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div>
                  <p class="font-bold text-slate-800 dark:text-slate-200">Periyodik Bakım & Orijinal Filtre Seti</p>
                  <p class="text-[10px] text-slate-400">Castrol Edge 5W-30 + Polen/Hava/Yağ Filtresi</p>
                </div>
                <span class="font-bold text-slate-900 dark:text-white">₺4.250</span>
              </div>
              <div class="flex justify-between items-center p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div>
                  <p class="font-bold text-slate-800 dark:text-slate-200">Ön Fren Balata Değişimi & İşçilik</p>
                  <p class="text-[10px] text-slate-400">Ferodo Marka Balata + Fren Temizliği</p>
                </div>
                <span class="font-bold text-slate-900 dark:text-white">₺1.850</span>
              </div>
              <div class="flex justify-between items-center p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div>
                  <p class="font-bold text-slate-800 dark:text-slate-200">Rot & Balans Ayarı</p>
                  <p class="text-[10px] text-slate-400">4 Lastik Hassas Bilgisayarlı Ölçüm</p>
                </div>
                <span class="font-bold text-slate-900 dark:text-white">₺650</span>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-primary/10 dark:bg-primary/20 border border-primary/20 flex items-center justify-between mb-3">
              <span class="text-xs font-bold text-primary dark:text-rose-300">Genel Toplam (KDV Dahil):</span>
              <span class="text-lg font-black text-primary dark:text-rose-300 font-display">₺6.750</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
              <span class="flex items-center gap-1 text-emerald-600 font-semibold">
                <span class="material-symbols-outlined text-sm">check_circle</span> Müşteri teklifi 14:20'de açtı ve inceledi
              </span>
              <span class="font-mono">#PRF-8942</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Panel 2: Mobilya & İç Mimari -->
    <div id="sector-mobilya" class="sector-panel hidden rounded-3xl p-6 sm:p-10 lg:p-12 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl transition-all">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-6 space-y-6 text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-xs font-bold">
            <span class="material-symbols-outlined text-base">chair</span>
            <span class="">Mobilya & İç Mimari İçin Özel</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display leading-snug">
            Özel ölçüye göre detaylandırma, opsiyonlu lüks teklifler.
          </h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Gövde malzemesi, kapak rengi ve mekanizma alternatiflerini tek sayfada müşteriye sunun. Müşteri evindeyken cep telefonundan alternatifleri inceleyip onaylasın.
          </p>
          <ul class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-sm font-bold">check</span>
              </span>
              <span class="">MDFLam, Lake ve Akrilik opsiyonlarını yan yana kıyaslama</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-sm font-bold">check</span>
              </span>
              <span class="">Revizyon geçmişi (Rev.1, Rev.2) ile değişen ölçüleri şeffaf takip</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-sm font-bold">check</span>
              </span>
              <span class="">Proje bazlı teslim tarihi ve ödeme planı ekleme</span>
            </li>
          </ul>
          <div class="flex flex-wrap items-center gap-2 pt-2">
            <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">#İçMimarlık</span>
            <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">#Özelİmalat</span>
            <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">#MutfakTasarım</span>
          </div>
          <div>
            <a href="https://app.proformium.com/kayit" class="inline-flex items-center gap-2 text-sm font-bold text-primary dark:text-rose-400 hover:text-primary-dark transition-colors">
              <span class="">İç Mimari Şablonunu Gör</span>
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </div>
        <div class="lg:col-span-6">
          <div class="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-5 sm:p-6 shadow-inner relative">
            <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700 mb-4">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">PROJE KODU</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono">PRJ-ACARKENT • Villa Mutfak</h4>
              </div>
              <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1">
                <span class="material-symbols-outlined text-xs">verified</span>
                <span class="">Rev.2 Onaylandı</span>
              </span>
            </div>
            <div class="space-y-2.5 mb-5 text-xs">
              <div class="flex justify-between items-center p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div>
                  <p class="font-bold text-slate-800 dark:text-slate-200">Ada Mutfak & Akrilik Gövde Tasarımı</p>
                  <p class="text-[10px] text-slate-400">Blum Aventos kalkar kapak donanımları</p>
                </div>
                <span class="font-bold text-slate-900 dark:text-white">₺82.000</span>
              </div>
              <div class="flex justify-between items-center p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div>
                  <p class="font-bold text-slate-800 dark:text-slate-200">Kuvars Tezgah & Şelale Panel</p>
                  <p class="text-[10px] text-slate-400">Belenco Calacatta 20mm honlu yüzey</p>
                </div>
                <span class="font-bold text-slate-900 dark:text-white">₺34.500</span>
              </div>
              <div class="flex justify-between items-center p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div>
                  <p class="font-bold text-slate-800 dark:text-slate-200">Montaj, Nakliye & İnce Ayar</p>
                  <p class="text-[10px] text-slate-400">Uzman montaj ekibi 2 gün</p>
                </div>
                <span class="font-bold text-slate-900 dark:text-white">₺8.500</span>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-primary/10 dark:bg-primary/20 border border-primary/20 flex items-center justify-between mb-3">
              <span class="text-xs font-bold text-primary dark:text-rose-300">Proje Toplamı (KDV Dahil):</span>
              <span class="text-lg font-black text-primary dark:text-rose-300 font-display">₺125.000</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
              <span class="flex items-center gap-1 text-emerald-600 font-semibold">
                <span class="material-symbols-outlined text-sm">thumb_up</span> Müşteri mobil linkten onay verdi
              </span>
              <span class="font-mono">#PRF-7014</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Panel 3: Klima, Tesisat & Elektrik -->
    <div id="sector-klima" class="sector-panel hidden rounded-3xl p-6 sm:p-10 lg:p-12 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl transition-all">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-6 space-y-6 text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 text-xs font-bold">
            <span class="material-symbols-outlined text-base">mode_fan</span>
            <span class="">Klima, Tesisat & Elektrik İçin Özel</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display leading-snug">
            Keşif esnasında cep telefonundan 2 dakikada metraj girin.
          </h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Daha sahadayken müşteri yanındayken bakır boru metrajını, klima kapasitesini ve montaj bedelini hesaplayın; akşama kalmadan sıcağı sıcağına satışı bağlayın.
          </p>
          <ul class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-sm font-bold">check</span>
              </span>
              <span class="">Mobil keşif modu ile akıllı telefon üzerinden anlık teklif</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-sm font-bold">check</span>
              </span>
              <span class="">Boru, kablo ve gaz metrajına göre otomatik toplam hesaplama</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-sm font-bold">check</span>
              </span>
              <span class="">Dijital kaşe ve yetkili servis garanti şartları şablonu</span>
            </li>
          </ul>
          <div class="flex flex-wrap items-center gap-2 pt-2">
            <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">#İklimlendirme</span>
            <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">#VRFSistem</span>
            <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">#HızlıKeşif</span>
          </div>
          <div>
            <a href="https://app.proformium.com/kayit" class="inline-flex items-center gap-2 text-sm font-bold text-primary dark:text-rose-400 hover:text-primary-dark transition-colors">
              <span class="">Tesisat Şablonunu Gör</span>
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </div>
        <div class="lg:col-span-6">
          <div class="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-5 sm:p-6 shadow-inner relative">
            <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700 mb-4">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">KEŞİF & MONTAJ</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono">Daire 14 • Multi-Split Kurulumu</h4>
              </div>
              <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1">
                <span class="material-symbols-outlined text-xs">verified</span>
                <span class="">Keşif Onaylandı</span>
              </span>
            </div>
            <div class="space-y-2.5 mb-5 text-xs">
              <div class="flex justify-between items-center p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div>
                  <p class="font-bold text-slate-800 dark:text-slate-200">18.000 BTU Inverter Dış Ünite</p>
                  <p class="text-[10px] text-slate-400">A++ Enerji Sınıfı R32 Gazlı Sistem</p>
                </div>
                <span class="font-bold text-slate-900 dark:text-white">₺31.200</span>
              </div>
              <div class="flex justify-between items-center p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div>
                  <p class="font-bold text-slate-800 dark:text-slate-200">2x 9.000 BTU Duvar Tipi İç Ünite</p>
                  <p class="text-[10px] text-slate-400">Sessiz Mod & Wi-Fi Kontrol Modülü</p>
                </div>
                <span class="font-bold text-slate-900 dark:text-white">₺22.800</span>
              </div>
              <div class="flex justify-between items-center p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div>
                  <p class="font-bold text-slate-800 dark:text-slate-200">14m Bakır Borulama & Vakumlama</p>
                  <p class="text-[10px] text-slate-400">İzolasyonlu bakır hat + montaj askıları</p>
                </div>
                <span class="font-bold text-slate-900 dark:text-white">₺4.900</span>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-primary/10 dark:bg-primary/20 border border-primary/20 flex items-center justify-between mb-3">
              <span class="text-xs font-bold text-primary dark:text-rose-300">Anahtar Teslim Tutar:</span>
              <span class="text-lg font-black text-primary dark:text-rose-300 font-display">₺58.900</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
              <span class="flex items-center gap-1 text-emerald-600 font-semibold">
                <span class="material-symbols-outlined text-sm">check_circle</span> 3 yıl garanti belgesi eklendi
              </span>
              <span class="font-mono">#PRF-5521</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Panel 4: Cam Balkon & Alüminyum -->
    <div id="sector-cam" class="sector-panel hidden rounded-3xl p-6 sm:p-10 lg:p-12 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl transition-all">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-6 space-y-6 text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
            <span class="material-symbols-outlined text-base">balcony</span>
            <span class="">Cam Balkon & Alüminyum Doğrama İçin Özel</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display leading-snug">
            Metrekare hesaplamaları ve yan yana tedarikçi fiyat toplama.
          </h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Cam fabrikasından ve profil toptancısından gelen fiyatları tek tuşla yan yana kıyaslayın, kendi kar marjınızı ekleyip saniyeler içinde net teklifinizi müşteriye iletin.
          </p>
          <ul class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-sm font-bold">check</span>
              </span>
              <span class="">En x Boy formülüyle otomatik m² ve fire maliyeti çıkarma</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-sm font-bold">check</span>
              </span>
              <span class="">3 farklı cam fabrikasından link ile tek tıkla fiyat toplama</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-sm font-bold">check</span>
              </span>
              <span class="">Isıcam Konfor, Temperli Füme ve Şeffaf cam seçenekleri</span>
            </li>
          </ul>
          <div class="flex flex-wrap items-center gap-2 pt-2">
            <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">#CamBalkon</span>
            <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">#Alüminyum</span>
            <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">#TedarikçiToplama</span>
          </div>
          <div>
            <a href="https://app.proformium.com/kayit" class="inline-flex items-center gap-2 text-sm font-bold text-primary dark:text-rose-400 hover:text-primary-dark transition-colors">
              <span class="">Cam Balkon Şablonunu Gör</span>
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </div>
        <div class="lg:col-span-6">
          <div class="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-5 sm:p-6 shadow-inner relative">
            <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700 mb-4">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">PROFORMA TEKLİF</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono">Balkon Kapatma • 18.5 m² Isıcamlı</h4>
              </div>
              <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1">
                <span class="material-symbols-outlined text-xs">verified</span>
                <span class="">Fiyatlar Güncel</span>
              </span>
            </div>
            <div class="space-y-2.5 mb-5 text-xs">
              <div class="flex justify-between items-center p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div>
                  <p class="font-bold text-slate-800 dark:text-slate-200">Tiara Isıcamlı Katlanır Sistem (18.5 m²)</p>
                  <p class="text-[10px] text-slate-400">Eloksallı Antrasit Alüminyum Profil Kasa</p>
                </div>
                <span class="font-bold text-slate-900 dark:text-white">₺37.000</span>
              </div>
              <div class="flex justify-between items-center p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div>
                  <p class="font-bold text-slate-800 dark:text-slate-200">4+14+4 Temperli Konfor Isıcam</p>
                  <p class="text-[10px] text-slate-400">Şişecam Patentli Güneş Kontrollü Cam</p>
                </div>
                <span class="font-bold text-slate-900 dark:text-white">₺16.650</span>
              </div>
              <div class="flex justify-between items-center p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div>
                  <p class="font-bold text-slate-800 dark:text-slate-200">Montaj, Silikon & Yalıtım İşi</p>
                  <p class="text-[10px] text-slate-400">Paslanmaz çelik rulman ve aksesuarlar</p>
                </div>
                <span class="font-bold text-slate-900 dark:text-white">₺4.200</span>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-primary/10 dark:bg-primary/20 border border-primary/20 flex items-center justify-between mb-3">
              <span class="text-xs font-bold text-primary dark:text-rose-300">Toplam Teklif Tutarı:</span>
              <span class="text-lg font-black text-primary dark:text-rose-300 font-display">₺57.850</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
              <span class="flex items-center gap-1 text-emerald-600 font-semibold">
                <span class="material-symbols-outlined text-sm">send</span> WhatsApp ile iletildi • 7 gün geçerli
              </span>
              <span class="font-mono">#PRF-3108</span>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>

<!-- Bottom Quick Glance Sector Bento Cards -->

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="sector-card-quick p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 shadow-sm flex items-center gap-3.5 transition-all cursor-pointer" onclick="window.switchSector('sector-oto')">
      <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-xl">directions_car</span>
      </div>
      <div class="min-w-0">
        <h4 class="text-xs font-bold text-slate-900 dark:text-white truncate">Oto Servis & Ekspertiz</h4>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">Plaka & parça takibi</p>
      </div>
    </div>

    <div class="sector-card-quick p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 shadow-sm flex items-center gap-3.5 transition-all cursor-pointer" onclick="window.switchSector('sector-mobilya')">
      <div class="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-xl">chair</span>
      </div>
      <div class="min-w-0">
        <h4 class="text-xs font-bold text-slate-900 dark:text-white truncate">Mobilya & İç Mimari</h4>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">Özel ölçü & revizyonlar</p>
      </div>
    </div>
    
    <div class="sector-card-quick p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 shadow-sm flex items-center gap-3.5 transition-all cursor-pointer" onclick="window.switchSector('sector-klima')">
      <div class="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-xl">mode_fan</span>
      </div>
      <div class="min-w-0">
        <h4 class="text-xs font-bold text-slate-900 dark:text-white truncate">Klima & Tesisat</h4>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">Hızlı keşif & metraj</p>
      </div>
    </div>
    
    <div class="sector-card-quick p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 shadow-sm flex items-center gap-3.5 transition-all cursor-pointer" onclick="window.switchSector('sector-cam')">
      <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-xl">balcony</span>
      </div>
      <div class="min-w-0">
        <h4 class="text-xs font-bold text-slate-900 dark:text-white truncate">Cam Balkon & Alüminyum</h4>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">m² & tedarikçi toplama</p>
      </div>
    </div>

</div>
</div>

<script>
  window.switchSector = function(targetId) {
    // Hide all panels
    document.querySelectorAll('.sector-panel').forEach(panel => {
      panel.classList.add('hidden');
      panel.classList.remove('block');
    });
    // Show target panel
    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.remove('hidden');
      targetPanel.classList.add('block');
    }
    // Update tab styling
    document.querySelectorAll('.sector-tab-btn').forEach(btn => {
      if (btn.getAttribute('data-target') === targetId) {
        btn.className = 'sector-tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all bg-primary text-white shadow-md shadow-primary/25';
      } else {
        btn.className = 'sector-tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800';
      }
    });
  };

  // Attach tab click events
  document.querySelectorAll('.sector-tab-btn').forEach(button => {
    button.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      window.switchSector(target);
    });
  });
</script></section>

<section class="py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800" id="fiyatlandirma">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
<span class="text-xs font-bold uppercase tracking-widest text-primary">Şeffaf ve Esnek Planlar</span>
<h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
          KOBİ Bütçesine Uygun Fiyatlandırma
        </h2>
<p class="text-slate-600 dark:text-slate-300">
          Sürpriz ek ücret yok. İster ücretsiz başlayın, ister profesyonel özelliklerin tadını çıkarın.
        </p>
<div class="pt-6 flex items-center justify-center gap-3">
<span class="text-sm font-bold text-slate-900 dark:text-white" id="monthly-label">Aylık</span>
<button aria-label="Aylık ve Yıllık Geçişi" class="w-14 h-8 rounded-full bg-primary p-1 flex items-center transition-colors relative" id="billing-toggle" type="button">
<div class="w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 translate-x-0" id="billing-knob"></div>
</button>
<span class="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5" id="yearly-label">
            Yıllık <span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400">2 Ay Avantaj</span>
</span>
</div>
</div>
<div class="grid md:grid-cols-2 max-w-4xl mx-auto gap-8 items-stretch">
<div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
<div>
<div class="flex items-center justify-between mb-4">
<h3 class="text-xl font-bold text-slate-900 dark:text-white">Başlangıç (Free)</h3>
<span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Temel İhtiyaç</span>
</div>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-6">İşini yeni kuran ve tekliflerini düzenlemek isteyenler için ideal.</p>
<div class="mb-8">
<span class="text-4xl font-extrabold text-slate-900 dark:text-white">₺0</span>
<span class="text-sm text-slate-500 font-medium">/ Süresiz Ücretsiz</span>
</div>
<ul class="space-y-3.5 text-sm text-slate-700 dark:text-slate-300 mb-8">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
<span class="">Ayda 3 Teklif Oluşturma</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
<span class="">Ayda 3 Tedarikçi Teklif Talebi</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
<span class="">WhatsApp ile Hızlı Paylaşım</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
<span class="">Müşteri Linki & Görüntüleme</span>
</li>
<li class="flex items-center gap-3 text-slate-400 dark:text-slate-500 line-through">
<span class="">İbaresiz Profesyonel PDF</span>
</li>
<li class="flex items-center gap-3 text-slate-400 dark:text-slate-500 line-through">
<span class="">Detaylı Kapanma Raporları</span>
</li>
</ul>
</div>
<a class="w-full py-3.5 px-6 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 font-bold text-center transition-colors" href="https://app.proformium.com/kayit">
            Ücretsiz Başla
          </a>
</div>
<div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 border-primary shadow-2xl relative flex flex-col justify-between">
<div class="absolute -top-4 right-8 bg-primary text-white text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
            En Çok Tercih Edilen
          </div>
<div>
<div class="flex items-center justify-between mb-4">
<h3 class="text-xl font-bold text-slate-900 dark:text-white">Pro Plan</h3>
<span class="px-3 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary dark:bg-primary/20 dark:text-rose-300">14 Gün Ücretsiz Deneme</span>
</div>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-6">Satış hacmini artırmak ve tekliflerini profesyonelce kapatmak isteyen KOBİ'ler.</p>
<div class="mb-8">
<div class="flex items-baseline gap-1">
<span class="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display" id="price-value">₺100</span>
<span class="text-sm text-slate-500 font-medium" id="price-period">/ Ay</span>
</div>
<p class="text-xs text-slate-400 mt-1" id="price-sub">Aylık faturalandırılır, dilediğinizde iptal edebilirsiniz.</p>
</div>
<ul class="space-y-3.5 text-sm text-slate-700 dark:text-slate-300 mb-8">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-lg">check_circle</span>
<span class="font-semibold">Sınırsız Teklif Hazırlama</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-lg">check_circle</span>
<span class="font-semibold">Sınırsız Tedarikçi Fiyat Talebi</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-lg">check_circle</span>
<span class="">Proformium İbaresiz Kendi Markanız</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-lg">check_circle</span>
<span class="">Canlı Okundu & Tıklandı Bildirimi</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-lg">check_circle</span>
<span class="">Dijital Kaşe, İmza ve Özel Şablonlar</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-lg">check_circle</span>
<span class="">Gelişmiş Ciro ve Satış Raporları</span>
</li>
</ul>
</div>
<a class="w-full py-4 px-6 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-center shadow-glow transition-all hover:scale-[1.01] active:scale-[0.98]" href="https://app.proformium.com/kayit">
            14 Gün Ücretsiz Dene
          </a>
</div>
</div>
</div>
</section>
<section class="py-24" id="faq">
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-16 space-y-3">
<span class="text-xs font-bold uppercase tracking-widest text-primary">Aklınıza Takılanlar</span>
<h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
          Sıkça Sorulan Sorular
        </h2>
<p class="text-slate-600 dark:text-slate-300">
          Proformium hakkında en çok merak edilen soruların yanıtları.
        </p>
</div>
<div class="space-y-4">
<div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
<button class="faq-btn w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 dark:text-white gap-4">
<span class="">Kurulum veya uygulama indirmek gerekir mi?</span>
<span class="material-symbols-outlined text-slate-400 transition-transform duration-200">expand_more</span>
</button>
<div class="faq-content hidden px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Hayır, hiçbir şey indirmeniz gerekmez. Proformium tamamen modern web tabanlıdır. İster bilgisayarınızdan, ister telefonunuzun tarayıcısından tek tıkla girip anında kullanmaya başlayabilirsiniz.
          </div>
</div>
<div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
<button class="faq-btn w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 dark:text-white gap-4">
<span class="">Müşterilerimin teklifi görmek için üye olması gerekir mi?</span>
<span class="material-symbols-outlined text-slate-400 transition-transform duration-200">expand_more</span>
</button>
<div class="faq-content hidden px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Kesinlikle hayır. Müşterinize giden WhatsApp linki sadece ona özel şifrelenmiş güvenli bir bağlantıdır. Müşteriniz hiçbir şifre veya kayıtla uğraşmadan tek tıkla teklifi tüm detaylarıyla inceler.
          </div>
</div>
<div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
<button class="faq-btn w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 dark:text-white gap-4">
<span class="">Tedarikçiler fiyat verirken üye olmak zorunda mı?</span>
<span class="material-symbols-outlined text-slate-400 transition-transform duration-200">expand_more</span>
</button>
<div class="faq-content hidden px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Hayır. Tedarikçilere gönderdiğiniz teklif talep linki açıktır; birim fiyatlarını yazıp "Gönder" butonuna basmaları yeterlidir. Bilgiler anında sizin karşılaştırma tablonuza düşer.
          </div>
</div>
<div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
<button class="faq-btn w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 dark:text-white gap-4">
<span class="">14 günlük deneme bittiğinde tekliflerim silinir mi?</span>
<span class="material-symbols-outlined text-slate-400 transition-transform duration-200">expand_more</span>
</button>
<div class="faq-content hidden px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Asla silinmez. Deneme süresi sonrasında Pro pakete geçmeseniz bile Free paket kapsamında geçmiş tüm teklifleriniz, müşteri bağlantılarınız ve verileriniz güvenle korunmaya devam eder.
          </div>
</div>
<div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
<button class="faq-btn w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 dark:text-white gap-4">
<span class="">Proformium bir e-Fatura veya muhasebe programı mıdır?</span>
<span class="material-symbols-outlined text-slate-400 transition-transform duration-200">expand_more</span>
</button>
<div class="faq-content hidden px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Hayır. Proformium özellikle karmaşık muhasebe programlarının zorluklarından kaçınmak isteyen KOBİ'ler için geliştirilmiş, yalnızca teklif oluşturma, tedarikçi toplama ve satış takibi odaklı çevik bir araçtır.
          </div>
</div>
<div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
<button class="faq-btn w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 dark:text-white gap-4">
<span class="">Verilerim nerede saklanıyor ve güvende mi?</span>
<span class="material-symbols-outlined text-slate-400 transition-transform duration-200">expand_more</span>
</button>
<div class="faq-content hidden px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Tüm verileriniz Avrupa Birliği standartlarına uygun olarak Frankfurt (Almanya) veri merkezlerinde, 256-bit SSL banka seviyesi şifreleme ve günlük otomatik yedekleme ile korunmaktadır.
          </div>
</div>
</div>
</div>
</section>
<section class="py-16 sm:py-24">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="relative rounded-3xl overflow-hidden p-8 sm:p-16 bg-gradient-to-r from-primary via-primary-dark to-[#4A0D1E] text-white shadow-glow">
<div class="absolute -right-10 -bottom-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
<div class="absolute -left-10 -top-10 w-80 h-80 bg-rose-400/20 rounded-full blur-2xl pointer-events-none"></div>
<div class="relative z-10 max-w-2xl mx-auto text-center space-y-6">
<span class="inline-block px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold tracking-wider uppercase">
            Hemen Bugün Başlayın
          </span>
<h2 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight font-display">
            Satışlarınızı takipsizlikten kaybetmeyin.
          </h2>
<p class="text-rose-100 text-base sm:text-lg">
            Bugün 14 gün ücretsiz deneyin. Kredi kartı gerekmez, kurulum yok. İlk profesyonel teklifinizi 60 saniyede gönderin.
          </p>
<div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
<a class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-primary font-bold text-base shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]" href="https://app.proformium.com/kayit">
<span class="">Hemen Başla</span>
<span class="material-symbols-outlined text-lg">arrow_forward</span>
</a>
<span class="text-xs text-rose-200">14 gün sonra taahhütsüz iptal</span>
</div>
</div>
</div>
</div>
</section>
<footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F17] py-12">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex flex-col md:flex-row items-center justify-between gap-6">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">
            P
          </div>
<span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-display">Proformium</span>
<span class="text-xs text-slate-400 ml-2">© 2026 Proformium. Tüm hakları saklıdır.</span>
</div>
<div class="flex items-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
<a class="hover:text-primary transition-colors" href="#">Gizlilik Politikası</a>
<a class="hover:text-primary transition-colors" href="#">Kullanım Şartları</a>
<a class="hover:text-primary transition-colors" href="#">KVKK Aydınlatma</a>
<a class="hover:text-primary transition-colors" href="mailto:destek@proformium.com">destek@proformium.com</a>
</div>
</div>
</div>
</footer>
<script>
    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      htmlEl.classList.add('dark');
    } else {
      htmlEl.classList.remove('dark');
    }
    themeBtn.addEventListener('click', () => {
      htmlEl.classList.toggle('dark');
      if (htmlEl.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
    // Pricing Billing Switch
    let isYearly = false;
    const billingBtn = document.getElementById('billing-toggle');
    const billingKnob = document.getElementById('billing-knob');
    const priceValue = document.getElementById('price-value');
    const pricePeriod = document.getElementById('price-period');
    const priceSub = document.getElementById('price-sub');
    const monthlyLabel = document.getElementById('monthly-label');
    const yearlyLabel = document.getElementById('yearly-label');
    billingBtn.addEventListener('click', () => {
      isYearly = !isYearly;
      if (isYearly) {
        billingKnob.classList.add('translate-x-6');
        billingKnob.classList.remove('translate-x-0');
        priceValue.textContent = '₺1.000';
        pricePeriod.textContent = '/ Yıl';
        priceSub.textContent = 'Yıllık peşin faturalandırılır (₺83/ay eşdeğeri)';
        yearlyLabel.classList.add('font-bold', 'text-slate-900', 'dark:text-white');
        yearlyLabel.classList.remove('text-slate-500', 'dark:text-slate-400');
        monthlyLabel.classList.remove('font-bold', 'text-slate-900', 'dark:text-white');
        monthlyLabel.classList.add('text-slate-500', 'dark:text-slate-400');
      } else {
        billingKnob.classList.remove('translate-x-6');
        billingKnob.classList.add('translate-x-0');
        priceValue.textContent = '₺100';
        pricePeriod.textContent = '/ Ay';
        priceSub.textContent = 'Aylık faturalandırılır, dilediğinizde iptal edebilirsiniz.';
        monthlyLabel.classList.add('font-bold', 'text-slate-900', 'dark:text-white');
        monthlyLabel.classList.remove('text-slate-500', 'dark:text-slate-400');
        yearlyLabel.classList.remove('font-bold', 'text-slate-900', 'dark:text-white');
        yearlyLabel.classList.add('text-slate-500', 'dark:text-slate-400');
      }
    });
    // Accordion FAQ
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(button => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('.material-symbols-outlined');
        const isCurrentlyHidden = content.classList.contains('hidden');
        // Close all
        document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.faq-btn .material-symbols-outlined').forEach(i => i.classList.remove('rotate-180'));
        // Toggle clicked
        if (isCurrentlyHidden) {
          content.classList.remove('hidden');
          icon.classList.add('rotate-180');
        }
      });
    });
  </script>

</body></html>
