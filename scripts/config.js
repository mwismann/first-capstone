// --------- Objects Data ------------------------------
const speakersData = [
  {
    name: 'Gary Marcus',
    img: 'img/gary-marcus.jpg',
    highlight: 'Professor emeritus of psychology and neural science at New York University and author',
    description: 'In 2014 he founded Geometric Intelligence, a machine-learning company. His books include Guitar Zero and Kluge',
  },
  {
    name: 'Demis Hassabis',
    img: 'img/demis-hassabis.jpg',
    highlight: 'Artificial Intelligence researcher, entrepreneur, and UK Government AI Advisor',
    description: 'Chief executive and co-founder of DeepMind and Insomorphic Labs',
  },
  {
    name: 'Fei-Fei Li',
    img: 'img/fei-fei-li.jpg',
    highlight: 'Sequoia Capital Professor of Computer Science at Standford University',
    description: 'Established ImageNet, the dataset that enabled rapid advances in computer vision in the 2010s',
  },
  {
    name: 'Cynthia Breazeal',
    img: 'img/cynthia-breazeal.jpg',
    highlight: 'Professor of media arts and science at MIT',
    description: 'Founded and directs the Personal Robots group at MIT\'s Media Lab',
  },
  {
    name: 'Raymond Kurzweil',
    img: 'img/raymond-kurzweil.jpg',
    highlight: 'Computer scientist, author, investor, and futurist',
    description: 'Involved in fields such as optical character recognition, text-to-speech synthesis, and speech recognition technology',
  },
  {
    name: 'Jurgen Schmindhuber',
    img: 'img/jurgen-schmidhuber.jpg',
    highlight: 'Renown in the fields of artificial intelligence, deep learning and artificial neural networks',
    description: 'Co-director of the Dalle Molle Institute for Artificial Intelligence Research in Lugano, Switzerland',
  },
];

// --------- Header Variables ---------------------------
const mobileMenu = document.querySelector('.mobile-menu');
const openMobileBtn = document.querySelector('.open-mobile');
const closeMobileBtn = document.querySelectorAll('.close-mobile');

// --------- Speakers Section Variables -----------------
const speakersSection = document.getElementById('featured-speakers');

// --------- Functions ----------------------------------

const openMobileMenu = () => {
  mobileMenu.classList.remove('hidden');
  openMobileBtn.classList.add('hidden');
};

const closeMobileMenu = () => {
  mobileMenu.classList.add('hidden');
  openMobileBtn.classList.remove('hidden');
};

const renderSpeakersSection = () => {
  speakersSection.classList.add('py-8', 'text-center', 'sm:pb-16', 'xl:pt-12', 'xl:pb-24', 'xl:min-h-[100vh]');

  const speakersContent = `<h2 class="text-xl font-semibold xl:text-3xl">Featured Speakers</h2>
    <div class="flex justify-center">
        <i class="las la-minus text-2xl text-[#ec5242]"></i>
        <i class="las la-minus text-2xl text-[#ec5242] ml-[-0.5rem]"></i>
    </div>

    <div class="speakers-grid pl-2 pr-3 grid grid-cols-1 grid-rows-6 gap-8 md:grid-cols-2 md:grid-rows-3 md:gap-x-2 md:px-12 lg:px-36 xl:mt-8 xl:px-60 xl:gap-y-24">
    </div>`;

  speakersSection.insertAdjacentHTML('beforeend', speakersContent);

  const speakersGrid = document.querySelector('.speakers-grid');

  speakersData.forEach((speaker) => speakersGrid.insertAdjacentHTML('beforeend',
    `<article class="speaker-card relative flex gap-16 md:gap-20 lg:gap-24 xl:gap-20">
    <i class="las la-chess-board text-7xl sm:text-8xl md:text-7xl md:text-[#d3d3d3] xl:text-8xl"></i>
    <div class="card-img-container absolute top-6 left-6 w-1/4 h-4/5 bg-[url(${speaker.img})] bg-cover max-[320px]:w-1/3 sm:w-1/6 sm:h-full md:w-2/6 md:h-2/3 lg:h-4/5 xl:w-1/4 xl:h-36"></div>
    <span class="sr-only">A picture of ${speaker.name}</span>
    <div class="card-meta flex flex-col justify-center items-start text-start">
        <h3 class="font-semibold">${speaker.name}</h3>
        <p class="highlight text-xs italic xl:text-base">${speaker.highlight}</p>
        <i class="las la-minus"></i>
        <p class="text-xs xl:text-base">${speaker.description}</p>
    </div>
    </article>`));
};

// --------- eventListeners -----------------------------
window.onload = renderSpeakersSection;
openMobileBtn.addEventListener('click', openMobileMenu);
closeMobileBtn.forEach((btn) => btn.addEventListener('click', closeMobileMenu));