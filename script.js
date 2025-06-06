// Typing effect for role
const roles = [
  "Front-End Developer",
  "JavaScript is illogical",
  "React for cocksuckers",
  "Ai will replace the real humans",
];
let roleIndex = 0,
  charIndex = 0,
  typing = true;
const typedRole = document.getElementById("typed-role");

function typeRole() {
  if (!typedRole) return;
  if (typing) {
    if (charIndex < roles[roleIndex].length) {
      typedRole.textContent += roles[roleIndex][charIndex++];
      setTimeout(typeRole, 80);
    } else {
      typing = false;
      setTimeout(typeRole, 1200);
    }
  } else {
    if (charIndex > 0) {
      typedRole.textContent = roles[roleIndex].substring(0, --charIndex);
      setTimeout(typeRole, 30);
    } else {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 400);
    }
  }
}
typeRole();

// Back to Top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// EmailJS Contact Form Integration
(function () {
  emailjs.init("AVGPE9BKTyhihenwV");
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "Sending...";

    emailjs
      .sendForm(
        "service_g8waodm", // <-- Your EmailJS service ID
        "template_fiu1uk9", // <-- Your EmailJS template ID
        form
      )
      .then(
        function () {
          status.textContent =
            "Thank you for reaching out, " + form.name.value + "!";
          form.reset();
          setTimeout(() => (status.textContent = ""), 4000);
        },
        function (error) {
          status.textContent = "Oops! Something went wrong. Please try again.";
        }
      );
  });
}

// Pixel Modal for launching external apps
const launchBtns = document.querySelectorAll(".launch-btn");
const appModal = document.getElementById("appModal");
const appFrame = document.getElementById("appFrame");
const closeAppModal = document.getElementById("closeAppModal");

launchBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    appFrame.src = btn.getAttribute("data-url");
    appModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

if (closeAppModal && appModal) {
  closeAppModal.addEventListener("click", () => {
    appModal.style.display = "none";
    appFrame.src = "";
    document.body.style.overflow = "";
  });
  window.addEventListener("click", (e) => {
    if (e.target === appModal) {
      appModal.style.display = "none";
      appFrame.src = "";
      document.body.style.overflow = "";
    }
  });
}
