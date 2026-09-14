/* ==========================================================================
   PORTFOLIO INTERACTIVE LOGIC - ANDREY
   Project Data (8 Projects Showcase including Web-Optimized MP4 Videos)
   ========================================================================== */

const PROJECTS = [
  {
    id: "web3-helix",
    title: "Web3 Helix: Synthetic Dimension 3D",
    categoryLabel: "Web3 & 3D Interactive Platform",
    shortDesc: "Проектирование и разработка Web3-платформы с интерактивной 3D-графикой, алгоритмической навигацией и сайбер-эстетикой.",
    fullDesc: "Продукт на стыке Product Design и интерактивного 3D-фронтенда. Проработана архитектура сервиса, пользовательские сценарии (User Flow) работы с синтетической инфраструктурой и адаптивный UX под мобильные устройства и десктоп. Включает 3D Hero-сектор с алгоритмическими узлами и интеграцию Web3-компонентов.",
    tags: ["Product Design", "Web3", "3D Interactive", "UX/UI", "Three.js", "React", "TypeScript"],
    features: [
      "Проработка структуры Web3-продукта и пользовательских сценариев (User Flow)",
      "Интерактивная 3D-сцена высокого FPS с динамической анимацией",
      "Адаптивный UX/UI интерфейс в кибер-эстетике",
      "Интеграция Web3-компонентов и системы управления алгоритмическими узлами",
      "Оптимизация производительности WebGL в браузере"
    ],
    media: [
      { type: "video", url: "IMG_8244.mp4", label: "Web3 Helix 3D Interactive Demo" }
    ]
  },
  {
    id: "aethel-atelier",
    title: "Aethel: Quiet Luxury Gem Atelier",
    categoryLabel: "Luxury E-Commerce & 3D Showcase",
    shortDesc: "Премиальный цифровой продукт для коллекционного дома камней с 3D-презентацией и фокусом на глубокий визуальный UX.",
    fullDesc: "Создание цифрового сервиса с акцентом на продуктовый UX, эстетику тихой роскоши (Quiet Luxury) и интуитивную структуру. Проработаны пользовательские пути закрытого каталога, бронирования коллекционных экземпляров и детализированный 3D-просмотр огранки редких минералов.",
    tags: ["Product Design", "Quiet Luxury UX", "3D Showcase", "Figma", "Frontend", "User Flow"],
    features: [
      "Проектирование сценариев закрытого клубного каталога и бронирования",
      "Интерактивная 3D-презентация минералов и эксклюзивных камней",
      "Премиальная типографика, микро-анимации и визуальная иерархия",
      "Плавный серфинг по разделам Philosophy, House & Collection",
      "Высокий уровень проработки интерфейсных деталей в Figma и коде"
    ],
    media: [
      { type: "video", url: "IMG_8511.mp4", label: "Aethel Atelier Showcase Demo" }
    ]
  },
  {
    id: "apex-performance",
    title: "Apex Performance: Video Hero Landing",
    categoryLabel: "High-Motion Web Product",
    shortDesc: "Интерактивный веб-продукт для автоспортивного ателье с видео-хиро фоном, 3D-компонентами и быстрым бронированием.",
    fullDesc: "Проектирование и фронтенд-реализация высокодинамичного лендинга. Проработана структура информации, быстрые сценарии записи на обслуживание, анимации отклика и оптимизация тяжелого видеоконтента для мгновенного загрузочного UX.",
    tags: ["Product Design", "Video Hero", "High-Motion UX", "JavaScript", "Frontend", "Figma"],
    features: [
      "Проектирование коротких конверсионных сценариев взаимодействия",
      "Бесшовный фоновый Video Hero сектор с высокой производительностью",
      "Интерактивная галерея спортивных автомобилей и услуг",
      "Оптимизация загрузки тяжелых видеоматериалов и скриптов",
      "Продуманные микро-интерактивы для увеличения конверсии"
    ],
    media: [
      { type: "video", url: "IMG_8245.mp4", label: "Apex Performance Video Landing Demo" }
    ]
  },
  {
    id: "robinzone-ai",
    title: "Robinzone AI: Viral Predict & Deepfake Recast",
    categoryLabel: "AI Product & Computer Vision",
    shortDesc: "Студийный AI-интерфейс для прогнозирования виральности видеопотока и нейросетевой замены лиц Deepfake Video Recast.",
    fullDesc: "Проектирование AI-продукта на стыке UX/UI и компьютерного зрения. Проработана логика работы с AI-моделями инференса: сценарии загрузки видео, отображения прогресса генерации, настройки параметров и удобного предпросмотра результатов.",
    tags: ["AI Products", "Product Design", "Computer Vision", "AI Interfaces", "Claude Code", "React"],
    features: [
      "Проектирование UX для процессов взаимодействия с AI-моделями",
      "Оценка виральности видеоконтента (алгоритм Memory Encoding)",
      "Deepfake замена лица с сохранением светотени и мимики",
      "Поддержка видеопотоков MP4, MOV, WEBM",
      "Интуитивный UX профессионального интерфейса AI-видеостудии"
    ],
    media: [
      { type: "video", url: "IMG_8724.mp4", label: "Deepfake Video Recast Demo" },
      { type: "video", url: "IMG_8743.mp4", label: "Predict Viral Potential Demo" }
    ]
  },
  {
    id: "orcus-taskmanager",
    title: "Orcus: Таск-Менеджер с ИИ в Telegram",
    categoryLabel: "Telegram Mini App & AI Digest",
    shortDesc: "Telegram Mini App для управления командами с голосовым вводом задач, AI-сводками и контролем дедлайнов.",
    fullDesc: "Полный цикл создания Telegram Mini App от Figma-проектирования до готового сервиса. Реализована продуктовая логика постановки задач голосом через LLM, автоматическая генерация дайджестов активности и алгоритмы автодожима дедлайнов.",
    tags: ["Telegram Mini Apps", "AI Products", "Product Design", "Voice AI", "Telegram API", "Node.js"],
    features: [
      "Проектирование UX/UI структуры для Telegram Mini App интерфейса",
      "Голосовое создание и автоматическая классификация задач через LLM",
      "AI-Дайджест: автогенерация отчетов по статусу и активности команды",
      "Умная система уведомлений и контроля подступающих дедлайнов",
      "Дашборд фокусных задач и статистика загрузки сотрудников"
    ],
    media: [
      { type: "image", url: "photo_2026-09-13_15-45-49 (3).jpg", label: "Дашборд горящих задач Orcus" },
      { type: "image", url: "photo_2026-09-13_15-46-29.jpg", label: "Экран ИИ-Дайджеста и статуса дедлайнов" },
      { type: "image", url: "photo_2026-09-13_15-46-28.jpg", label: "Управление командой и сотрудниками" },
      { type: "image", url: "photo_2026-09-13_15-45-55.jpg", label: "Статистика закрытых задач за месяц" },
      { type: "image", url: "photo_2026-09-13_15-45-51 (2).jpg", label: "Главный заставочный экран Orcus App" }
    ]
  },
  {
    id: "telegram-ai-callcenter",
    title: "Telegram AI Call Center",
    categoryLabel: "AI Voice Agents & Telephony",
    shortDesc: "Голосовой AI-агент в Telegram для автообзвона клиентов, обработки возражений и интеграции с CRM.",
    fullDesc: "Проектирование и разработка AI-сервиса автоматизации коммуникаций. Разработаны интерфейсы управления голосовыми ботами, сценарии обработки сложных возражений, интеграции с ElevenLabs / Vapi API и автоматическая передача данных в CRM.",
    tags: ["AI Products", "Conversational AI", "ElevenLabs API", "Vapi", "Telegram API", "Python"],
    features: [
      "Интерфейс настройки сценариев и ролей AI-голосовых агентов",
      "Сверхреалистичный голосовой синтез и понимание контекста",
      "Гибкие настройки: приветствия, часовые пояса, базы клиентов",
      "Автоматическая транскрипция диалогов и передача статуса в CRM",
      "Панель мониторинга и мгновенного управления голосовой кампанией"
    ],
    media: [
      { type: "image", url: "photo_2026-09-13_15-16-26.jpg", label: "Главное меню и возможности ИИ Колл-центра" },
      { type: "image", url: "photo_2026-09-13_15-16-29.jpg", label: "Панель настройки сценариев и ответов" },
      { type: "image", url: "photo_2026-09-13_15-45-49 (2).jpg", label: "Управление состоянием голосового агента" }
    ]
  },
  {
    id: "news-parser-autoposter",
    title: "AI News Parser & Telegram Auto-Poster",
    categoryLabel: "Automation & Content AI",
    shortDesc: "Автоматизированная система сбора новостей с LLM-рерайтингом, адаптацией Tone of Voice и автопостингом.",
    fullDesc: "Продукт для автоматизации контент-маркетинга. Разработана архитектура сбора данных с мировых медиа (Bloomberg, RSS), кастомизация стиля публикаций через промпт-инжиниринг и интерфейс управления очередями Telegram-каналов.",
    tags: ["AI Products", "Automation", "OpenAI API", "LLM Pipelines", "Python", "Telegram API"],
    features: [
      "Мультиканальный автоматический сбор и фильтрация новостей",
      "Умный LLM-рерайтинг с гибкой настройкой Tone of Voice и стилистики",
      "Визуальная очередь постов с возможностью предпросмотра",
      "Автоматическое форматирование текстов и подбор тегов",
      "Управление несколькими Telegram-каналами одновременно"
    ],
    media: [
      { type: "image", url: "photo_2026-09-13_15-18-24.jpg", label: "Дэшборд источников новостей (Bloomberg, RSS)" },
      { type: "image", url: "photo_2026-09-13_15-18-27.jpg", label: "Подключение Telegram-каналов и очереди" },
      { type: "image", url: "photo_2026-09-13_15-18-29.jpg", label: "Просмотр сгенерированных постов" },
      { type: "image", url: "photo_2026-09-13_15-46-31.jpg", label: "Конфигуратор промптов и Tone of Voice" }
    ]
  },
  {
    id: "personal-focus-tracker",
    title: "Personal Focus & Task Tracker",
    categoryLabel: "SaaS & Productivity Design",
    shortDesc: "SaaS веб-приложение для планирования дня, хронометража и глубокой аналитики времени в фокусе.",
    fullDesc: "Проектирование SaaS-продукта от UX-концепции и структурирования дашбордов до готового веб-приложения. Сервис помогает визуализировать приоритеты дня, отслеживать время в глубоком фокусе и анализировать личную продуктивность.",
    tags: ["Product Design", "SaaS", "UX/UI", "React", "TypeScript", "Data Vis"],
    features: [
      "Проектирование интуитивного интерфейса формирования 'Главного Фокуса Дня'",
      "Дашборды аналитики времени в фокусе и метрик продуктивности",
      "Интерактивный календарный план и приоритизация задач",
      "Персональный профиль, выбор темы оформления и методологий",
      "Минималистичный SaaS-дизайн с акцентом на скорость работы"
    ],
    media: [
      { type: "image", url: "photo_2026-09-13_15-45-49.jpg", label: "Окно создания фокус-задачи" },
      { type: "image", url: "photo_2026-09-13_15-45-51.jpg", label: "Экран аналитики времени в фокусе" },
      { type: "image", url: "photo_2026-09-13_15-45-50.jpg", label: "Профиль и настройки методологий" },
      { type: "image", url: "photo_2026-09-13_15-45-52.jpg", label: "Визуальный календарный план" },
      { type: "image", url: "photo_2026-09-13_15-45-54.jpg", label: "Главный экран с расписанием" }
    ]
  }
];

