/* =========================================================
   《1. 톡톡톡 괜찮아》 인터랙티브 독후활동 키트 (Script Logic)
   Enhanced Rain Engine, Canvas Line Matching, Drag & Drop
   Author: Made by EMom-NJ
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initEnhancedRainAnimation();
  initTabs();
  initAudioSystem();
  initCanvasLineGame();
  initDigitalPasteGame();
});

/* =========================================================
   1. ENHANCED VIBRANT RAIN ANIMATION WITH RIPPLES & MOUSE TRAIL
   ========================================================= */
let rainConfig = {
  count: 110,
  speedBase: 5,
  lengthBase: 22,
  intensity: 'medium'
};

function initEnhancedRainAnimation() {
  const canvas = document.getElementById('rainCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const drops = [];
  const ripples = [];

  function createDrop() {
    return {
      x: Math.random() * width,
      y: Math.random() * -100,
      length: Math.random() * rainConfig.lengthBase + 15,
      speed: Math.random() * rainConfig.speedBase + 6,
      thickness: Math.random() * 1.5 + 1.2,
      opacity: Math.random() * 0.4 + 0.4
    };
  }

  for (let i = 0; i < rainConfig.count; i++) {
    const d = createDrop();
    d.y = Math.random() * height;
    drops.push(d);
  }

  // Mouse interaction ripple
  window.addEventListener('mousemove', e => {
    if (Math.random() < 0.25) {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 2,
        maxRadius: Math.random() * 15 + 10,
        opacity: 0.6
      });
    }
  });

  // Rain intensity buttons
  const rainBtns = document.querySelectorAll('.rain-btn');
  rainBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      rainBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const intensity = btn.getAttribute('data-intensity');
      setRainIntensity(intensity);
      playRainDropSound(intensity === 'heavy' ? 800 : 500);
    });
  });

  function setRainIntensity(level) {
    rainConfig.intensity = level;
    if (level === 'light') {
      rainConfig.count = 50;
      rainConfig.speedBase = 3.5;
      rainConfig.lengthBase = 16;
    } else if (level === 'medium') {
      rainConfig.count = 110;
      rainConfig.speedBase = 6;
      rainConfig.lengthBase = 24;
    } else if (level === 'heavy') {
      rainConfig.count = 200;
      rainConfig.speedBase = 9;
      rainConfig.lengthBase = 35;
    }

    // Adjust drops array
    while (drops.length < rainConfig.count) {
      drops.push(createDrop());
    }
    if (drops.length > rainConfig.count) {
      drops.length = rainConfig.count;
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw raindrops with clear glowing blue gradient
    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];

      const grad = ctx.createLinearGradient(d.x, d.y, d.x - 2, d.y + d.length);
      grad.addColorStop(0, `rgba(144, 205, 244, ${d.opacity * 0.4})`);
      grad.addColorStop(1, `rgba(49, 130, 206, ${d.opacity})`);

      ctx.strokeStyle = grad;
      ctx.lineWidth = d.thickness;
      ctx.lineCap = 'round';
      ctx.shadowColor = '#63b3ed';
      ctx.shadowBlur = 4;

      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - 2, d.y + d.length);
      ctx.stroke();

      d.y += d.speed;
      d.x -= 0.6;

      // When hitting bottom, spawn puddle ripple
      if (d.y > height) {
        if (Math.random() < 0.3) {
          ripples.push({
            x: d.x,
            y: height - Math.random() * 30,
            radius: 2,
            maxRadius: Math.random() * 18 + 8,
            opacity: 0.55
          });
        }
        d.y = -30;
        d.x = Math.random() * width;
      }
    }

    // Draw ripples
    ctx.shadowBlur = 0;
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      ctx.strokeStyle = `rgba(66, 153, 225, ${r.opacity})`;
      ctx.lineWidth = 1.6;

      ctx.beginPath();
      ctx.ellipse(r.x, r.y, r.radius * 2, r.radius * 0.7, 0, 0, Math.PI * 2);
      ctx.stroke();

      r.radius += 0.8;
      r.opacity -= 0.025;

      if (r.opacity <= 0 || r.radius >= r.maxRadius) {
        ripples.splice(i, 1);
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* =========================================================
   2. TAB NAVIGATION
   ========================================================= */
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetTabId);
      if (targetPane) {
        targetPane.classList.add('active');
      }

      playRainDropSound(600);

      if (targetTabId === 'tab-line-game') {
        setTimeout(resizeLineCanvas, 100);
      }
    });
  });
}

