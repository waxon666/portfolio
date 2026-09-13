/* ==========================================================================
   PORTFOLIO INTERACTIVE LOGIC - ANDREY
   Project Data (8 Projects Showcase including 3D & Video Hero Landings)
   ========================================================================== */

const PROJECTS = [
  {
    id: "web3-helix",
    title: "Web3 Helix: Synthetic Dimension 3D",
    categoryLabel: "Web3 & 3D Interactive Landing",
    shortDesc: "Проектирование и разработка цифрового Web3-продукта с трехмерной интерактивной графикой, нейро-маршрутизацией и сайбер-эстетикой.",
    fullDesc: "Работа над цифровым Web3-продуктом: структура продукта, пользовательские сценарии, интерфейс и дальнейшая реализация. Проработан 3D Hero-сектор с динамическими алгоритмическими узлами, интерактивная система навигации по объектам synthetic infrastructure и адаптивный UX под мобильные устройства и десктоп.",
    tags: ["Web3", "3D Interactive", "Product Design", "Three.js / WebGL", "UI/UX", "React", "TypeScript"],
    features: [
      "Интерактивная 3D-графика и синтетическая динамическая анимация",
      "Проработка структуры Web3-продукта и пользовательских сценариев (User Flow)",
      "Адаптивный интерфейс кибер-эстетики с неоновой графикой",
      "Оптимизированная трехмерная сцена высокого FPS",
      "Интеграция Web3-компонентов и интерфейса управления узлами"
    ],
    media: [
      { type: "video", url: "IMG_8244.MOV", label: "Web3 Helix 3D Interactive Demo" }
    ]
  },
  {
    id: "aethel-atelier",
    title: "Aethel: Quiet Luxury Gem Atelier",
    categoryLabel: "Luxury E-Commerce & 3D UX",
    shortDesc: "Премиальный цифровой продукт для коллекционного дома камней с эффектом 3D-демонстрации и глубоким фокусом на визуал и взаимодействие.",
    fullDesc: "Разработка цифрового продукта с акцентом на визуальную часть, UX, структуру страниц и пользовательское взаимодействие. Создана атмосфера тихой роскоши (Quiet Atelier) с интерактивным представлением эксклюзивных камней, трехмерным просмотром граней и продуманной анимацией прокрутки.",
    tags: ["Product Design", "Quiet Luxury UX", "3D Showcase", "Figma", "Frontend", "User Flow"],
    features: [
      "Особый фокус на эстетику, типографику и физику взаимодействия",
      "Проработка сценариев закрытого клубного каталога и бронирования",
      "3D-презентация минералов и эксклюзивных коллекционных объектов",
      "Плавный серфинг по разделам Philosophy, House & Collection",
      "Высокий уровень проработки деталей интерфейса в Figma и коде"
    ],
    media: [
      { type: "video", url: "IMG_8511.MP4", label: "Aethel Atelier Showcase Demo" }
    ]
  },
  {
    id: "apex-performance",
    title: "Apex Performance: Video Hero Landing",
    categoryLabel: "High-Motion Landing & Video Hero",
    shortDesc: "Динамичный интерактивный лендинг для спорткаров с видео-хиро фоном, 3D-компонентами и онлайн-бронированием.",
    fullDesc: "Проектирование и реализация высокодинамичного веб-продукта. Разработан фоновый видео-хиро сектор (Video Hero), интерактивные карточки услуг (Performance & Tire Service) и бесшовный процесс записи с анимациями отклика.",
    tags: ["Video Hero", "UI/UX", "High-Motion UX", "JavaScript", "Frontend", "Figma Design"],
    features: [
      "Динамический фоновый Video Hero с бесшовной цикличностью",
      "Проектирование быстрых пользовательских сценариев бронирования",
      "Интерактивная галерея проектов и спортивных автомобилей",
      "Оптимизация загрузки тяжелых видеоматериалов и скриптов",
      "Высокая конверсионность интерфейсных элементов"
    ],
    media: [
      { type: "video", url: "IMG_8245.MP4", label: "Apex Performance Video Landing Demo" }
    ]
  },
  {
    id: "robinzone-ai",
    title: "Robinzone AI: Viral Predict & Deepfake Recast",
    categoryLabel: "AI Product & Computer Vision",
    shortDesc: "Студийный AI-интерфейс для оценки виральности видеопотока (Memory Encoding) и замена лиц в динамичном видеоряде Deepfake Video Recast.",
    fullDesc: "Продукт на стыке UX/UI проектирования и искусственного интеллекта. Разработана структура интерфейса, проработаны сценарии пользователей, интерфейсы загрузки медиа, предпросмотра и интеграция нейросетевых моделей инференса.",
    tags: ["Product Design", "AI Interfaces", "Computer Vision", "Claude Code / Cursor", "FastAPI", "React"],
    features: [
      "Проектирование пользовательских сценариев загрузки и рендеринга",
      "Оценка виральности видеоконтента (Memory Encoding metric)",
      "Deepfake замена лица с сохранением освещения и движения",
      "Поддержка видеопотоков MP4, MOV, WEBM",
      "Интуитивный UX интерфейса AI-студии"
    ],
    media: [
      { type: "video", url: "IMG_8724.MOV", label: "Deepfake Video Recast Demo" },
      { type: "video", url: "IMG_8743.MP4", label: "Predict Viral Potential Demo" }
    ]
  },
  {
    id: "orcus-taskmanager",
    title: "Orcus: Командный Таск-Менеджер с ИИ в Telegram",
    categoryLabel: "Telegram Mini App & AI Digest",
    shortDesc: "Telegram Mini App с голосовым вводом задач, ИИ-сводками активности команды и автоматическим контролем/дожимом дедлайнов.",
    fullDesc: "Полный цикл от Figma-макета и User Flow до работающего Telegram Mini App. Сервис решает проблему контроля командной работы благодаря голосовому вводу, автоматической выжимке состояния задач и умному AI-напоминанию дедлайнов.",
    tags: ["Telegram Mini Apps", "Product Design", "UI/UX", "Telegram API", "Voice AI", "Node.js"],
    features: [
      "User Flow и дизайн Telegram Mini App интерфейса",
      "Голосовое создание и классификация задач через LLM",
      "ИИ Дайджест: автогенерация отчетов о состоянии команды",
      "Умный автодожим подступающих и просроченных дедлайнов",
      "Дашборд горящих задач и статистика сотрудников"
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
    title: "Telegram AI Call Center (Vapi / ElevenLabs)",
    categoryLabel: "AI Voice Agents & Telephony",
    shortDesc: "Голосовой ИИ-агент в Telegram для автоматического обзвона клиентов, обработки возражений и интеграции с CRM.",
    fullDesc: "Проектирование и разработка продукта с AI-функциональностью: пользовательские сценарии, интерфейсы управления ботом, Vapi & ElevenLabs API-интеграции и реализация рабочего прототипа.",
    tags: ["AI Products", "Conversational AI", "ElevenLabs API", "Vapi", "Telegram Bot API", "Python"],
    features: [
      "Сверхреалистичный голосовой синтез ElevenLabs / Vapi",
      "Интеллектуальная обработка возражений и диалоговых сценариев",
      "Гибкие настройки: приветствия, часовые пояса, базы клиентов",
      "Автоматическая фиксация результатов и транскрипция в CRM",
      "Панель быстрого управления (Пауза / Перезапуск / Выбор базы)"
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
    shortDesc: "Автоматизированная система сбора новостей (Bloomberg, CryptoNews) с LLM-рерайтингом и отложенным автопостингом.",
    fullDesc: "Полностью автоматизированный пайплайн сбора и обработки информации. Проектирование архитектуры источников, кастомизация Tone of Voice через промпты и Telegram автопостинг.",
    tags: ["Automation", "OpenAI API", "LLM Pipelines", "Python", "Telegram API", "RSS Parser"],
    features: [
      "Мультиканальный сбор новостей в реальном времени",
      "Настройка Tone of Voice и стилистики рерайтинга",
      "Очередь постов с предпросмотром перед публикацией",
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
    shortDesc: "Веб-приложение для сфокусированного планирования дня, хронометража и глубокой аналитики времени в фокусе.",
    fullDesc: "Работа над SaaS-продуктом от идеологии и UX-сценария до визуального интерфейса и фронтенд-реализации. Включает аналитику продуктивности, фокус-таймер и наглядный календарь.",
    tags: ["Product Design", "UX/UI", "SaaS", "React", "TypeScript", "Data Vis"],
    features: [
      "Формирование 'Главного Фокуса Дня' с приоритизацией",
      "Графики и аналитика времени в фокусе (28ч+ в неделю)",
      "Интерактивный календарный план задач",
      "Персональный профиль, выбор темы и методологий",
      "Минималистичный дизайн с акцентом на скорость"
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
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupModalListeners();
});

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
            <video src="${encodeURI(coverMedia.url)}" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()"></video>
            <div class="media-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              VIDEO DEMO
            </div>
          ` : `
            <img src="${encodeURI(coverMedia.url)}" alt="${project.title}" loading="lazy" />
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
      <video src="${encodeURI(currentMedia.url)}" controls autoplay playsinline style="max-width:100%; max-height:100%; border-radius: 8px;"></video>
    `;
  } else {
    viewport.innerHTML = `
      <img src="${encodeURI(currentMedia.url)}" alt="${currentMedia.label}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:8px;" />
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
