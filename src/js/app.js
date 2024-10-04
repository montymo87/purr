import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import menu from 'components/menu';
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
			// horizontalScroll();
			// menu();

			let mm = gsap.matchMedia();

			// add a media query. When it matches, the associated function will run
			mm.add('(min-width: 1024px)', () => {
				// this setup code only runs when viewport is at least 800px wide
				horizontalScroll();
				menu();
				// ScrollTrigger.refresh();
				return () => {
					// optional
					// custom cleanup code here (runs when it STOPS matching)
				};
			});

			// later, if we need to revert all the animations/ScrollTriggers...
			// mm.revert();
		});
		// setTimeout(() => {
		// 	this.importPage();
		// }, 0);
	}
}
