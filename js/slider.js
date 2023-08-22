const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  // Navigation arrows
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
}); // const refs = {
//   prevBtn: document.querySelector('#prev-slide-btn'),
//   nextBtn: document.querySelector('#next-slide-btn'),
// };

// const slides = [
//   document.querySelector('#slide-1'),
//   document.querySelector('#slide-2'),
//   document.querySelector('#slide-3'),
//   document.querySelector('#slide-4'),
// ];

// const leftSlideClasses = ['lg:col-start-2', 'lg:col-end-4'];
// const rightSlideClasses = ['lg:col-start-4', 'lg:col-end-6'];

// function checkIfLeftSlide(elem) {
//   return (
//     elem.classList.contains(leftSlideClasses[0]) &&
//     elem.classList.contains(leftSlideClasses[1])
//   );
// }

// function checkIfRightSlide(elem) {
//   return (
//     elem.classList.contains(rightSlideClasses[0]) &&
//     elem.classList.contains(rightSlideClasses[1])
//   );
// }

// // console.log(checkIfLeftSlide(slides[0]));
// // console.log(checkIfLeftSlide(slides[3]));
// // console.log(checkIfRightSlide(slides[0]));
// // console.log(checkIfRightSlide(slides[1]));

// function nextSlide() {
//   const currLeft = slides.findIndex((elem) => checkIfLeftSlide(elem));

//   slides.forEach((slide) => {
//     slide.classList.remove(...leftSlideClasses, ...rightSlideClasses);
//     slide.classList.add('!hidden');
//   });

//   slides[3].classList.add(...leftSlideClasses);
//   slides[3].classList.remove('!hidden');
//   slides[0].classList.add(...rightSlideClasses);
//   slides[0].classList.remove('!hidden');

//   //   if (currLeft <= slides.length - 2) {
//   //     slides[currLeft + 1].classList.add(...leftSlideClasses);
//   //     slides[currLeft + 1].classList.remove('!hidden');
//   //     slides[currLeft + 2].classList.add(rightSlideClasses);
//   //     slides[currLeft + 2].classList.remove('!hidden');
//   //   }
// }

// // nextSlide();

// function prevSlide() {}
