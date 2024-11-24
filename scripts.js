// Typing Effect for Header
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('.typing-effect');
    const text = textElement.textContent;
    let index = 0;

    textElement.textContent = '';
    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);  // Adjust typing speed here
        }
    }
    typeText();
});

// Parallax Effect on Scroll
window.addEventListener("scroll", function () {
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(section => {
        let scrollPosition = window.scrollY;
        section.style.backgroundPosition = center ${scrollPosition * 0.5}px;  // Adjust speed of parallax effect
    });
});