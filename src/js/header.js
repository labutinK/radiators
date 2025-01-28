import {slideDown, slideUp} from "./utils";
import debounce from "lodash/debounce";

export class CheeseHeader {
    constructor(header) {
        this._header = header;
        this._body = document.querySelector('body');
        this._burgerIcon = this._header.querySelector('.header__burger-icon');
        this._burger = this._header.querySelector('.header__nav');
        this._addHandlers();
        this._isDesktop = window.innerWidth > 1080;
    }

    _clickOutBurger = ({target}) => {
        if (!this._header.hasAttribute('data-animating')) {
            if (!target.classList.contains('header') && !target.closest('header')) {
                this._closeBurger();
            }
        }
    }

    _openBurger() {
        this._burger.setAttribute('data-open', true);
        this._burgerIcon.setAttribute('data-open', true);
        this._header.setAttribute('data-open', true);
        this._body.classList.add('blocked');
        document.addEventListener('click', this._clickOutBurger);
        slideDown(this._burger, 300, () => {
            this._header.removeAttribute('data-animating');
        });
    }


    _resetStylesForDesktop() {
        this._burger.style = '';
        this._burgerIcon.removeAttribute('data-open');
        this._burger.removeAttribute('data-open');
        this._header.removeAttribute('data-open');
        this._body.classList.remove('blocked');
        this._isDesktop = true;
    }

    _closeBurger() {
        this._burgerIcon.removeAttribute('data-open');
        document.removeEventListener('click', this._clickOutBurger);
        slideUp(this._burger, 300, () => {
            this._header.removeAttribute('data-animating');
            this._burger.removeAttribute('data-open');
            this._header.removeAttribute('data-open');
            this._body.classList.remove('blocked');
        });
    }


    _addHandlers() {
        this._burgerIcon.addEventListener('click', () => {
            if (!this._header.hasAttribute('data-animating')) {
                this._header.setAttribute('data-animating', true);
                if (this._burger.hasAttribute('data-open')) {
                    this._closeBurger();
                } else {
                    this._openBurger();
                }
            }
        })



        window.addEventListener('resize', debounce(() => {
            this._isDesktop = window.innerWidth > 1080;
            if (this._isDesktop) {
                this._resetStylesForDesktop();
            }

        }, 100));

    }


}