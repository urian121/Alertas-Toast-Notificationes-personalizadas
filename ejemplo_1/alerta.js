const button = document.querySelector("button"),
toast        = document.querySelector(".toast");
closeIcon    = document.querySelector(".close"),
progress     = document.querySelector(".progress");

let timer1, timer2;

button.addEventListener("click", () => {
    console.log('click 1')
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
    console.log('click para cerrar la alerta ya sea manual o automaticamente.')
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});