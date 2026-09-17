// 도레미곰 《동물도미노》 인터랙티브 앱 & 독후활동지 스크립트 (v4.0)

// 13마리 동물 데이터 (0번 아기 캥거루 추가: 생쥐보다 더 작은 초미니 스타터 도미노!)
const ANIMALS = [
  {
    id: 0,
    name: "baby_kangaroo",
    korean: "아기 캥거루",
    title: "0번 아기 캥거루",
    w: 11,
    h: 14,
    d: 9,
    order: 0,
    pips: 1,
    color: "#FED7AA",
    accentColor: "#EA580C",
    textColor: "#7C2D12",
    file: "00_baby_kangaroo.png",
    habitat: "캥거루 점핑 초원",
    desc: "엄마 배 속에서 쏙 나와 함께 뛰는 귀여운 아기 캥거루! 가장 작지만 당찬 출발 도미노예요."
  },
  {
    id: 1,
    name: "mouse",
    korean: "생쥐",
    title: "1번 생쥐",
    w: 15,
    h: 20,
    d: 11,
    order: 1,
    pips: 1,
    color: "#E2E8F0",
    accentColor: "#F59E0B",
    textColor: "#1E293B",
    file: "01_mouse.png",
    habitat: "비밀 아지트",
    desc: "아기 캥거루 다음으로 날쌘 꼬마 생쥐! 톡 건드리면 신나는 도미노가 이어져요."
  },
  {
    id: 2,
    name: "rabbit",
    korean: "토끼",
    title: "2번 토끼",
    w: 19,
    h: 26,
    d: 13,
    order: 2,
    pips: 2,
    color: "#FCE7F3",
    accentColor: "#EC4899",
    textColor: "#831843",
    file: "02_rabbit.png",
    habitat: "비밀 아지트",
    desc: "쫑긋한 귀와 귀여운 앞니, 깡충깡충 뛰는 사랑스러운 토끼!"
  },
  {
    id: 3,
    name: "raccoon",
    korean: "너구리",
    title: "3번 너구리",
    w: 24,
    h: 32,
    d: 15,
    order: 3,
    pips: 3,
    color: "#E5E7EB",
    accentColor: "#6B7280",
    textColor: "#1F2937",
    file: "03_raccoon.png",
    habitat: "도토리 창고",
    desc: "줄무늬 꼬리를 살랑살랑 흔들며 서 있는 장난꾸러기 너구리!"
  },
  {
    id: 4,
    name: "koala",
    korean: "코알라",
    title: "4번 코알라",
    w: 30,
    h: 40,
    d: 17,
    order: 4,
    pips: 4,
    color: "#E2E8F0",
    accentColor: "#475569",
    textColor: "#0F172A",
    file: "04_koala.png",
    habitat: "유칼립투스 나무 언덕",
    desc: "동글동글 폭신한 귀를 가진 순둥이 코알라예요."
  },
  {
    id: 5,
    name: "panda",
    korean: "판다",
    title: "5번 판다",
    w: 36,
    h: 48,
    d: 19,
    order: 5,
    pips: 5,
    color: "#F3F4F6",
    accentColor: "#111827",
    textColor: "#111827",
    file: "05_panda.png",
    habitat: "초록 대나무 식당",
    desc: "발바닥 젤리를 뽐내며 엉덩이를 털썩 붙이고 앉은 귀여운 판다!"
  },
  {
    id: 6,
    name: "seal",
    korean: "물개",
    title: "6번 물개",
    w: 44,
    h: 56,
    d: 20,
    order: 6,
    pips: 6,
    color: "#CFFAFE",
    accentColor: "#0891B2",
    textColor: "#164E63",
    file: "06_seal.png",
    habitat: "파도 일광욕 바위",
    desc: "매끈한 몸으로 바닥에 찰싹 붙어 미소 짓고 있는 물개!"
  },
  {
    id: 7,
    name: "kangaroo",
    korean: "캥거루",
    title: "7번 캥거루",
    w: 41,
    h: 65,
    d: 21,
    order: 7,
    pips: 7,
    color: "#FFEDD5",
    accentColor: "#EA580C",
    textColor: "#7C2D12",
    file: "07_kangaroo.png",
    habitat: "캥거루 점핑 초원",
    desc: "여백 없이 시원하게 도미노를 채운 엄마 캥거루!"
  },
  {
    id: 8,
    name: "zebra",
    korean: "얼룩말",
    title: "8번 얼룩말",
    w: 45,
    h: 73,
    d: 23,
    order: 8,
    pips: 8,
    color: "#F8FAFC",
    accentColor: "#1E293B",
    textColor: "#0F172A",
    file: "08_zebra.png",
    habitat: "사바나 질주 트랙",
    desc: "선명하고 멋진 흑백 줄무늬를 뽐내며 씩씩하게 서 있는 얼룩말!"
  },
  {
    id: 9,
    name: "gorilla",
    korean: "고릴라",
    title: "9번 고릴라",
    w: 50,
    h: 81,
    d: 25,
    order: 9,
    pips: 9,
    color: "#E2E8F0",
    accentColor: "#334155",
    textColor: "#0F172A",
    file: "09_gorilla.png",
    habitat: "깊은 정글 바위산",
    desc: "우람한 주먹과 단단한 어깨를 가진 멋쟁이 고릴라!"
  },
  {
    id: 10,
    name: "bear",
    korean: "곰",
    title: "10번 곰",
    w: 55,
    h: 90,
    d: 26,
    order: 10,
    pips: 10,
    color: "#FEF3C7",
    accentColor: "#B45309",
    textColor: "#78350F",
    file: "10_bear.png",
    habitat: "아늑한 바위 동굴",
    desc: "두 발로 늠름하게 서 있는 듬직한 갈색 곰이에요."
  },
  {
    id: 11,
    name: "hippo",
    korean: "하마",
    title: "11번 하마",
    w: 68,
    h: 99,
    d: 28,
    order: 11,
    pips: 11,
    color: "#FEF3C7",
    accentColor: "#78350F",
    textColor: "#451A03",
    file: "11_hippo.png",
    habitat: "시원한 강가 물놀이 웅덩이",
    desc: "튼튼한 네 다리로 서서 입을 쩌억 벌리고 있는 거대하고 듬직한 하마!"
  },
  {
    id: 12,
    name: "elephant",
    korean: "코끼리",
    title: "12번 코끼리",
    w: 96,
    h: 115,
    d: 32,
    order: 12,
    pips: 12,
    color: "#E2E8F0",
    accentColor: "#475569",
    textColor: "#0F172A",
    file: "12_elephant.png",
    habitat: "대장 코끼리의 사바나 쉼터",
    desc: "표지에서 가장 크고 웅장한 대장 코끼리! 코를 번쩍 들고 환하게 웃어요."
  }
];

// 글로벌 상태
let currentScale = 1.0;
let selectedAnimal = ANIMALS[0];
let is3DFolded = true;
let rotX = -15;
let rotY = 25;

let towerStack = [];
let currentQuiz = null;

// =========================================================
// DYNAMIC DOMINO & MUSICAL ANIMATION ENGINE (Canvas Background)
// Tumbling 3D Pastel Blocks, Floating Notes, Paw Prints & Interactive Topples
// Author: Made by EMom-NJ
// =========================================================
let bgConfig = {
  mode: 'party', // 'gentle', 'party', 'rush'
  dominoCount: 26,
  noteCount: 16,
  speedMultiplier: 1.0,
  audioEnabled: false
};

const DOMINO_PALETTE = [
  { face: '#FF8A65', side: '#E64A19', pips: '#FFFFFF' }, // Coral Orange
  { face: '#FFD54F', side: '#FFA000', pips: '#5D4037' }, // Sunny Yellow
  { face: '#81C784', side: '#388E3C', pips: '#FFFFFF' }, // Fresh Mint
  { face: '#64B5F6', side: '#1976D2', pips: '#FFFFFF' }, // Sky Blue
  { face: '#BA68C8', side: '#7B1FA2', pips: '#FFFFFF' }, // Lilac Purple
  { face: '#F06292', side: '#C2185B', pips: '#FFFFFF' }, // Bubblegum Pink
  { face: '#4DD0E1', side: '#0097A7', pips: '#FFFFFF' }, // Turquoise
  { face: '#FFB74D', side: '#F57C00', pips: '#FFFFFF' }  // Warm Peach
];

const MUSIC_SYMBOLS = ['🎵', '🎶', '🎼', '⭐', '✨'];

let audioCtx = null;
const XYLOPHONE_NOTES = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50]; // C5, D5, E5, G5, A5, C6 (Do-Re-Mi Pentatonic)

function playXylophoneNote(index = -1) {
  if (!bgConfig.audioEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const freq = index >= 0 
      ? XYLOPHONE_NOTES[index % XYLOPHONE_NOTES.length] 
      : XYLOPHONE_NOTES[Math.floor(Math.random() * XYLOPHONE_NOTES.length)];

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.36);
  } catch (e) {}
}

function playDominoCascadeSound() {
  if (!bgConfig.audioEnabled) return;
  [0, 2, 3, 5].forEach((n, idx) => {
    setTimeout(() => {
      playXylophoneNote(n);
    }, idx * 65);
  });
}

function initDominoAudio() {
  const btn = document.getElementById('dominoAudioBtn');
  if (!btn) return;
  const icon = document.getElementById('dominoAudioIcon');
  const text = document.getElementById('dominoAudioText');

  btn.addEventListener('click', () => {
    bgConfig.audioEnabled = !bgConfig.audioEnabled;
    if (bgConfig.audioEnabled) {
      btn.classList.add('active');
      icon.textContent = '🎶';
      text.textContent = '효과음 켜짐';
      playDominoCascadeSound();
    } else {
      btn.classList.remove('active');
      icon.textContent = '🎵';
      text.textContent = '효과음 켜기';
    }
  });
}

