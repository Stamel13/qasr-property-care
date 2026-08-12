document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileLinks = mobileMenu.querySelectorAll("a");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", function () {
            const isOpen = mobileMenu.classList.toggle("open");

            document.body.classList.toggle("menu-open", isOpen);

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        mobileLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                mobileMenu.classList.remove("open");
                document.body.classList.remove("menu-open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open menu");
                menuToggle.textContent = "☰";
            });
        });
    }

});