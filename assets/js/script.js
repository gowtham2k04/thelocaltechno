document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // 🟡 Scroll Effect - Change Navbar Background
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 🔄 Mobile Menu Toggle Animation
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".why-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-card");
            }
        });
    }, { threshold: 0.2 });

    cards.forEach((card) => observer.observe(card));
});

    // Scroll Animation
    const elements = document.querySelectorAll(".content, .image-container");

    function checkScroll() {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();


// Scroll to Contact Button
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listeners to change text color on click
document.querySelector("h1").addEventListener("click", function () {
    this.style.color = getRandomColor();
});

document.querySelector("p").addEventListener("click", function () {
    this.style.color = getRandomColor();
});


document.addEventListener("DOMContentLoaded", () => {
    // Scroll Animation for Button and Content
    const elements = document.querySelectorAll(".content, .image-container, .btn");

    function checkScroll() {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// Smooth Scroll to Contact Section
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}


// Function to Open Sub Cards
function openSubCards(type) {
    document.getElementById("subCards").classList.add("active");
    document.querySelector(".overlay").style.display = "block";

    if (type === "mission") {
        document.getElementById("missionSubCards").classList.add("active");
        document.getElementById("visionSubCards").classList.remove("active");
    } else {
        document.getElementById("visionSubCards").classList.add("active");
        document.getElementById("missionSubCards").classList.remove("active");
    }
}

// Function to Close Sub Cards
function closeSubCards() {
    document.getElementById("subCards").classList.remove("active");
    document.querySelector(".overlay").style.display = "none";
}


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".section-title, .section-description, .why-card");

    function checkScroll() {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const mainCards = document.querySelectorAll(".main-card");
    const subCardsContainer = document.querySelector(".sub-cards-container");
    const overlay = document.querySelector(".overlay");
    let scrollPosition = 0;

    mainCards.forEach(card => {
        card.addEventListener("click", function () {
            scrollPosition = window.scrollY; // Save current scroll position
            document.body.style.overflow = "hidden"; // Disable background scrolling
            subCardsContainer.classList.add("active");
            overlay.style.display = "block";
        });
    });

    overlay.addEventListener("click", function () {
        subCardsContainer.classList.remove("active");
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; // Enable background scrolling
        window.scrollTo({ top: scrollPosition, behavior: "smooth" }); // Scroll back to original position
    });
});


// Function to Flip Cards
function flipCard(card) {
    card.querySelector(".card-inner").classList.toggle("flipped");
}

// Smooth Scrolling Effect
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".section-title, .section-description, .service-card");

    function checkScroll() {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// Navigate to Services Page
function goToServices() {
    window.location.href = "services.html";
}


// Set Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll Animation Effect
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".footer-logo, .footer-links, .footer-contact, .footer-social");

    function checkScroll() {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// Select all cards
const cards = document.querySelectorAll(".why-card");

// Function to generate a random gradient color
function getRandomGradient() {
    const colors = [
        ["#ff00ff", "#00ffff"],
        ["#ff5733", "#33ff57"],
        ["#1e3c72", "#2a5298"],
        ["#ff7eb3", "#ff758c"],
        ["#8A2BE2", "#FF1493"],
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(135deg, ${randomColor[0]}, ${randomColor[1]})`;
}

// Add event listeners to all cards
cards.forEach((card) => {
    card.addEventListener("click", function () {
        // Remove active class from all cards
        cards.forEach((c) => c.classList.remove("active"));
        
        // Add active class to the clicked card
        this.classList.add("active");

        // Change the background color dynamically
        this.style.background = getRandomGradient();
    });
});


// Handle Enter Key Press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".car-hidden, .content-hidden, .btn-hidden, .section-title, .section-description, .why-card, .service-card, .footer-logo, .footer-links, .footer-contact, .footer-social");

    function checkScroll() {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 50) { // Faster trigger
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once to check elements already in view
});
document.querySelector(".home-image").addEventListener("click", function() {
    this.classList.add("clicked");

    setTimeout(() => {
        this.classList.remove("clicked"); // Resets after animation
    }, 800);
});


// 🌐 Toggle Chat Window
function toggleChat() {
    const chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

// 🚀 Send Message Function
function sendMessage() {
    let inputField = document.getElementById("userInput");
    let message = inputField.value.trim();
    if (message === "") return;

    // 📩 Add User Message
    let chatBody = document.getElementById("chatBody");
    let userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = message;
    chatBody.appendChild(userMessage);

    // 🔄 Scroll to Bottom
    chatBody.scrollTop = chatBody.scrollHeight;

    // 🧠 Show Typing Animation Before AI Response
    let botMessage = document.createElement("div");
    botMessage.classList.add("bot-message", "typing-animation");
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;

    // ⏳ Fake AI Response Delay
    setTimeout(() => {
        botMessage.classList.remove("typing-animation");
        botMessage.textContent = getAIResponse(message);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);

    inputField.value = ""; // Clear input
}

// ⌨️ Handle Enter Key Press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// 🤖 Smart AI Chatbot Response Function
function getAIResponse(userMessage) {
    let lowerMessage = userMessage.toLowerCase();

    // 🕒 Time-Based Greetings
    let currentHour = new Date().getHours();
    let greeting = "";
    if (currentHour < 12) {
        greeting = "Good morning! ☀️";
    } else if (currentHour < 18) {
        greeting = "Good afternoon! 😊";
    } else {
        greeting = "Good evening! 🌙";
    }

    // 🎯 Predefined Responses
    let responses = {
        // 👋 Greetings & Farewells
        "hi": `${greeting} Welcome to The Local Techno! How can I assist you today? 😊`,
        "hello": `${greeting} How's your day going? Need any help?`,
        "good morning": "Good morning! How can I help you today? ☀️",
        "good afternoon": "Good afternoon! Need any assistance? 😊",
        "good evening": "Good evening! What brings you here today? 🌙",
        "bye": "Goodbye! Have a fantastic day ahead! 👋",
        "thank you": "You're welcome! Happy to help. 😊",

        // ℹ️ About The Local Techno
        "who are you": "I'm Local Techno AI, your smart assistant! 🚀",
        "what is local techno": "Local Techno is an innovative tech company specializing in AI, web development, and digital solutions. 🌟",
        "about local techno": "The Local Techno is a cutting-edge technology company committed to innovation, AI solutions, web development, and automation. Our goal is to revolutionize the digital landscape with intelligent and creative solutions. 🚀",
        "local techno mission": "Our mission is to empower businesses with AI-driven technology, seamless web experiences, and innovative digital solutions that enhance productivity and growth. 💡",
        "local techno vision": "We envision a future where technology seamlessly integrates with everyday life, making businesses smarter and operations more efficient. 🌍",
        "local techno values": "At The Local Techno, we value **Innovation, Integrity, Customer-Centricity, and Excellence** in everything we do. 🔥",

        // 🛠️ The Local Techno Services
        "services": "We offer a wide range of services:\n1️⃣ AI Chatbot Development 🤖\n2️⃣ Web Development 🌐\n3️⃣ Automation & AI Integration ⚙️\n4️⃣ Digital Marketing 📈\n5️⃣ Custom Software Solutions 💻\n6️⃣ UI/UX Design 🎨\nVisit our Services page for details! 🚀",
        "ai chatbot development": "We build **advanced AI-powered chatbots** that can answer questions, automate responses, and improve customer engagement. 🤖",
        "web development": "Our **web development services** include responsive website design, e-commerce platforms, and interactive UI/UX solutions. 🌐",
        "automation solutions": "We provide **automation services** to streamline workflows, increase efficiency, and enhance business processes. ⚙️",
        "digital marketing": "Our **digital marketing strategies** help businesses grow through SEO, social media management, and paid ads. 📈",
        "ui ux design": "We create **intuitive UI/UX designs** that offer seamless user experiences and boost engagement. 🎨",

        // 📍 Contact & Location
        "contact": "You can contact us at 📧 thelocaltechno@gmail.com or call 📞 (+91)  6384410897.",
        "location": "We are located at Buildings Alyssa, Bengaluru – 560103, India. 📍",
        "how to contact local techno": "You can reach us via email at 📧 thelocaltechno.com or call us at 📞 (+91) . Our team is available for inquiries!",
        "local techno office": "Our office is in **Bengaluru, India**, at Buildings Alyssa, Bengaluru – 560103. Feel free to visit us! 📍",

        // 🔥 Motivation & Fun
        "tell me a joke": "Why do programmers prefer dark mode? Because light attracts bugs! 😂",
        "motivate me": "Success is not final, failure is not fatal: It is the courage to continue that counts. 💪",
        "give me a quote": "The only way to do great work is to love what you do. - Steve Jobs 🌟",
        "fun fact": "Did you know? The first-ever website is still online at **info.cern.ch**! 🌐",

        // 🔄 FAQs
        "how can i create a website": "You can create a website using HTML, CSS, and JavaScript. Need a professional website? The Local Techno can help! 🚀",
        "how do i contact support": "You can contact us via email at thelocaltechno@gmail.com or call us at (+91) 6384410897. 📞",
        "what payment methods do you accept": "We accept PayPal, Credit/Debit cards, and Bank Transfers. 💳",
        "what is your refund policy": "We offer a 14-day refund policy if you're not satisfied with our services. 🛡️",

        // 💼 Local Techno Team
        "who is behind local techno": "The Local Techno is powered by a team of **tech enthusiasts, AI experts, web developers, and creative designers** passionate about innovation! 🚀",
        "who are the founders of local techno": "The Local Techno was founded by **visionary tech experts** with the mission to bring smart technology solutions to businesses. 👨‍💻👩‍💻",
        "team at local techno": "Our team consists of AI specialists, web developers, designers, and digital strategists, all working together to create amazing digital experiences! 💡"
    };

    // 🔍 AI-Powered Smart Response (If No Predefined Answer)
    let defaultResponses = [
        "Hmm, that's interesting! Tell me more. 🤔",
        "I'm not sure about that, but I'm learning every day! 😃",
        "Can you rephrase that? I'd love to understand better! 🧠",
        "That sounds intriguing! Want to explore related topics? 🚀"
    ];

    return responses[lowerMessage] || defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// 🔼 Move Content to Top on Click
document.querySelectorAll(".why-card").forEach((card) => {
    card.addEventListener("click", () => {
        // Remove active class from other cards
        document.querySelectorAll(".why-card").forEach((c) => c.classList.remove("active"));

        // Add active class to clicked card
        card.classList.add("active");

        // Reset after 3 seconds
        setTimeout(() => {
            card.classList.remove("active");
        }, 3000);
    });
});


// 🌀 3D Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".why-card");

    function scrollAnimation() {
        let scrollPosition = window.innerHeight * 0.85;
        cards.forEach((card) => {
            let cardTop = card.getBoundingClientRect().top;
            if (cardTop < scrollPosition) {
                card.classList.add("show-card");
            }
        });
    }

    window.addEventListener("scroll", scrollAnimation);
    scrollAnimation(); // Run on page load
});
