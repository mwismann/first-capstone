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
        <div class="speaker-card relative flex gap-16 md:gap-20 lg:gap-24 xl:gap-24">
            <i class="las la-chess-board text-7xl sm:text-8xl md:text-7xl md:text-[#d3d3d3] xl:text-8xl"></i>
            <div class="card-img-container absolute top-6 left-6 w-1/4 h-4/5 bg-[url('img/gary-marcus.jpg')] bg-cover max-[320px]:w-1/3 sm:w-1/6 sm:h-full md:w-2/6 md:h-2/3 lg:h-4/5 xl:w-1/5 xl:h-36"></div>
            <span class="sr-only">A picture of Gary Marcus</span>
            <div class="card-meta flex flex-col justify-center items-start text-start">
                <h3 class="font-semibold xl:text-2xl">Gary Marcus</h3>
                <p class="highlight text-xs italic xl:text-base">Professor emeritus of psychology and neural science at New York University
                    and author</p>
                    <i class="las la-minus"></i>
                <p class="text-xs xl:text-base">In 2014 he founded Geometric Intelligence, a machine-learning company. His books include Guitar Zero and Kluge</p>
            </div>
        </div>
        <div class="speaker-card relative flex gap-16 md:gap-20 lg:gap-24 xl:gap-24">
            <i class="las la-chess-board text-7xl sm:text-8xl md:text-7xl md:text-[#d3d3d3] xl:text-8xl"></i>
            <div class="card-img-container absolute top-6 left-6 w-1/4 h-4/5 bg-[url('img/demis-hassabis.jpg')] bg-cover max-[320px]:w-1/3 sm:w-1/6 sm:h-full md:w-2/6 md:h-2/3 lg:h-4/5 xl:w-1/5 xl:h-36"></div>
            <span class="sr-only">A picture of Demis Hassabis</span>
            <div class="card-meta flex flex-col justify-center items-start text-start">
                <h3 class="font-semibold">Demis Hassabis</h3>
                <p class="highlight text-xs italic xl:text-base">Artificial Intelligence researcher, entrepreneur, and UK Government AI Advisor</p>
                <i class="las la-minus"></i>
                <p class="text-xs xl:text-base">Chief executive and co-founder of DeepMind and Insomorphic Labs</p>
            </div>
        </div>
        <div class="speaker-cards relative flex gap-16 md:gap-20 lg:gap-24 xl:gap-24">
            <i class="las la-chess-board text-7xl sm:text-8xl md:text-7xl md:text-[#d3d3d3] xl:text-8xl"></i>
            <div class="card-img-container absolute top-6 left-6 w-1/4 h-4/5 bg-[url('img/fei-fei-li.jpg')] bg-cover max-[320px]:w-1/3 sm:w-1/6 sm:h-full md:w-2/6 md:h-2/3 lg:h-4/5 xl:w-1/5 xl:h-36"></div>
            <span class="sr-only">A picture of Fei-Fei Li</span>
            <div class="card-meta flex flex-col justify-center items-start text-start">
                <h3 class="font-semibold">Fei-Fei Li</h3>
                <p class="highlight text-xs italic xl:text-base">Sequoia Capital Professor of Computer Science at Standford University</p>
                <i class="las la-minus"></i>
                <p class="text-xs xl:text-base">Established ImageNet, the dataset that enabled rapid advances in computer vision in the 2010s</p>
            </div>
        </div>
        <div class="speaker-card relative flex gap-16 md:gap-20 lg:gap-24 xl:gap-24">
            <i class="las la-chess-board text-7xl sm:text-8xl md:text-7xl md:text-[#d3d3d3] xl:text-8xl"></i>
            <div class="card-img-container absolute top-6 left-6 w-1/4 h-4/5 bg-[url('img/cynthia-breazeal.jpg')] bg-cover max-[320px]:w-1/3 sm:w-1/6 sm:h-full md:w-2/6 md:h-2/3 lg:h-4/5 xl:w-1/5 xl:h-36"></div>
            <span class="sr-only">A picture of Cynthia Breazeal</span>
            <div class="card-meta flex flex-col justify-center items-start text-start">
                <h3 class="font-semibold">Cynthia Breazeal</h3>
                <p class="highlight text-xs italic xl:text-base">Professor of media arts and science at MIT</p>
                <i class="las la-minus"></i>
                <p class="text-xs xl:text-base">Founded and directs the Personal Robots group at MIT's Media Lab</p>
            </div>
        </div>
        <div class="speaker-card relative flex gap-16 md:gap-20 lg:gap-24 xl:gap-24">
            <i class="las la-chess-board text-7xl sm:text-8xl md:text-7xl md:text-[#d3d3d3] xl:text-8xl"></i>
            <div class="card-img-container absolute top-6 left-6 w-1/4 h-4/5 bg-[url('img/raymond-kurzweil.jpg')] bg-cover max-[320px]:w-1/3 sm:w-1/6 sm:h-full md:w-2/6 md:h-2/3 lg:h-4/5 xl:w-1/5 xl:h-36"></div>
            <span class="sr-only">A picture of Raymond Kurzweil</span>
            <div class="card-meta flex flex-col justify-center items-start text-start">
                <h3 class="font-semibold">Raymond Kurzweil</h3>
                <p class="highlight text-xs italic xl:text-base">Computer scientist, author, investor, and futurist</p>
                <i class="las la-minus"></i>
                <p class="text-xs xl:text-base">Involved in fields such as optical character recognition,
                    text-to-speech synthesis, and speech recognition technology</p>
            </div>
        </div>
        <div class="speaker-card relative flex gap-16 md:gap-20 lg:gap-24 xl:gap-24">
            <i class="las la-chess-board text-7xl sm:text-8xl md:text-7xl md:text-[#d3d3d3] xl:text-8xl"></i>
            <div class="card-img-container absolute top-6 left-6 w-1/4 h-4/5 bg-[url('img/jurgen-schmidhuber.jpg')] bg-cover max-[320px]:w-1/3 sm:w-1/6 sm:h-full md:w-2/6 md:h-2/3 lg:h-4/5 xl:w-1/5 xl:h-36"></div>
            <span class="sr-only">A picture of Jurgen Schmindhuber</span>
            <div class="card-meta flex flex-col justify-center items-start text-start">
                <h3 class="font-semibold">Jurgen Schmindhuber</h3>
                <p class="highlight text-xs italic xl:text-base">Renown in the fields of artificial intelligence,
                    deep learning and artificial neural networks</p>
                    <i class="las la-minus"></i>
                <p class="text-xs xl:text-base">Co-director of the Dalle Molle Institute for Artificial Intelligence Research in Lugano, Switzerland</p>
            </div>
        </div>
    </div>`;

  speakersSection.insertAdjacentHTML('beforeend', speakersContent);
};

// --------- eventListeners -----------------------------
window.onload = renderSpeakersSection;
openMobileBtn.addEventListener('click', openMobileMenu);
closeMobileBtn.forEach((btn) => btn.addEventListener('click', closeMobileMenu));