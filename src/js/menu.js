import menuCardTpl from '../templates/menu-card.hbs';
import menuCardsTpl from '../templates/menu-cards.hbs';
import menu from './menu.json';
import '../styles.css';

const menuContainer = document.querySelector('.js-menu');
const themeSwitch = document.querySelector('.theme-switch__toggle');
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

function onThemeSwitchClick(e) {
    const isThemeSwatchEl = e.target.classList.contains('theme-switch__toggle');
    if (!isThemeSwatchEl) {
        return;
    }

    // const swatchEl = e.target;
    // const parentTheme = swatchEl.closest('.body');
    // parentTheme.classList.add('dark-theme');
    // document.body.style.background = swatchEl

    console.log(e.target);
}