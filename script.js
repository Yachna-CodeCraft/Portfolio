document.addEventListener("DOMContentLoaded", () => {

    // --- PORTFOLIO TAB FILTERING ---
    const filterButtons = document.querySelectorAll(".tab-item");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const targetValue = button.getAttribute("data-target");

            portfolioItems.forEach(item => {
                if (targetValue === "all" || item.classList.contains(targetValue)) {
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            });
        });
    });

    // --- ACTIVE NAVIGATION ON SCROLL ---
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // ===============================
    // 📩 EMAILJS CONTACT FORM LOGIC
    // ===============================
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            emailjs.sendForm(
                "service_f3k8454",
                "template_6bquxsj",
                this,
                "5oPBdLyzQfdZ_7S5N"
            ).then(() => {
                alert("Message sent successfully!");
                this.reset();
            }).catch((error) => {
                alert("Failed to send message. Try again.");
                console.error(error);
            });
        });
    }

});
