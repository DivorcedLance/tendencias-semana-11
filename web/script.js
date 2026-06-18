/* =========================================================
   Blog visual — interactividad
   - Reveal on scroll (IntersectionObserver)
   - Contadores animados
   - Barras de progreso
   - Navbar sólida al hacer scroll
   ========================================================= */

(function () {
  "use strict";

  /* -------- Reveal on scroll -------- */
  const reveals = document.querySelectorAll(".reveal");

  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  reveals.forEach((el) => revealObs.observe(el));

  /* -------- Líneas del hero (al cargar) -------- */
  const lines = document.querySelectorAll(".hero .reveal-line");
  requestAnimationFrame(() => {
    lines.forEach((l, i) => {
      setTimeout(() => l.classList.add("in"), 200 + i * 150);
    });
  });

  /* -------- Contadores animados -------- */
  const counters = document.querySelectorAll("[data-count]");

  const countObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const final = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const duration = 1800;
        const start = performance.now();

        function tick(now) {
          const elapsed = now - start;
          const t = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const value = final * eased;
          el.textContent = prefix + value.toFixed(decimals) + suffix;
          if (t < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        countObs.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((c) => countObs.observe(c));

  /* -------- Barras de progreso (stat-bar-fill) -------- */
  const bars = document.querySelectorAll(".stat-bar-fill");

  const barObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const fill = el.dataset.fill || "0";
        setTimeout(() => {
          el.style.width = fill + "%";
        }, 200);
        barObs.unobserve(el);
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach((b) => barObs.observe(b));

  /* -------- Barras de la timeline -------- */
  const tlBars = document.querySelectorAll(".tl-bar");

  const tlObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const item = entry.target;
        const bars = item.querySelectorAll(".tl-bar");
        bars.forEach((bar, i) => {
          bar.style.animationDelay = `${i * 100}ms`;
        });
        tlObs.unobserve(item);
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".tl-item").forEach((it) => tlObs.observe(it));

  /* -------- Navbar sólida al hacer scroll -------- */
  const nav = document.getElementById("nav");

  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* -------- Suavizar hash al hacer clic -------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* -------- Parallax suave para orbes del hero -------- */
  const orbs = document.querySelectorAll(".hero .orb");

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          orbs.forEach((orb, i) => {
            const speed = 0.15 + i * 0.05;
            orb.style.transform = `translateY(${y * speed}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
})();
