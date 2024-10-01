/* eslint-disable */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const horizontalScroll = () => {
	const wrapper = document.querySelector('.wrapper');
	const raceWrapper = document.querySelector('.race-wrapper');
	const sections = document.querySelectorAll('.section');
	const race = document.querySelector('.race');

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
		// scale: 1.1,
		opacity: 0,
	});

	ScrollTrigger.batch($fadeEl, {
		start: 'top 80%',
		once: true,
		containerAnimation: horizontalScroll,

		onEnter: (batch) => {
			batch.forEach((item, index) => {
				gsap.to(item, {
					duration: 0.4,
					opacity: 1,
					// scale: 1,

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
};

export default horizontalScroll;
