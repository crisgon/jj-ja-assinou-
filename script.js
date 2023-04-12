window.addEventListener("load", () => {
  const signed = false;
  const ANSWER = signed ? "SIM!!!" : "NÃO!!! ";
  document.querySelector(".answer").innerHTML = `${ANSWER} <img src="${
    signed ? "selecao.gif" : "/desespero.jpg"
  }" />`;

  if (signed) {
    document.querySelector(".timer-container").innerHTML =
      '<img src="/jj.webp" width="700" />';
  }
});

const countDownDate = new Date("Jul 17, 2020 00:00:00").getTime();
const x = setInterval(() => {
  let now = new Date().getTime();
  let distance = now - countDownDate;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let thousandths = ((distance % (1000 * 60)) / 1000 - seconds)
    .toFixed(2)
    .replace(/[^\d]+/g, "")
    .replace(0, "");

  document.querySelector(
    ".timer"
  ).innerHTML = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos e ${thousandths} milesimos`;
}, 1);
