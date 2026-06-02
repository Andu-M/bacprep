// ================================================================
//  BACPREP – app.js  (nu modifica acest fișier)
// ================================================================

const ICONITE = {
  romana: "📖",
  matematica: "📐",
  informatica: "💻",
};

const TAG_CLASA = {
  romana: "tag-romana",
  matematica: "tag-matematica",
  informatica: "tag-informatica",
};

const MATERIE_LABEL = {
  romana: "Română",
  matematica: "Matematică",
  informatica: "Informatică",
};

function randeazaCarduri(lista) {
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty-state");
  grid.innerHTML = "";

  if (lista.length === 0) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  lista.forEach((m, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${i * 0.05}s`;

    // ── SINGURA SCHIMBARE față de versiunea veche ──
    // link-ul deschide viewer.html?file=...&titlu=... în loc de fișierul direct
    const viewerUrl = `viewer.html?file=${encodeURIComponent(m.file)}&titlu=${encodeURIComponent(m.titlu)}`;

    card.innerHTML = `
      <div class="card-top">
        <span class="tag ${TAG_CLASA[m.materie]}">${MATERIE_LABEL[m.materie]}</span>
        <span class="card-icon">${ICONITE[m.materie]}</span>
      </div>
      <h3>${m.titlu}</h3>
      <p>${m.descriere}</p>
      <a class="card-link" href="${viewerUrl}">
        ${m.tip} <span>→</span>
      </a>
    `;

    grid.appendChild(card);
  });
}

function filtreaza(materie) {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === materie);
  });

  const lista = materie === "toate"
    ? MATERIALE
    : MATERIALE.filter(m => m.materie === materie);

  randeazaCarduri(lista);
}

function animaContor(el, tinta, durata) {
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / durata, 1);
    el.textContent = Math.floor(progress * tinta);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = tinta;
  }
  requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => filtreaza(btn.dataset.filter));
  });

  randeazaCarduri(MATERIALE);

  const statEl = document.querySelector("#stat-materiale .stat-num");
  if (statEl) animaContor(statEl, MATERIALE.length, 1000);
});
