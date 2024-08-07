document.addEventListener("DOMContentLoaded", function() {
    loadHTML('navbar-container', 'components/navbar.html');
    loadHTML('footer-container', 'components/footer.html');
    loadHTML('announcements-container', 'components/announcements.html');
    loadHTML('home-container', 'components/home.html', initializeSlides);
});

function loadHTML(elementId, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback();
        });
}

function initializeSlides() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");

        if (slideIndex >= slides.length) { slideIndex = 0 }
        if (slideIndex < 0) { slideIndex = slides.length - 1 }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex].style.display = "block";

        slideIndex++;
        if (slideIndex >= slides.length) { slideIndex = 0 }

        setTimeout(showSlides, 3000);
    }
}
