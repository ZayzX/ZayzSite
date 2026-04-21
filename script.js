let sound = document.getElementById("sound");
let splash = document.querySelector(".splash");
let main = document.querySelector(".main");

splash.addEventListener("click", () => {
    splash.style.display = "none";
    main.style.display = "block";
    sound.play().then(() => {
        sound.pause();
        sound.currentTime = 0;
    });
});

document.addEventListener("click", () => {
    sound.play().then(() => {
        sound.pause();
        sound.currentTime = 0;
    });
}, { once: true });

document.querySelectorAll(".HoverSound").forEach(el => {
    el.addEventListener("mouseenter", () => {
        sound.currentTime = 0;
        sound.play();
    });
});