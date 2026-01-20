document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.muted = true;
    });
    
    const carousels = document.querySelectorAll(".carousel-container");

    carousels.forEach(carousel => {
        let slideIndex = 0;
        const slides = carousel.querySelectorAll(".carousel-slide, .carousel-slide-image");
        const prevButton = carousel.querySelector(".carousel-control-left");
        const nextButton = carousel.querySelector(".carousel-control-right");

        function showSlides(n) {
            slideIndex = (n + slides.length) % slides.length;

            slides.forEach((slide, index) => {
                slide.style.display = "none";
                slide.classList.remove("active");
                let video = slide.querySelector("video");
                if (video) {
                    video.pause();
                }
            });

            if (slides.length > 0) {
                slides[slideIndex].style.display = "block";
                slides[slideIndex].classList.add("active");
            }
        }

        if (prevButton && nextButton) {
            prevButton.addEventListener("click", () => {
                showSlides(slideIndex - 1);
            });

            nextButton.addEventListener("click", () => {
                showSlides(slideIndex + 1);
            });
        }

        if(slides.length > 0){
            showSlides(slideIndex);
        }
    });

    // Image Modal Logic
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const images = document.querySelectorAll(".detail-media img");
    const closeModal = document.querySelector(".close-image-modal");

    images.forEach(img => {
        img.onclick = function(){
            modal.style.display = "flex";
            modalImg.src = this.src;
        }
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});