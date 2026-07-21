<script>
  // 品牌基本資訊設定
  const brandName = "John 316 神僕茶道";
  const siteDescription = "遇見一杯溫暖與良善。John316 神僕茶道 用最純粹的在地茶葉與軟萌小羊，溫暖你的日常。";
  
  // 最新活動資料
  const events = [
    { 
      title: "神僕茶道 奶昔全系列 🌟 加OREO碎片", 
      desc: "限時嚐鮮！冰涼濃醇鮮奶且不膩口的奶昔，加上OREO碎片，口感加倍。", 
      badge: "熱賣中",
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=600"
    },
    { 
      title: "神僕茶道 自備環保杯 🌍 療癒大地球", 
      desc: "響應環保，凡自備環保杯至各分店購買任意飲品，現折 5 元！", 
      badge: "長期活動",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600"
    }
  ];

  // 分店資訊
  const stores = [
    { name: "神僕茶道-新北林口總店", phone: "02-2608-1202", address: "新北市林口區文化二路一段68巷2號", hours: "11:00 - 20:30" },
    { name: "神僕茶道-日本東京店（籌備中）" }
  ];

  // 【修正語法 1】使用 Svelte 5 的 $state 聲明反應性變數
  let isMenuOpen = $state(false);
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<svelte:head>
  <title>{brandName} | 神僕茶道</title>
  <meta name="description" content={siteDescription} />
</svelte:head>

<nav>
  <div class="nav-container">
    <div class="nav-placeholder-mobile"></div>

    <div class="brand">
      <img src="/logo.svg" alt="John 316 Logo" class="nav-logo" />
      <img src="/logo_word.svg" alt="John 316 Word Logo" class="nav-logo-word" />
    </div>
    
    <ul class="nav-links">
      <li><a href="#concept">品牌理念</a></li>
      <li><a href="/menu">菜單</a></li>
      <li><a href="#events">最新活動</a></li>
      <li><a href="#stores">分店資訊</a></li>
      <li><a href="#franchise">加盟專區</a></li>
    </ul>

    <!-- 【修正語法 2】將 on:click 改成 Svelte 5 的 onclick -->
    <button class="burger" onclick={toggleMenu} aria-label="Toggle Menu">
      <span class={isMenuOpen ? "open" : ""}></span>
      <span class={isMenuOpen ? "open" : ""}></span>
      <span class={isMenuOpen ? "open" : ""}></span>
    </button>
  </div>
</nav>