/* =========================================================
   3. WEB AUDIO SYNTHESIZER
   ========================================================= */
let audioCtx = null;
let rainNoiseNode = null;
let isRainAudioPlaying = false;

function initAudioSystem() {
  const toggleBtn = document.getElementById('audioToggleBtn');
  const iconSpan = document.getElementById('audioIcon');
  const textSpan = document.getElementById('audioText');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      if (!isRainAudioPlaying) {
        startRainAmbient();
        isRainAudioPlaying = true;
        toggleBtn.classList.add('playing');
        iconSpan.textContent = '🔊';
        textSpan.textContent = '빗소리 끄기';
      } else {
        stopRainAmbient();
        isRainAudioPlaying = false;
        toggleBtn.classList.remove('playing');
        iconSpan.textContent = '🌧️';
        textSpan.textContent = '빗소리 켜기';
      }
    });
  }
}

function startRainAmbient() {
  if (!audioCtx) return;
  const bufferSize = audioCtx.sampleRate * 2;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  rainNoiseNode = audioCtx.createBufferSource();
  rainNoiseNode.buffer = buffer;
  rainNoiseNode.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(850, audioCtx.currentTime);

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.09, audioCtx.currentTime);

  rainNoiseNode.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  rainNoiseNode.start();
}

function stopRainAmbient() {
  if (rainNoiseNode) {
    try {
      rainNoiseNode.stop();
      rainNoiseNode.disconnect();
    } catch (e) {}
    rainNoiseNode = null;
  }
}

function playRainDropSound(freq = 600) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.6, audioCtx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.12);
  } catch (e) {}
}

function playSuccessChime() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.35);
      }, idx * 90);
    });
  } catch (e) {}
}

/* =========================================================
   4. INTERACTIVE CANVAS LINE-MATCHING GAME (TAB 2)
   ========================================================= */
let lineCanvas, lineCtx;
let connections = []; // Array of {fromAnimal, toUmbrella, startX, startY, endX, endY}
let isDrawingLine = false;
let currentLineStart = null;
let currentPointer = { x: 0, y: 0 };

const validMatches = {
  mouse: 'mouse', // node-mushroom has data-umbrella="mouse"
  rabbit: 'carrot',
  raccoon: 'raccoon', // node-leaf has data-umbrella="raccoon"
  bear: 'branch'
};

function initCanvasLineGame() {
  lineCanvas = document.getElementById('lineGameCanvas');
  const board = document.getElementById('lineBoardWrapper');
  const resetBtn = document.getElementById('resetLineGameBtn');
  if (!lineCanvas || !board) return;

  lineCtx = lineCanvas.getContext('2d');
  resizeLineCanvas();
  window.addEventListener('resize', resizeLineCanvas);

  const animalCards = document.querySelectorAll('.game-item-card[data-animal]');
  const umbrellaCards = document.querySelectorAll('.game-item-card[data-umbrella]');

  // Start line from animal card
  animalCards.forEach(card => {
    card.addEventListener('mousedown', e => handleStartDraw(card, e));
    card.addEventListener('touchstart', e => handleStartDraw(card, e.touches[0]), { passive: true });
  });

  window.addEventListener('mousemove', e => handleMoveDraw(e));
  window.addEventListener('touchmove', e => handleMoveDraw(e.touches[0]), { passive: true });

  window.addEventListener('mouseup', e => handleEndDraw(e));
  window.addEventListener('touchend', e => {
    if (e.changedTouches && e.changedTouches[0]) {
      handleEndDraw(e.changedTouches[0]);
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      connections = [];
      document.querySelectorAll('.game-item-card').forEach(c => c.classList.remove('connected'));
      redrawCanvasLines();
      playRainDropSound(450);
    });
  }
}

