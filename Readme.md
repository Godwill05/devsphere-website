# DevSphere - Digital Solutions Platform

🚀 **Plateforme de solutions digitales innovantes** - Site web moderne avec animations 3D, multilingue et responsive.

![DevSphere Preview](preview.png)

## 🌟 Fonctionnalités

- **Design Moderne** : Animations 3D, effets de profondeur, gradients
- **Multilingue** : Support Français/Anglais avec traduction dynamique
- **Responsive** : Adapté à tous les appareils (mobile, tablette, desktop)
- **Sections Dynamiques** :
  - Équipe (chargée depuis `members.js`)
  - Projets (chargés depuis `projects.js`)
  - Blog (chargé depuis `blog.js`)
- **Modal Interactive** : Articles de blog avec modal élégante
- **Formulaire de Contact** : Intégration EmailJS
- **Animations Avancées** : Particles, transitions fluides, effets hover

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **Tailwind CSS** - Framework CSS utilitaire
- **JavaScript Vanilla** - Interactions dynamiques
- **EmailJS** - Envoi d'emails depuis le frontend
- **Font Awesome** - Icônes
- **Google Fonts** - Typographie (Inter, Outfit)

## 📁 Structure des Fichiers
devsphere/

- ├── index.html # Page principale 
- ├── style.css # Styles personnalisés
- ├── logo.png # Logo DevSphere
- ├── lang.js # Gestion des langues
- ├── members.js # Données de l'équipe
- ├── projects.js # Données des projets
- ├── blog.js # Données du blog + modal
- ├── main.js # Scripts principaux
- ├── langs/
- │ ├── en.json # Traductions anglaises
- │ └── fr.json # Traductions françaises
- ├── blog/
- │ ├── 1.html # Article 1 (avec data-i18n)
- │ ├── 2.html # Article 2 (avec data-i18n)
- │ ├── 3.html # Article 3 (avec data-i18n)
- │ └── 4.html # Article 4 (avec data-i18n)
- └── README.md # Documentation




## 🚀 Installation & Lancement

### Option 1 : Serveur Web Python (Recommandé)

```bash
# 1. Accédez au dossier du projet
cd devsphere

# 2. Lancez le serveur Python
python3 -m http.server 5500

# 3. Ouvrez votre navigateur à l'adresse :
# http://localhost:5500