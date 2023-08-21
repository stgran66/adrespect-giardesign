const refs = {
  mobMenuBtn: document.querySelector('#burger-menu'),
  mobOfferMenuBtn: document.querySelector('#mob-offer-menu-btn'),
  mobMenu: document.querySelector('#mob-menu'),
  offerMenuBtn: document.querySelector('#offer-menu-btn'),
  mobOfferMenu: document.querySelector('#mob-offer-menu'),
};

// Opening and closing offer menu on tablet and desktop
function toggleOfferMenu() {
  this.parentElement.classList.toggle('offer-open');
  this.parentElement.classList.toggle('hover:drop-shadow-lg');

  this.nextElementSibling.classList.toggle('animate-fade-down');
}

refs.offerMenuBtn.addEventListener('click', toggleOfferMenu);

// Menu state variable
let isMenuOpen = false;

// Closing menu by clicking outside or navigating through nav link
function closeMobMenu(e) {
  e.stopPropagation();
  if (
    !e.target.closest('#mob-offer-menu-btn') &&
    !e.target.closest('#burger-menu')
  ) {
    refs.mobMenu.classList.remove('mob-menu-open');
    document.removeEventListener('click', closeMobMenu);
    refs.mobOfferMenuBtn.removeEventListener('click', openMobOfferMenu);
    refs.mobOfferMenu.classList.remove('mob-offer-open');
    refs.mobOfferMenu.classList.remove('animate-fade-left');

    isMenuOpen = !isMenuOpen;
  }
}

// Toggle menu using burger button
function toggleMobMenu(e) {
  e.stopPropagation();
  if (!isMenuOpen) {
    refs.mobMenu.classList.add('mob-menu-open');
    refs.mobMenu.classList.add('animate-fade-down');

    // Add listener on button which opens offer menu on mobile
    refs.mobOfferMenuBtn.addEventListener('click', openMobOfferMenu);

    document.addEventListener('click', closeMobMenu);
  } else {
    refs.mobMenu.classList.remove('mob-menu-open');
    document.removeEventListener('click', closeMobMenu);
    refs.mobOfferMenuBtn.removeEventListener('click', openMobOfferMenu);
    refs.mobOfferMenu.classList.remove('mob-offer-open');
    refs.mobOfferMenu.classList.remove('animate-fade-left');
  }
  isMenuOpen = !isMenuOpen;
}

function openMobOfferMenu() {
  refs.mobOfferMenu.classList.add('mob-offer-open');
  refs.mobOfferMenu.classList.add('animate-fade-left');
}

refs.mobMenuBtn.addEventListener('click', toggleMobMenu);
