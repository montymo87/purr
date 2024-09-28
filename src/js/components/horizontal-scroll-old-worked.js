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
		duration: 1,
		ease: 'none',
		scrollTrigger: {
			trigger: '.race-wrapper',
			start: 'top top',
			end: () => `+=${getScrollAmount() * -1}`,
			pin: true,
			scrub: 3,
			// markers: true,
			invalidateOnRefresh: true,
		},
	});

	const fadeElements = document.querySelectorAll('.js-fade-el');
	const tl = gsap.timeline();

	fadeElements.forEach((el, index) => {
		gsap.from(el, {
			// y: 50,
			opacity: 0,
			duration: 1,
			scale: 1.3,
			ease: 'power1.out',

			scrollTrigger: {
				once: true,
				trigger: el,
				containerAnimation: horizontalScroll,
				start: 'left 90%',
				toggleActions: 'play none none reset',
				id: `fade-${index}`,
			},
		});
		gsap.from(el.querySelector('.js-opacity-el'), {
			opacity: 0,
			duration: 0.5,
			ease: 'power1.out',
		});
	});
};

export default horizontalScroll;
