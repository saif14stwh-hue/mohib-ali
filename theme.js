const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isDarkGrayTheme = document.body.classList.toggle("dark-gray-theme");

        document.documentElement.classList.toggle("dark-gray-theme", isDarkGrayTheme);
        themeToggle.setAttribute("aria-pressed", String(isDarkGrayTheme));
        themeToggle.setAttribute(
            "aria-label",
            isDarkGrayTheme ? "Switch to black theme" : "Switch to dark gray theme"
        );
    });
}
