import {Modals} from './modals';

let modals;
const nameModal = document.querySelector('input[data-name]');

// Здесь реализован пример открытия модалки через колбэк закрытия
// const openModalInCloseCallback = (name, context = this) => {
//   context._enableScrolling = false;
//   context._setSettings('default');
//   modals.open(name);
// };

// closeCallback() {
//   openModalInCloseCallback('modal-5');
// },

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  },
};

const initModals = () => {
  const modalElements = document.querySelectorAll('.modal');
  modalElements.forEach((el) => {
    setTimeout(() => {
      el.classList.remove('modal--preload');
    }, 100);
    nameModal.focus();
  });
  modals = new Modals(settings);
  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.modals = modals;
};

export {modals, initModals};
