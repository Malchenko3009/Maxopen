document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile_line");
  const navMenu = document.querySelector(".info_menu");
  const headerLine = document.querySelector(".header_line");
  const circle = document.querySelector(".circle_mobile");

  mobileMenu.addEventListener("click", function () {
    const spans = mobileMenu.querySelectorAll("span");

    spans.forEach(function (span) {
      span.classList.toggle("active");
    });

    navMenu.classList.toggle("active");

    headerLine.classList.toggle("active");

    circle.classList.toggle("active");
  });

  const infoMenuItems = document.querySelectorAll(".info_menu-list");

  infoMenuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      const dropdownMenu = menuItem.querySelector(".dropdown_menu");

      if (menuItem.classList.contains("active")) {
        menuItem.classList.remove("active");

        if (dropdownMenu) {
          dropdownMenu.classList.remove("active");
        }
      } else {
        infoMenuItems.forEach(function (item) {
          item.classList.remove("active");
          const dropdown = item.querySelector(".dropdown_menu");
          if (dropdown) {
            dropdown.classList.remove("active");
          }
        });

        menuItem.classList.add("active");

        if (dropdownMenu) {
          dropdownMenu.classList.add("active");
        }
      }
    });
  });
});