// State variables
let currentModalProject = null;
let currentMediaIndex = 0;

// DOM Initialization
document.addEventListener("DOMContentLoaded", async () => {
  renderProjects();
  setupModalListeners();
  await preloadPortfolioMedia();
  document.documentElement.classList.replace("is-loading", "is-loaded");
});

async function preloadPortfolioMedia() {
  const loaderProgress = document.getElementById("loaderProgress");
  const loaderLabel = document.getElementById("loaderLabel");
  const media = PROJECTS.flatMap(project => project.media);
  let completed = 0;

  const updateProgress = () => {
    completed += 1;
    const percent = Math.round((completed / media.length) * 100);
    if (loaderProgress) loaderProgress.style.width = `${percent}%`;
    if (loaderLabel) loaderLabel.textContent = `LOADING ASSETS ${completed}/${media.length}`;
  };

  await Promise.all(media.map(({ type, url }) => new Promise(resolve => {
    const done = () => { updateProgress(); resolve(); };

    if (type === "image") {
      const image = new Image();
      image.onload = done;
      image.onerror = done;
      image.src = encodeURI(url);
      return;
    }

    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.oncanplaythrough = done;
    video.onerror = done;
    video.src = encodeURI(url);
    video.load();
  })));
}

// Render Projects Grid (Show all 8 projects)
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(project => {
    const coverMedia = project.media[0];
    const isVideo = coverMedia.type === "video";

    return `
      <div class="project-card" onclick="openModal('${project.id}')">
        <div class="card-media">
          ${isVideo ? `
            <video src="${encodeURI(coverMedia.url)}" preload="auto" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()"></video>
            <div class="media-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              VIDEO DEMO
            </div>
          ` : `
            <img src="${encodeURI(coverMedia.url)}" alt="${project.title}" />
          `}
          <div class="media-count">${project.media.length} ф.</div>
        </div>
        
        <div class="card-body">
          <div class="card-category">${project.categoryLabel}</div>
          <h3 class="card-title">${project.title}</h3>
          <p class="card-desc">${project.shortDesc}</p>
          
          <div class="card-tags">
            ${project.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
            ${project.tags.length > 3 ? `<span class="tag">+${project.tags.length - 3}</span>` : ''}
          </div>

          <div class="card-footer-action">
            <span>Смотреть проект</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Setup Modal Lightbox
function setupModalListeners() {
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalClose");
  const prevBtn = document.getElementById("modalPrev");
  const nextBtn = document.getElementById("modalNext");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); navigateMedia(-1); });
  if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); navigateMedia(1); });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!currentModalProject) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") navigateMedia(-1);
    if (e.key === "ArrowRight") navigateMedia(1);
  });
}

function openModal(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  currentModalProject = project;
  currentMediaIndex = 0;

  // Fill text details
  document.getElementById("modalCategory").textContent = project.categoryLabel;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDesc").textContent = project.fullDesc;

  const featuresList = document.getElementById("modalFeatures");
  featuresList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');

  const tagsContainer = document.getElementById("modalTags");
  tagsContainer.innerHTML = project.tags.map(t => `<span class="tag">${t}</span>`).join('');

  // Hide prev/next navigation arrows and thumbnail strip if project has 1 or 0 media items
  const prevBtn = document.getElementById("modalPrev");
  const nextBtn = document.getElementById("modalNext");
  const thumbsStrip = document.getElementById("modalThumbs");
  const hasMultipleMedia = project.media && project.media.length > 1;

  if (prevBtn) prevBtn.style.display = hasMultipleMedia ? "flex" : "none";
  if (nextBtn) nextBtn.style.display = hasMultipleMedia ? "flex" : "none";
  if (thumbsStrip) thumbsStrip.style.display = hasMultipleMedia ? "flex" : "none";

  updateModalViewport();
  renderThumbnails();

  const overlay = document.getElementById("modalOverlay");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
  
  // Pause any playing videos
  const viewport = document.getElementById("modalViewport");
  const video = viewport.querySelector("video");
  if (video) video.pause();

  currentModalProject = null;
}

function updateModalViewport() {
  if (!currentModalProject) return;
  const viewport = document.getElementById("modalViewport");
  const currentMedia = currentModalProject.media[currentMediaIndex];

  if (currentMedia.type === "video") {
    viewport.innerHTML = `
      <video src="${encodeURI(currentMedia.url)}" controls autoplay playsinline class="modal-media-element"></video>
    `;
  } else {
    viewport.innerHTML = `
      <img src="${encodeURI(currentMedia.url)}" alt="${currentMedia.label}" class="modal-media-element" />
    `;
  }

  // Update active thumbnail
  const thumbs = document.querySelectorAll(".thumb-item");
  thumbs.forEach((thumb, idx) => {
    if (idx === currentMediaIndex) thumb.classList.add("active");
    else thumb.classList.remove("active");
  });
}

function renderThumbnails() {
  const thumbsContainer = document.getElementById("modalThumbs");
  if (!thumbsContainer || !currentModalProject) return;

  thumbsContainer.innerHTML = currentModalProject.media.map((med, idx) => `
    <div class="thumb-item ${idx === currentMediaIndex ? 'active' : ''}" onclick="selectMedia(${idx})">
      ${med.type === 'video' ? `
        <video src="${encodeURI(med.url)}#t=0.5" preload="metadata"></video>
        <div class="thumb-play-icon">▶</div>
      ` : `
        <img src="${encodeURI(med.url)}" alt="${med.label}" />
      `}
    </div>
  `).join('');
}

function selectMedia(index) {
  currentMediaIndex = index;
  updateModalViewport();
}

function navigateMedia(direction) {
  if (!currentModalProject) return;
  const total = currentModalProject.media.length;
  currentMediaIndex = (currentMediaIndex + direction + total) % total;
  updateModalViewport();
}

// Copy to Clipboard Toast
function copyContact(text, type) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`✓ ${type} скопирован: ${text}`);
  }).catch(() => {
    showToast(`Ваш контакт: ${text}`);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toastMsg");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/* ==========================================================================
   RETRO PIXEL SPACE SHOOTER BACKGROUND ENGINE (CANVAS)
   Patrolling Spaceship, Lasers, Floating Asteroids, Pixel Explosions & Stars
   ========================================================================== */

function initSpaceShooter() {
  const canvas = document.getElementById("spaceShooterCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Pixel Stars
  const stars = [];
  const STAR_COUNT = 90;
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() < 0.7 ? 2 : 3,
      speed: 0.5 + Math.random() * 1.8,
      color: Math.random() < 0.5 ? "#00f0ff" : Math.random() < 0.8 ? "#ff007f" : "#ffffff"
    });
  }

  // Spaceship (Autonomous Patrolling Pixel Ship)
  const ship = {
    x: width / 2,
    y: height - 120,
    w: 36,
    h: 36,
    targetX: width / 2,
    dx: 3,
    lastShot: 0,
    shootInterval: 280 // ms
  };

  // Lasers, Asteroids, Particles
  const lasers = [];
  const asteroids = [];
  const particles = [];
  let score = 999990;

  function spawnAsteroid() {
    if (asteroids.length < 9) {
      const radius = 16 + Math.random() * 24;
      asteroids.push({
        x: Math.random() * (width - 80) + 40,
        y: -40,
        radius: radius,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: 1 + Math.random() * 2.2,
        rot: 0,
        rotSpeed: (Math.random() - 0.5) * 0.05,
        color: Math.random() < 0.5 ? "#ff007f" : "#9d00ff"
      });
    }
  }

  function createExplosion(x, y, color) {
    for (let i = 0; i < 16; i++) {
      particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 7,
        vy: (Math.random() - 0.5) * 7,
        size: Math.random() * 4 + 2,
        life: 1,
        decay: 0.03 + Math.random() * 0.04,
        color: Math.random() < 0.5 ? "#ffe600" : color
      });
    }
  }

  function loop(now) {
    ctx.clearRect(0, 0, width, height);

    // 1. Draw Starfield
    for (let s of stars) {
      s.y += s.speed;
      if (s.y > height) {
        s.y = 0;
        s.x = Math.random() * width;
      }
      ctx.fillStyle = s.color;
      ctx.fillRect(Math.round(s.x), Math.round(s.y), s.size, s.size);
    }

    // 2. Update Ship AI Movement (Autonomous Patrol)
    if (Math.abs(ship.x - ship.targetX) < 10 || Math.random() < 0.02) {
      ship.targetX = Math.random() * (width - 200) + 100;
    }
    if (ship.x < ship.targetX) ship.x += ship.dx;
    else if (ship.x > ship.targetX) ship.x -= ship.dx;

    ship.y = height - 130;

    // Auto Firing
    if (now - ship.lastShot > ship.shootInterval) {
      lasers.push({ x: ship.x - 12, y: ship.y - 10, speed: 11 });
      lasers.push({ x: ship.x + 12, y: ship.y - 10, speed: 11 });
      ship.lastShot = now;
    }

    // Draw Pixel Spaceship
    ctx.save();
    ctx.translate(Math.round(ship.x), Math.round(ship.y));
    // Ship Nose & Body
    ctx.fillStyle = "#00f0ff";
    ctx.shadowColor = "#00f0ff";
    ctx.shadowBlur = 10;
    ctx.fillRect(-4, -18, 8, 20); // nose
    ctx.fillStyle = "#ff007f";
    ctx.shadowColor = "#ff007f";
    ctx.fillRect(-14, 0, 28, 10); // wings
    ctx.fillRect(-18, 6, 8, 8); // outer left wing
    ctx.fillRect(10, 6, 8, 8); // outer right wing
    ctx.fillStyle = "#ffe600";
    ctx.shadowColor = "#ffe600";
    ctx.fillRect(-2, -6, 4, 6); // cockpit
    ctx.shadowBlur = 0;

    // Engine flame animation
    if (Math.floor(now / 100) % 2 === 0) {
      ctx.fillStyle = "#ffaa00";
      ctx.fillRect(-6, 10, 12, 8);
    }
    ctx.restore();

    // 3. Update & Draw Lasers
    for (let i = lasers.length - 1; i >= 0; i--) {
      let l = lasers[i];
      l.y -= l.speed;
      ctx.fillStyle = "#00f0ff";
      ctx.shadowColor = "#00f0ff";
      ctx.shadowBlur = 10;
      ctx.fillRect(Math.round(l.x) - 2, Math.round(l.y), 4, 14);
      ctx.shadowBlur = 0;

      if (l.y < -20) {
        lasers.splice(i, 1);
      }
    }

    // 4. Spawn & Update Asteroids
    if (Math.random() < 0.03) spawnAsteroid();

    for (let aIdx = asteroids.length - 1; aIdx >= 0; aIdx--) {
      let ast = asteroids[aIdx];
      ast.x += ast.speedX;
      ast.y += ast.speedY;
      ast.rot += ast.rotSpeed;

      // Draw Pixelated Polygon Asteroid
      ctx.save();
      ctx.translate(Math.round(ast.x), Math.round(ast.y));
      ctx.rotate(ast.rot);
      ctx.fillStyle = ast.color;
      ctx.strokeStyle = "#00f0ff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      const numPoints = 6;
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        const r = ast.radius * (0.8 + 0.4 * (i % 2));
        const px = Math.cos(angle) * r;
        const py = Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Check collision with lasers
      for (let lIdx = lasers.length - 1; lIdx >= 0; lIdx--) {
        let l = lasers[lIdx];
        let dist = Math.hypot(ast.x - l.x, ast.y - l.y);
        if (dist < ast.radius + 8) {
          // Hit! Create explosion
          createExplosion(ast.x, ast.y, ast.color);
          asteroids.splice(aIdx, 1);
          lasers.splice(lIdx, 1);
          score += 100;
          const scoreEl = document.querySelector(".score-display");
          if (scoreEl) scoreEl.textContent = `HIGH SCORE: ${score}`;
          break;
        }
      }

      if (ast.y > height + 50) {
        asteroids.splice(aIdx, 1);
      }
    }

    // 5. Update & Draw Particles
    for (let pIdx = particles.length - 1; pIdx >= 0; pIdx--) {
      let p = particles[pIdx];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;

      if (p.life <= 0) {
        particles.splice(pIdx, 1);
        continue;
      }

      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
      ctx.globalAlpha = 1.0;
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}