function resizeLineCanvas() {
  const board = document.getElementById('lineBoardWrapper');
  if (!lineCanvas || !board) return;
  lineCanvas.width = board.clientWidth;
  lineCanvas.height = board.clientHeight;
  redrawCanvasLines();
}

function handleStartDraw(card, e) {
  const board = document.getElementById('lineBoardWrapper');
  const boardRect = board.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  const animal = card.getAttribute('data-animal');
  if (connections.some(c => c.fromAnimal === animal)) return; // already connected

  isDrawingLine = true;
  currentLineStart = {
    animal: animal,
    card: card,
    x: cardRect.right - boardRect.left,
    y: cardRect.top + cardRect.height / 2 - boardRect.top
  };

  currentPointer.x = e.clientX - boardRect.left;
  currentPointer.y = e.clientY - boardRect.top;
  playRainDropSound(550);
}

function handleMoveDraw(e) {
  if (!isDrawingLine || !currentLineStart) return;
  const board = document.getElementById('lineBoardWrapper');
  const boardRect = board.getBoundingClientRect();

  currentPointer.x = e.clientX - boardRect.left;
  currentPointer.y = e.clientY - boardRect.top;
  redrawCanvasLines();
}

function handleEndDraw(e) {
  if (!isDrawingLine || !currentLineStart) return;
  const board = document.getElementById('lineBoardWrapper');
  const boardRect = board.getBoundingClientRect();

  // Find umbrella card under cursor
  const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
  const umbrellaCard = elementUnderCursor ? elementUnderCursor.closest('.game-item-card[data-umbrella]') : null;

  if (umbrellaCard) {
    const umbrella = umbrellaCard.getAttribute('data-umbrella');
    const uRect = umbrellaCard.getBoundingClientRect();

    if (validMatches[currentLineStart.animal] === umbrella) {
      // Correct Match!
      playSuccessChime();
      currentLineStart.card.classList.add('connected');
      umbrellaCard.classList.add('connected');

      connections.push({
        fromAnimal: currentLineStart.animal,
        toUmbrella: umbrella,
        startX: currentLineStart.x,
        startY: currentLineStart.y,
        endX: uRect.left - boardRect.left,
        endY: uRect.top + uRect.height / 2 - boardRect.top
      });

      if (connections.length === 4) {
        setTimeout(() => {
          alert('🎉 참 잘했어요! 동물 친구들 모두에게 알맞은 우산을 선으로 완벽하게 이어주었어요! 👏');
        }, 250);
      }
    } else {
      // Mismatch
      playRainDropSound(300);
    }
  }

  isDrawingLine = false;
  currentLineStart = null;
  redrawCanvasLines();
}

function redrawCanvasLines() {
  if (!lineCtx || !lineCanvas) return;
  lineCtx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);

  // Draw completed connections
  connections.forEach(conn => {
    lineCtx.beginPath();
    lineCtx.strokeStyle = '#38a169';
    lineCtx.lineWidth = 4;
    lineCtx.lineCap = 'round';
    lineCtx.setLineDash([8, 6]);

    // Draw gentle cubic bezier curve
    const cp1x = conn.startX + (conn.endX - conn.startX) * 0.5;
    const cp1y = conn.startY;
    const cp2x = conn.startX + (conn.endX - conn.startX) * 0.5;
    const cp2y = conn.endY;

    lineCtx.moveTo(conn.startX, conn.startY);
    lineCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, conn.endX, conn.endY);
    lineCtx.stroke();

    // Start & end circles
    lineCtx.setLineDash([]);
    lineCtx.fillStyle = '#38a169';
    lineCtx.beginPath();
    lineCtx.arc(conn.startX, conn.startY, 6, 0, Math.PI * 2);
    lineCtx.arc(conn.endX, conn.endY, 6, 0, Math.PI * 2);
    lineCtx.fill();
  });

  // Draw active drawing line
  if (isDrawingLine && currentLineStart) {
    lineCtx.beginPath();
    lineCtx.strokeStyle = '#3182ce';
    lineCtx.lineWidth = 3.5;
    lineCtx.lineCap = 'round';
    lineCtx.setLineDash([6, 5]);

    lineCtx.moveTo(currentLineStart.x, currentLineStart.y);
    lineCtx.lineTo(currentPointer.x, currentPointer.y);
    lineCtx.stroke();

    lineCtx.setLineDash([]);
    lineCtx.fillStyle = '#3182ce';
    lineCtx.beginPath();
    lineCtx.arc(currentLineStart.x, currentLineStart.y, 5, 0, Math.PI * 2);
    lineCtx.arc(currentPointer.x, currentPointer.y, 5, 0, Math.PI * 2);
    lineCtx.fill();
  }
}

