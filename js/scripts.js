
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

		if (window.innerWidth < 768) {
		    const touchControls = document.getElementById('touch-controls');
		    const gameContainer = document.getElementById('game-container');
		
		    const gameObserver = new IntersectionObserver((entries) => {
		        entries.forEach(entry => {
		            touchControls.style.display = entry.isIntersecting ? 'flex' : 'none';
		        });
		    }, { threshold: 0.1 });
		
		    gameObserver.observe(gameContainer);
		}
		
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

		// Autoplay y control de vídeos en el carrusel 
		const carousel = document.getElementById('portfolioCarousel');
		const videos = carousel.querySelectorAll('video');

		// 1. Pausar todos los vídeos al empezar a cambiar la tarjeta
		carousel.addEventListener('slide.bs.carousel', function () {
			videos.forEach(v => v.pause());
		});

		// 2. Reproducir el vídeo de la tarjeta actual al terminar la animación
		carousel.addEventListener('slid.bs.carousel', function (e) {
			const activeVideo = e.relatedTarget.querySelector('video');
			if (activeVideo) activeVideo.play().catch(() => { });
		});

		// 3. Reproducir automáticamente al hacer scroll hasta esta zona
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const activeVideo = carousel.querySelector('.carousel-item.active video');
					if (activeVideo) activeVideo.play().catch(() => { });
				} else {
					videos.forEach(v => v.pause());
				}
			});
		}, { threshold: 0.5 }); // Mínimo de visibilidad del 50%
		
		observer.observe(carousel);
	});

