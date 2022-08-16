const myTextArea =
  document.querySelector<HTMLInputElement>(".input__text-area");

myTextArea?.addEventListener("keyup", (e) => {
  let scrHeight = (e.target as HTMLInputElement).scrollHeight;
  myTextArea.style.height = `${scrHeight}px`;
});

myTextArea?.addEventListener("click", (e) => {
  let count = (e.target as HTMLInputElement).value.length;
  if (count < 30 && window.innerWidth < 768) {
    myTextArea.style.height = `250px`;
  } else if (count < 50 && window.innerHeight < 1440) {
    myTextArea.style.height = `550px`;
  }
});

console.log("Test");

export {};
