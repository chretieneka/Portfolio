document.addEventListener("DOMContentLoaded", () => {
    const topbar = document.querySelector(".topbar");

    const handleScroll = () => {
        if (window.scrollY > 4) {
            topbar.style.borderBottomColor = "rgba(0, 0, 0, 0.12)";
        } else {
            topbar.style.borderBottomColor = "var(--line)";
        }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
});
