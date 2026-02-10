// Articles de blog pour DevSphere avec contenu détaillé
const blogArticles = {
  en: [
    {
      id: 1,
      title: "The Future of AI Automation in Business",
      excerpt: "Discover how artificial intelligence is transforming business processes and boosting productivity across all sectors.",
      date: "2025-01-15",
      author: "DevSphere Team",
      category: "AI & Automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      readTime: "5 min",
      details: "blog/1.html"
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Modern Tech",
      excerpt: "Learn best practices for creating web applications that scale effortlessly using the latest technologies and frameworks.",
      date: "2025-01-10",
      author: "DevSphere Team",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
      readTime: "7 min",
      details: "blog/2.html"
    },
    {
      id: 3,
      title: "Mobile-First Design: Why It Matters in 2025",
      excerpt: "Understanding the importance of mobile-first approach in modern web and app development for optimal user experience.",
      date: "2025-01-05",
      author: "DevSphere Team",
      category: "Design & UX",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      readTime: "6 min",
      details: "blog/3.html"
    },
    {
      id: 4,
      title: "API Integration Best Practices for Developers",
      excerpt: "Master the art of integrating third-party APIs into your projects with these proven strategies and security tips.",
      date: "2025-12-28",
      author: "DevSphere Team",
      category: "Development",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      readTime: "8 min",
      details: "blog/4.html"
    }
  ],
  fr: [
    {
      id: 1,
      title: "L'Avenir de l'Automatisation IA dans les Affaires",
      excerpt: "Découvrez comment l'intelligence artificielle transforme les processus métier et booste la productivité dans tous les secteurs.",
      date: "2025-01-15",
      author: "Équipe DevSphere",
      category: "IA & Automatisation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      readTime: "5 min",
      details: "blog/1.html"
    },
    {
      id: 2,
      title: "Créer des Applications Web Évolutives avec les Technologies Modernes",
      excerpt: "Apprenez les meilleures pratiques pour créer des applications web qui évoluent facilement avec les dernières technologies.",
      date: "2025-01-10",
      author: "Équipe DevSphere",
      category: "Développement Web",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
      readTime: "7 min",
      details: "blog/2.html"
    },
    {
      id: 3,
      title: "Design Mobile-First : Pourquoi C'est Important en 2025",
      excerpt: "Comprendre l'importance de l'approche mobile-first dans le développement web et d'applications pour une UX optimale.",
      date: "2025-01-05",
      author: "Équipe DevSphere",
      category: "Design & UX",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      readTime: "6 min",
      details: "blog/3.html"
    },
    {
      id: 4,
      title: "Meilleures Pratiques d'Intégration d'API pour Développeurs",
      excerpt: "Maîtrisez l'art d'intégrer des API tierces dans vos projets avec ces stratégies éprouvées et conseils de sécurité.",
      date: "2025-12-28",
      author: "Équipe DevSphere",
      category: "Développement",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      readTime: "8 min",
      details: "blog/4.html"
    }
  ]
};

// Fonction pour afficher les articles de blog avec animation innovante
function renderBlogArticles() {
  const currentLang = localStorage.getItem("lang") || "en";
  const articles = blogArticles[currentLang] || blogArticles.en;
  const blogContainer = document.getElementById("blog-container");
  
  if (!blogContainer) return;
  
  blogContainer.innerHTML = articles.map((article, index) => `
    <article class="blog-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 section-reveal" 
             style="animation-delay: ${index * 0.1}s;">
      <div class="relative h-48 overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img src="${article.image}" alt="${article.title}" 
             class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1">
        <div class="absolute top-4 right-4 px-3 py-1 bg-primary-gradient text-white text-xs font-bold rounded-full shadow-lg">
          ${article.category}
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div class="p-6 relative">
        <!-- Floating date badge -->
        <div class="absolute -top-4 left-6 w-12 h-12 bg-accent-gradient rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
          <span class="text-xs font-bold">${new Date(article.date).getDate()}</span>
          <span class="text-xs">${new Date(article.date).toLocaleDateString('en-US', { month: 'short' })}</span>
        </div>
        
        <div class="flex items-center justify-between text-sm text-gray-500 mb-3 pt-4">
          <span class="flex items-center">
            <i class="far fa-calendar-alt mr-2 text-primary"></i>
            ${new Date(article.date).toLocaleDateString(currentLang === 'fr' ? 'fr-FR' : 'en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
          <span class="flex items-center">
            <i class="far fa-clock mr-2 text-accent"></i>${article.readTime}
          </span>
        </div>
        
        <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors duration-300 group cursor-pointer">
          ${article.title}
          <span class="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
            <i class="fas fa-arrow-right text-sm"></i>
          </span>
        </h3>
        
        <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          ${article.excerpt}
        </p>
        
        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-2">
              <i class="fas fa-user text-white text-xs"></i>
            </div>
            <span class="text-sm text-gray-500"> 
                <img src="logo.png" alt="DevSphere" class="w-6 h-6 mr-2">
                 ${article.author}
            </span>
          </div>
          
          <button class="read-more-btn px-4 py-2 bg-gradient-to-r from-primary to-accent text-red text-sm font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center group"
                  data-article-id="${article.id}">
            ${currentLang === 'fr' ? 'Lire plus' : 'Read more'}
            <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
          </button>
        </div>
      </div>
    </article>
  `).join('');
  
  // Ajouter les événements aux boutons "Read more"
  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
      const articleId = parseInt(this.dataset.articleId);
      const currentLang = localStorage.getItem("lang") || "en";
      const article = blogArticles[currentLang].find(a => a.id === articleId);
      
      if (article) {
        openBlogModal(article);
      }
    });
  });
  
  // Ajouter l'animation d'entrée
  animateBlogCards();
}