function drawDominoBlock(ctx, d) {
  ctx.save();
  ctx.translate(d.x, d.y);
  ctx.rotate(d.angle);
  ctx.scale(d.depthScale, d.depthScale);
  ctx.globalAlpha = d.opacity;

  const w = d.w;
  const h = d.h;
  const r = 4;
  const bevel = 4;

  // 1. Soft drop shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
  roundRect(ctx, -w/2 + 2, -h/2 + 4, w + bevel, h + bevel, r);
  ctx.fill();

  // 2. 3D Bevel Right & Bottom
  ctx.fillStyle = d.color.side;
  roundRect(ctx, -w/2 + bevel, -h/2 + bevel, w, h, r);
  ctx.fill();

  // 3. Main Domino Face
  ctx.fillStyle = d.color.face;
  roundRect(ctx, -w/2, -h/2, w, h, r);
  ctx.fill();

  // Thin clean outline
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.lineWidth = 1;
  roundRect(ctx, -w/2, -h/2, w, h, r);
  ctx.stroke();

  // 4. Center dividing groove line
  ctx.strokeStyle = d.color.side;
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(-w/2 + 2, 0);
  ctx.lineTo(w/2 - 2, 0);
  ctx.stroke();

  // 5. Pips (Dots)
  ctx.fillStyle = d.color.pips;
  drawPips(ctx, d.pipsTop, 0, -h/4, w * 0.7, h * 0.4);
  drawPips(ctx, d.pipsBottom, 0, h/4, w * 0.7, h * 0.4);

  ctx.restore();
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawPips(ctx, count, cx, cy, boxW, boxH) {
  const dotR = 2.0;
  const offX = boxW * 0.28;
  const offY = boxH * 0.28;

  function dot(x, y) {
    ctx.beginPath();
    ctx.arc(cx + x, cy + y, dotR, 0, Math.PI * 2);
    ctx.fill();
  }

  if (count === 1) {
    dot(0, 0);
  } else if (count === 2) {
    dot(-offX, -offY);
    dot(offX, offY);
  } else if (count === 3) {
    dot(-offX, -offY);
    dot(0, 0);
    dot(offX, offY);
  } else if (count === 4) {
    dot(-offX, -offY);
    dot(offX, -offY);
    dot(-offX, offY);
    dot(offX, offY);
  } else if (count === 5) {
    dot(-offX, -offY);
    dot(offX, -offY);
    dot(0, 0);
    dot(-offX, offY);
    dot(offX, offY);
  } else if (count >= 6) {
    dot(-offX, -offY);
    dot(offX, -offY);
    dot(-offX, 0);
    dot(offX, 0);
    dot(-offX, offY);
    dot(offX, offY);
  }
}

function drawPawPrint(ctx, p) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.angle);
  ctx.globalAlpha = p.opacity;
  ctx.fillStyle = p.color;

  const s = p.size;
  // Palm pad
  ctx.beginPath();
  ctx.ellipse(0, s * 0.2, s * 0.5, s * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();

  // 4 toe pads
  const toes = [
    { x: -s * 0.4, y: -s * 0.35, r: s * 0.18 },
    { x: -s * 0.15, y: -s * 0.55, r: s * 0.2 },
    { x: s * 0.15, y: -s * 0.55, r: s * 0.2 },
    { x: s * 0.4, y: -s * 0.35, r: s * 0.18 }
  ];
  toes.forEach(t => {
    ctx.beginPath();
    ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}

function initDominoBackground() {
  const canvas = document.getElementById('dominoBgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const dominoes = [];
  const notes = [];
  const pawPrints = [];
  const burstParticles = [];

  function createDomino(isInitial = false) {
    const pal = DOMINO_PALETTE[Math.floor(Math.random() * DOMINO_PALETTE.length)];
    const sizeRatio = Math.random() * 0.5 + 0.75;
    return {
      x: Math.random() * width,
      y: isInitial ? Math.random() * height : -70 - Math.random() * 50,
      w: 22 * sizeRatio,
      h: 44 * sizeRatio,
      color: pal,
      pipsTop: Math.floor(Math.random() * 6) + 1,
      pipsBottom: Math.floor(Math.random() * 6) + 1,
      speedY: (Math.random() * 1.5 + 1.2) * bgConfig.speedMultiplier,
      speedX: (Math.random() - 0.5) * 0.8,
      wobbleSpeed: Math.random() * 0.03 + 0.015,
      wobbleAngle: Math.random() * Math.PI * 2,
      wobbleAmp: Math.random() * 1.5 + 0.8,
      angle: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.025 * bgConfig.speedMultiplier,
      depthScale: Math.random() * 0.35 + 0.75,
      opacity: Math.random() * 0.35 + 0.45
    };
  }

  function createNote(isInitial = false) {
    return {
      x: Math.random() * width,
      y: isInitial ? Math.random() * height : height + 30 + Math.random() * 40,
      symbol: MUSIC_SYMBOLS[Math.floor(Math.random() * MUSIC_SYMBOLS.length)],
      size: Math.random() * 14 + 16,
      speedY: -(Math.random() * 0.9 + 0.6) * bgConfig.speedMultiplier,
      speedX: (Math.random() - 0.5) * 0.6,
      wobbleSpeed: Math.random() * 0.03 + 0.02,
      wobbleAngle: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.4 + 0.35,
      color: DOMINO_PALETTE[Math.floor(Math.random() * DOMINO_PALETTE.length)].face
    };
  }

  for (let i = 0; i < bgConfig.dominoCount; i++) {
    dominoes.push(createDomino(true));
  }
  for (let i = 0; i < bgConfig.noteCount; i++) {
    notes.push(createNote(true));
  }

  let pawTimer = 0;
  function spawnPawWalk() {
    const startX = Math.random() < 0.5 ? Math.random() * (width * 0.3) : width * 0.7 + Math.random() * (width * 0.3);
    const startY = Math.random() * (height * 0.6) + 100;
    const angle = (Math.random() - 0.5) * 0.8 + (startX < width / 2 ? 0.3 : -0.3);
    const steps = 6;
    const stepDist = 38;
    const pal = DOMINO_PALETTE[Math.floor(Math.random() * DOMINO_PALETTE.length)].face;

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        const sideOffset = (i % 2 === 0 ? -12 : 12);
        const px = startX + Math.cos(angle) * (i * stepDist) + Math.cos(angle + Math.PI/2) * sideOffset;
        const py = startY + Math.sin(angle) * (i * stepDist) + Math.sin(angle + Math.PI/2) * sideOffset;
        pawPrints.push({
          x: px,
          y: py,
          size: 16,
          angle: angle + Math.PI/2,
          color: pal,
          opacity: 0.5,
          life: 1.0,
          fadeSpeed: 0.007
        });
      }, i * 220);
    }
  }

  let lastTrailTime = 0;
  window.addEventListener('mousemove', e => {
    const now = performance.now();
    if (now - lastTrailTime > 60) {
      lastTrailTime = now;
      burstParticles.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2 - 1,
        symbol: Math.random() < 0.6 ? '✨' : '🎵',
        size: Math.random() * 8 + 12,
        opacity: 0.85,
        life: 1.0,
        decay: 0.025,
        color: DOMINO_PALETTE[Math.floor(Math.random() * DOMINO_PALETTE.length)].face
      });
    }
  });

  window.addEventListener('click', e => {
    if (e.target.closest('button, a, input, select')) return;

    playDominoCascadeSound();

    const count = bgConfig.mode === 'rush' ? 16 : 10;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i / count) + (Math.random() * 0.4);
      const speed = Math.random() * 5 + 3;
      const pal = DOMINO_PALETTE[Math.floor(Math.random() * DOMINO_PALETTE.length)];
      burstParticles.push({
        isDomino: true,
        x: e.clientX,
        y: e.clientY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3.5,
        gravity: 0.28,
        w: 18,
        h: 36,
        color: pal,
        pipsTop: Math.floor(Math.random() * 6) + 1,
        pipsBottom: Math.floor(Math.random() * 6) + 1,
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.15,
        opacity: 0.95,
        life: 1.0,
        decay: 0.014
      });
    }
  });

  const motionBtns = document.querySelectorAll('.motion-btn');
  motionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      motionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-mode');
      setMotionMode(mode);
    });
  });

  function setMotionMode(mode) {
    bgConfig.mode = mode;
    if (mode === 'gentle') {
      bgConfig.dominoCount = 14;
      bgConfig.noteCount = 12;
      bgConfig.speedMultiplier = 0.65;
    } else if (mode === 'party') {
      bgConfig.dominoCount = 26;
      bgConfig.noteCount = 16;
      bgConfig.speedMultiplier = 1.0;
    } else if (mode === 'rush') {
      bgConfig.dominoCount = 50;
      bgConfig.noteCount = 22;
      bgConfig.speedMultiplier = 1.8;
    }

    while (dominoes.length < bgConfig.dominoCount) dominoes.push(createDomino());
    while (dominoes.length > bgConfig.dominoCount) dominoes.pop();
    while (notes.length < bgConfig.noteCount) notes.push(createNote());
    while (notes.length > bgConfig.noteCount) notes.pop();

    playXylophoneNote(mode === 'rush' ? 5 : 2);
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = pawPrints.length - 1; i >= 0; i--) {
      const p = pawPrints[i];
      p.opacity -= p.fadeSpeed;
      if (p.opacity <= 0) {
        pawPrints.splice(i, 1);
        continue;
      }
      drawPawPrint(ctx, p);
    }

    pawTimer++;
    if (pawTimer > (bgConfig.mode === 'rush' ? 90 : 180)) {
      pawTimer = 0;
      if (Math.random() < 0.75) {
        spawnPawWalk();
      }
    }

    for (let i = 0; i < dominoes.length; i++) {
      const d = dominoes[i];
      d.wobbleAngle += d.wobbleSpeed;
      d.x += d.speedX + Math.sin(d.wobbleAngle) * d.wobbleAmp;
      d.y += d.speedY;
      d.angle += d.rotSpeed;

      if (d.y > height + 80) {
        Object.assign(d, createDomino());
      }
      drawDominoBlock(ctx, d);
    }

    for (let i = 0; i < notes.length; i++) {
      const n = notes[i];
      n.wobbleAngle += n.wobbleSpeed;
      n.x += n.speedX + Math.sin(n.wobbleAngle) * 0.9;
      n.y += n.speedY;

      if (n.y < -50) {
        Object.assign(n, createNote());
      }

      ctx.save();
      ctx.globalAlpha = n.opacity;
      ctx.fillStyle = n.color;
      ctx.font = `${n.size}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(n.symbol, n.x, n.y);
      ctx.restore();
    }

    for (let i = burstParticles.length - 1; i >= 0; i--) {
      const bp = burstParticles[i];
      bp.life -= bp.decay;
      bp.opacity = bp.life;

      if (bp.life <= 0) {
        burstParticles.splice(i, 1);
        continue;
      }

      if (bp.isDomino) {
        bp.x += bp.vx;
        bp.y += bp.vy;
        bp.vy += bp.gravity;
        bp.angle += bp.rotSpeed;
        drawDominoBlock(ctx, {
          x: bp.x,
          y: bp.y,
          w: bp.w,
          h: bp.h,
          color: bp.color,
          pipsTop: bp.pipsTop,
          pipsBottom: bp.pipsBottom,
          angle: bp.angle,
          depthScale: 1.0,
          opacity: bp.opacity
        });
      } else {
        bp.x += bp.vx;
        bp.y += bp.vy;
        ctx.save();
        ctx.globalAlpha = bp.opacity;
        ctx.fillStyle = bp.color;
        ctx.font = `${bp.size}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(bp.symbol, bp.x, bp.y);
        ctx.restore();
      }
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', () => {
  initDominoBackground();
  initDominoAudio();
  setupTabs();
  setupScaleButtons();
  setup3DViewer();
  setupDominoSimulator();
  setupPlayZone();
  renderPrintSheets();
});

function setupTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });
}

function setupScaleButtons() {
  const btns = document.querySelectorAll('.scale-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentScale = parseFloat(btn.getAttribute('data-scale'));
      
      const badge = document.getElementById('current-scale-label');
      if (badge) {
        badge.textContent = currentScale === 1.0 ? '100% 표지 실물 크기' : `${currentScale}배 확대`;
      }

      renderPrintSheets();
      update3DBox();
    });
  });
}

// =========================================================
// SVG 전개도 (Box Net) 생성 엔진
// =========================================================
function createNetSVG(animal, scale = 1.0, isPartA = false, isPartB = false) {
  const W = animal.w * scale;
  const H = animal.h * scale;
  const D = animal.d * scale;
  const Tab = Math.max(4.5, Math.min(10, D * 0.45));

  if (animal.id === 12) {
    if (isPartA) return createElephantPartA(animal, W, H, D, Tab);
    if (isPartB) return createElephantPartB(animal, W, H, D, Tab);
  }

  if (animal.id === 11) {
    return createVerticalNetSVG(animal, W, H, D, Tab);
  }

  const totalW = D + W + D + W + Tab + 8;
  const totalH = D + H + D + (Tab * 2) + 8;
  const ox = 4;
  const oy = Tab + 4;

  const frontX = ox + D;
  const frontY = oy + D;
  const leftX = ox;
  const leftY = frontY;
  const rightX = frontX + W;
  const rightY = frontY;
  const backX = rightX + D;
  const backY = frontY;
  const topX = frontX;
  const topY = oy;
  const bottomX = frontX;
  const bottomY = frontY + H;

  // 캥거루 여백 채우기: 여백 없이 꽉 채워 렌더
  const isKangaroo = (animal.id === 7);
  const imgPad = isKangaroo ? 0.3 : 1;

  return `
    <svg class="net-svg" width="${totalW}mm" height="${totalH}mm" viewBox="0 0 ${totalW} ${totalH}" xmlns="http://www.w3.org/2000/svg">
      <!-- 풀칠 날개들 -->
      <polygon points="${backX + W},${backY} ${backX + W + Tab},${backY + Tab} ${backX + W + Tab},${backY + H - Tab} ${backX + W},${backY + H}" class="glue-tab-rect" />
      <text x="${backX + W + Tab/2}" y="${backY + H/2}" class="glue-tab-label" transform="rotate(90 ${backX + W + Tab/2} ${backY + H/2})">풀칠</text>

      <polygon points="${topX},${topY} ${topX + Tab},${topY - Tab} ${topX + W - Tab},${topY - Tab} ${topX + W},${topY}" class="glue-tab-rect" />
      <text x="${topX + W/2}" y="${topY - Tab/2}" class="glue-tab-label">풀칠</text>

      <polygon points="${bottomX},${bottomY + D} ${bottomX + Tab},${bottomY + D + Tab} ${bottomX + W - Tab},${bottomY + D + Tab} ${bottomX + W},${bottomY + D}" class="glue-tab-rect" />
      <text x="${bottomX + W/2}" y="${bottomY + D + Tab/2}" class="glue-tab-label">풀칠</text>

      <polygon points="${leftX},${leftY} ${leftX + Tab},${leftY - Tab} ${leftX + D - Tab},${leftY - Tab} ${leftX + D},${leftY}" class="glue-tab-rect" />
      <polygon points="${rightX},${rightY} ${rightX + Tab},${rightY - Tab} ${rightX + D - Tab},${rightY - Tab} ${rightX + D},${rightY}" class="glue-tab-rect" />
      <polygon points="${leftX},${leftY + H} ${leftX + Tab},${leftY + H + Tab} ${leftX + D - Tab},${leftY + H + Tab} ${leftX + D},${leftY + H}" class="glue-tab-rect" />
      <polygon points="${rightX},${rightY + H} ${rightX + Tab},${rightY + H + Tab} ${rightX + D - Tab},${rightY + H + Tab} ${rightX + D},${rightY + H}" class="glue-tab-rect" />

      <!-- 앞면 (동물) -->
      <rect x="${frontX}" y="${frontY}" width="${W}" height="${H}" class="face-front" fill="#FFFFFF" />
      <image href="animals_web/${animal.file}" x="${frontX + imgPad}" y="${frontY + imgPad}" width="${W - imgPad * 2}" height="${H - imgPad * 2}" preserveAspectRatio="${isKangaroo ? 'none' : 'xMidYMid meet'}" />
      <rect x="${frontX}" y="${frontY + H - 4}" width="${W}" height="4" fill="rgba(255,255,255,0.85)" />
      <text x="${frontX + W/2}" y="${frontY + H - 1.1}" font-family="Jua, sans-serif" font-size="${Math.max(2.6, Math.min(5.2, W*0.19))}px" fill="${animal.accentColor}" text-anchor="middle">${animal.korean}</text>

      <!-- 왼쪽면 -->
      <rect x="${leftX}" y="${leftY}" width="${D}" height="${H}" class="face-side" fill="${animal.color}" />
      <text x="${leftX + D/2}" y="${leftY + H/2}" font-family="Jua, sans-serif" font-size="${Math.max(2.6, D*0.24)}px" fill="${animal.textColor}" text-anchor="middle" transform="rotate(-90 ${leftX + D/2} ${leftY + H/2})">도미노</text>

      <!-- 오른쪽면 -->
      <rect x="${rightX}" y="${rightY}" width="${D}" height="${H}" class="face-side" fill="${animal.color}" />
      <text x="${rightX + D/2}" y="${rightY + H/2}" font-family="Jua, sans-serif" font-size="${Math.max(2.6, D*0.24)}px" fill="${animal.textColor}" text-anchor="middle" transform="rotate(90 ${rightX + D/2} ${rightY + H/2})">도미노</text>

      <!-- 뒷면 (글자 겹침 0%, '동물도미노' 제거 완료) -->
      <rect x="${backX}" y="${backY}" width="${W}" height="${H}" class="face-back" fill="#FFFDF8" />
      ${renderDominoBackSVG(animal, backX, backY, W, H)}

      <!-- 윗면 -->
      <rect x="${topX}" y="${topY}" width="${W}" height="${D}" class="face-cap" fill="${animal.color}" />
      <text x="${topX + W/2}" y="${topY + D/2 + 0.8}" font-family="Jua, sans-serif" font-size="${Math.max(2.4, Math.min(4.8, D*0.35))}px" fill="${animal.textColor}" text-anchor="middle">▲ 머리</text>

      <!-- 아랫면 -->
      <rect x="${bottomX}" y="${bottomY}" width="${W}" height="${D}" class="face-cap" fill="#E2E8F0" />
      <text x="${bottomX + W/2}" y="${bottomY + D/2 + 0.8}" font-family="Jua, sans-serif" font-size="${Math.max(2.4, Math.min(4.8, D*0.35))}px" fill="#475569" text-anchor="middle">바닥 (받침)</text>

      <!-- 접는 선 -->
      <line x1="${frontX}" y1="${frontY}" x2="${frontX}" y2="${frontY + H}" class="fold-line" />
      <line x1="${rightX}" y1="${rightY}" x2="${rightX}" y2="${rightY + H}" class="fold-line" />
      <line x1="${backX}" y1="${backY}" x2="${backX}" y2="${backY + H}" class="fold-line" />
      <line x1="${backX + W}" y1="${backY}" x2="${backX + W}" y2="${backY + H}" class="fold-line" />
      <line x1="${topX}" y1="${frontY}" x2="${topX + W}" y2="${frontY}" class="fold-line" />
      <line x1="${topX}" y1="${topY}" x2="${topX + W}" y2="${topY}" class="fold-line" />
      <line x1="${bottomX}" y1="${bottomY}" x2="${bottomX + W}" y2="${bottomY}" class="fold-line" />
      <line x1="${bottomX}" y1="${bottomY + D}" x2="${bottomX + W}" y2="${bottomY + D}" class="fold-line" />
      <line x1="${leftX}" y1="${leftY}" x2="${leftX + D}" y2="${leftY}" class="fold-line" />
      <line x1="${leftX}" y1="${leftY + H}" x2="${leftX + D}" y2="${leftY + H}" class="fold-line" />
      <line x1="${rightX}" y1="${rightY}" x2="${rightX + D}" y2="${rightY}" class="fold-line" />
      <line x1="${rightX}" y1="${rightY + H}" x2="${rightX + D}" y2="${rightY + H}" class="fold-line" />
      <text x="${leftX + 1}" y="${leftY - 1}" font-size="6px">✂️</text>
    </svg>
  `;
}

