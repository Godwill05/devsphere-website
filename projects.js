// Projets de DevSphere - Données réelles (EN/FR) + rendu/animations inchangés
const projects = {
  en: [
    {
      id: 1,
      title: "DealAircraft",
      description:
        "Aircraft brokerage platform for posting and managing buy/sell listings across France and the EU.",
      shortTitle: "AVIATION",
      category: "Platform",
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
      gradient: "from-primary to-primary-light",
      image:
        "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "#",
      stats: {
        value: "FR • EU",
        label: "project_scope"
      },
      features: ["aircraft_listings", "brokerage_workflow", "secure_contact"]
    },
    {
      id: 2,
      title: "Brariane Auto École",
      description:
        "Student course tracking and online fee payment application for a driving school in Benin.",
      shortTitle: "EDU PAY",
      category: "Application",
      technologies: ["Laravel", "MySQL", "Tailwind CSS"],
      gradient: "from-secondary to-orange-500",
      image:
        "https://images.unsplash.com/photo-1630406144797-821be1f35d75?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "#",
      stats: {
        value: "BJ",
        label: "project_location"
      },
      features: ["student_tracking", "online_payments", "course_followup"]
    },
    {
      id: 3,
      title: "Clinic Management Software",
      description:
        "In-progress software for a clinic in Benin to manage patients, appointments, and internal workflows.",
      shortTitle: "CLINIC",
      category: "Software",
      technologies: ["Angular", "Node.js", "PostgreSQL"],
      gradient: "from-accent to-teal-400",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "#",
      stats: {
        value: "In progress",
        label: "project_status"
      },
      features: ["patient_records", "appointment_management", "access_roles"]
    }
  ],
  fr: [
    {
      id: 1,
      title: "DealAircraft",
      description:
        "Plateforme de courtage aéronautique pour publier et gérer des annonces d’achat/vente d’avions en France et dans l’UE.",
      shortTitle: "AVIATION",
      category: "Plateforme",
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
      gradient: "from-primary to-primary-light",
      image:
        "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "#",
      stats: {
        value: "FR • UE",
        label: "project_scope"
      },
      features: ["aircraft_listings", "brokerage_workflow", "secure_contact"]
    },
    {
      id: 2,
      title: "Brariane Auto École",
      description:
        "Application de suivi de cours pour les élèves et de paiement en ligne des frais d’auto-école au Bénin.",
      shortTitle: "SUIVI",
      category: "Application",
      technologies: ["Laravel", "MySQL", "Tailwind CSS"],
      gradient: "from-secondary to-orange-500",
      image: "https://images.unsplash.com/photo-1630406144797-821be1f35d75?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "#",
      stats: {
        value: "Bénin",
        label: "project_location"
      },
      features: ["student_tracking", "online_payments", "course_followup"]
    },
    {
      id: 3,
      title: "Logiciel de gestion de clinique",
      description:
        "Logiciel en cours de développement pour une clinique au Bénin : gestion des patients, rendez-vous et workflows internes.",
      shortTitle: "CLINIQUE",
      category: "Logiciel",
      technologies: ["Angular", "Node.js", "PostgreSQL"],
      gradient: "from-accent to-teal-400",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "#",
      stats: {
        value: "En cours",
        label: "project_status"
      },
      features: ["patient_records", "appointment_management", "access_roles"]
    }
  ]
};

// Variables globales pour les traductions
let currentTranslations = {};

// Fonction pour obtenir une traduction
function getTranslation(key, lang) {
  if (
    window.translations &&
    window.translations[lang] &&
    window.translations[lang][key]
  ) {
    return window.translations[lang][key];
  }
  return key; // Fallback vers la clé si non trouvé
}

