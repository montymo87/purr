import { gsap } from 'gsap';
/* eslint-disable */
const animation = () => {
	const SELECTORS = {
		wrapperImg: '.js-cloud-img-w',
		img: '.js-cloud-img',
	};

	const wrapperImgs = document.querySelectorAll(SELECTORS.wrapperImg);

	wrapperImgs.forEach((wrapperImg) => {
		const img = wrapperImg.querySelector(SELECTORS.img);

		const updatePosition = (e) => {
			const wrapperBounds = wrapperImg.getBoundingClientRect();
			const imgBounds = img.getBoundingClientRect();

			// Получаем центр враппера
			const wrapperCenterX = wrapperBounds.left + wrapperBounds.width / 2;
			const wrapperCenterY = wrapperBounds.top + wrapperBounds.height / 2;

			// Вычисляем угол поворота на основе положения курсора относительно центра враппера
			const rotationX = ((e.clientY - wrapperCenterY) / (wrapperBounds.height / 2)) * 2; // Поворот по оси X
			const rotationY = ((e.clientX - wrapperCenterX) / (wrapperBounds.width / 2)) * -1; // Поворот по оси Y

			// Ограничение позиции изображения в пределах враппера
			const posX = Math.min(
				Math.max(e.clientX - wrapperBounds.left - img.offsetWidth / 2, 0),
				wrapperBounds.width - img.offsetWidth,
			);
			const posY = Math.min(
				Math.max(e.clientY - wrapperBounds.top - img.offsetHeight / 2, 0),
				wrapperBounds.height - img.offsetHeight,
			);

			gsap.to(img, {
				x: posX,
				y: posY,
				rotationX: rotationX,
				rotationY: rotationY,
				duration: 0.3,
				ease: 'power2.out',
				transformPerspective: 500, // добавляет глубину эффекта
			});
		};

		document.addEventListener('mousemove', updatePosition);
	});
};

export default animation;
