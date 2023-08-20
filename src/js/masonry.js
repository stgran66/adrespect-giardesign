const refs = {
  container: document.querySelector('#container'),
  showMore: document.querySelector('#show-more'),
  galleryGradient: document.querySelector('#gallery-gradient'),
};

const showMoreText = {
  show: `
              Rozwiń
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8.49529L15.1043 7.59959L8.63642 14.0769L8.63642 0.5L7.36358 0.5L7.36358 14.0675L0.895699 7.59959L9.54553e-08 8.49529L8.00471 16.5L16 8.49529Z"
                  fill="#111111"
                />
              </svg>`,
  hide: `
       Zwiń
              <svg
                class="rotate-180"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8.49529L15.1043 7.59959L8.63642 14.0769L8.63642 0.5L7.36358 0.5L7.36358 14.0675L0.895699 7.59959L9.54553e-08 8.49529L8.00471 16.5L16 8.49529Z"
                  fill="#111111"
                />
              </svg>`,
};

let msnry = new Masonry('#container', {
  // use a selector that we will set later when an image is loaded,
  // so at first Masonry doesn't do anything yet
  itemSelector: '.demo--loaded',
  columnWidth: 451,
  gutter: 43,
});

function imagesLoadedAndLayout(elem) {
  return new Promise((resolve) => {
    imagesLoaded(elem)
      .on('progress', (imgLoad, e) => {
        e.img.parentNode.classList.add('demo--loaded');
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

// wait for images to load and for Masonry to layout
imagesLoadedAndLayout('#container').then(() => {});

refs.showMore.addEventListener('click', () => {
  refs.container.classList.toggle('!h-[1475px]');

  if (refs.showMore.innerText === 'Rozwiń') {
    refs.showMore.innerHTML = showMoreText.hide;
    refs.galleryGradient.classList.add('opacity-0');
  } else {
    refs.galleryGradient.classList.remove('opacity-0');
    refs.container.scrollIntoView({
      behavior: 'smooth',
    });
    refs.showMore.innerHTML = showMoreText.show;
  }
});