// Fonction pour animer les cartes de blog
function animateBlogCards() {
  const cards = document.querySelectorAll('.blog-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100 + (index * 100));
  });
}

// Fonction pour ouvrir la modal
function openBlogModal(article) {
  // Créer la modal si elle n'existe pas
  let modal = document.getElementById('blog-modal');
  
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'blog-modal';
    modal.className = 'fixed inset-0 z-50 hidden';
    modal.innerHTML = `
      <!-- Backdrop flouté -->
      <div class="blog-modal-backdrop fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500"></div>
      
      <!-- Modal container -->
      <div class="blog-modal-container fixed inset-0 overflow-y-auto p-4 flex items-center justify-center">
        <div class="blog-modal-content relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-500 scale-95 opacity-0">
          <!-- Bouton fermer -->
          <button class="blog-modal-close absolute top-6 right-6 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-primary hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
            <i class="fas fa-times text-xl"></i>
          </button>
          
          <!-- En-tête de la modal -->
          <div class="blog-modal-header relative h-64 overflow-hidden">
            <img src="${article.image}" alt="${article.title}" 
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div class="flex items-center justify-between mb-4">
                <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                  ${article.category}
                </span>
                <span class="flex items-center">
                  <i class="far fa-clock mr-2"></i>${article.readTime}
                </span>
              </div>
              <h2 class="text-3xl font-bold mb-2">${article.title}</h2>
              <div class="flex items-center">
                <div class="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-user text-white"></i>
                </div>
                <div>
                  <div class="font-semibold">${article.author}</div>
                  <div class="text-sm text-white/80">
                    ${new Date(article.date).toLocaleDateString(localStorage.getItem("lang") === 'fr' ? 'fr-FR' : 'en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Corps de la modal -->
          <div class="blog-modal-body p-8 overflow-y-auto max-h-[50vh]">
            <div class="prose max-w-none">
              <div class="text-lg text-gray-600 leading-relaxed mb-6">
                ${article.excerpt}
              </div>
              <div id="blog-modal-content" class="blog-content-loading">
                <div class="flex items-center justify-center py-12">
                  <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Footer de la modal -->
          <div class="blog-modal-footer p-6 border-t border-gray-100 bg-gray-50">
            <div class="flex justify-between items-center">
              <div class="flex space-x-4">
                <button class="social-btn w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                  <i class="fab fa-twitter"></i>
                </button>
                <button class="social-btn w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  <i class="fab fa-linkedin-in"></i>
                </button>
                <button class="social-btn w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-300">
                  <i class="fab fa-pinterest"></i>
                </button>
              </div>
              <button class="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                ${localStorage.getItem("lang") === 'fr' ? 'Partager l\'article' : 'Share Article'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Ajouter les événements
    modal.querySelector('.blog-modal-close').addEventListener('click', closeBlogModal);
    modal.querySelector('.blog-modal-backdrop').addEventListener('click', closeBlogModal);
    
    // Fermer avec Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('flex')) {
        closeBlogModal();
      }
    });
  } else {
    // Mettre à jour le contenu
    modal.querySelector('img').src = article.image;
    modal.querySelector('h2').textContent = article.title;
    modal.querySelector('.bg-white\\/20').textContent = article.category;
    modal.querySelector('.text-sm.text-white\\/80').textContent = new Date(article.date).toLocaleDateString(
      localStorage.getItem("lang") === 'fr' ? 'fr-FR' : 'en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }
    );
    modal.querySelector('.font-semibold').textContent = article.author;
    modal.querySelector('.text-lg.text-gray-600').textContent = article.excerpt;
  }
  
  // Afficher la modal
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  
  // Animation d'entrée
  setTimeout(() => {
    const content = modal.querySelector('.blog-modal-content');
    content.classList.remove('scale-95', 'opacity-0');
    content.classList.add('scale-100', 'opacity-100');
    
    // Charger le contenu détaillé
    loadBlogContent(article.details);
  }, 10);
  
  // Empêcher le scroll du body
  document.body.style.overflow = 'hidden';
}

// Fonction pour charger le contenu détaillé
// Fonction pour charger le contenu détaillé
async function loadBlogContent(url) {
  const contentContainer = document.getElementById('blog-modal-content');
  
  if (!contentContainer) return;
  
  contentContainer.innerHTML = `
    <div class="flex items-center justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  `;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Content not found');
    
    const content = await response.text();
    
    // Animation de chargement
    setTimeout(() => {
      contentContainer.classList.remove('blog-content-loading');
      contentContainer.innerHTML = content;
      
      // TRÈS IMPORTANT : Appliquer les traductions après avoir chargé le contenu
      setTimeout(() => {
        // Charger la langue actuelle pour traduire les clés data-i18n
        const currentLang = localStorage.getItem("lang") || "en";
        
        // Si vous avez une fonction loadLang globale, appelez-la
        if (typeof loadLang === 'function') {
          loadLang(currentLang);
        } else {
          // Sinon, appliquez manuellement les traductions
          applyTranslationsToModal(contentContainer, currentLang);
        }
        
        // Animation d'apparition du contenu
        contentContainer.style.opacity = '0';
        setTimeout(() => {
          contentContainer.style.transition = 'opacity 0.5s ease';
          contentContainer.style.opacity = '1';
        }, 50);
      }, 100);
    }, 800);
    
  } catch (error) {
    const currentLang = localStorage.getItem("lang") || "en";
    contentContainer.innerHTML = `
      <div class="text-center py-12">
        <div class="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <i class="fas fa-exclamation-triangle text-red-500 text-2xl"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">
          ${currentLang === 'fr' ? 'Contenu non disponible' : 'Content not available'}
        </h3>
        <p class="text-gray-600">
          ${currentLang === 'fr' 
            ? 'Le contenu détaillé de cet article est en cours de préparation.' 
            : 'The detailed content for this article is being prepared.'}
        </p>
      </div>
    `;
  }
}

