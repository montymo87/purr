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

			horizontalScroll();
			copy();
			animation();
			cloud();
			start();
		});
		// setTimeout(() => {
		// 	this.importPage();
		// }, 0);
	}
}
