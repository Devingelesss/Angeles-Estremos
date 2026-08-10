```javascript
/* =========================================
   MOBILE NAVIGATION
========================================= */

const menu = document.querySelector(".menu");
const links = document.querySelector(".nav-links");


if (menu) {

    menu.addEventListener("click", () => {

        links.classList.toggle("open");

    });

}


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            if (links) {

                links.classList.remove("open");

            }

        });

    });


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const page =
    location.pathname
        .split("/")
        .pop() || "index.html";


document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

        const href =
            link.getAttribute("href");


        if (
            href === page ||
            (
                page === "" &&
                href === "index.html"
            )
        ) {

            link.classList.add("active");

        }

    });


/* =========================================
   CURRENT YEAR
========================================= */

document
    .querySelectorAll(".year")
    .forEach((element) => {

        element.textContent =
            new Date().getFullYear();

    });
```
