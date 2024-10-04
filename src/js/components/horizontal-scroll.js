/* eslint-disable */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

import { getScrollLookup } from './getScrollLookup';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const horizontalScroll = () => {
	const wrapper = document.querySelector('.wrapper');
	const raceWrapper = document.querySelector('.race-wrapper');
	const sections = document.querySelectorAll('.section');
	const race = document.querySelector('.race');
	const $menu = document.querySelector('.menu');

	// for refresh width on resize
	const getScrollAmount = () => {
		let raceWidth = race.scrollWidth;
		return -(raceWidth - window.innerWidth);
	};

	let horizontalScroll = gsap.to(race, {
		x: getScrollAmount,
		duration: 0.2,
		ease: 'none',
		scrollTrigger: {
			trigger: '.race-wrapper',
			start: 'top top',
			end: () => `+=${getScrollAmount() * -1}`,
			pin: true,
			scrub: 2,
			// markers: true,
			invalidateOnRefresh: true,
		},
	});

	const $fadeEl = document.querySelectorAll('.js-fade-el');
	const tl = gsap.timeline();

	tl.set('.js-opacity-el', {
		scale: 1.1,
		opacity: 0,
		y: -20,
	});

	tl.set($fadeEl, {
		opacity: 0,
	});

	const scrollH = ScrollTrigger.batch($fadeEl, {
		start: 'top 80%',
		once: true,
		containerAnimation: horizontalScroll,

		onEnter: (batch) => {
			batch.forEach((item, index) => {
				gsap.to(item, {
					duration: 0.4,
					opacity: 1,

					stagger: 0.1,
					ease: 'none',
					onComplete: () => {
						setTimeout(() => {
							gsap.to(item.querySelectorAll('.js-opacity-el'), {
								duration: 0.3,
								opacity: 1,
								scale: 1,
								y: 0,
								stagger: 0.2,
								ease: 'none',
							});
						}, 200);
					},
				});
			});
		},
	});

	let getPosition = getScrollLookup('.section h2', {
		start: 'center center',
		containerAnimation: horizontalScroll,
	});

	gsap.utils.toArray('.menu__link').forEach((el) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			gsap.to(window, {
				scrollTo: getPosition(el.getAttribute('href')),
				overwrite: 'auto',
				duration: 0.4,
			});
		});
	});

	const menuScrollTrigger = ScrollTrigger.create({
		trigger: '.race', // Элемент, к которому привязываем триггер
		start: '15% 40%',
		end: '85% 20%',
		// markers: true,
		containerAnimation: horizontalScroll,
		onEnter: () => {
			$menu.classList.add('menu--active');
		},
		onLeave: () => {
			$menu.classList.remove('menu--active');
		},
		onEnterBack: () => {
			$menu.classList.add('menu--active');
		},
		onLeaveBack: () => {
			$menu.classList.remove('menu--active');
		},
	});
};

export default horizontalScroll;
