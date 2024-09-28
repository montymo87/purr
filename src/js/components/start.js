import { gsap } from 'gsap';
/* eslint-disable */
const animation = () => {
	const SELECTORS = {
		fadeEl: '.js-fade-start',
		title: '.js-title-start',
		btn: '.js-btn-start',
		arrows: '.js-arrows-start',
		footer: '.js-footer-start',
		clouds: '.js-start-cloud-img',
		tail: '.js-tail-start',
		ears: '.js-ears-start',
	};

	const tlHeader = gsap.timeline({ delay: 0.2 });
	const $fadeEl = document.querySelectorAll(SELECTORS.fadeEl);
	const $arrows = document.querySelectorAll(SELECTORS.arrows);
	const $clouds = document.querySelectorAll(SELECTORS.clouds);
	const $title = document.querySelector(SELECTORS.title);
	const $btn = document.querySelector(SELECTORS.btn);
	const $footer = document.querySelector(SELECTORS.footer);
	const $tail = document.querySelector(SELECTORS.tail);
	const $ears = document.querySelector(SELECTORS.ears);

	tlHeader.from($fadeEl, {
		opacity: 0,
		ease: 'none',
		duration: 0.2,
		stagger: 0.1,
		y: 10,
	});

	tlHeader.from(
		$title,
		{
			// scale: 0,
			// rotateZ: 130,
			opacity: 0,
			y: 30,
			duration: 1,
			ease: 'power1.out',
		},
		'-=.6',
	);

	tlHeader.from(
		$btn,
		{
			y: 30,
			opacity: 0,
			duration: 1,
			ease: 'power1.out',
		},
		'-=1',
	);

	tlHeader.from(
		$arrows,
		{
			scale: 0,
			ease: 'power1.out',
			duration: 0.2,
			stagger: 0.1,
		},
		'-=1',
	);

	tlHeader.from(
		$footer,
		{
			y: 300,
			duration: 0.8,
			ease: 'power1.out',
		},
		'-=1.2',
	);

	tlHeader.from(
		$clouds,
		{
			y: 300,
			x: 300,
			duration: 1,
			ease: 'power1.out',
		},
		'-=1.4',
	);
	tlHeader.from(
		$tail,
		{
			x: -150,
			duration: 1,
			ease: 'power1.out',
		},
		'-=.4',
	);
	tlHeader.from(
		$ears,
		{
			y: 50,
			duration: 1,
			ease: 'power1.out',
		},
		'-=.4',
	);
};

export default animation;
