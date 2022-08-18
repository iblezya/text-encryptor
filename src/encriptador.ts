export const encriptador = (msg: string): string[] => {
	let mensajeEncriptadoArray: string[] = [];
	const mensajeArray: string[] = msg.split('');
	// console.log(msgArray);
	// return msg;

	for (let index = 0; index < mensajeArray.length; index++) {
		let letra: string;
		switch (mensajeArray[index]) {
			case 'a':
				letra = 'ai';
				break;
			case 'e':
				letra = 'enter';
				break;
			case 'i':
				letra = 'imes';
				break;
			case 'o':
				letra = 'ober';
				break;
			case 'u':
				letra = 'ufat';
				break;
			default:
				letra = mensajeArray[index];
				break;
		}
		mensajeEncriptadoArray.push(letra);
	}
	// console.log(mensajeEncriptadoArray);
	return mensajeEncriptadoArray;
};

export {};
