const form = document.querySelector('.form');

const pristine = new Pristine(form, {
  classTo: 'form__label',
  errorTextParent: 'form__label',
  errorTextClass: 'form__error-text',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
