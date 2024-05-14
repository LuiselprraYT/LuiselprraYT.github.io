const navBar = document.querySelector('nav');
const menu = document.getElementById('menu');
const btn = document.getElementById('barrel');
const main = document.getElementById('main');
var x = window.matchMedia("(max-width: 1000px)");

document.addEventListener("scroll", checkWinSize);

btn.addEventListener("click", () => {
    main.classList.add("anim-roll");
    setTimeout(() => {
	main.classList.remove("anim-roll");
    }, 2500);
})

function mediaQuery(x) {
    if (x.matches) {
	document.removeEventListener("scroll", checkWinSize);
	menu.classList.remove('show');
    } else {
	document.addEventListener("scroll", checkWinSize);
    }
}

function checkWinSize() {
    const rect = navBar.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
	menu.classList.remove('show');
    } else {
	menu.classList.add('show');
    }
}

mediaQuery(x);
x.addEventListener("change", () => { mediaQuery(x) });
