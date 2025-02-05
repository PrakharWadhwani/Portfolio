// Function to add fade-in and fade-out animation based on scroll position
document.addEventListener("scroll", function () {
    const resume = document.querySelector(".resume");
    if (resume) {
        const rect = resume.getBoundingClientRect();
        
        // Fade-in when the resume section comes into view
        if (rect.top < window.innerHeight - 100) {
            resume.classList.add("show");
            resume.classList.remove("hide");
        }
        
        // Fade-out when the resume section goes out of view
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
            resume.classList.add("hide");
            resume.classList.remove("show");
        }
    }
});
