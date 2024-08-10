document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const services = document.querySelector(".services");
    const serviceItems = document.querySelectorAll(".services .service-item");
  
    // Toggle services
    services.addEventListener("click", function () {
      serviceItems.forEach((item) => {
        item.style.display = item.style.display === "block" ? "none" : "block";
      });
    });
  
    // Toggle nested items
    serviceItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        const nestedItems = item.querySelectorAll(".nested-item");
        nestedItems.forEach((nestedItem) => {
          nestedItem.style.display =
            nestedItem.style.display === "block" ? "none" : "block";
        });
        e.stopPropagation();
      });
    });
  
    // Open the menu for demonstration
    //   menu.classList.add('open');
  });
  
  // click event on side bar ------------>
  let hameburger = document.getElementById("hame-menu-btn");
  let sideBar = document.querySelector(".menu");
  
  let logo = document.querySelector(".logo");
  let isMenuOpen = false;
  
  hameburger.addEventListener("click", () => {
    console.log("clicked");
    if (isMenuOpen) {
      sideBar.style.right = "-300px"; // Hide the menu
    } else {
      sideBar.style.right = "0px"; // Show the menu
    }
    isMenuOpen = !isMenuOpen; // Toggle the state
  });
  
  //  side bar ends here ------------->
  // banner section code start form her =------->
  
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
      duration: 4,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  //  swiper code start here ------------->
  
  // var swiper = new Swiper(".mySwiper", {
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //     autoplay:{
  
  //     },
  
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //   });
  
  // animations of website -------------->
  
  gsap.from("nav", {
    duration: 0.5,
    opacity: 0,
    y: -100,
  });
  
  gsap.from(".service-box", {
    duration: 0.5,
    opacity: 0,
    y: 200,
    stagger:0.4,
    scrollTrigger: ".service-box",
  });
  
  gsap.from(".tool-box", {
    duration: 0.5,
    opacity: 0,
    y: 100,
    // stagger:0.4,
    scrollTrigger: ".tool-box",
  });
  
  gsap.from(".role-right img", {
    duration: 0.5,
    opacity: 0,
    scale:0.7,
    scrollTrigger: ".role-right img",
  });
  
  gsap.from(".aboutus-heading", {
    duration: 0.9,
    opacity: 0,
    y: 100,
    scrollTrigger: ".aboutus-heading",
  });
  
  gsap.from(".we-do", {
    duration: 0.9,
    opacity: 0,
    y: 200,
    scrollTrigger: ".we-do",
  });
  
  gsap.from(".vision ", {
    duration: 0.9,
    opacity: 0,
    y: 80,
   scale:1.2,
    scrollTrigger: ".vision ",
  });
  
  
  gsap.from(".contact-form", {
    duration: 0.9,
    opacity: 0,
    y: 70,
    scrollTrigger: ".contact-form",
  });
  
  
  gsap.from(".contact-info", {
    duration: 0.9,
    opacity: 0,
    y: 50,
    scrollTrigger: ".contact-info",
  });
  
  
  gsap.from(".logos", {
    duration: 0.5,
    opacity: 0.5,
    scale:0.6,
    scrollTrigger: ".logos",
  });
  
  