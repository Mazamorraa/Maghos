
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// Selecciona el modal y sus elementos
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");

// Selecciona todas las imágenes de los hero-items
const heroItems = document.querySelectorAll(".hero-item img");

// Agrega un evento de clic a cada imagen
heroItems.forEach((img) => {
    img.addEventListener("click", () => {
        modal.classList.add("show"); // Muestra el modal con la clase 'show'
        modalImage.src = img.src; // Establece la imagen en el modal
    });
});

// Cierra el modal al hacer clic fuera de la imagen
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show"); // Oculta el modal quitando la clase 'show'
    }
});

const drawer = document.getElementById("drawer");
const openDrawerBtn = document.getElementById("openDrawerBtn");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");

openDrawerBtn.onclick = function () {
    drawer.style.width = "250px";
}
closeDrawerBtn.onclick = function () {
    drawer.style.width = "0";
}
// Cierra el drawer si se hace clic fuera de él
window.onclick = function (event) {
    if (event.target === drawer) {
        drawer.style.width = "0";
    }
}