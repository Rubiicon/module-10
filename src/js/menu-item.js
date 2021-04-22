import menu from '../menu.json';
import menuTemplate from '../template/template-menu-item.hbs';

const refs = {
  menuItem: document.querySelector('.js-menu'),
};

buildMenuItemMarkup();
function buildMenuItemMarkup() {
  const markup = menu.map(menu => menuTemplate(menu)).join('');
  refs.menuItem.insertAdjacentHTML('beforeend', markup);
}
