'use strict';
import EventEmitter from "./services/eventemitter";
// require('handlebars');
// import './templates/template.hbs';
export default class SearchView extends EventEmitter {
    constructor() {
        super();
        this.app = document.querySelector('#app');
        this.header = document.createElement('header');
        this.header.classList.add('header');
        this.logo = document.createElement('h1');
        this.logo.textContent = 'FILM📀TEKA';
        this.navigation = document.createElement('nav');
        this.navigation.innerHTML = 
        `<ul class="header-list">
            <li class="header-list__item">
                <a href="" class="header-list__itemlink">Главная страница</a>
            </li>
            <li class="header-list__item">
                <a href="" class="header-list__itemlink">Моя фильмотека</a>
            </li>
        </ul>`;
        this.header.append(this.logo, this.navigation);
        this.title = document.createElement('h2');
        this.title.textContent = 'Персональная фильмотека';
        this.form = document.createElement('form');
        this.input = document.createElement('input');
        this.form.appendChild(this.input);
        this.form.addEventListener('submit', this.onFilmSearch.bind(this));
        this.cardSection = document.createElement('section');
        this.app.append(this.header, this.title, this.form, this.cardSection);
    }
    onFilmSearch(event) {
        event.preventDefault();
        let { value } = this.input;
        this.emit('search', value);
        this.form.reset();
    }  
    drawCard(data) {
        this.cardSection.innerHTML = '';
        let markup = data.map(item => {
            let card = document.createElement('div');
            let filmTitle = document.createElement('p');
            let filmImage = document.createElement('img');
            filmTitle.textContent = item.Title;
            filmImage.setAttribute('src', item.Poster);
            card.append(filmTitle, filmImage);
            this.cardSection.appendChild(card);
        });
    }
}
