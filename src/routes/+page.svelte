<script>
  // 品牌基本資訊設定
  const brandName = "John 316";
  const siteDescription = "遇見一杯溫暖與良善。John 316 用最純粹的在地茶葉與軟萌小羊，溫暖你的日常。";
  
  // 最新活動資料
  const events = [
    { title: "奶昔全系列 🌟 加ORE碎片", desc: "限時嚐鮮！冰涼濃醇鮮奶且不膩口的奶昔，加上OREO碎片，口感加倍。", badge: "熱賣中" },
    { title: "自備環保杯 🌍 療癒大地球", desc: "響應環保，凡自備環保杯至各分店購買任意飲品，現折 5 元！", badge: "長期活動" }
  ];

  // 分店資訊
  const stores = [
    { name: "新北林口總店", phone: "02-2608-1202", address: "新北市林口區文化二路一段68巷2號", hours: "11:00 - 20:30" },
    { name: "日本東京店（籌備中）" }
  ];

  // 行動導覽列開關 (手機版專用)
  let isMenuOpen = false;
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
      <li><a href="#events">最新活動</a></li>
      <li><a href="#stores">分店資訊</a></li>
      <li><a href="#franchise">加盟專區</a></li>
    </ul>

    <button class="burger" on:click={toggleMenu} aria-label="Toggle Menu">
      <span class={isMenuOpen ? "open" : ""}></span>
      <span class={isMenuOpen ? "open" : ""}></span>
      <span class={isMenuOpen ? "open" : ""}></span>
    </button>
  </div>
</nav>

