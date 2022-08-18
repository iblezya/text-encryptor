import { encriptador } from './encriptador';
import { desencriptador } from './desencriptador';

const outputText = document.querySelector<HTMLInputElement>('.output__card--encr-text');
const inputText = document.querySelector<HTMLInputElement>('.input__text-area');
const btnEncr = document.querySelector<HTMLButtonElement>('.input__button--encr');
const btnDesencr = document.querySelector<HTMLButtonElement>('.input__button--desencr');
const cardImage = document.querySelector<HTMLImageElement>('.output__card--image');
const cardTitle = document.querySelector<HTMLParagraphElement>('.output__card--title');
const cardMsg = document.querySelector<HTMLParagraphElement>('.output__card--msg');
const btnCopy = document.querySelector<HTMLButtonElement>('.output__card--btn-copy');
const modalAlert = document.querySelector<HTMLDivElement>('.modal__wrapper');
const btnModalOk = document.querySelector<HTMLButtonElement>('.modal__card--footer-btnOk');

inputText?.addEventListener('keyup', e => {
	let scrHeight = (e.target as HTMLInputElement).scrollHeight;
	inputText.style.height = `${scrHeight}px`;
});

inputText?.addEventListener('click', e => {
	let count = (e.target as HTMLInputElement).value.length;
	if (count < 30 && window.innerWidth < 768) {
		inputText.style.height = `250px`;
	} else if (count < 50 && window.innerWidth < 1440) {
		inputText.style.height = `500px`;
	} else {
		inputText.style.height = `570px`;
	}
});

btnModalOk?.addEventListener('click', () => {
	modalAlert?.classList.remove('active');
	inputText!.value = '';
});

btnCopy?.addEventListener('click', () => {
	outputText?.focus();
	outputText?.select();
	document.execCommand('copy');
	inputText!.value = '';
});

btnEncr?.addEventListener('click', () => {
	let textoEscrito: string = inputText?.value!;
	const patron = new RegExp('^[a-z\u00F1\\s]+$');
	// V a l i d a c i o n
	if (patron.test(textoEscrito)) {
		// console.log(textoEscrito);
		viewOutputText();
		let msgEncrC = encriptador(textoEscrito!).join('');
		outputText!.value = msgEncrC;
		inputText!.value = '';
	} else {
		modalAlert?.classList.toggle('active');
	}
});

btnDesencr?.addEventListener('click', () => {
	let textoEscrito: string = inputText?.value!;
	const patron = new RegExp('^[a-z\u00F1\\s]+$');

	// V a l i d a c i o n
	if (patron.test(textoEscrito)) {
		// console.log(desencriptador(textoEscrito));
		viewOutputText();
		let msgDesencr = desencriptador(textoEscrito!);
		outputText!.value = msgDesencr;
		inputText!.value = '';
	} else {
		modalAlert?.classList.toggle('active');
	}
});

const viewOutputText = () => {
	cardImage!.style.display = 'none';
	cardTitle!.style.display = 'none';
	cardMsg!.style.display = 'none';
	outputText!.style.display = 'block';
	btnCopy!.style.display = 'block';
};

export {};
