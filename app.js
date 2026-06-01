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

let filtruActiv = "toate";

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

    card.innerHTML = `
      <div class="card-top">
        <span class="tag ${TAG_CLASA[m.materie]}">${MATERIE_LABEL[m.materie]}</span>
        <span class="card-icon">${ICONITE[m.materie]}</span>
      </div>
      <h3>${m.titlu}</h3>
      <p>${m.descriere}</p>
      <a class="card-link" href="${m.link}" target="_blank" rel="noopener">
        ${m.tip} <span>→</span>
      </a>
    `;

    grid.appendChild(card);
  });
}

function filtreaza(materie) {
  filtruActiv = materie;

  // Actualizează butoanele
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === materie);
  });

  const lista = materie === "toate"
    ? MATERIALE
    : MATERIALE.filter(m => m.materie === materie);

  randeazaCarduri(lista);
}

// Contor animat pentru statistica
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

// Init
document.addEventListener("DOMContentLoaded", () => {
  // Filtre
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => filtreaza(btn.dataset.filter));
  });

  // Randare initială
  randeazaCarduri(MATERIALE);

  // Stat materiale
  const statEl = document.querySelector("#stat-materiale .stat-num");
  if (statEl) animaContor(statEl, MATERIALE.length, 1000);
});
