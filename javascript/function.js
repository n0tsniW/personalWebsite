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
                
                setTimeout(() => {
                    charIndex = 0;
                    textIndex = (textIndex + 1) % texts.length; 
                    typingTextElement.innerHTML = ""; 
                    typeWriter(); 
                }, 3500); 
            }
        }
    
        setTimeout(typeWriter, 1500);
    });
    const fadeElements = document.querySelectorAll(".fade");

    const handleScrollFade = () => {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                element.classList.add("visible");
            } else {
                element.classList.remove("visible"); 
            }
        });
    };

    document.addEventListener("DOMContentLoaded", handleScrollFade);
    window.addEventListener("scroll", handleScrollFade);

    function toggleNavbar() {
        const navbar = document.getElementById("navbar");
        navbar.classList.toggle("open"); 
    }

    function sendMessage(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the required fields!");
            return;
        }

        alert("Message sent! Thank you for your feedback!");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }