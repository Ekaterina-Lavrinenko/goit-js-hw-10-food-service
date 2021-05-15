import menuCardTpl from '../templates/menu-card.hbs';
import menuCardsTpl from '../templates/menu-cards.hbs';
import menu from './menu.json';
import '../styles.css';

const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createMenuCardsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(menu) {
    return menuCardTpl(menu);
}