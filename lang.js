// Langue par défaut: Anglais
const DEFAULT_LANG = 'en';

async function loadLang(lang) {
  try {
    // CORRIGÉ : Chemin corrigé (enlève le 'langs/')
    const res = await fetch(`langs/${lang}.json`);
    const data = await res.json();

    

    // Traduire les éléments avec data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      
      if (data[key]) {
        // Pour les spans, on utilise textContent directement
        if (el.tagName === 'SPAN') {
          el.textContent = data[key];
        } 
        // Pour les autres éléments avec icônes
        else {
          const hasIcon = el.querySelector('i.fas, i.fab, i.far');
          
          if (hasIcon) {
            // Préserver les icônes
            const iconHTML = hasIcon.outerHTML;
            const iconAtEnd = el.innerHTML.trim().endsWith('</i>');
            
            if (iconAtEnd) {
              el.innerHTML = data[key] + ' ' + iconHTML;
            } else {
              el.innerHTML = iconHTML + ' ' + data[key];
            }
          } else {
            el.textContent = data[key];
          }
        }
      } else {
        
      }
    });

    // Traduire les placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (data[key]) {
        el.placeholder = data[key];
      }
    });

    // Mettre à jour la langue du document
    document.documentElement.lang = lang;

    // Forcer le reflow pour certaines animations
    document.querySelectorAll('.section-reveal').forEach(el => {
      el.style.animation = 'none';
      setTimeout(() => {
        el.style.animation = '';
      }, 10);
    });

  } catch (error) {
    
  }
}

function switchLang(lang) {
  
  localStorage.setItem("lang", lang);
  loadLang(lang);
  
  // Mettre à jour tous les sélecteurs de langue
  document.querySelectorAll("select").forEach(sel => {
    sel.value = lang;
  });
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  
  const savedLang = localStorage.getItem("lang") || DEFAULT_LANG;
  
  
  // Charger la langue
  loadLang(savedLang);

  // Synchroniser tous les sélecteurs de langue
  document.querySelectorAll("select").forEach(sel => {
    sel.value = savedLang;
  });
});