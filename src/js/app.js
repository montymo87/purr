import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import menu from 'components/menu';
import fade from 'components/fade';
import menuMobile from 'components/mobile-menu';
import copy from 'components/copy';
import animation from 'components/animation';
import cloud from 'components/cloud';
import start from 'components/start';
import horizontalScroll from 'components/horizontal-scroll';

import layout from 'layout/layout';
import { pageLoad } from './utils';

export default class App {
	constructor() {
		this.init();
	}

	init() {
		const initLayout = layout();
		pageLoad(() => {
			document.body.classList.add('body--loaded');

			copy();
			animation();
			cloud();
			start();

			let mm = gsap.matchMedia();
			mm.add('(min-width: 1024px)', () => {
				horizontalScroll();
				menu();
				// ScrollTrigger.refresh();
				return () => {
					// optional
					// custom cleanup code here (runs when it STOPS matching)
				};
			});

			mm.add('(max-width: 1023px)', () => {
				menuMobile();
				fade();

				return () => {};
			});
		});
		// setTimeout(() => {
		// 	this.importPage();
		// }, 0);
	}
}
