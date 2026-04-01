
document.addEventListener('DOMContentLoaded', function () {
	// Navbar scroll effect
	const navbar = document.querySelector(".navbar");

	window.addEventListener('scroll', function () {
		if (window.scrollY > navbar.offsetHeight) {
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}
	});

	// Carga diferida de vídeos del carrusel para optimizar el rendimiento inicial
	window.addEventListener('load', function () {
		setTimeout(function () {
			const carouselVideos = document.querySelectorAll('#portfolioCarousel video');
			carouselVideos.forEach(video => {
				if (video.getAttribute('preload') === 'none') {
					video.setAttribute('preload', 'metadata');
				}
			});
		}, 2000); // 2 segundos de cortesía tras cargar la web
	});
});


