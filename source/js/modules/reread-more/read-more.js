const buttonMore = document.querySelector('.btn--more');
const more = document.querySelector('.about-content__description-wrapper');

function readMore() {

  buttonMore.addEventListener('click', () => {
    if (more.classList.contains('about-content__description-wrapper--close')) {
      more.classList.toggle('about-content__description-wrapper--close');
      more.classList.toggle('about-content__description-wrapper--open');
      buttonMore.textContent = 'Свернуть';
    } else {
      more.classList.toggle('about-content__description-wrapper--open');
      more.classList.toggle('about-content__description-wrapper--close');
      buttonMore.textContent = 'Подробнее';
    }
  });

}

export {readMore};
