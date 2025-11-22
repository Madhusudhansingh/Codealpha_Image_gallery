let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightboxImg");
let closeBtn = document.getElementById("close");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let currentIndex = 0;

// OPEN LIGHTBOX
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// CLOSE LIGHTBOX
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// NEXT BUTTON
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// PREVIOUS BUTTON
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

/* CATEGORY FILTERING */
let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        let filter = button.getAttribute("data-filter");

        images.forEach(img => {
            img.style.display = (filter === "all" || img.classList.contains(filter))
                ? "block"
                : "none";
        });
    });
});