/* =========================================================
   5. DIGITAL CUT & PASTE DRAG & DROP GAME (TAB 3)
   ========================================================= */
function initDigitalPasteGame() {
  const dragItems = document.querySelectorAll('#tab-paste-preview .drag-item');
  const dropZones = document.querySelectorAll('#tab-paste-preview .drop-target-card');
  const resetBtn = document.getElementById('resetPasteBtn');

  let currentType = null;

  dragItems.forEach(item => {
    item.addEventListener('dragstart', e => {
      currentType = item.getAttribute('data-type');
      e.dataTransfer.setData('text/plain', currentType);
      playRainDropSound(520);
    });
  });

  dropZones.forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      zone.classList.add('dragover');
    });

    zone.addEventListener('dragleave', () => {
      zone.classList.remove('dragover');
    });

    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('dragover');

      const droppedType = e.dataTransfer.getData('text/plain') || currentType;
      const acceptType = zone.getAttribute('data-accept');

      if (droppedType === acceptType) {
        // Correct paste!
        playSuccessChime();
        zone.classList.add('matched');

        // Swap animal image to full joyful illustration with umbrella
        const img = zone.querySelector('.target-animal-img');
        const instruction = zone.querySelector('.slot-instruction');

        const sceneMap = {
          mouse: 'assets/01_mouse_mushroom_scene.png',
          rabbit: 'assets/02_rabbit_carrot_scene.png',
          raccoon: 'assets/03_raccoon_fox_leaf_scene.png',
          bear: 'assets/04_bear_branch_scene.png'
        };

        if (sceneMap[droppedType] && img) {
          img.src = sceneMap[droppedType];
          img.style.maxHeight = '180px';
        }

        if (instruction) {
          instruction.innerHTML = '🎉 <strong>"톡톡톡 우산 쓰고 괜찮아!" 방긋!</strong>';
          instruction.style.color = '#276749';
        }

        const matchedItem = document.querySelector(`#tab-paste-preview .drag-item[data-type="${droppedType}"]`);
        if (matchedItem) {
          matchedItem.style.opacity = '0.35';
          matchedItem.setAttribute('draggable', 'false');
        }
      } else {
        // Mismatch
        playRainDropSound(300);
        const instruction = zone.querySelector('.slot-instruction');
        if (instruction) {
          const original = instruction.innerHTML;
          instruction.innerHTML = '💧 "어? 이 우산은 다른 동물 친구 우산인가봐요!"';
          instruction.style.color = '#c53030';
          setTimeout(() => {
            instruction.innerHTML = original;
            instruction.style.color = '#718096';
          }, 2000);
        }
      }
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      dropZones.forEach(zone => {
        zone.classList.remove('matched');
        const accept = zone.getAttribute('data-accept');
        const img = zone.querySelector('.target-animal-img');
        const instruction = zone.querySelector('.slot-instruction');

        const rainMap = {
          mouse: 'assets/rain_animal_1_mouse.png',
          rabbit: 'assets/rain_animal_2_rabbit.png',
          raccoon: 'assets/rain_animal_3_raccoon_fox.png',
          bear: 'assets/rain_animal_4_bear.png'
        };

        if (rainMap[accept] && img) {
          img.src = rainMap[accept];
          img.style.maxHeight = '150px';
        }

        if (instruction) {
          instruction.innerHTML = '비를 맞고 있어요! 알맞은 우산을 씌워주세요!';
          instruction.style.color = '#718096';
        }
      });

      dragItems.forEach(item => {
        item.style.opacity = '1';
        item.setAttribute('draggable', 'true');
      });

      playRainDropSound(600);
    });
  }
}