// 하마 세로형 전개도
function createVerticalNetSVG(animal, W, H, D, Tab) {
  const totalW = D + W + D + (Tab * 2) + 10;
  const totalH = H + D + H + D + Tab + 10;
  const ox = Tab + 5;
  const oy = 5;

  const backX = ox + D;
  const backY = oy;
  const topX = backX;
  const topY = backY + H;
  const frontX = backX;
  const frontY = topY + D;
  const bottomX = backX;
  const bottomY = frontY + H;
  const leftX = ox;
  const leftY = frontY;
  const rightX = frontX + W;
  const rightY = frontY;

  return `
    <svg class="net-svg" width="${totalW}mm" height="${totalH}mm" viewBox="0 0 ${totalW} ${totalH}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${bottomX},${bottomY + D} ${bottomX + Tab},${bottomY + D + Tab} ${bottomX + W - Tab},${bottomY + D + Tab} ${bottomX + W},${bottomY + D}" class="glue-tab-rect" />
      <text x="${bottomX + W/2}" y="${bottomY + D + Tab/2}" class="glue-tab-label">풀칠</text>

      <polygon points="${leftX},${leftY} ${leftX - Tab},${leftY + Tab} ${leftX - Tab},${leftY + H - Tab} ${leftX},${leftY + H}" class="glue-tab-rect" />
      <text x="${leftX - Tab/2}" y="${leftY + H/2}" class="glue-tab-label" transform="rotate(-90 ${leftX - Tab/2} ${leftY + H/2})">풀칠</text>

      <polygon points="${rightX + D},${rightY} ${rightX + D + Tab},${rightY + Tab} ${rightX + D + Tab},${rightY + H - Tab} ${rightX + D},${rightY + H}" class="glue-tab-rect" />
      <text x="${rightX + D + Tab/2}" y="${rightY + H/2}" class="glue-tab-label" transform="rotate(90 ${rightX + D + Tab/2} ${rightY + H/2})">풀칠</text>

      <rect x="${backX}" y="${backY}" width="${W}" height="${H}" class="face-back" fill="#FFFDF8" />
      ${renderDominoBackSVG(animal, backX, backY, W, H)}

      <rect x="${topX}" y="${topY}" width="${W}" height="${D}" class="face-cap" fill="${animal.color}" />
      <text x="${topX + W/2}" y="${topY + D/2 + 1}" font-family="Jua, sans-serif" font-size="6px" fill="${animal.textColor}" text-anchor="middle">머리 (윗면)</text>

      <rect x="${frontX}" y="${frontY}" width="${W}" height="${H}" class="face-front" fill="#FFFFFF" />
      <image href="animals_web/${animal.file}" x="${frontX + 1}" y="${frontY + 1}" width="${W - 2}" height="${H - 2}" preserveAspectRatio="xMidYMid meet" />
      <rect x="${frontX}" y="${frontY + H - 6}" width="${W}" height="6" fill="rgba(255,255,255,0.85)" />
      <text x="${frontX + W/2}" y="${frontY + H - 1.8}" font-family="Jua, sans-serif" font-size="8px" fill="${animal.accentColor}" text-anchor="middle">${animal.korean}</text>

      <rect x="${leftX}" y="${leftY}" width="${D}" height="${H}" class="face-side" fill="${animal.color}" />
      <text x="${leftX + D/2}" y="${leftY + H/2}" font-family="Jua, sans-serif" font-size="6px" fill="${animal.textColor}" text-anchor="middle" transform="rotate(-90 ${leftX + D/2} ${leftY + H/2})">도미노</text>

      <rect x="${rightX}" y="${rightY}" width="${D}" height="${H}" class="face-side" fill="${animal.color}" />
      <text x="${rightX + D/2}" y="${rightY + H/2}" font-family="Jua, sans-serif" font-size="6px" fill="${animal.textColor}" text-anchor="middle" transform="rotate(90 ${rightX + D/2} ${rightY + H/2})">도미노</text>

      <rect x="${bottomX}" y="${bottomY}" width="${W}" height="${D}" class="face-cap" fill="#E2E8F0" />
      <text x="${bottomX + W/2}" y="${bottomY + D/2 + 1}" font-family="Jua, sans-serif" font-size="6px" fill="#475569" text-anchor="middle">바닥 (도미노 받침대)</text>

      <line x1="${backX}" y1="${topY}" x2="${backX + W}" y2="${topY}" class="fold-line" />
      <line x1="${frontX}" y1="${frontY}" x2="${frontX + W}" y2="${frontY}" class="fold-line" />
      <line x1="${bottomX}" y1="${bottomY}" x2="${bottomX + W}" y2="${bottomY}" class="fold-line" />
      <line x1="${bottomX}" y1="${bottomY + D}" x2="${bottomX + W}" y2="${bottomY + D}" class="fold-line" />
      <line x1="${frontX}" y1="${frontY}" x2="${frontX + W}" y2="${frontY}" class="fold-line" />
      <line x1="${rightX}" y1="${rightY}" x2="${rightX}" y2="${rightY + H}" class="fold-line" />
    </svg>
  `;
}

// 코끼리 파트 A
function createElephantPartA(animal, W, H, D, Tab) {
  const totalW = D + W + Tab + 15;
  const totalH = D + H + D + (Tab * 2) + 15;
  const ox = 5;
  const oy = Tab + 5;

  const leftX = ox;
  const leftY = oy + D;
  const frontX = ox + D;
  const frontY = leftY;
  const topX = frontX;
  const topY = oy;
  const bottomX = frontX;
  const bottomY = frontY + H;

  return `
    <svg class="net-svg" width="${totalW}mm" height="${totalH}mm" viewBox="0 0 ${totalW} ${totalH}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${frontX + W},${frontY} ${frontX + W + Tab},${frontY + Tab} ${frontX + W + Tab},${frontY + H - Tab} ${frontX + W},${frontY + H}" class="glue-tab-rect" />
      <text x="${frontX + W + Tab/2}" y="${frontY + H/2}" class="glue-tab-label" transform="rotate(90 ${frontX + W + Tab/2} ${frontY + H/2})">파트B와 연결</text>

      <polygon points="${topX},${topY} ${topX + Tab},${topY - Tab} ${topX + W - Tab},${topY - Tab} ${topX + W},${topY}" class="glue-tab-rect" />
      <text x="${topX + W/2}" y="${topY - Tab/2}" class="glue-tab-label">파트B 상단 연결</text>

      <polygon points="${bottomX},${bottomY + D} ${bottomX + Tab},${bottomY + D + Tab} ${bottomX + W - Tab},${bottomY + D + Tab} ${bottomX + W},${bottomY + D}" class="glue-tab-rect" />
      <text x="${bottomX + W/2}" y="${bottomY + D + Tab/2}" class="glue-tab-label">파트B 하단 연결</text>

      <rect x="${leftX}" y="${leftY}" width="${D}" height="${H}" class="face-side" fill="${animal.color}" />
      <text x="${leftX + D/2}" y="${leftY + H/2}" font-family="Jua, sans-serif" font-size="7px" fill="${animal.textColor}" text-anchor="middle" transform="rotate(-90 ${leftX + D/2} ${leftY + H/2})">12번 코끼리 (왼쪽면)</text>

      <rect x="${frontX}" y="${frontY}" width="${W}" height="${H}" class="face-front" fill="#FFFFFF" />
      <image href="animals_web/${animal.file}" x="${frontX + 1}" y="${frontY + 1}" width="${W - 2}" height="${H - 2}" preserveAspectRatio="xMidYMid meet" />
      <rect x="${frontX}" y="${frontY + H - 8}" width="${W}" height="8" fill="rgba(255,255,255,0.85)" />
      <text x="${frontX + W/2}" y="${frontY + H - 2.2}" font-family="Jua, sans-serif" font-size="10px" fill="${animal.accentColor}" text-anchor="middle">12번 코끼리 [파트 A]</text>

      <rect x="${topX}" y="${topY}" width="${W}" height="${D}" class="face-cap" fill="${animal.color}" />
      <text x="${topX + W/2}" y="${topY + D/2 + 1}" font-family="Jua, sans-serif" font-size="7px" fill="${animal.textColor}" text-anchor="middle">코끼리 머리 (윗면)</text>

      <rect x="${bottomX}" y="${bottomY}" width="${W}" height="${D}" class="face-cap" fill="#E2E8F0" />
      <text x="${bottomX + W/2}" y="${bottomY + D/2 + 1}" font-family="Jua, sans-serif" font-size="7px" fill="#475569" text-anchor="middle">바닥면 (도미노 받침대)</text>

      <line x1="${frontX}" y1="${frontY}" x2="${frontX}" y2="${frontY + H}" class="fold-line" />
      <line x1="${frontX}" y1="${frontY}" x2="${frontX + W}" y2="${frontY}" class="fold-line" />
      <line x1="${bottomX}" y1="${bottomY}" x2="${bottomX + W}" y2="${bottomY}" class="fold-line" />
      <line x1="${topX}" y1="${topY}" x2="${topX + W}" y2="${topY}" class="fold-line" />
      <line x1="${bottomX}" y1="${bottomY + D}" x2="${bottomX + W}" y2="${bottomY + D}" class="fold-line" />
      <line x1="${frontX + W}" y1="${frontY}" x2="${frontX + W}" y2="${frontY + H}" class="fold-line" />
    </svg>
  `;
}

// 코끼리 파트 B
function createElephantPartB(animal, W, H, D, Tab) {
  const totalW = D + W + (Tab * 2) + 15;
  const totalH = H + (Tab * 2) + 15;
  const ox = Tab + 5;
  const oy = Tab + 5;

  const rightX = ox;
  const rightY = oy;
  const backX = rightX + D;
  const backY = oy;

  return `
    <svg class="net-svg" width="${totalW}mm" height="${totalH}mm" viewBox="0 0 ${totalW} ${totalH}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${rightX},${rightY} ${rightX - Tab},${rightY + Tab} ${rightX - Tab},${rightY + H - Tab} ${rightX},${rightY + H}" class="glue-tab-rect" />
      <text x="${rightX - Tab/2}" y="${rightY + H/2}" class="glue-tab-label" transform="rotate(-90 ${rightX - Tab/2} ${rightY + H/2})">파트A 왼쪽 연결</text>

      <rect x="${rightX}" y="${rightY}" width="${D}" height="${H}" class="face-side" fill="${animal.color}" />
      <text x="${rightX + D/2}" y="${rightY + H/2}" font-family="Jua, sans-serif" font-size="7px" fill="${animal.textColor}" text-anchor="middle" transform="rotate(90 ${rightX + D/2} ${rightY + H/2})">12번 코끼리 (오른쪽면)</text>

      <rect x="${backX}" y="${backY}" width="${W}" height="${H}" class="face-back" fill="#FFFDF8" />
      ${renderDominoBackSVG(animal, backX, backY, W, H)}

      <line x1="${backX}" y1="${backY}" x2="${backX}" y2="${backY + H}" class="fold-line" />
      <line x1="${rightX}" y1="${rightY}" x2="${rightX}" y2="${rightY + H}" class="fold-line" />
    </svg>
  `;
}

