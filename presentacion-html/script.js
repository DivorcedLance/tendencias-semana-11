/* =========================================================
   Navegación de la presentación
   - Flechas ← / → para avanzar y retroceder
   - Espacio, PageUp, PageDown, Home, End
   - Botones en pantalla
   - Pantalla completa con F
   - Contador y barra de progreso
   ========================================================= */

(function () {
  const deck = document.getElementById("deck");
  const slides = Array.from(deck.querySelectorAll(".slide"));
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const fsBtn = document.getElementById("fsBtn");
  const counter = document.getElementById("counter");
  const progressBar = document.getElementById("progressBar");

  let current = 0;
  const total = slides.length;

  function show(index) {
    if (index < 0) index = 0;
    if (index > total - 1) index = total - 1;

    slides.forEach((s, i) => {
      s.classList.remove("is-active", "is-prev");
      if (i === index) {
        s.classList.add("is-active");
        s.scrollTop = 0;
      } else if (i < index) {
        s.classList.add("is-prev");
      }
    });

    current = index;
    counter.textContent = `${current + 1} / ${total}`;
    progressBar.style.width = `${((current + 1) / total) * 100}%`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;

    history.replaceState(null, "", `#${index + 1}`);
  }

  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  // -------- Botones --------
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);

  // -------- Teclado --------
  document.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;

    switch (e.key) {
      case "ArrowRight":
      case "PageDown":
      case " ":
        e.preventDefault();
        next();
        break;
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        prev();
        break;
      case "Home":
        e.preventDefault();
        show(0);
        break;
      case "End":
        e.preventDefault();
        show(total - 1);
        break;
      case "f":
      case "F":
        e.preventDefault();
        toggleFullscreen();
        break;
      default:
        return;
    }
  });

  // -------- Pantalla completa --------
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  fsBtn.addEventListener("click", toggleFullscreen);

  // -------- Touch / swipe móvil --------
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) < 50) return;
    if (diff > 0) next();
    else prev();
  }, { passive: true });

  // -------- Estado inicial desde hash --------
  function init() {
    const hash = parseInt(location.hash.replace("#", ""), 10);
    if (!isNaN(hash) && hash >= 1 && hash <= total) {
      show(hash - 1);
    } else {
      show(0);
    }
  }

  init();
})();