{#if isMenuOpen}
  <div class="mobile-menu">
    <a href="#concept" on:click={toggleMenu}>品牌理念</a>
    <a href="#events" on:click={toggleMenu}>最新活動</a>
    <a href="#stores" on:click={toggleMenu}>分店資訊</a>
    <a href="#franchise" on:click={toggleMenu}>加盟專區</a>
  </div>
{/if}

<header class="hero">
  <div class="hero-content">
    <img src="/logo.svg" alt="John 316 大 Logo" class="hero-logo" />
    <h1>遇見一杯溫暖與良善</h1>
    <p>日常裡的微小歇息，都有小羊陪著你。</p>
    <a href="#events" class="btn-primary">看看今天喝什麼 ➔</a>
  </div>
</header>

<section id="concept" class="section-concept">
  <div class="container">
    <h2 class="section-title">品牌理念</h2>
    <div class="concept-grid">
      <div class="concept-text">
        <h3>「像小羊一樣純粹，像家一樣溫暖」</h3>
        <p>John 316 誕生於對純粹茶香的堅持與對生活的溫柔關懷。我們精心篩選在地契作茶葉，搭配小農鮮乳，不添加多餘的化學點綴。</p>
        <p>我們希望每一杯遞到你手中的茶飲，不僅僅是解渴的載體，更是能為你疲憊的一天帶來會心一笑、感到被療癒的溫暖力量。</p>
      </div>
      <div class="concept-badge-box">
        <div class="badge-item">🐑 100% 療癒插畫</div>
        <div class="badge-item">🍃 在地天然好茶</div>
        <div class="badge-item">🥛 嚴選小農鮮乳</div>
      </div>
    </div>
  </div>
</section>

<section id="events" class="section-events">
  <div class="container">
    <h2 class="section-title">最新活動</h2>
    <div class="events-grid">
      {#each events as event}
        <div class="event-card">
          <span class="event-badge">{event.badge}</span>
          <h3>{event.title}</h3>
          <p>{event.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section id="stores" class="section-stores">
  <div class="container">
    <h2 class="section-title">分店資訊</h2>
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
      <h2 class="section-title">加盟專區</h2>
      <p class="franchise-subtitle">渴望擁有自己的療癒小天地嗎？歡迎加入 John 316 大家庭！</p>
      <div class="franchise-features">
        <div class="feat">🐾 完整技術培訓與全方位營運指導</div>
        <div class="feat">🎨 獨家萌系羊羊週邊與社群品牌行銷</div>
        <div class="feat">📈 健全供應鏈，嚴格控管原物料品質</div>
      </div>
      <a href="tel:0921954246" class="btn-franchise">
        📝 加盟電話聯絡：0921954246 (吳小姐)
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
      <p><strong>📞 聯絡電話：</strong>0916717797</p>
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
    <p>© 2026 John 316. All Rights Reserved. 遇見一杯溫暖與良善。</p>
  </div>
</footer>

<style>
  /* 全域基本樣式：文青米白與深藍色系 */
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", sans-serif;
    background-color: #fbf9f5; /* 溫暖燕麥白 */
    color: #2b3a4a; /* 深暖灰藍 */
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* 共同標題樣式 */
  .section-title {
    text-align: center;
    font-size: 2.2rem;
    color: #004B97;
    margin-bottom: 3rem;
    position: relative;
  }
  .section-title::after {
    content: "🐑";
    display: block;
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }

  /* 導覽列（加高與文字翻白優化） */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #0492c2; /* 主要背景藍 */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    z-index: 100;
  }
  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 18px 24px; /* 2. 上下高度加高（原本為 12px） */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  /* 行動端專用平衡錨點 */
  .nav-placeholder-mobile {
    display: none;
    width: 25px; /* 與漢堡按鈕同寬 */
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .nav-logo {
    height: 45px; /* 配合導覽列微調大一點點 */
    width: auto;
  }
  .nav-logo-word {
    height: 22px;
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
    color: rgba(255, 255, 255, 0.85); /* 1. 文字改為白色 */
    font-weight: 500;
    font-size: 1.05rem;
    transition: color 0.2s;
  }
  .nav-links a:hover {
    color: #ffffff; /* 懸浮改為全亮白 */
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }

  /* 漢堡選單 (手機用) */
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
    background-color: #ffffff; /* 漢堡線條改為白色 */
    transition: 0.3s;
  }

  /* 手機版下拉選單群 */
  .mobile-menu {
    position: fixed;
    top: 81px; /* 根據加高的導覽列動態向下修正位置 */
    left: 0;
    width: 100%;
    background-color: #0492c2; /* 與導覽列同色系一體化 */
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    z-index: 99;
  }
  .mobile-menu a {
    padding: 16px 28px;
    text-decoration: none;
    color: #ffffff; /* 行動選單文字改白 */
    font-weight: 500;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  /* 主視覺區 Hero */
  .hero {
    padding-top: 160px; /* 防止加高的 nav 壓到內容 */
    padding-bottom: 80px;
    background: linear-gradient(180deg, #edf5fa 0%, #fbf9f5 100%);
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

  /* 區塊通用間距 */
  section {
    padding: 6rem 0;
  }

  /* 1. 品牌理念 */
  .section-concept {
    background-color: #ffffff;
  }
  .concept-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: center;
  }
  .concept-text h3 {
    font-size: 1.6rem;
    color: #0492C2;
    margin-bottom: 1.5rem;
  }
  .concept-text p {
    line-height: 1.8;
    color: #5a6e85;
    font-size: 1.1rem;
  }
  .concept-badge-box {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  .badge-item {
    background-color: #fdf8eb;
    border: 2px dashed #e6cf9c;
    padding: 1.2rem;
    border-radius: 16px;
    font-weight: bold;
    text-align: center;
    font-size: 1.1rem;
  }

  /* 2. 最新活動 */
  .section-events {
    background-color: #fcf6eb;
  }
  .events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  .event-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 24px;
    border: 1px solid #f2e2cb;
    box-shadow: 0 4px 20px rgba(220, 200, 170, 0.15);
    position: relative;
    transition: transform 0.3s;
  }
  .event-card:hover {
    transform: translateY(-5px);
  }
  .event-badge {
    position: absolute;
    top: -12px;
    left: 24px;
    background-color: #004B97;
    color: white;
    padding: 4px 14px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: bold;
  }
  .event-card h3 {
    margin-top: 0.5rem;
    color: #2b3a4a;
  }
  .event-card p {
    color: #6a7f96;
    line-height: 1.6;
  }

  /* 3. 分店資訊 */
  .section-stores {
    background-color: #ffffff;
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
    border-left: 6px solid #0492C2;
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

  /* 4. 加盟專區 */
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
    background-color: #0492C2;
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

  /* 頁尾資訊（文字全面換白） */
  footer {
    background-color: #0492c2; /* 使用明亮招牌藍 */
    color: #ffffff; /* 1. 改為純白 */
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
    color: rgba(255, 255, 255, 0.9); /* 1. 段落文字改為微亮白，不刺眼 */
    font-size: 1.05rem;
  }
  .footer-info strong {
    color: #ffffff;
  }
  .line-link {
    color: #26e646; /* 在藍底上微調更亮眼的 LINE 綠色 */
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
    .concept-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .concept-badge-box {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  /* 3. 手機行動端導覽列 Logo 置中修正 */
  @media (max-width: 768px) {
    .nav-container {
      padding: 12px 24px; /* 手機端高度微調，更輕量舒適 */
    }
    
    .nav-placeholder-mobile {
      display: block; /* 啟用左側占位區，把中央 Logo 完美往右推 */
    }

    .nav-links {
      display: none;
    }
    
    .burger {
      display: flex; /* 保持在最右側 */
    }
    
    /* 漢堡按鈕動畫轉 X */
    .burger span.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .burger span.open:nth-child(2) { opacity: 0; }
    .burger span.open:nth-child(3) { transform: rotate(-45deg) translate(6px, -7px); }

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