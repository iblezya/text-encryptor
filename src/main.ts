const myTextArea =
  document.querySelector<HTMLInputElement>(".input__text-area");

myTextArea?.addEventListener("keyup", (e) => {
  let scrHeight = (e.target as HTMLInputElement).scrollHeight;
  myTextArea.style.height = `${scrHeight}px`;
});

myTextArea?.addEventListener("click", (e) => {
  let count = (e.target as HTMLInputElement).value.length;
  if (count < 30) {
    myTextArea.style.height = `250px`;
  }
});

console.log("Test");

export {};
