const clockTitle = document.querySelector(".js-clock");

function getClock() {
    const date = new Date();
    const chistmas = new Date("2024-12-25 00:00:00+0900");
    const dateDif = chistmas - date;
    const seconds = Math.floor((dateDif / 1000) % 60);
    const minutes = Math.floor((dateDif / (1000 * 60)) % 60);
    const hours = Math.floor((dateDif / (1000 * 60 * 60)) % 24);
    const days = Math.floor(dateDif / (1000 * 60 * 60 * 24));
    clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
