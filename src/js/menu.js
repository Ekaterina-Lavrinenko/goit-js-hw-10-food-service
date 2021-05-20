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

savedTheme();

function createMenuCardsMarkup(menu) {
    return menuCardsTpl(menu);
}
themeSwitch.addEventListener('change', onThemeSwitchClick);

function onThemeSwitchClick(e) {
    const isThemeSwatchEl = e.target.checked;
    if (isThemeSwatchEl == true) {
        body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
    }

    if (isThemeSwatchEl == false) {
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
    }

    console.log(e.target);
    localStorage.setItem('theme', isThemeSwatchEl);
}

function savedTheme() {
    const savedTheme = localStorage.getItem('theme');
    console.log(savedTheme);

    if (savedTheme == 'true') {
        body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
    
        themeSwitch.checked = true;
        } else {
            body.classList.add(Theme.LIGHT);
            body.classList.remove(Theme.DARK);
        }
    }

