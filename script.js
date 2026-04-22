// Sélection des éléments HTML
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Fonction pour ouvrir le menu
function openMenu() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    hamburgerBtn.classList.add('hidden'); // <-- NOUVEAU : Cache le logo flottant
}

// Fonction pour fermer le menu
function closeMenu() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    hamburgerBtn.classList.remove('hidden'); // <-- NOUVEAU : Réaffiche le logo flottant
}

// Événements au clic
hamburgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

// Fermer le menu si on clique dans la zone sombre (overlay)
overlay.addEventListener('click', closeMenu);