// Fonction pour appliquer les traductions à la modal
function applyTranslationsToModal(container, lang) {
  // Charger les traductions depuis window.translations ou les fichiers JSON
  const translations = window.translations && window.translations[lang] ? window.translations[lang] : {};
  
  // Traduire les éléments avec data-i18n dans la modal
  container.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    
    if (translations[key]) {
      if (el.tagName === 'SPAN' || el.tagName === 'P' || el.tagName === 'H3' || el.tagName === 'H4' || el.tagName === 'H5' || el.tagName === 'LI') {
        el.textContent = translations[key];
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[key];
      } else {
        el.textContent = translations[key];
      }
    } else {
      console.warn(`Traduction manquante pour la clé: ${key}`);
    }
  });
}

// Fonction pour fermer la modal
function closeBlogModal() {
  const modal = document.getElementById('blog-modal');
  if (!modal) return;
  
  const content = modal.querySelector('.blog-modal-content');
  content.classList.remove('scale-100', 'opacity-100');
  content.classList.add('scale-95', 'opacity-0');
  
  setTimeout(() => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    
    // Restaurer le scroll du body
    document.body.style.overflow = '';
  }, 300);
}

// Initialiser les articles au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  renderBlogArticles();
  
  // Ajouter des styles pour l'animation
  const style = document.createElement('style');
  style.textContent = `
    .blog-card {
      perspective: 1000px;
    }
    
    .blog-card:hover .blog-card-inner {
      transform: rotateY(180deg);
    }
    
    .blog-card-inner {
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }
    
    .blog-modal-content {
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
    
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    /* Animation d'entrée des cartes */
    @keyframes slideUpFade {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .blog-card {
      animation: slideUpFade 0.6s ease-out forwards;
    }
  `;
  document.head.appendChild(style);
});

// Recharger les articles quand la langue change
window.addEventListener('storage', (e) => {
  if (e.key === 'lang') {
    renderBlogArticles();
  }
});

// Écouter les changements de langue via le select
document.addEventListener('change', (e) => {
  if (e.target.matches('select') && (e.target.value === 'en' || e.target.value === 'fr')) {
    setTimeout(() => {
      renderBlogArticles();
    }, 100);
  }
});