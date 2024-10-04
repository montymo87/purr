import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const fade = () => {
	const SELECTORS = {
		el: '.js-fade-el',
	};

	const $fadeEl = document.querySelectorAll(SELECTORS.el);
	if ($fadeEl.length) {
		gsap.set($fadeEl, {
			opacity: 0,
			y: 30,
		});

		gsap.set('.js-opacity-el', {
			scale: 1.1,
			opacity: 0,
			y: -20,
		});

		ScrollTrigger.batch($fadeEl, {
			start: 'top 90%',
			once: true,
			onEnter: (batch) => {
				batch.forEach((item, index) => {
					gsap.to(item, {
						duration: 0.2,
						opacity: 1,
						y: 0,
						stagger: 0.1,
						ease: 'none',
						onComplete: () => {
							setTimeout(() => {
								gsap.to(item.querySelectorAll('.js-opacity-el'), {
									duration: 0.2,
									opacity: 1,
									scale: 1,
									y: 0,
									stagger: 0.1,
									ease: 'none',
								});
							}, 200);
						},
					});
				});
			},
		});
	}
};

export default fade;
