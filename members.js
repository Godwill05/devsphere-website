// Membres du collectif DevSphere
const teamMembers = [
  {
    id: 1,
    name: "IYANDA Ismael",
    role: {
      en: "Product-Oriented Full-Stack Engineer",
      fr: "Développeur Full-Stack orienté produit",
    },
    expertise: {
      en: "Building end-to-end web applications with a strong product mindset",
      fr: "Conception d’applications web de bout en bout avec une forte approche produit",
    },
    skills: ["Nest JS", "Angular", "React Native", "Node JS", "React JS"],
    portfolio: "https://emmanuel-iyanda.vercel.app/",
    image: "dev/ismael.jpeg",
    social: {
      github: "https://github.com/Manuismael",
      linkedin: "www.linkedin.com/in/ismaël-emmanuel-iyanda-765b48293",
    },
  },
  {
    id: 2,
    name: "OUSSOU Godwill",
    role: {
      en: "Junior Backend Developer, Machine Learning, Automation & AI",
      fr: "Développeur junior backend , machine learning, automatisation et IA",
    },
    expertise: {
      en: "Focused on Backend Systems, AI/ML Implementation & Data Processing",
      fr: "Spécialisé en Systèmes Backend, Implémentation IA/ML & Traitement de Données",
    },
    skills: [
      "Laravel",
      "Symfony",
      "Django",
      "Flask",
      "Angular",
      "Vue.js",
      "Node.js",
      "Machine Learning",
    ],
    portfolio: "https://oussou-godwill.web.app",
    image: "dev/godwill.png",
    social: {
      github: "https://github.com/Godwill05",
      linkedin: "",
      dribbble: "#",
    },
  },
  {
    id: 3,
    name: "YEHEZEKOCOLO Joel Prince",
    role: {
      en: "Web and Mobile App Developer",
      fr: "Développeur d'Applications Web et Mobiles",
    },
    expertise: {
      en: "Expert in Mobile Development",
      fr: "Expert en Développement Mobile",
    },
    skills: ["Flutter", "Svelte", "Node.js", "Tailwindcss"],
    portfolio: "https://joelprince.vercel.app",
    image: "dev/prince.jpg",
    social: {
      github: "https://github.com/Jolyeh",
      linkedin:
        "https://www.linkedin.com/in/jo%C3%ABl-prince-yehezekocolo-bb564b296/",
      twitter: "",
    },
  },
  {
    id: 4,
    name: "OUSSOU Junior",
    role: {
      en: "Network & IT Infrastructure Specialist",
      fr: "Spécialiste Réseau & Infrastructure Informatique",
    },
    expertise: {
      en: "Design, deployment and maintenance of computer networks and IT infrastructures",
      fr: "Conception, déploiement et maintenance des réseaux informatiques et infrastructures IT",
    },

    skills: [
      "Réseaux informatiques",
      "Installation réseau",
      "Câblage Ethernet",
      "Configuration routeurs & switchs",
      "Maintenance informatique",
      "Sécurité réseau de base",
    ],
    portfolio: "#",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop",
    social: {
      github: "#",
      linkedin: "#",
      medium: "#",
    },
  },

  {
    id: 5,
    name: "TOSSAVI Emery",
    role: {
      en: "Fullstack Developer & Security Analyst",
      fr: "Développeur Fullstack & Analyste en Sécurité",
    },
    expertise: {
      en: "Expert in Laravel, Vue.JS, Python and web security",
      fr: "Expert en Laravel, Vue.JS, Python et sécurité web",
    },
    skills: [
      "Laravel",
      "React",
      "Vue.js",
      "Next.js",
      "NestJS",
      "Python",
      "Django",
      "Flask",
      "Web Security",
      "Docker",
      "REST API",
      "PostgreSQL",
      "MySQL",
      "CI/CD",
    ],
    portfolio: "https://emery-tossavi.dev/",
    image: "https://emerytossavi.github.io/pics/og/og-image.webp",
    social: {
      github: "https://github.com/emerytossavi",
      linkedin: "https://linkedin.com/in/emery-tossavi",
      twitter: "https://x.com/emerytossavi",
    },
  },
];

