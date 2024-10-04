import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { exist } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const menuMobile = () => {
	const SELECTORS = {
		menu: '.js-menu',
		menuOpenBtn: '.js-menu-btn-open',
		menuCloseBtn: '.js-menu-btn-close',
		menuItem: '.menu__link',
	};

	const CLASSNAMES = {
		bodyOpenMenuState: 'body--open_menu_state',
		menuActiveState: 'menu--active',
	};

	const $body = document.body;
	const $menu = document.querySelector(SELECTORS.menu);
	const $menuOpenBtn = document.querySelector(SELECTORS.menuOpenBtn);
	const $menuCloseBtn = document.querySelector(SELECTORS.menuCloseBtn);
	const $menuItem = document.querySelectorAll(SELECTORS.menuItem);

	if (!exist($menu)) return;

	$menuOpenBtn.addEventListener('click', () => {
		$menu.classList.add(CLASSNAMES.menuActiveState);
		$body.classList.add(CLASSNAMES.bodyOpenMenuState);
	});

	$menuCloseBtn.addEventListener('click', () => {
		$menu.classList.remove(CLASSNAMES.menuActiveState);
		$body.classList.remove(CLASSNAMES.bodyOpenMenuState);
	});

	$menuItem.forEach((item) => {
		item.addEventListener('click', () => {
			$menu.classList.remove(CLASSNAMES.menuActiveState);
			$body.classList.remove(CLASSNAMES.bodyOpenMenuState);
			ScrollTrigger.refresh();
		});
	});
};

export default menuMobile;
