document.addEventListener("DOMContentLoaded", function () {
    const tocButton = document.getElementById("toc-button");
    const tocContainer = document.getElementById("toc-container");

    if (tocButton && tocContainer) {
        tocButton.addEventListener("click", function () {
            tocContainer.classList.toggle("visible");
        });

        // Hide TOC when clicking outside
        document.addEventListener("click", function (event) {
            if (!tocButton.contains(event.target) && !tocContainer.contains(event.target)) {
                tocContainer.classList.remove("visible");
            }
        });
    }
});

