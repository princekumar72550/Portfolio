// JavaScript for the portfolio website

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Certificate filtering functionality
    const certificateFilterBtns = document.querySelectorAll('#certificates .filter-btn');
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    // Add click event to certificate filter buttons
    certificateFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            certificateFilterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter certificates
            certificateCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Project filtering functionality
    const projectFilterBtns = document.querySelectorAll('.project-filter .filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add click event to project filter buttons
    projectFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            projectFilterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
            
            // Update active class when clicking on navigation links
            document.querySelectorAll('nav ul li a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    }
    
    // Set active navigation item based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav ul li a').forEach(navLink => {
                    navLink.classList.remove('active');
                    if (navLink.getAttribute('href') === '#' + sectionId) {
                        navLink.classList.add('active');
                    }
                });
            }
        });
    });

    // Lightbox functionality for certificate images
    const lightbox = document.getElementById('certificateLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const certificateImages = document.querySelectorAll('.certificate-card img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    const imagesArray = Array.from(certificateImages);
    
    // Open lightbox when clicking on a certificate image
    certificateImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            currentImageIndex = index;
        });
    });
    
    // Close lightbox when clicking on close button
    closeBtn.addEventListener('click', function() {
        console.log('Close button event triggered');
        lightbox.style.display = 'none';
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    
    // Navigate to previous image
    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
        lightboxImg.src = imagesArray[currentImageIndex].src;
    });
    
    // Navigate to next image
    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
        lightboxImg.src = imagesArray[currentImageIndex].src;
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                lightbox.style.display = 'none';
            } else if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    });
});

// Mobile menu toggle functionality can be added here if needed
