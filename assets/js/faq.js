document.addEventListener("DOMContentLoaded", function () {
    // FAQ Scroll Animation
    const faqItems = document.querySelectorAll(".faq-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-item");
            }
        });
    }, { threshold: 0.2 });

    faqItems.forEach((item) => observer.observe(item));

    // 3D Tilt Effect on Hover
    faqItems.forEach((item) => {
        item.addEventListener("mousemove", (e) => {
            let x = (e.offsetX / item.offsetWidth - 0.5) * 20;
            let y = (e.offsetY / item.offsetHeight - 0.5) * 20;
            gsap.to(item, { rotationY: x, rotationX: -y, duration: 0.3 });
        });

        item.addEventListener("mouseleave", () => {
            gsap.to(item, { rotationY: 0, rotationX: 0, duration: 0.3 });
        });

        // Expand FAQ on Click
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
});
function goToContact() {
    window.location.href = "../index.html#contact"; // Navigate to Contact Section in index.html
}
