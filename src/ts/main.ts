import './types/index.d.ts';

import './vendor';

import { initAccordion } from './modules/accordion';

import { initAddLink } from './modules/add-link/init-add-link';
import { alert } from './modules/alert';
import { avatar } from './modules/avatar';
import { cookies } from './modules/cookies';
import { dragToScroll } from './modules/drag-to-scroll/index';
import { initFormPageCalendar } from './modules/form-page-calendar';
import { initForms } from './modules/form-validate/init-forms';
import { initModals } from './modules/modals/init-modals';
import { notifications } from './modules/notifications.js';
import { initPagination } from './modules/paginanion';
import { initScreenLockers } from './modules/screen-locker';
import { scrollUp } from './modules/scroll-up';
import { archiveSearch } from './modules/search/archive';
import { citeSearch } from './modules/search/site';
import { initCustomSelect } from './modules/select/init-select';
import { initSliders } from './modules/sliders/init-sliders';
import { smoothScroll } from './modules/smooth-scroll';
import { initTabs } from './modules/tabs/init-tabs';
import { initToggleGroup } from './modules/toggle-group/index';
import { initToggleList } from './modules/toggle-list';
import { tooltipsInit } from './modules/tolltips/index';
import { trimText } from './modules/trim-text';
import { initUpload } from './modules/upload';
import { initUserMenu } from './modules/user-menu';
import { initVideo } from './modules/video/';
import { mobileVhFix } from './utils/mobile-vh-fix';

// import PaginationOptions from './vendor/pagination/pagination.options';

// https://github.com/Scalesoft/s-pagination?tab=readme-ov-file
// https://scalesoft.github.io/s-pagination/

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initCustomSelect();
    initSliders();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

// для отладки [data-test-form]
// const testForm = document.querySelector('[data-test-form]');
// testForm?.addEventListener('submit', evt => {
//   evt.preventDefault();

//   const formData = new FormData(testForm);

//   console.log('...formData.files', ...formData);
// });
