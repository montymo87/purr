import { onWindowScroll, exist } from '../utils';

const menu = () => {
	const SELECTORS = {
		header: '.js-menu',
		menuTrigger: '.js-menu-menu-trigger',
	};

	const CLASSNAMES = {
		bodyOpenMenuState: 'body--open_menu_state',
		headerScrollState: 'menu--scroll_state',
		bodyScrollPos: 'body--pos_state',
	};

	const $body = document.body;
	const $header = document.querySelector(SELECTORS.header);
	const $menuTriggers = document.querySelectorAll(SELECTORS.menuTrigger);
	const headerHeight = $header.clientHeight;
	let prevScrollPos = window.scrollY;

	let isMenuOpen = false;

	const handleTriggerClick = () => {
		if (!isMenuOpen) {
			$body.classList.add(CLASSNAMES.bodyOpenMenuState);
			isMenuOpen = true;
		} else {
			$body.classList.remove(CLASSNAMES.bodyOpenMenuState);
			isMenuOpen = false;
		}
	};

	const headerScroll = (scrollY) => {
		if (scrollY > 10 && !$header.classList.contains(CLASSNAMES.headerScrollState)) {
			$header.classList.add(CLASSNAMES.headerScrollState);
		} else if (scrollY <= 10 && $header.classList.contains(CLASSNAMES.headerScrollState)) {
			$header.classList.remove(CLASSNAMES.headerScrollState);
		}

		if (prevScrollPos < window.scrollY && scrollY > headerHeight) {
			$header.classList.add(CLASSNAMES.bodyScrollPos);
		} else {
			$header.classList.remove(CLASSNAMES.bodyScrollPos);
		}
		prevScrollPos = window.scrollY;
	};

	const initializeEventListeners = () => {
		if (!exist($menuTriggers)) return;

		$menuTriggers.forEach(($trigger) => {
			$trigger.addEventListener('click', () => {
				handleTriggerClick();
			});
		});
	};

	if (!exist($header)) return;

	onWindowScroll(headerScroll);
	initializeEventListeners();
};

export default menu;
