
//animation on scroll

AOS.init({ 
    duration: 1500, 
   
     once: false, });
     // Function to add fade-out class on scroll 
     window.addEventListener('scroll', function () { l
        let elements = document.querySelectorAll('[data-aos]'); 
        elements.forEach(function (element) { 
            if (!isInViewport(element)) { 
                element.classList.remove('aos-animate'); 
            } 
        }); 
    }); 
    // Helper function to check if element is in viewport 
    function isInViewport(element) { 
        const rect = element.getBoundingClientRect(); 
        return ( 
            rect.top >= 0 && 
            rect.left >= 0 && 
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
        ); 
    };