// Fonction pour afficher les membres de l'équipe
function renderTeamMembers() {
  const currentLang = localStorage.getItem("lang") || "en";
  const teamContainer = document.getElementById("team-container");

  if (!teamContainer) {
    console.warn("❌ Élément #team-container introuvable");
    return;
  }

  console.log(
    `👥 Rendu de l'équipe (${teamMembers.length} membres, langue: ${currentLang})`,
  );

  teamContainer.innerHTML = teamMembers
    .map(
      (member) => `
    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover-3d section-reveal hover:scale-[1.02] transition-transform duration-300">
      <!-- Image du membre -->
      <div class="relative h-80 overflow-hidden bg-gradient-to-br from-primary to-accent">
        <img src="${member.image}" alt="${member.name}" 
             class="w-full h-full object-cover object-top opacity-90 transition-transform duration-500 hover:scale-110"
             onerror="
               this.onerror = null;
               const name = '${member.name.split(" ")[0]}';
               this.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name) + '&background=3B82F6&color=fff&size=400';
               this.classList.remove('opacity-90');
             ">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div class="absolute bottom-4 left-4 right-4">
          <h3 class="text-2xl font-bold text-white mb-1">${member.name}</h3>
          <p class="text-white/90 text-sm font-medium">${member.role[currentLang]}</p>
        </div>
      </div>
      
      <!-- Contenu -->
      <div class="p-6">
        <!-- Expertise -->
        <div class="mb-4">
          <p class="text-gray-700 font-medium mb-3">
            <i class="fas fa-star text-accent mr-2"></i>${member.expertise[currentLang]}
          </p>
        </div>
        
        <!-- Compétences -->
        <div class="mb-6">
          <div class="flex flex-wrap gap-2">
            ${member.skills
              .map(
                (skill) => `
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
                ${skill}
              </span>
            `,
              )
              .join("")}
          </div>
        </div>
        
        <!-- Réseaux sociaux -->
        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
          <div class="flex space-x-3">
            ${member.social.github ? `<a href="${member.social.github}" target="_blank" class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300"><i class="fab fa-github text-sm"></i></a>` : ""}
            ${member.social.linkedin ? `<a href="${member.social.linkedin}" target="_blank" class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"><i class="fab fa-linkedin-in text-sm"></i></a>` : ""}
            ${member.social.twitter ? `<a href="${member.social.twitter}" target="_blank" class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors duration-300"><i class="fab fa-twitter text-sm"></i></a>` : ""}
            ${member.social.dribbble ? `<a href="${member.social.dribbble}" target="_blank" class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors duration-300"><i class="fab fa-dribbble text-sm"></i></a>` : ""}
            ${member.social.medium ? `<a href="${member.social.medium}" target="_blank" class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300"><i class="fab fa-medium text-sm"></i></a>` : ""}
          </div>
          
          <!-- Bouton Portfolio -->
          <a href="${member.portfolio}" target="_blank" class="px-4 py-2 bg-primary-gradient text-white text-sm font-semibold rounded-full btn-hover-effect hover:shadow-lg transition-all duration-300">
            ${currentLang === "fr" ? "Voir plus" : "View more"}
            <i class="fas fa-external-link-alt ml-2 text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  console.log(`✅ ${teamMembers.length} membres affichés dans #team-container`);

  // Réactiver les animations de révélation
  const revealElements = teamContainer.querySelectorAll(".section-reveal");
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
}

// Initialiser l'affichage des membres au chargement
document.addEventListener("DOMContentLoaded", () => {
  console.log("📄 DOM chargé - initialisation de l'équipe");
  renderTeamMembers();
});

// Écouter les changements de langue via localStorage
window.addEventListener("storage", (e) => {
  if (e.key === "lang") {
    console.log(
      "🔄 Changement de langue détecté (storage) - rechargement de l'équipe",
    );
    renderTeamMembers();
  }
});

// Écouter les changements de langue via votre système
document.addEventListener("languageChanged", () => {
  console.log("🔄 Événement languageChanged - rechargement de l'équipe");
  renderTeamMembers();
});

// S'assurer que l'équipe se met à jour quand on change de langue avec le select
document.addEventListener("change", (e) => {
  if (
    e.target.matches("select") &&
    (e.target.value === "en" || e.target.value === "fr")
  ) {
    setTimeout(() => {
      console.log(
        "🔁 Changement de langue via select - mise à jour de l'équipe",
      );
      renderTeamMembers();
    }, 100);
  }
});

// Déclencher un événement personnalisé quand la langue change dans lang.js
// Ajoutez cette ligne dans votre fichier lang.js dans la fonction switchLang :
// document.dispatchEvent(new CustomEvent('languageChanged'));

// Exposer la fonction pour le débogage
window.debugTeam = () => {
  console.log("=== DEBUG ÉQUIPE ===");
  console.log("Nombre de membres:", teamMembers.length);
  console.log("Langue actuelle:", localStorage.getItem("lang"));
  console.log("Container:", document.getElementById("team-container"));
  renderTeamMembers();
};