// =========================================================
// 도미노 뒷면 (요청 반영: 번호 크기 알맞게 축소, '동물도미노' 텍스트 제거)
// =========================================================
function renderDominoBackSVG(animal, x, y, w, h) {
  const midX = x + w / 2;
  const minDim = Math.min(w, h);
  
  const circleR = Math.max(1.9, minDim * 0.16);
  const numFontSize = Math.max(2.8, circleR * 1.25);
  const nameFontSize = Math.max(2.4, minDim * 0.15);
  const dotR = Math.max(0.8, minDim * 0.035);

  const circleY = y + h * 0.28;
  const nameY = y + h * 0.62;
  const dotsY = y + h * 0.83;

  return `
    <rect x="${x + 1.5}" y="${y + 1.5}" width="${w - 3}" height="${h - 3}" rx="1.5" fill="none" stroke="#E2E8F0" stroke-width="0.6" />
    <circle cx="${midX}" cy="${circleY}" r="${circleR}" fill="#FFF0EB" stroke="#FF6B4A" stroke-width="0.8" />
    <text x="${midX}" y="${circleY + numFontSize * 0.36}" font-family="Jua, sans-serif" font-size="${numFontSize}px" fill="#C2410C" text-anchor="middle">${animal.order}</text>
    <text x="${midX}" y="${nameY}" font-family="Jua, sans-serif" font-size="${nameFontSize}px" fill="#1E293B" text-anchor="middle">${animal.korean}</text>
    <g fill="#FF6B4A">
      ${renderPipsDots(animal.pips, midX, dotsY, w * 0.58, dotR)}
    </g>
  `;
}

function renderPipsDots(count, cx, cy, span, r) {
  if (count <= 6) {
    let html = '';
    const step = span / Math.max(1, count - 1);
    const startX = cx - (span / 2);
    for (let i = 0; i < count; i++) {
      const px = count === 1 ? cx : startX + (i * step);
      html += `<circle cx="${px}" cy="${cy}" r="${r}" />`;
    }
    return html;
  } else {
    let html = '';
    const topCount = Math.ceil(count / 2);
    const botCount = Math.floor(count / 2);
    const stepTop = span / Math.max(1, topCount - 1);
    const stepBot = span / Math.max(1, botCount - 1);
    
    for (let i = 0; i < topCount; i++) {
      html += `<circle cx="${cx - (span/2) + i*stepTop}" cy="${cy - r*1.6}" r="${r}" />`;
    }
    for (let i = 0; i < botCount; i++) {
      html += `<circle cx="${cx - (span/2) + i*stepBot}" cy="${cy + r*1.6}" r="${r}" />`;
    }
    return html;
  }
}

