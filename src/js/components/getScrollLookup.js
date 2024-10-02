/* eslint-disable */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const getScrollLookup = (targets, { start, pinnedContainer, containerAnimation }) => {
	targets = gsap.utils.toArray(targets);
	let initted,
		triggers = targets.map((el, i) =>
			ScrollTrigger.create({
				trigger: el,
				start: start || 'top top',
				pinnedContainer: pinnedContainer,
				refreshPriority: -10,
				onRefresh(self) {
					if (initted && Math.abs(self.start) > 999999) {
						triggers[i].kill();
						triggers[i] = ScrollTrigger.create({
							trigger: el,
							start: start || 'start start',
							pinnedContainer: pinnedContainer,
							refreshPriority: -10,
						});
					}
				},
				containerAnimation: containerAnimation,
			}),
		),
		st = containerAnimation && containerAnimation.scrollTrigger,
		lookups = [],
		lookup = (target) => {
			let t = gsap.utils.toArray(target)[0],
				i = targets.indexOf(t);
			if (i < 0) {
				for (i = 0; i < lookups.length; i++) {
					if (lookups[i].targets.indexOf(t) !== -1) {
						return lookups[i](t);
					}
				}
				return console.warn('target not found', target);
			}
			return triggers[i].vars.containerAnimation
				? st.start + (triggers[i].start / containerAnimation.duration()) * (st.end - st.start)
				: triggers[i].start;
		};
	lookup.targets = targets;
	lookup.add = (targets, config) => {
		lookups.push(getScrollLookup(targets, config));
		return lookup;
	};
	initted = true;
	return lookup;
};
