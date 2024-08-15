import { gsap } from 'gsap';
/* eslint-disable */
const animation = () => {
	const SELECTORS = {
		fadeEl: '.js-fade-start',
		title: '.js-title-start',
		btn: '.js-btn-start',
		arrows: '.js-arrows-start',
		footer: '.js-footer-start',
		clouds: '.js-cloud-img',
	};

	const tlHeader = gsap.timeline({ delay: 0.2 });
	const $fadeEl = document.querySelectorAll(SELECTORS.fadeEl);
	const $arrows = document.querySelectorAll(SELECTORS.arrows);
	const $clouds = document.querySelectorAll(SELECTORS.clouds);
	const $title = document.querySelector(SELECTORS.title);
	const $btn = document.querySelector(SELECTORS.btn);
	const $footer = document.querySelector(SELECTORS.footer);

	tlHeader.from($fadeEl, {
		opacity: 0,
		ease: 'none',
		duration: 0.1,
		stagger: 0.1,
		y: 10,
	});

	tlHeader.from(
		$title,
		{
			scale: 0,
			rotateZ: 130,
			duration: 1.5,
			ease: 'elastic.out(1,0.3)',
		},
		'-=.6',
	);

	tlHeader.from(
		$btn,
		{
			rotateX: -90,
			duration: 1.3,
			ease: 'elastic.out(1,0.3)',
		},
		'-=1',
	);

	tlHeader.from(
		$arrows,
		{
			scale: 0,
			ease: 'elastic.out(1,0.3)',
			duration: 0.4,
			stagger: 0.1,
		},
		'-=1',
	);

	tlHeader.from(
		$footer,
		{
			scale: 0,
			duration: 1.6,
			ease: 'elastic.out(1,0.3)',
		},
		'-=1.2',
	);

	tlHeader.from(
		$clouds,
		{
			scale: 0,
			duration: 1,
			ease: 'elastic.out(1,0.3)',
		},
		'-=1.4',
	);
};

export default animation;
