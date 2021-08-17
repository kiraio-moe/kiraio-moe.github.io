(function () {
    "use strict";
    // offcanvas-navbar
    document
        .querySelector('[data-bs-toggle="offcanvas"]')
        .addEventListener("click", function () {
            document
                .querySelector(".offcanvas-collapse")
                .classList.toggle("open");
        });
})();
