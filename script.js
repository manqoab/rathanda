// 1. Handle the Live Button Click
// The Live button now securely opens the Facebook link in a new tab via the HTML href attribute.
// We no longer need JavaScript to intercept the click!

// 2. Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Play Video on Hover
document.querySelectorAll('.hover-play').forEach(video => {
    video.addEventListener('mouseenter', function() {
        this.play();
    });
    video.addEventListener('mouseleave', function() {
        this.pause();
    });
});

// 4. Image Gallery Carousel Logic
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const galleryItems = document.querySelectorAll('.gallery-img');
let currentIndex = 0;
const itemsToShow = 4; // Number of items visible at a time

function updateGallery() {
    galleryItems.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + itemsToShow) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Visually disable buttons when they reach the ends
    prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
    
    nextBtn.style.opacity = currentIndex >= galleryItems.length - itemsToShow ? '0.5' : '1';
    nextBtn.style.pointerEvents = currentIndex >= galleryItems.length - itemsToShow ? 'none' : 'auto';
}

if (prevBtn && nextBtn) {
    updateGallery(); // Set initial state of the gallery

    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    });

    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex < galleryItems.length - itemsToShow) {
            currentIndex++;
            updateGallery();
        }
    });
}

// 5. Youth Media Gallery Carousel Logic (Images & Videos)
const prevYouthBtn = document.getElementById('prevYouthBtn');
const nextYouthBtn = document.getElementById('nextYouthBtn');
const youthMedia = document.querySelectorAll('.youth-media');
let currentYouthIndex = 0;
const youthToShow = 4; // Number of items visible at a time

function updateYouthGallery() {
    youthMedia.forEach((media, index) => {
        if (index >= currentYouthIndex && index < currentYouthIndex + youthToShow) {
            media.style.display = 'block';
        } else {
            media.style.display = 'none';
        }
    });
    
    prevYouthBtn.style.opacity = currentYouthIndex === 0 ? '0.5' : '1';
    prevYouthBtn.style.pointerEvents = currentYouthIndex === 0 ? 'none' : 'auto';
    
    nextYouthBtn.style.opacity = currentYouthIndex >= youthMedia.length - youthToShow ? '0.5' : '1';
    nextYouthBtn.style.pointerEvents = currentYouthIndex >= youthMedia.length - youthToShow ? 'none' : 'auto';
}

if (prevYouthBtn && nextYouthBtn) {
    updateYouthGallery(); // Set initial state of the gallery

    prevYouthBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentYouthIndex > 0) {
            currentYouthIndex--;
            updateYouthGallery();
        }
    });

    nextYouthBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentYouthIndex < youthMedia.length - youthToShow) {
            currentYouthIndex++;
            updateYouthGallery();
        }
    });
}

// 6. Lightbox Feature for Full Screen Pictures
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

// Select all images from the gallery and youth sections
const clickableImages = document.querySelectorAll('.gallery-img, img.youth-media');

clickableImages.forEach(img => {
    img.style.cursor = 'pointer'; // Make it look clickable (pointer finger)
    img.addEventListener('click', function() {
        lightboxImg.src = this.src; // Apply the clicked image source to the lightbox
        lightbox.style.display = 'flex'; // Show the lightbox
    });
});

// Close the lightbox if the "X" or the dark background is clicked
if (lightbox && lightboxClose) {
    lightboxClose.addEventListener('click', () => lightbox.style.display = 'none');
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none'; // Only close if clicking outside the image
        }
    });
}