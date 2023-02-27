'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = [...document.querySelectorAll('.btn--show-modal')];
/** SMOOTH SCROLL */
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Button SCROLLING
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log(
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  console.log('Current scroll (X/Y)', scrollX, scrollY);
  //Scrolling
  // window.scrollTo(s1coords.left, s1coords.top + window.scrollY);

  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth',
  });

  //New version
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////
//Page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

/**
 * 1. Add event listener to common parent element
 * 2. Determine what element originated the event
 *
 */

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strateging
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active from all tabs
  tabs.forEach(e => e.classList.remove('operations__tab--active'));

  // Add active to clicked tab
  clicked.classList.add('operations__tab--active');

  // Get content of clicked tab
  const content = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );
  // Remove active from all content
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  // Add active to content of clicked tab
  content.classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    // console.log(this);
    const link = e.target;
    const siblings = [
      ...link.closest('.nav__links').querySelectorAll('.nav__link'),
    ];
    const logo = link.closest('.nav').querySelector('.nav__logo');

    siblings.push(logo);
    siblings.forEach(s => {
      if (s !== link) s.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
const intialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function (e) {
//   // console.log(window.scrollY);

//   if (window.scrollY > intialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header1 = document.querySelector('.header');
const coords = header1.getBoundingClientRect();
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header1);

// Reveal section
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => {
  // section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

// Lazy loading images
const allImgs = document.querySelectorAll('.features__img');
console.log(allImgs);
// create callback
const lazyObserver = function (entries, observer) {
  const [entry] = entries;
  // console.log('Observing', entry.target);
  const bigImg = entry.target.dataset.src;

  if (!entry.isIntersecting) return;
  // console.log('intersecting!!');
  entry.target.setAttribute('src', bigImg);

  // addEventListener for onload event
  entry.target.addEventListener('load', function (e) {
    entry.target.classList.remove('lazy-img');
  });
  // remove observer from img
  observer.unobserve(entry.target);
};

// create observer
const imgObserver = new IntersectionObserver(lazyObserver, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

allImgs.forEach(img => imgObserver.observe(img));

// Slider

const sliderFn = function () {
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;

  // FUNCTIONS
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
      // console.log(i, s.style.transform);
    });
    // console.log('slide: ', slide);
  };

  const activateDot = function (slide) {
    dotContainer
      .querySelectorAll('.dots__dot')
      .forEach(s => s.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  // Next slide
  const nextSlide = function () {
    if (curSlide == slides.length - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide == 0) {
      curSlide = slides.length - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(curSlide);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === 'ArrowLeft') prevSlide(curSlide);
    e.key === 'ArrowRight' && nextSlide(curSlide);
  });

  dotContainer.addEventListener('click', function (e) {
    const btn = e.target;
    if (btn.classList.contains('dots__dot')) {
      const slide = btn.dataset.slide;
      goToSlide(+slide);
      activateDot(slide);
    }
  });
};
sliderFn();
///////////////////////////////////
/////////////////////////////////
//////////////////////////////////

//Selecting Elements
// console.log(document.documentElement);
// console.log(document.head.innerHTML);
// console.log(document.body.innerHTML);

const allSelections = document.querySelectorAll('.section');

// console.log(document.getElementById('section--1'));
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

const navBar = document.getElementsByClassName('nav');
// console.log(document.getElementsByTagName('div'));
const header = document.querySelector('.header');

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = '<button class="btn btn--close-cookie">Got it!</button>';

//element node cant be in 2 places at one time
// can use prepend and append to insert and move dom elements
// Dom elements are unique only at one place a time
// Can make copies of elements

// header.prepend(message);
// header.append(message.cloneNode(true));

//Makes element as sibling element
// header.append(message);
// header.before(message);

//Removing element
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   //New syntax
//   message.remove();

//   //old way
//   // message.parentElement.removeChild(message);
// });

// message.style.backgroundColor = 'crimson';
// console.log(getComputedStyle(message).height);

// message.style.height =
// Number.parseInt(getComputedStyle(message).height, 10) + 40 + 'px';
// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes src, class, alt, id etc...

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const op = document.querySelector('.operations__tab--1');

// op.addEventListener('click', () => {
//   setTimeout(() => {
//     document.body.style.background = '#dd9';
//   }, 1000);
// });

// const link = document.querySelector('.twitter-link');
// console.log(link.href);

// const btn = document.querySelector('.btn--show-modal');
// console.log(btn.href);
// console.log(btn.getAttribute('href'));

// // special type of attribute Data
// console.log(logo.dataset.versionNumber);

// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// logo.style.color = 'blue';

// document.addEventListener('scroll', e => {
//   console.log(window.scrollY);
// });

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   // e.preventDefault();

//   console.log(e);
//   e.returnValue = '';
// });
