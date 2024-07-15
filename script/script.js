

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("right-cl");
  const sideMenu = document.getElementById("side-menu");
  const closeButton = document.getElementById("close");
  const sideShadow = document.getElementById("side-shadow");
  const menuLinks = document.getElementById("ul-list");

  const openMenu = () => {
      sideMenu.style.top = "0";
      sideShadow.style.display = "block";
  };

  const closeMenu = () => {
      sideMenu.style.top = "-400px";
      sideShadow.style.display = "none";
  };

  toggleButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
  sideShadow.addEventListener("click", closeMenu);
  menuLinks.addEventListener("click", closeMenu);
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Intro text animations
  gsap.from(".intro span", { duration: 1, x: 150, opacity: 0, delay: 0.4 });
  gsap.from(".intro h1", { duration: 1, x: 220, opacity: 0, delay: 1, skewX: -30 });
  gsap.from(".intro p", { duration: 1, x: 150, opacity: 0, delay: 0.4 });
  gsap.from(".intro-button", { duration: 1, x: 150, opacity: 0, delay: 0.4 });

  // Intro image animation with ScrollTrigger
  let introimg = gsap.timeline({
      scrollTrigger: {
          trigger: "#intro-img",
          start: "top 70%",
          end: "top 10%",
          scurb: true,
          toggleActions: "play none none none",
      },
  });
  introimg.from(".intro-con", { y: 100, duration: 1, opacity: 0, delay: 0.6 });

  // about img
  let aboutimg = gsap.timeline({
      scrollTrigger: {
          trigger: "#about-pic",
          start: "top 70%",
          end: "top center",
          scurb: true,
          toggleActions: "play none none none",
      },
  });
  let abouttext = gsap.timeline({
      scrollTrigger: {
          trigger: "#about-text",
          start: "top 60%",
          end: "top center",
          scurb: true,
          toggleActions: "play none none none",
      },
  });
  let aboutdfl = gsap.timeline({
      scrollTrigger: {
          trigger: ".d-fl",
          start: "top 60%",
          end: "top center",
          scurb: true,
          toggleActions: "play none none none",
      },
  });
  aboutimg.from("#about h2", { duration: 0.8, y: 50, opacity: 0, delay: 0.3, scale: 0.4 });
  aboutimg.from("#about-pic", { y: 100, duration: 0.8, opacity: 0, delay: 0.2 });
  abouttext.from(".about-h3", { y: 50, duration: 1, opacity: 0, delay: 0.3 });
  abouttext.from(".about-p", { y: 50, duration: 1, opacity: 0, delay: 0.3 });
  aboutdfl.from(".d-fl", { y: 50, duration: 1, opacity: 0, delay: 0.4 });

  // contact
  let contactsocial = gsap.timeline({
      scrollTrigger: {
          trigger: ".contact-icon",
          start: "top center",
          end: "top center",
          scurb: true,
          toggleActions: "play none none none",
      },
  });
  let contacttext = gsap.timeline({
      scrollTrigger: {
          trigger: "#contact-text",
          start: "top center",
          end: "top center",
          scurb: true,
          toggleActions: "play none none none",
      },
  });
  contactsocial.from("#contact-social", { y: 100, duration: 1, opacity: 0, delay: 0.3 });
  contacttext.from("#contact-text p", { y: 100, duration: 1, opacity: 0, delay: 0.3 });

  // project
  let projectimg = gsap.timeline({
      scrollTrigger: {
          trigger: "#project",
          start: "top center",
          end: "top center",
          scurb: true,
          toggleActions: "play none none none",
      },
  });
  let projecttext = gsap.timeline({
      scrollTrigger: {
          trigger: "#project-text",
          start: "top 80%",
          end: "top center",
          scurb: true,
          toggleActions: "play none none none",
      },
  });
  projectimg.from("#project h2", { duration: 0.8, y: 100, opacity: 0, delay: 0.3 });
  projectimg.from(".project-image-wrapper", { duration: 0.8, y: 100, opacity: 0, delay: 0.3 });
  projecttext.from("#project-text", { duration: 0.8, y: 100, opacity: 0, delay: 0.3 });
});
