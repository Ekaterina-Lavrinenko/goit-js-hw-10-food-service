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

const STORAGE_KEY = 'current-theme';

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);
themeSwitch.addEventListener('click', onThemeSwitchClick);

onReload();

function createMenuCardsMarkup(menu) {
    return menuCardsTpl(menu);
}
themeSwitch.addEventListener('change', onThemeSwitchClick);

function onThemeSwitchClick(e) {
    const currenTheme = e.currentTarget.value;
    const isThemeSwatchEl = e.target.checked;
    if (isThemeSwatchEl == true) {
        body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
    }

    if (isThemeSwatchEl == false) {
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
    }

    console.log(e.target);
    localStorage.setItem(STORAGE_KEY, currenTheme);
}

function onReload() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme) {
        themeSwitch.value = savedTheme;
    }
}