// =========================================================
// A4 인쇄 시트 렌더링 (A4 총 15장)
// (몸 전체 완벽 수록 등 불필요한 괄호 텍스트 완전 제거!)
// =========================================================
function renderPrintSheets() {
  const container = document.getElementById('sheets-container');
  if (!container) return;
  container.innerHTML = '';

  const totalPages = 15;

  // 1장: 0번 아기 캥거루, 1번 생쥐, 2번 토끼 (초소형 3종 세로 여유 배치)
  container.appendChild(createSheetElement(1, totalPages, "0번 아기 캥거루 · 1번 생쥐 · 2번 토끼", `
    <div style="display: flex; flex-direction: column; justify-content: space-around; align-items: center; height: 100%; width: 100%;">
      <div class="box-net-card">
        <div class="net-header-label"><span>🦘 0번 아기 캥거루</span><span class="net-size-badge">1.1 × 1.4 × 0.9 cm</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[0], currentScale)}</div>
      </div>
      <div class="box-net-card">
        <div class="net-header-label"><span>🐭 1번 생쥐</span><span class="net-size-badge">1.5 × 2.0 × 1.1 cm</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[1], currentScale)}</div>
      </div>
      <div class="box-net-card">
        <div class="net-header-label"><span>🐰 2번 토끼</span><span class="net-size-badge">1.9 × 2.6 × 1.3 cm</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[2], currentScale)}</div>
      </div>
    </div>
  `));

  // 2장: 3번 너구리 & 4번 코알라
  container.appendChild(createSheetElement(2, totalPages, "3번 너구리 · 4번 코알라", `
    <div style="display: flex; flex-direction: column; justify-content: space-around; align-items: center; height: 100%; width: 100%;">
      <div class="box-net-card">
        <div class="net-header-label"><span>🦝 3번 너구리</span><span class="net-size-badge">2.4 × 3.2 × 1.5 cm</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[3], currentScale)}</div>
      </div>
      <div class="box-net-card">
        <div class="net-header-label"><span>🐨 4번 코알라</span><span class="net-size-badge">3.0 × 4.0 × 1.7 cm</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[4], currentScale)}</div>
      </div>
    </div>
  `));

  // 3장: 5번 판다
  container.appendChild(createSheetElement(3, totalPages, "5번 판다", `
    <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
      <div class="box-net-card">
        <div class="net-header-label"><span>🐼 5번 판다</span><span class="net-size-badge">3.6 × 4.8 × 1.9 cm</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[5], currentScale)}</div>
      </div>
    </div>
  `));

  // 4장: 6번 물개
  container.appendChild(createSheetElement(4, totalPages, "6번 물개", `
    <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
      <div class="box-net-card">
        <div class="net-header-label"><span>🦭 6번 물개</span><span class="net-size-badge">4.4 × 5.6 × 2.0 cm</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[6], currentScale)}</div>
      </div>
    </div>
  `));

  // 5장: 7번 캥거루
  container.appendChild(createSheetElement(5, totalPages, "7번 캥거루", `
    <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
      <div class="box-net-card">
        <div class="net-header-label"><span>🦘 7번 캥거루</span><span class="net-size-badge">4.1 × 6.5 × 2.1 cm</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[7], currentScale)}</div>
      </div>
    </div>
  `));

  // 6장: 8번 얼룩말
  container.appendChild(createSheetElement(6, totalPages, "8번 얼룩말", `
    <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
      <div class="box-net-card">
        <div class="net-header-label"><span>🦓 8번 얼룩말</span><span class="net-size-badge">4.5 × 7.3 × 2.3 cm</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[8], currentScale)}</div>
      </div>
    </div>
  `));

  // 7장: 9번 고릴라
  container.appendChild(createSheetElement(7, totalPages, "9번 고릴라", `
    <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
      <div class="box-net-card">
        <div class="net-header-label"><span>🦍 9번 고릴라</span><span class="net-size-badge">5.0 × 8.1 × 2.5 cm</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[9], currentScale)}</div>
      </div>
    </div>
  `));

  // 8장: 10번 곰
  container.appendChild(createSheetElement(8, totalPages, "10번 곰", `
    <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
      <div class="box-net-card">
        <div class="net-header-label"><span>🐻 10번 곰</span><span class="net-size-badge">5.5 × 9.0 × 2.6 cm</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[10], currentScale)}</div>
      </div>
    </div>
  `));

  // 9장: 11번 하마
  container.appendChild(createSheetElement(9, totalPages, "11번 하마", `
    <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
      <div class="box-net-card">
        <div class="net-header-label"><span>🦛 11번 하마</span><span class="net-size-badge">6.8 × 9.9 × 2.8 cm</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[11], currentScale)}</div>
      </div>
    </div>
  `));

  // 10장: 12번 코끼리 [파트 A]
  container.appendChild(createSheetElement(10, totalPages, "12번 코끼리 [파트 A]", `
    <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
      <div class="box-net-card">
        <div class="net-header-label"><span>🐘 12번 코끼리 [파트 A]</span><span class="net-size-badge">9.6 × 11.5 × 3.2 cm</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[12], currentScale, true, false)}</div>
      </div>
    </div>
  `));

  // 11장: 12번 코끼리 [파트 B]
  container.appendChild(createSheetElement(11, totalPages, "12번 코끼리 [파트 B]", `
    <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
      <div class="box-net-card">
        <div class="net-header-label"><span>🐘 12번 코끼리 [파트 B]</span><span class="net-size-badge">파트 A 연결 풀칠 날개</span></div>
        <div class="net-svg-wrap">${createNetSVG(ANIMALS[12], currentScale, false, true)}</div>
      </div>
    </div>
  `));

  // 12장: [보너스 1] 도미노 트랙 & 볼링 핀 배치도
  container.appendChild(createSheetElement(12, totalPages, "🏆 [보너스 1] 도미노 출발/골인 트랙 & 볼링 타겟판", `
    <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; width: 100%; gap: 6mm;">
      <div style="background: #FFFDF7; border: 2px dashed #F59E0B; border-radius: 12px; padding: 12px; text-align: center;">
        <h3 style="font-family: 'Jua', sans-serif; color: #B45309; font-size: 13pt; margin-bottom: 4px;">🏁 동물도미노 0~12번 완주 트랙</h3>
        <p style="font-size: 8pt; color: #78350F; margin-bottom: 8px;">0번 아기 캥거루부터 12번 코끼리까지 발자국 순서대로 세워보세요!</p>
        <div style="display: flex; justify-content: space-around; align-items: center; background: #FFF; border-radius: 8px; padding: 8px; border: 1px solid #FDE68A;">
          ${ANIMALS.map(a => `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1px;">
              <span style="font-size: 7.5pt; font-family: 'Jua', sans-serif; color: ${a.accentColor};">${a.order}</span>
              <div style="width: 11px; height: 11px; border-radius: 50%; background: ${a.color}; border: 1px solid ${a.accentColor};"></div>
              <span style="font-size: 6.5pt; color: #334155;">${a.korean}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="background: #EFF6FF; border: 2px dashed #3B82F6; border-radius: 12px; padding: 12px; text-align: center;">
        <h3 style="font-family: 'Jua', sans-serif; color: #1D4ED8; font-size: 13pt; margin-bottom: 4px;">🎳 동물 볼링 타겟존 (점수 놀이)</h3>
        <p style="font-size: 8pt; color: #1E40AF; margin-bottom: 8px;">동물들을 번호 위치에 세우고, 탁구공이나 작은 공을 굴려 스트라이크에 도전하세요!</p>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px; background: #FFF; border-radius: 8px; border: 1px solid #BFDBFE;">
          <div style="display: flex; gap: 18px;">
            <span style="border: 2px solid #64748B; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-family: 'Jua', sans-serif; font-size: 9.5pt;">12</span>
            <span style="border: 2px solid #64748B; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-family: 'Jua', sans-serif; font-size: 9.5pt;">11</span>
            <span style="border: 2px solid #64748B; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-family: 'Jua', sans-serif; font-size: 9.5pt;">10</span>
            <span style="border: 2px solid #64748B; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-family: 'Jua', sans-serif; font-size: 9.5pt;">9</span>
          </div>
          <div style="display: flex; gap: 22px;">
            <span style="border: 2px solid #64748B; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-family: 'Jua', sans-serif; font-size: 9.5pt;">8</span>
            <span style="border: 2px solid #64748B; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-family: 'Jua', sans-serif; font-size: 9.5pt;">7</span>
            <span style="border: 2px solid #64748B; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-family: 'Jua', sans-serif; font-size: 9.5pt;">6</span>
          </div>
          <div style="display: flex; gap: 24px;">
            <span style="border: 2px solid #64748B; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-family: 'Jua', sans-serif; font-size: 9.5pt;">5</span>
            <span style="border: 2px solid #64748B; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-family: 'Jua', sans-serif; font-size: 9.5pt;">4</span>
            <span style="border: 2px solid #64748B; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-family: 'Jua', sans-serif; font-size: 9.5pt;">3</span>
          </div>
          <div style="display: flex; gap: 18px;">
            <span style="border: 2px solid #64748B; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-family: 'Jua', sans-serif; font-size: 9.5pt;">2</span>
            <span style="border: 2px solid #64748B; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-family: 'Jua', sans-serif; font-size: 9.5pt;">1</span>
          </div>
          <div>
            <span style="border: 2px solid #EF4444; background: #FEE2E2; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-family: 'Jua', sans-serif; font-size: 10pt; color: #DC2626;">0</span>
          </div>
          <div style="font-size: 7.5pt; color: #64748B; margin-top: 2px;">▲ 공을 굴리는 출발 위치 (약 1~2m 거리)</div>
        </div>
      </div>
    </div>
  `));

  // 13장: [보너스 2] 탑 쌓기 매트
  container.appendChild(createSheetElement(13, totalPages, "🗼 [보너스 2] 아슬아슬 동물 탑 쌓기 풀페이지 매트", `
    <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; width: 100%; background: #FDF4FF; border: 2px dashed #C026D3; border-radius: 12px; padding: 14px; box-sizing: border-box;">
      <div style="text-align: center;">
        <h3 style="font-family: 'Jua', sans-serif; color: #A21CAF; font-size: 15pt; margin-bottom: 4px;">🗼 아슬아슬 동물 탑 쌓기 대형 플레이 매트</h3>
        <p style="font-size: 8.5pt; color: #701A75;">가장 아래 커다란 기초 원 위에 12번 코끼리나 11번 하마를 올리고, 위로 차곡차곡 쌓아 올려보세요!</p>
      </div>

      <div style="display: flex; justify-content: space-around; align-items: center; margin: 10px 0;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <div style="width: 140px; height: 140px; border-radius: 50%; border: 3px dashed #A21CAF; background: #FFF; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-shadow: 0 4px 12px rgba(162,28,175,0.15);">
            <span style="font-family: 'Jua', sans-serif; font-size: 18pt; color: #A21CAF;">🐘 🦛</span>
            <span style="font-family: 'Jua', sans-serif; font-size: 10pt; color: #86198F; margin-top: 2px;">탑 쌓기 1층 바닥</span>
            <span style="font-size: 7.5pt; color: #64748B;">(코끼리나 하마 놓는 자리)</span>
          </div>
          <span style="font-size: 8pt; font-family: 'Jua', sans-serif; color: #701A75;">▲ 가장 넓은 동물을 여기에 올려요!</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px; width: 48%;">
          <div style="font-family: 'Jua', sans-serif; font-size: 10.5pt; color: #701A75; border-bottom: 1.5px solid #F0ABFC; padding-bottom: 4px;">🏆 단계별 탑 쌓기 미션</div>
          ${[
            { lv: "1단계", desc: "3층 탑 성공!", star: "⭐" },
            { lv: "2단계", desc: "5층 탑 성공!", star: "⭐⭐" },
            { lv: "3단계", desc: "7층 탑 성공!", star: "⭐⭐⭐" },
            { lv: "4단계", desc: "10층 탑 성공!", star: "⭐⭐⭐⭐" },
            { lv: "대성공", desc: "13마리 전원 탑 완성!", star: "👑 슈퍼 챔피언" }
          ].map(m => `
            <div style="display: flex; align-items: center; justify-content: space-between; background: #FFF; padding: 6px 10px; border-radius: 8px; border: 1px solid #F0ABFC;">
              <div>
                <span style="font-family: 'Jua', sans-serif; font-size: 9pt; color: #86198F;">[${m.lv}] ${m.desc}</span>
              </div>
              <span style="font-size: 8pt; color: #EAB308;">${m.star}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="background: #FFF; border-radius: 8px; padding: 8px 12px; font-size: 8pt; color: #4A044E; text-align: center; border: 1px solid #F0ABFC;">
        <strong>💡 탑 쌓기 마스터 꿀팁:</strong> 박스를 살짝 지그재그로 올려 무게 중심을 잡아주면 흔들리지 않고 더 높이 쌓을 수 있어요!
      </div>
    </div>
  `));

  // 14장: [보너스 3-1] 사파리 놀이판 좌측
  container.appendChild(createSheetElement(14, totalPages, "🏞️ [보너스 3-1] 초대형 사파리 놀이판 [좌측: 초원 & 호수]", `
    <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; width: 100%; border: 2.5px solid #CBD5E1; border-radius: 12px; padding: 10px; background: #F8FAFC; box-sizing: border-box;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px dashed #94A3B8; padding-bottom: 4px;">
        <h3 style="font-family: 'Jua', sans-serif; color: #0F172A; font-size: 13pt;">🏞️ 사파리 놀이판 [파트 1] - 황금 초원 & 첨벙 호수</h3>
        <span style="font-size: 7.5pt; color: #64748B;">👉 15장과 오른쪽으로 연결하면 42cm 대형 지도 완성!</span>
      </div>

      <div style="background: #FEF3C7; border: 2px dashed #F59E0B; border-radius: 10px; padding: 10px; height: 46%; display: flex; flex-direction: column; justify-content: space-between;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-family: 'Jua', sans-serif; color: #B45309; font-size: 12pt;">🌾 대형 사바나 황금 초원</span>
          <span style="font-size: 7.5pt; color: #92400E;">[ 🐘 코끼리 · 🦓 얼룩말 · 🦘 캥거루 가족 ]</span>
        </div>
        
        <div style="display: flex; justify-content: space-around; align-items: center; gap: 8px;">
          <div style="width: 130px; height: 95px; border: 2px dashed #D97706; background: rgba(255,255,255,0.7); border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <span style="font-size: 16pt;">🐘</span>
            <span style="font-family: 'Jua', sans-serif; font-size: 8.5pt; color: #92400E;">대장 코끼리의 넓은 쉼터</span>
            <span style="font-size: 6.5pt; color: #78350F;">(12cm 코끼리 박스 자리)</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <div style="width: 100px; height: 42px; border: 1.5px dashed #D97706; background: #FFF; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 7.5pt; font-family: 'Jua', sans-serif; color: #B45309;">🦓 얼룩말 달리기 길</div>
            <div style="width: 100px; height: 42px; border: 1.5px dashed #D97706; background: #FFF; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 7.5pt; font-family: 'Jua', sans-serif; color: #B45309;">🦘 캥거루 모자 점핑 초원</div>
          </div>
        </div>
      </div>

      <div style="background: #E0F2FE; border: 2px dashed #0284C7; border-radius: 10px; padding: 10px; height: 46%; display: flex; flex-direction: column; justify-content: space-between;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-family: 'Jua', sans-serif; color: #0369A1; font-size: 12pt;">🌊 맑은 호수 웅덩이 & 파도 바다</span>
          <span style="font-size: 7.5pt; color: #075985;">[ 🦛 하마 · 🦭 물개 물놀이 존 ]</span>
        </div>

        <div style="display: flex; justify-content: space-around; align-items: center; gap: 8px;">
          <div style="width: 110px; height: 95px; border: 2px dashed #0284C7; background: rgba(255,255,255,0.7); border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <span style="font-size: 16pt;">🦛</span>
            <span style="font-family: 'Jua', sans-serif; font-size: 8.5pt; color: #0369A1;">하마 첨벙첨벙 목욕탕</span>
            <span style="font-size: 6.5pt; color: #075985;">(9cm 하마 박스 자리)</span>
          </div>
          <div style="width: 110px; height: 95px; border: 2px dashed #0284C7; background: rgba(255,255,255,0.7); border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <span style="font-size: 16pt;">🦭</span>
            <span style="font-family: 'Jua', sans-serif; font-size: 8.5pt; color: #0369A1;">물개 일광욕 바위섬</span>
            <span style="font-size: 6.5pt; color: #075985;">(6cm 물개 박스 자리)</span>
          </div>
        </div>
      </div>
    </div>
  `));

  // 15장: [보너스 3-2] 사파리 놀이판 우측
  container.appendChild(createSheetElement(15, totalPages, "🎋 [보너스 3-2] 초대형 사파리 놀이판 [우측: 대나무숲 & 정글]", `
    <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; width: 100%; border: 2.5px solid #CBD5E1; border-radius: 12px; padding: 10px; background: #F8FAFC; box-sizing: border-box;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px dashed #94A3B8; padding-bottom: 4px;">
        <h3 style="font-family: 'Jua', sans-serif; color: #0F172A; font-size: 13pt;">🎋 사파리 놀이판 [파트 2] - 초록 대나무숲 & 비밀 정글</h3>
        <span style="font-size: 7.5pt; color: #64748B;">👈 14장의 오른쪽에 맞추어 테이프로 붙여보세요!</span>
      </div>

      <div style="background: #DCFCE7; border: 2px dashed #16A34A; border-radius: 10px; padding: 10px; height: 46%; display: flex; flex-direction: column; justify-content: space-between;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-family: 'Jua', sans-serif; color: #15803D; font-size: 12pt;">🎋 초록 대나무숲 & 숲속 언덕</span>
          <span style="font-size: 7.5pt; color: #166534;">[ 🐼 판다 · 🐨 코알라 · 🦝 너구리 ]</span>
        </div>

        <div style="display: flex; justify-content: space-around; align-items: center; gap: 8px;">
          <div style="width: 100px; height: 95px; border: 2px dashed #16A34A; background: rgba(255,255,255,0.7); border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <span style="font-size: 16pt;">🐼</span>
            <span style="font-family: 'Jua', sans-serif; font-size: 8.5pt; color: #15803D;">판다 대나무 식당</span>
            <span style="font-size: 6.5pt; color: #166534;">(판다 앉는 자리)</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <div style="width: 120px; height: 42px; border: 1.5px dashed #16A34A; background: #FFF; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 7.5pt; font-family: 'Jua', sans-serif; color: #15803D;">🐨 코알라 유칼립투스 나무</div>
            <div style="width: 120px; height: 42px; border: 1.5px dashed #16A34A; background: #FFF; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 7.5pt; font-family: 'Jua', sans-serif; color: #15803D;">🦝 너구리 꼬리 살랑 창고</div>
          </div>
        </div>
      </div>

      <div style="background: #F3E8FF; border: 2px dashed #9333EA; border-radius: 10px; padding: 10px; height: 46%; display: flex; flex-direction: column; justify-content: space-between;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-family: 'Jua', sans-serif; color: #7E22CE; font-size: 12pt;">🌴 열대 정글 & 듬직한 바위 동굴</span>
          <span style="font-size: 7.5pt; color: #581C87;">[ 🐻 곰 · 🦍 고릴라 · 🐭 생쥐 · 🐰 토끼 ]</span>
        </div>

        <div style="display: flex; justify-content: space-around; align-items: center; gap: 8px;">
          <div style="width: 120px; height: 95px; border: 2px dashed #9333EA; background: rgba(255,255,255,0.7); border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <span style="font-size: 16pt;">🐻 🦍</span>
            <span style="font-family: 'Jua', sans-serif; font-size: 8.5pt; color: #7E22CE;">곰 & 고릴라 바위 동굴</span>
            <span style="font-size: 6.5pt; color: #581C87;">(키 큰 동물 자리)</span>
          </div>
          <div style="width: 100px; height: 95px; border: 2px dashed #9333EA; background: rgba(255,255,255,0.7); border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <span style="font-size: 16pt;">🐭 🐰</span>
            <span style="font-family: 'Jua', sans-serif; font-size: 8.5pt; color: #7E22CE;">생쥐·토끼 꼬마 아지트</span>
            <span style="font-size: 6.5pt; color: #581C87;">(작은 비밀 구멍)</span>
          </div>
        </div>
      </div>
    </div>
  `));
}

function createSheetElement(pageNum, totalPages, title, bodyContent) {
  const sheet = document.createElement('div');
  sheet.className = 'a4-sheet';
  sheet.innerHTML = `
    <div class="sheet-header">
      <div class="sheet-title-group">
        <h2><span>🎵 도레미곰 독후활동</span> <span style="font-size: 11pt; color: #1E293B;">《동물도미노》 - ${title}</span></h2>
        <div class="sheet-guide-text">✂️ 실선을 따라 오리고, ┄ 점선을 따라 접어 🎨 풀칠면에 풀을 붙여 세워주세요!</div>
      </div>
      <div class="sheet-page-badge">${pageNum} / ${totalPages} 장</div>
    </div>

    <div class="sheet-body">
      ${bodyContent}
    </div>

    <div class="sheet-footer">
      <span>도서출판 그레이트북스 《동물도미노》 독후활동지</span>
      <span style="font-weight: 800; color: #EA580C; font-family: 'Noto Sans KR', sans-serif; letter-spacing: 0.6px; font-size: 7.5pt;">Made by EMom-NJ</span>
      <span>배율: ${currentScale === 1.0 ? '100% 실물 크기' : `${currentScale}배 확대`}</span>
    </div>
  `;
  return sheet;
}

// =========================================================
// 3D 뷰어
// =========================================================
function setup3DViewer() {
  renderAnimalPicker();
  update3DBox();

  const viewport = document.getElementById('stage-viewport');
  let isDragging = false;
  let lastX = 0;
  let lastY = 0;

  viewport.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    rotY += dx * 0.5;
    rotX -= dy * 0.5;
    lastX = e.clientX;
    lastY = e.clientY;
    apply3DRotation();
  });

  window.addEventListener('mouseup', () => isDragging = false);

  viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    }
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - lastX;
    const dy = e.touches[0].clientY - lastY;
    rotY += dx * 0.5;
    rotX -= dy * 0.5;
    lastX = e.touches[0].clientX;
    lastY = e.touches[0].clientY;
    apply3DRotation();
  });

  window.addEventListener('touchend', () => isDragging = false);

  const foldBtn = document.getElementById('btn-toggle-fold');
  if (foldBtn) {
    foldBtn.addEventListener('click', () => {
      is3DFolded = !is3DFolded;
      foldBtn.textContent = is3DFolded ? '펼쳐서 전개도 보기' : '입체 박스로 접기';
      update3DBox();
    });
  }

  apply3DRotation();
}

