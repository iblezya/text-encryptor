export const desencriptador = (msg: string): string => {
	let textoDescr: string = msg
		.replaceAll('ai', 'a')
		.replaceAll('enter', 'e')
		.replaceAll('imes', 'i')
		.replaceAll('ober', 'o')
		.replaceAll('ufat', 'u');

	return textoDescr;
};

export {};