{#if isMenuOpen}
  <!-- 【修正語法 3】將行動版選單的 on:click 改成 onclick -->
  <div class="mobile-menu">
    <a href="#concept" onclick={toggleMenu}>品牌理念</a>
    <a href="/menu" onclick={toggleMenu}>菜單</a>
    <a href="#events" onclick={toggleMenu}>最新活動</a>
    <a href="#stores" onclick={toggleMenu}>分店資訊</a>
    <a href="#franchise" onclick={toggleMenu}>加盟專區</a>
  </div>
{/if}

<!-- 【優化排版】調整品牌大圖區塊結構 -->
<section id="concept" class="section-concept-wrapper">
  <div class="concept-banner">
    <img src="brand_background.svg" alt="John316 神僕茶道 品牌故事滿版大圖" class="banner-img" />
    <div class="banner-overlay"></div>
  </div>
</section>

<!-- 【優化排版】微調 Hero 區塊間距 -->
<header class="hero">
  <div class="hero-content">
    <img src="/logo.svg" alt="John 316 大 Logo" class="hero-logo" />
    <h1>神僕茶道 - 遇見一杯滿足與喜樂</h1>
    <p>日常裡的微小歇息，都有小羊陪著你。</p>
    <a href="https://line-order.john-316.app" class="btn-primary" target="_blank" rel="noopener noreferrer">看看今天喝什麼 ➔</a>
  </div>
</header>

<section id="events" class="section-events">
  <div class="container">
    <h2 class="section-title">最新活動</h2>
    <div class="events-grid">
      {#each events as event}
        <div class="event-card">
          <div class="event-img-wrapper">
            <span class="event-badge">{event.badge}</span>
            <img src={event.image} alt={event.title} class="event-card-img" />
          </div>
          <div class="event-card-body">
            <h3>{event.title}</h3>
            <p>{event.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section id="stores" class="section-stores">
  <div class="container">
    <h2 class="section-title">神僕茶道 - 分店資訊</h2>
    <div class="stores-grid">
      {#each stores as store}
        <div class="store-card">
          <h3>{store.name}</h3>
          {#if store.phone}
            <p><strong>📞 電話：</strong>{store.phone}</p>
            <p><strong>📍 地址：</strong>{store.address}</p>
            <p><strong>⏰ 時間：</strong>{store.hours}</p>
          {:else}
            <p style="color: #7f8c8d; font-style: italic;">🐑 期待與你在東京相遇（籌備中）</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<section id="franchise" class="section-franchise">
  <div class="container">
    <div class="franchise-box">
      <h2 class="section-title">神僕茶道 - 加盟專區</h2>
      <p class="franchise-subtitle">渴望擁有自己的療癒小天地嗎？歡迎加入 John316 神僕茶道 大家庭！</p>
      <div class="franchise-features">
        <div class="feat">🐾 完整技術培訓與全方位營運指導</div>
        <div class="feat">🎨 獨家萌系羊羊週邊與社群品牌行銷</div>
        <div class="feat">📈 健全供應鏈，嚴格控管原物料品質</div>
      </div>
      <a href="tel:0921954246" class="btn-franchise">
        📝 加盟電話聯絡：0921954246
      </a>
    </div>
  </div>
</section>

<footer>
  <div class="footer-container">
    <div class="footer-brand">
      <img src="/logo.svg" alt="Footer Logo" class="footer-logo" />
      <img src="/logo_word.svg" alt="Footer Word Logo" class="footer-logo-word" />
    </div>
    
    <div class="footer-info">
      <p><strong>📞 聯絡電話：</strong>02-26081202</p>
      <p><strong>📍 總部地址：</strong>新北市林口區文化一路一段100巷51號</p>
      <p>
        <strong>💬 官方 LINE 帳號：</strong>
        <a href="https://line.me/R/ti/p/@ziz8896o" target="_blank" rel="noopener noreferrer" class="line-link">
          @ziz8896o (點擊加入好友)
        </a>
      </p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 John 316. All Rights Reserved. 遇見一杯滿足與喜樂。</p>
  </div>
</footer>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", sans-serif;
    background-color: #fbf9f5;
    color: #2b3a4a;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .section-title {
    text-align: center;
    font-size: 2.2rem;
    color: #004B97;
    position: relative;
  }

  /* 導覽列 */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #004B97; 
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    z-index: 100;
  }
  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 18px 24px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .nav-placeholder-mobile {
    display: none;
    width: 25px; 
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .nav-logo {
    height: 60px; 
    width: auto;
  }
  .nav-logo-word {
    height: 60px;
    width: auto;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    gap: 2.2rem;
    margin: 0;
    padding: 0;
  }
  .nav-links a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.85); 
    font-weight: 500;
    font-size: 1.05rem;
    transition: color 0.2s;
  }
  .nav-links a:hover {
    color: #ffffff; 
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }

  /* 漢堡選單 */
  .burger {
    display: none;
    background: none;
    border: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 5px;
  }
  .burger span {
    width: 25px;
    height: 3px;
    background-color: #ffffff; 
    transition: 0.3s;
  }

  /* 手機版下拉選單 */
  .mobile-menu {
    position: fixed;
    top: 96px; 
    left: 0;
    width: 100%;
    background-color: #004B97; 
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    z-index: 99;
  }
  .mobile-menu a {
    padding: 16px 28px;
    text-decoration: none;
    color: #ffffff; 
    font-weight: 500;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  /* 主視覺區 Hero */
  .hero {
    padding-top: 60px; /* 【修正間距】大幅縮減原本 180px 造成的空白斷層 */
    padding-bottom: 80px;
    background: #fcf6eb;
    text-align: center;
  }
  .hero-logo {
    max-width: 220px;
    height: auto;
    animation: float 4s ease-in-out infinite;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .hero h1 {
    font-size: 2.8rem;
    color: #004B97;
    margin: 1.5rem 0 0.5rem 0;
  }
  .hero p {
    font-size: 1.2rem;
    color: #6a7f96;
    margin-bottom: 2rem;
  }
  .btn-primary {
    display: inline-block;
    background-color: #004B97;
    color: white;
    text-decoration: none;
    padding: 14px 32px;
    border-radius: 50px;
    font-weight: bold;
    font-size: 1.1rem;
    transition: background-color 0.2s, transform 0.2s;
  }
  .btn-primary:hover {
    background-color: #0492C2;
    transform: scale(1.03);
  }

  section {
    padding: 6rem 0;
  }

  /* ==========================================
     修訂 1：品牌理念滿版照片排版優化
     ========================================== */
  .section-concept-wrapper {
    position: relative;
    padding: 0;
    background-color: #ffffff;
    overflow: hidden;
    margin-top: 96px; /* 【修正切圖】確保電腦版不會被 Navbar 擋到大圖 */
  }
  .concept-banner {
    position: relative;
    width: 100%;
    height: auto; 
  }
  .banner-img {
    width: 100%;
    height: auto; /* 【修正拉伸】不要強行填死，改 auto 保持完美原圖比例 */
    display: block;
    object-fit: contain;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(251,249,245,1) 100%); /* 與下方的燕麥色完美淡出融合 */
  }

  /* 最新活動 */
  .section-events {
    background-color: #edf5fa;
  }
  .events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
  }
  .event-card {
    background: white;
    border-radius: 24px;
    border: 1px solid #f2e2cb;
    box-shadow: 0 6px 25px rgba(220, 200, 170, 0.15);
    overflow: hidden; 
    display: flex;
    flex-direction: column;
    transition: transform 0.3s;
  }
  .event-card:hover {
    transform: translateY(-8px);
  }
  .event-img-wrapper {
    position: relative;
    width: 100%;
    height: 200px; 
    overflow: hidden;
  }
  .event-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    transition: transform 0.5s ease;
  }
  .event-card:hover .event-card-img {
    transform: scale(1.05);
  }
  .event-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 2;
    background-color: #004B97;
    color: white;
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }
  .event-card-body {
    padding: 2rem;
    flex-grow: 1; 
    display: flex;
    flex-direction: column;
  }
  .event-card-body h3 {
    margin: 0 0 0.8rem 0;
    color: #2b3a4a;
    font-size: 1.3rem;
  }
  .event-card-body p {
    color: #6a7f96;
    line-height: 1.6;
    margin: 0;
  }

  /* 分店資訊 */
  .section-stores {
    background-color: #fcf6eb;
  }
  .stores-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }
  .store-card {
    background: #fbf9f5;
    padding: 2rem;
    border-radius: 20px;
    border-left: 6px solid #004B97; /* 【修正 CSS 語法】修正了原本 solid 旁邊冒號的語法錯誤 */
    box-shadow: 0 4px 10px rgba(0,0,0,0.02);
  }
  .store-card h3 {
    margin-top: 0;
    color: #004B97;
    font-size: 1.4rem;
  }
  .store-card p {
    margin: 0.8rem 0;
    color: #5a6e85;
  }

  /* 加盟專區 */
  .section-franchise {
    background-color: #edf5fa;
  }
  .franchise-box {
    background: white;
    max-width: 750px;
    margin: 0 auto;
    padding: 3.5rem 2rem;
    border-radius: 30px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(180, 200, 220, 0.2);
  }
  .franchise-subtitle {
    font-size: 1.2rem;
    color: #6a7f96;
    margin-bottom: 2rem;
  }
  .franchise-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2.5rem;
  }
  .feat {
    font-size: 1.05rem;
    font-weight: 500;
    background-color: #f4f8fa;
    padding: 10px 24px;
    border-radius: 50px;
    width: fit-content;
  }
  .btn-franchise {
    display: inline-block;
    background-color: #004B97;
    color: white;
    text-decoration: none;
    padding: 14px 36px;
    border-radius: 50px;
    font-weight: bold;
    font-size: 1.1rem;
    box-shadow: 0 4px 15px rgba(4, 146, 194, 0.3);
    transition: all 0.2s;
  }
  .btn-franchise:hover {
    background-color: #004B97;
    transform: translateY(-2px);
  }

  /* 頁尾資訊 */
  footer {
    background-color: #004B97; 
    color: #ffffff; 
    padding: 4rem 0 2rem 0;
  }
  .footer-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
  }
  .footer-brand {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .footer-logo {
    height: 70px;
    width: auto;
  }
  .footer-logo-word {
    height: 28px;
    width: auto;
  }
  .footer-brand h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #ffffff;
  }
  .footer-info p {
    margin: 0.8rem 0;
    color: rgba(255, 255, 255, 0.9); 
    font-size: 1.05rem;
  }
  .footer-info strong {
    color: #ffffff;
  }
  .line-link {
    color: #26e646; 
    text-decoration: none;
    font-weight: bold;
  }
  .line-link:hover {
    text-decoration: underline;
  }
  .footer-bottom {
    text-align: center;
    margin-top: 4rem;
    padding-top: 2rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }

  /* ==========================================================================
      響應式設計媒體查詢 (Responsive Media Queries)
     ========================================================================== */
  @media (max-width: 960px) {
    .hero h1 { font-size: 2.4rem; }
  }

  @media (max-width: 768px) {
    /* 🟢 修正 1：直接加大手機版 Navbar 的上下內距，強制推開留白 */
    .nav-container {
      padding: 24px 20px !important; /* 增加上下留白（從12px改成24px） */
    }
    
    /* 🟢 修正 2：微調手機版 Logo 高度，讓文字跟羊羊有空間呼吸 */
    .nav-logo {
      height: 48px !important; /* 電腦版是 60px，手機版縮到 48px 比例最精緻 */
    }
    .nav-logo-word {
      height: 48px !important; /* 字體同步縮小，確保置中對齊 */
    }

    .nav-placeholder-mobile {
      display: block; 
    }

    .nav-links {
      display: none;
    }
    
    .burger {
      display: flex; 
    }
    
    /* 🟢 修正 3：因為 Navbar 變高了，選單下拉位置和圖片外距要同步加大 */
    .mobile-menu {
      top: 96px; 
    }
    .section-concept-wrapper {
      margin-top: 96px; /* 完美避開變高的 Navbar，大圖最頂部的字絕不被切 */
    }
    .concept-banner {
      height: auto;
    }
    
    /* 後面的漢堡選單旋轉動畫保持不變... */
    .burger span.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .burger span.open:nth-child(2) { opacity: 0; }
    .burger span.open:nth-child(3) { transform: rotate(-45deg) translate(6px, -7px); }

    .hero {
      padding-top: 20px;
      padding-bottom: 60px;
    }
    .hero h1 { font-size: 2rem; }
    .hero p { font-size: 1rem; }
    
    section {
      padding: 4rem 0;
    }
    .section-title {
      font-size: 1.8rem;
    }

    .footer-container {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }
    .footer-brand {
      flex-direction: column;
    }
  }

</style>