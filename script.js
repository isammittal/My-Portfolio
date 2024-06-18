document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      if (this.getAttribute("href") === "#") return;

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // document.getElementById("contact").addEventListener("click", function (e) {
  //   e.preventDefault();
  //   alert("Contact me on: sammittal2010@gmail.com");
  // });
});