function apply3DRotation() {
  const box = document.getElementById('box-3d');
  if (box) {
    box.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }
}

function renderAnimalPicker() {
  const list = document.getElementById('animal-pick-list');
  if (!list) return;
  list.innerHTML = '';

  ANIMALS.forEach(animal => {
    const btn = document.createElement('button');
    btn.className = `animal-pick-btn ${animal.id === selectedAnimal.id ? 'active' : ''}`;
    btn.innerHTML = `
      <img src="animals_web/${animal.file}" class="animal-thumb-mini" alt="${animal.korean}" />
      <div class="pick-info">
        <div class="pick-name">${animal.title}</div>
        <div class="pick-dims">${animal.w} × ${animal.h} × ${animal.d} mm</div>
      </div>
    `;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.animal-pick-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedAnimal = animal;
      update3DBox();
    });
    list.appendChild(btn);
  });
}

function update3DBox() {
  const a = selectedAnimal;
  const box = document.getElementById('box-3d');
  const infoLabel = document.getElementById('stage-animal-info');
  
  if (infoLabel) {
    infoLabel.innerHTML = `
      <span>${a.title}</span>
      <span style="font-size: 13px; color: #64748B;">가로 ${(a.w * currentScale).toFixed(1)}mm × 높이 ${(a.h * currentScale).toFixed(1)}mm × 두께 ${(a.d * currentScale).toFixed(1)}mm</span>
    `;
  }

  if (!box) return;

  const pxW = a.w * 2.8 * currentScale;
  const pxH = a.h * 2.8 * currentScale;
  const pxD = a.d * 2.8 * currentScale;

  box.style.width = `${pxW}px`;
  box.style.height = `${pxH}px`;

  if (is3DFolded) {
    const numSize = Math.max(13, pxW * 0.22);
    box.innerHTML = `
      <div class="box-face" style="width: ${pxW}px; height: ${pxH}px; transform: translateZ(${pxD / 2}px); background-color: #FFF;">
        <img src="animals_web/${a.file}" alt="${a.korean}" style="${a.id === 7 ? 'width:100%; height:100%; object-fit:fill;' : ''}" />
        <div style="position: absolute; bottom: 4px; font-family: 'Jua', sans-serif; font-size: 13px; color: ${a.accentColor}; background: rgba(255,255,255,0.9); padding: 1px 8px; border-radius: 6px;">${a.korean}</div>
      </div>
      <div class="box-face" style="width: ${pxW}px; height: ${pxH}px; transform: rotateY(180deg) translateZ(${pxD / 2}px); background-color: #FFFDF7;">
        <div style="font-family: 'Jua', sans-serif; color: #FF6B4A; font-size: ${numSize}px; border: 2px solid #FF6B4A; border-radius: 50%; width: ${numSize*1.5}px; height: ${numSize*1.5}px; display: flex; align-items: center; justify-content: center;">${a.order}</div>
        <div style="font-family: 'Jua', sans-serif; font-size: 13px; color: #1E293B; margin-top: 8px;">${a.korean}</div>
      </div>
      <div class="box-face" style="width: ${pxD}px; height: ${pxH}px; transform: rotateY(-90deg) translateZ(${pxD / 2}px); left: 0; background-color: ${a.color};">
        <span style="transform: rotate(-90deg); font-family: 'Jua', sans-serif; font-size: 12px; color: ${a.textColor};">도미노</span>
      </div>
      <div class="box-face" style="width: ${pxD}px; height: ${pxH}px; transform: rotateY(90deg) translateZ(${pxW - pxD / 2}px); left: 0; background-color: ${a.color};">
        <span style="transform: rotate(90deg); font-family: 'Jua', sans-serif; font-size: 12px; color: ${a.textColor};">도미노</span>
      </div>
      <div class="box-face" style="width: ${pxW}px; height: ${pxD}px; transform: rotateX(90deg) translateZ(${pxD / 2}px); top: 0; background-color: ${a.color};">
        <span style="font-family: 'Jua', sans-serif; font-size: 11px; color: ${a.textColor};">▲ 머리</span>
      </div>
      <div class="box-face" style="width: ${pxW}px; height: ${pxD}px; transform: rotateX(-90deg) translateZ(${pxH - pxD / 2}px); top: 0; background-color: #CBD5E1;">
        <span style="font-family: 'Jua', sans-serif; font-size: 11px; color: #334155;">바닥 (받침)</span>
      </div>
    `;
  } else {
    box.innerHTML = `
      <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);">
        ${createNetSVG(a, currentScale * 0.9)}
      </div>
    `;
  }
}

