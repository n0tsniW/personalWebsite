    // kapag pinindut yung app iikot yung card tapos may text na kung ano na yung expertise example "intermidiate" "beginner" "advanced" "expert"
    document.addEventListener("DOMContentLoaded", function() {
        const texts = [
            "I'm an Information Technology Student.",
            "Welcome to my personal website!",
            "Feel free to explore!"
        ];
        const typingTextElement = document.getElementById("typing-text");
        let textIndex = 0;
        let charIndex = 0;
    
        function typeWriter() {
            if (charIndex < texts[textIndex].length) {
                typingTextElement.innerHTML += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            } else {
                // Pause before starting the next sentence
                setTimeout(() => {
                    charIndex = 0;
                    textIndex = (textIndex + 1) % texts.length; // Cycle through texts
                    typingTextElement.innerHTML = ""; // Clear text for the next sentence
                    typeWriter(); // Start typing next sentence
                }, 5000); // Pause duration between sentences
            }
        }
    
        setTimeout(typeWriter, 1500);
    });
    const fadeElements = document.querySelectorAll(".fade");

    const handleScrollFade = () => {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if element is in the viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                element.classList.add("visible");
            } else {
                element.classList.remove("visible"); // For fade-out effect
            }
        });
    };

    // Trigger on page load and scroll
    document.addEventListener("DOMContentLoaded", handleScrollFade);
    window.addEventListener("scroll", handleScrollFade);

    function toggleNavbar() {
        const navbar = document.getElementById("navbar");
        navbar.classList.toggle("open"); 
    }