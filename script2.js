
const menubtn = document.getElementById("xyz");
const navlinks = document.getElementById("abc");

menubtn.addEventListener("click", () => {
    navlinks.classList.toggle("active");
});

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
});

btn.addEventListener("dblclick", () => {
    
    btn.style.transition = "0.5s";
    btn.style.transform = "scale(2)";
});

