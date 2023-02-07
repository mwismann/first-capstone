// ---------- Variables ---------------

const mobileMenu = document.querySelector('.mobile-menu');
const openMobileBtn = document.querySelector('.open-mobile');
const closeMobileBtn = document.querySelectorAll('.close-mobile');

// --------- Functions ----------------

const openMobileMenu = () => {
  mobileMenu.classList.remove('hidden');
  openMobileBtn.classList.add('hidden');
};

const closeMobileMenu = () => {
  mobileMenu.classList.add('hidden');
  openMobileBtn.classList.remove('hidden');
};

// --------- eventListeners -----------

openMobileBtn.addEventListener('click', openMobileMenu);
closeMobileBtn.forEach((btn) => btn.addEventListener('click', closeMobileMenu));