// Fonction pour afficher les projets
function renderProjects() {
  const currentLang = localStorage.getItem("lang") || "en";
  const currentProjects = projects[currentLang] || projects.en;
  const projectsContainer = document.getElementById("projects-container");

  if (!projectsContainer) {
    console.warn("❌ Élément #projects-container introuvable");
    return;
  }

  console.log(
    `🚀 Rendu des projets (${currentProjects.length} projets, langue: ${currentLang})`
  );

  projectsContainer.innerHTML = currentProjects
    .map(
      (project) => `
    <div class="group relative overflow-hidden rounded-3xl shadow-xl card-hover-3d section-reveal hover:scale-[1.02] transition-transform duration-300">
      <!-- En-tête du projet avec image ou fond gradient -->
      <div class="h-64 bg-gradient-to-br ${project.gradient} overflow-hidden relative">
        ${project.image ? `
          <img src="${project.image}" alt="${project.title}" 
               class="w-full h-full object-cover "
               loading="lazy">
        ` : ""}
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-white text-4xl font-black">${project.shortTitle}</div>
        </div>
        <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full">
          ${project.category}
        </div>
      </div>

      <!-- Contenu du projet -->
      <div class="p-8 bg-white">
        <h3 class="text-2xl font-bold text-gray-900 mb-3">${project.title}</h3>
        <p class="text-gray-600 mb-6">${project.description}</p>

        <!-- Technologies -->
        <div class="flex flex-wrap gap-2 mb-6">
          ${project.technologies
            .map(
              (tech) => `
            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
              ${tech}
            </span>
          `
            )
            .join("")}
        </div>

        <!-- Statistiques -->
        <div class="flex justify-between items-center">
          <div>
            <div class="text-sm text-gray-500" data-i18n="${project.stats.label}">
              ${getTranslation(project.stats.label, currentLang)}
            </div>
            <div class="text-2xl font-black text-primary">${project.stats.value}</div>
          </div>
          <a href="${project.url}" 
             class="text-primary font-semibold group-hover:text-primary-light transition-colors">
            ${getTranslation("view_case", currentLang)}
            <i class="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
      </div>

      <!-- Effet au survol (features) - Visible sur mobile avec touch -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-500 flex items-end p-8 cursor-pointer touch-manipulation">
        <div class="text-white">
          <h4 class="text-xl font-bold mb-2">${getTranslation("key_results", currentLang)}</h4>
          <ul class="text-sm space-y-1">
            ${project.features
              .map((featureKey) => {
                const featureText = getTranslation(featureKey, currentLang);
                return `
                <li class="flex items-center">
                  <i class="fas fa-check mr-2 text-accent"></i>
                  ${featureText}
                </li>
              `;
              })
              .join("")}
          </ul>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  console.log(
    `✅ ${currentProjects.length} projets affichés dans #projects-container`
  );

  // Réactiver les animations de révélation
  const revealElements = projectsContainer.querySelectorAll(".section-reveal");
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
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  // Appliquer les traductions aux nouveaux éléments
  updateProjectTranslations(currentLang);
}

// Fonction pour mettre à jour les traductions dans les projets
function updateProjectTranslations(lang) {
  const projectsContainer = document.getElementById("projects-container");
  if (!projectsContainer) return;

  // Mettre à jour les statistiques
  projectsContainer.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const translation = getTranslation(key, lang);
    if (translation !== key) {
      el.textContent = translation;
    }
  });

  // Mettre à jour le bouton "View case"
  projectsContainer.querySelectorAll('a[href="#"]').forEach((link) => {
    // On cible les liens des cartes projets (pas d'autre changement)
    if (link.querySelector("i.fas.fa-arrow-right")) {
      link.innerHTML =
        getTranslation("view_case", lang) +
        ' <i class="fas fa-arrow-right ml-1"></i>';
    }
  });

  // Mettre à jour le titre "Key Results"
  projectsContainer.querySelectorAll("h4.text-xl").forEach((title) => {
    title.textContent = getTranslation("key_results", lang);
  });
}

// Initialiser les projets au chargement
document.addEventListener("DOMContentLoaded", () => {
  console.log("📄 DOM chargé - initialisation des projets");
  renderProjects();
});

// Écouter les changements de langue via localStorage
window.addEventListener("storage", (e) => {
  if (e.key === "lang") {
    console.log(
      "🔄 Changement de langue détecté (storage) - rechargement des projets"
    );
    renderProjects();
  }
});

// Écouter les changements de langue via votre système
document.addEventListener("languageChanged", () => {
  console.log("🔄 Événement languageChanged - rechargement des projets");
  renderProjects();
});

// S'assurer que les projets se mettent à jour quand on change de langue avec le select
document.addEventListener("change", (e) => {
  if (
    e.target.matches("select") &&
    (e.target.value === "en" || e.target.value === "fr")
  ) {
    setTimeout(() => {
      console.log("🔁 Changement de langue via select - mise à jour des projets");
      renderProjects();
    }, 100);
  }
});

// Exposer la fonction pour le débogage
window.debugProjects = () => {
  console.log("=== DEBUG PROJETS ===");
  console.log("Nombre de projets:", projects.en.length);
  console.log("Langue actuelle:", localStorage.getItem("lang"));
  console.log("Container:", document.getElementById("projects-container"));
  renderProjects();
};