// =========================================================
// 도미노 쓰러뜨리기 연쇄 시뮬레이터 (0번 아기 캥거루부터 출발!)
// =========================================================
const DOMINO_SIZES = [
  { id: 0, w: 36,  h: 52,  numFont: 10, nameFont: 9.5, imgRatio: 0.58 }, // 0번 아기 캥거루 (초미니 스타터)
  { id: 1, w: 44,  h: 70,  numFont: 11, nameFont: 10.5, imgRatio: 0.62 }, // 1번 생쥐 (+18px 큼)
  { id: 2, w: 52,  h: 90,  numFont: 12, nameFont: 11.5, imgRatio: 0.64 }, // 2번 토끼 (+20px 큼)
  { id: 3, w: 60,  h: 110, numFont: 13, nameFont: 12.5, imgRatio: 0.65 }, // 3번 너구리 (+20px 큼)
  { id: 4, w: 68,  h: 128, numFont: 13, nameFont: 13,   imgRatio: 0.66 }, // 4번 코알라 (+18px 큼)
  { id: 5, w: 76,  h: 146, numFont: 14, nameFont: 13.5, imgRatio: 0.66 }, // 5번 판다 (+18px 큼)
  { id: 6, w: 84,  h: 164, numFont: 14, nameFont: 14,   imgRatio: 0.67 }, // 6번 물개 (+18px 큼)
  { id: 7, w: 92,  h: 184, numFont: 15, nameFont: 14.5, imgRatio: 0.67 }, // 7번 캥거루 (+20px 큼)
  { id: 8, w: 100, h: 204, numFont: 15, nameFont: 15,   imgRatio: 0.68 }, // 8번 얼룩말 (+20px 큼)
  { id: 9, w: 110, h: 224, numFont: 16, nameFont: 15.5, imgRatio: 0.68 }, // 9번 고릴라 (+20px 큼)
  { id: 10, w: 120, h: 244, numFont: 16, nameFont: 16,   imgRatio: 0.68 }, // 10번 곰 (+20px 큼)
  { id: 11, w: 132, h: 264, numFont: 17, nameFont: 16.5, imgRatio: 0.68 }, // 11번 하마 (+20px 큼)
  { id: 12, w: 152, h: 288, numFont: 18, nameFont: 17,   imgRatio: 0.70 }  // 12번 코끼리 (+24px 큼, 대장 코끼리!)
];

function setupDominoSimulator() {
  const track = document.getElementById('sim-domino-line');
  if (!track) return;
  track.innerHTML = '';

  ANIMALS.forEach((animal, index) => {
    const card = document.createElement('div');
    card.id = `domino-${animal.id}`;
    card.className = 'domino-item-card';
    
    const sizeInfo = DOMINO_SIZES[index] || {
      w: Math.max(36, animal.w * 1.5),
      h: Math.max(52, animal.h * 2.4),
      numFont: 12,
      nameFont: 11,
      imgRatio: 0.65
    };

    card.style.height = `${sizeInfo.h}px`;
    card.style.width = `${sizeInfo.w}px`;
    card.title = `${animal.order}번 ${animal.korean} (클릭하면 여기서부터 쓰러져요!)`;
    card.innerHTML = `
      <div style="font-family: 'Jua', sans-serif; font-size: ${sizeInfo.numFont}px; color: #EA580C; font-weight: 800; line-height: 1;">${animal.order}</div>
      <img src="animals_web/${animal.file}" style="max-height: ${Math.round(sizeInfo.h * sizeInfo.imgRatio)}px; max-width: 90%; object-fit: contain; pointer-events: none;" alt="${animal.korean}" />
      <div style="font-family: 'Jua', sans-serif; font-size: ${sizeInfo.nameFont}px; color: #1E293B; line-height: 1; white-space: nowrap;">${animal.korean}</div>
    `;

    card.addEventListener('click', () => triggerDominoChain(animal.id));
    track.appendChild(card);
  });

  const pushBtn = document.getElementById('btn-push-domino');
  if (pushBtn) {
    pushBtn.innerHTML = '<span>👉</span> 아기 캥거루 톡! 밀어보기';
    pushBtn.addEventListener('click', () => triggerDominoChain(0));
  }

  const resetBtn = document.getElementById('btn-reset-domino');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetDominoChain);
  }
}

function triggerDominoChain(startId = 0) {
  const cards = document.querySelectorAll('.domino-item-card');
  const startIndex = ANIMALS.findIndex(a => a.id === startId);
  
  for (let i = startIndex; i < ANIMALS.length; i++) {
    setTimeout(() => {
      if (cards[i]) {
        cards[i].classList.add('toppled');
        playDominoSound();
      }
      if (i === ANIMALS.length - 1) {
        showDominoSuccess();
      }
    }, (i - startIndex + 1) * 150);
  }
}

function resetDominoChain() {
  document.querySelectorAll('.domino-item-card').forEach(c => c.classList.remove('toppled'));
  const successBanner = document.getElementById('domino-success-banner');
  if (successBanner) successBanner.style.display = 'none';
}

function playDominoSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(450 + Math.random() * 150, ctx.currentTime);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  } catch (e) {}
}

function showDominoSuccess() {
  const banner = document.getElementById('domino-success-banner');
  if (banner) banner.style.display = 'block';
}

// =========================================================
// 5가지 창의 놀이존
// =========================================================
function setupPlayZone() {
  renderTowerAnimalButtons();
  generateNewQuiz();
  renderBowlingChecklist();
}

function renderTowerAnimalButtons() {
  const container = document.getElementById('tower-picker-btns');
  if (!container) return;
  container.innerHTML = '';

  ANIMALS.forEach(animal => {
    const b = document.createElement('button');
    b.className = 'btn btn-secondary';
    b.style.fontSize = '12px';
    b.style.padding = '6px 12px';
    b.innerHTML = `<span>${animal.korean}</span> <small style="color:#64748B;">(${animal.h}mm)</small>`;
    b.addEventListener('click', () => addBlockToTower(animal));
    container.appendChild(b);
  });

  const resetBtn = document.getElementById('btn-reset-tower');
  if (resetBtn) resetBtn.addEventListener('click', resetTower);
}

function addBlockToTower(animal) {
  if (towerStack.length >= 13) return;
  towerStack.push(animal);
  renderTowerVisual();
}

function resetTower() {
  towerStack = [];
  renderTowerVisual();
}

function renderTowerVisual() {
  const stage = document.getElementById('tower-visual-stage');
  const heightLabel = document.getElementById('tower-height-num');
  if (!stage) return;
  stage.innerHTML = '';

  let totalMm = 0;
  for (let i = towerStack.length - 1; i >= 0; i--) {
    const a = towerStack[i];
    totalMm += a.h;
    const block = document.createElement('div');
    block.style.width = `${Math.max(38, a.w * 1.5)}px`;
    block.style.height = `${Math.max(20, a.h * 0.8)}px`;
    block.style.backgroundColor = a.color;
    block.style.border = `2px solid ${a.accentColor}`;
    block.style.borderRadius = '4px';
    block.style.display = 'flex';
    block.style.alignItems = 'center';
    block.style.justifyContent = 'center';
    block.style.fontSize = '9.5px';
    block.style.fontFamily = 'Jua, sans-serif';
    block.style.color = a.textColor;
    block.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
    block.style.animation = 'bounce 0.3s ease';
    block.textContent = a.korean;
    stage.appendChild(block);
  }

  if (heightLabel) {
    heightLabel.textContent = `${(totalMm / 10).toFixed(1)} cm (${towerStack.length}층)`;
  }
}

function generateNewQuiz() {
  const i1 = Math.floor(Math.random() * ANIMALS.length);
  let i2 = Math.floor(Math.random() * ANIMALS.length);
  while (i2 === i1) i2 = Math.floor(Math.random() * ANIMALS.length);

  const a1 = ANIMALS[i1];
  const a2 = ANIMALS[i2];
  currentQuiz = { a1, a2, winner: a1.h > a2.h ? a1 : a2 };

  const btn1 = document.getElementById('quiz-opt-1');
  const btn2 = document.getElementById('quiz-opt-2');
  const resultDiv = document.getElementById('quiz-result-msg');

  if (btn1 && btn2) {
    btn1.innerHTML = `
      <img src="animals_web/${a1.file}" style="height: 60px; object-fit: contain; margin-bottom: 4px;" /><br>
      <strong>${a1.korean}</strong>
    `;
    btn2.innerHTML = `
      <img src="animals_web/${a2.file}" style="height: 60px; object-fit: contain; margin-bottom: 4px;" /><br>
      <strong>${a2.korean}</strong>
    `;
  }

  if (resultDiv) {
    resultDiv.style.display = 'none';
    resultDiv.innerHTML = '';
  }
}

window.answerQuiz = function(choiceNum) {
  if (!currentQuiz) return;
  const chosen = choiceNum === 1 ? currentQuiz.a1 : currentQuiz.a2;
  const isCorrect = chosen.id === currentQuiz.winner.id;
  const resultDiv = document.getElementById('quiz-result-msg');

  if (resultDiv) {
    resultDiv.style.display = 'block';
    if (isCorrect) {
      resultDiv.style.background = '#DCFCE7';
      resultDiv.style.color = '#15803D';
      resultDiv.innerHTML = `🎉 정답이에요! <strong>${currentQuiz.winner.korean}</strong>(${currentQuiz.winner.h}mm)가 더 커요!`;
      playDominoSound();
    } else {
      resultDiv.style.background = '#FEE2E2';
      resultDiv.style.color = '#B91C1C';
      resultDiv.innerHTML = `아쉬워요! <strong>${currentQuiz.winner.korean}</strong>(${currentQuiz.winner.h}mm)가 더 커요! 다시 도전해보세요!`;
    }
    setTimeout(generateNewQuiz, 2200);
  }
};

function renderBowlingChecklist() {
  const box = document.getElementById('bowling-checklist');
  if (!box) return;
  box.innerHTML = '';

  ANIMALS.forEach(a => {
    const lbl = document.createElement('label');
    lbl.style.display = 'inline-flex';
    lbl.style.alignItems = 'center';
    lbl.style.gap = '4px';
    lbl.style.fontSize = '12px';
    lbl.style.margin = '4px 8px';
    lbl.style.cursor = 'pointer';
    lbl.innerHTML = `
      <input type="checkbox" class="bowling-check" data-pts="${a.order}" onchange="calcBowlingScore()">
      <span>${a.korean}(+${a.order}점)</span>
    `;
    box.appendChild(lbl);
  });
}

window.calcBowlingScore = function() {
  let score = 0;
  let count = 0;
  document.querySelectorAll('.bowling-check').forEach(chk => {
    if (chk.checked) {
      score += parseInt(chk.getAttribute('data-pts'), 10);
      count++;
    }
  });

  const numEl = document.getElementById('bowling-total-score');
  const countEl = document.getElementById('bowling-knockdown-count');
  if (numEl) numEl.textContent = `${score} 점`;
  if (countEl) countEl.textContent = `넘어뜨린 동물: ${count} / 13 마리`;
};

window.resetBowling = function() {
  document.querySelectorAll('.bowling-check').forEach(chk => chk.checked = false);
  calcBowlingScore();
};

window.printAllSheets = function() {
  window.print();
};
