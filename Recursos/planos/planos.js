
	const lightbox = document.getElementById("lightbox");
	const lightboxImg = document.getElementById("lightbox-img");
	const closeBtn = document.getElementById("closeBtn");
	const galleryImages = document.querySelectorAll(".img-galeria");

galleryImages.forEach(img => {
	img.addEventListener("click", () => {
		lightbox.style.display = "flex";
		lightboxImg.src = img.src;
});
	});

	closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
	});

	// Opcional: cerrar con clic fuera de la imagen
	lightbox.addEventListener("click", (e) => {
	if (e.target === lightbox) {
		lightbox.style.display = "none";
	}
	});
