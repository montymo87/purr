import { exist } from '../utils';

const copy = () => {
	const SELECTORS = {
		wrapper: '.js-text-copy-w',
		btn: '.js-text-copy-btn',
		text: '.js-text-copy-text',
	};

	const CLASSNAMES = {};

	const $wrapper = document.querySelector(SELECTORS.wrapper);

	if (!exist($wrapper)) return;

	const $btns = document.querySelectorAll(SELECTORS.btn);
	const $text = document.querySelector(SELECTORS.text);

	$btns.forEach((item) => {
		item.addEventListener('click', () => {
			const content = $text.textContent;

			const tempElement = document.createElement('textarea');
			tempElement.value = content;
			document.body.appendChild(tempElement);
			tempElement.select();
			document.execCommand('copy');
			document.body.removeChild(tempElement);
		});
	});
};

export default copy;
