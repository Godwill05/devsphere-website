// Loading screen
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loading-screen").style.display = "none";
    }, 500);
  }, 2000);
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile menu if open
      mobileMenu.classList.add("hidden");

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Scroll reveal animations
const revealElements = document.querySelectorAll(".section-reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("shadow-xl");
    navbar.classList.remove("bg-white/90");
    navbar.classList.add("bg-white");
  } else {
    navbar.classList.remove("shadow-xl");
    navbar.classList.remove("bg-white");
    navbar.classList.add("bg-white/90");
  }
});

// Back to top button
const backToTopBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("hidden");
    backToTopBtn.classList.add("flex", "items-center", "justify-center");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// INIT EMAILJS
(function(){
  emailjs.init("a7zMRP4eztGyz2yRk");
})();

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  // Récupérer les textes traduits ou utiliser des valeurs par défaut
  const currentLang = localStorage.getItem("lang") || "en";
  const sendingText = currentLang === "fr" ? "Envoi..." : "Sending...";
  const successText = currentLang === "fr" ? "Message envoyé!" : "Message Sent!";
  const errorText = currentLang === "fr" ? "Erreur" : "Error";

  submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> ${sendingText}`;
  submitBtn.disabled = true;

  emailjs.send("service_m95y9qk", "template_9w2yaas", {
    name,
    subject,
    message
  })
  .then(() => {
    submitBtn.innerHTML = `<i class="fas fa-check mr-2"></i> ${successText}`;
    submitBtn.classList.remove("bg-accent-gradient");
    submitBtn.classList.add("bg-green-500");

    contactForm.reset();

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.classList.remove("bg-green-500");
      submitBtn.classList.add("bg-accent-gradient");
      submitBtn.disabled = false;
    }, 3000);
  })
  .catch((err) => {
    submitBtn.innerHTML = `${errorText} ❌`;
    submitBtn.classList.add("bg-red-500");
    console.error(err);
  });
});

// Particle system
function createParticles(containerId, count = 30) {
  const container = document.getElementById(containerId);
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle-element", "animate-particle");

    // Random position
    const left = Math.random() * 100;
    const top = Math.random() * 100;

    // Random size
    const size = Math.random() * 4 + 2;

    // Random animation delay
    const delay = Math.random() * 5;

    // Random color
    const colors = ["#035c80", "#ff6b35", "#00d4aa"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.left = `${left}%`;
    particle.style.top = `${top}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.animationDelay = `${delay}s`;

    container.appendChild(particle);
  }
}

// Initialize particles
createParticles("particles-hero", 40);
createParticles("particles-contact", 30);

// Card 3D effect on mouse move
document.querySelectorAll(".card-hover-3d").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)";
  });
});

// Text typing effect for hero
const heroText = document.querySelector("#accueil h1");
if (heroText) {
  const text = heroText.textContent;
  heroText.textContent = "";

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  };

  // Start typing after loading
  setTimeout(typeWriter, 2000);
}

// Glitch effect on random elements
setInterval(() => {
  const elements = document.querySelectorAll(".glitch-text");
  elements.forEach((el) => {
    el.classList.add("animate-glitch");
    setTimeout(() => {
      el.classList.remove("animate-glitch");
    }, 500);
  });
}, 5000);