import menuCardTpl from '../templates/menu-card.hbs';
import menuCardsTpl from '../templates/menu-cards.hbs';
import menu from './menu.json';
import '../styles.css';

const menuContainer = document.querySelector('.js-menu');
const themeSwitch = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
const cardsMarkup = createMenuCardsMarkup(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

themeSwitch.addEventListener('click', onThemeSwitchClick);

function createMenuCardsMarkup(menu) {
    return menuCardsTpl(menu);
}
themeSwitch.addEventListener('change', onThemeSwitchClick);

function onThemeSwitchClick(e) {
    const isThemeSwatchEl = e.target.checked;
    if (isThemeSwatchEl == true) {
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
    }

    if (isThemeSwatchEl == false) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    }

    console.log(e.target);
}