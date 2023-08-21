const refs = {
  container: document.querySelector('#container'),
  expandBtn: document.querySelector('#expand'),
  expandIcon: document.querySelector('#expand-icon'),
  galleryGradient: document.querySelector('#gallery-gradient'),
};

// create Masonry instance
let msnry = new Masonry('#container', {
  itemSelector: '.gallery-item--loaded',
  columnWidth: 451,
  gutter: 43,
});

// function to wait for images to load and for Masonry to layout
function imagesLoadedAndLayout(elem) {
  return new Promise((resolve) => {
    imagesLoaded(elem)
      .on('progress', (imgLoad, e) => {
        e.img.parentNode.classList.add('gallery-item--loaded');
        msnry.appended(e.img.parentNode);
        msnry.layout();
      })
      .on('done', () => {
        msnry.once('layoutComplete', () => {
          resolve();
        });
      });
  });
}

imagesLoadedAndLayout('#container').then(() => {});

let gallery = new SimpleLightbox('.gallery a', {});

// Event listener for gallery expand button
refs.expandBtn.addEventListener('click', () => {
  refs.container.classList.toggle('!h-[1475px]');

  if (refs.expandBtn.innerText === 'Rozwiń') {
    refs.expandBtn.childNodes[0].nodeValue = 'Zwiń';
    refs.expandIcon.style.transform = 'rotate(180deg)';
    refs.galleryGradient.classList.add('opacity-0', 'pointer-events-none');
  } else {
    refs.galleryGradient.classList.remove('opacity-0', 'pointer-events-none');
    refs.container.scrollIntoView({
      behavior: 'smooth',
    });
    refs.expandBtn.childNodes[0].nodeValue = 'Rozwiń';
    refs.expandIcon.style.transform = 'rotate(0)';
  }
});
