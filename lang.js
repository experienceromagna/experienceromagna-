/* ============================================
   EXPERIENCE ROMAGNA - Shared JavaScript
   Peace and Good People ODV
   ============================================ */

// === LANGUAGE SYSTEM ===
const LANG_CONFIG = {
  nav: {
    home:      { it:'Home', en:'Home', de:'Start', fr:'Accueil' },
    percorsi:  { it:'Percorsi', en:'Trails', de:'Wege', fr:'Parcours' },
    occasioni: { it:'Occasioni', en:'Occasions', de:'Anlässe', fr:'Occasions' },
    missione:  { it:'La Nostra Missione', en:'Our Mission', de:'Unsere Mission', fr:'Notre Mission' },
    contatti:  { it:'Contatti', en:'Contact', de:'Kontakt', fr:'Contact' },
  },
  cta1: { it:'Prenota Gratis', en:'Book for Free', de:'Kostenlos Buchen', fr:'Réserver Gratuitement' },
  cta2: { it:'Scopri le Esperienze', en:'Discover Experiences', de:'Erlebnisse Entdecken', fr:'Découvrir les Expériences' },
  wa:   { it:'Scrivici su WhatsApp', en:'WhatsApp Us', de:'WhatsApp schreiben', fr:'Nous écrire sur WhatsApp' },
  titles: {
    index:     {
      it: 'Experience Romagna – Esperienze Gratuite nella Valle del Sorsa, Cesena',
      en: 'Experience Romagna – Free Authentic Experiences in the Sorsa Valley, Italy',
      de: 'Experience Romagna – Kostenlose Erlebnisse im Sorsa-Tal, Cesena, Italien',
      fr: 'Experience Romagna – Expériences Gratuites dans la Vallée du Sorsa, Italie',
    },
    percorsi: {
      it: 'Percorsi Valle del Sorsa – Trekking, Vigneto, Cucina | Experience Romagna',
      en: 'Trails & Activities in the Sorsa Valley | Experience Romagna',
      de: 'Wege & Aktivitäten im Sorsa-Tal | Experience Romagna',
      fr: 'Parcours & Activités dans la Vallée du Sorsa | Experience Romagna',
    },
    occasioni: {
      it: 'Occasioni Speciali in Romagna – Famiglia, Coppia, Amici | Experience Romagna',
      en: 'Special Occasions in Romagna – Family, Couples, Friends | Experience Romagna',
      de: 'Besondere Anlässe in der Romagna | Experience Romagna',
      fr: 'Occasions Spéciales en Romagne | Experience Romagna',
    },
    missione: {
      it: 'La Nostra Missione – Peace and Good People ODV | Experience Romagna',
      en: 'Our Mission – Peace and Good People ODV | Experience Romagna',
      de: 'Unsere Mission – Peace and Good People ODV | Experience Romagna',
      fr: 'Notre Mission – Peace and Good People ODV | Experience Romagna',
    },
  }
};

function setLang(lang, page) {
  // Show/hide data-lang blocks
  document.querySelectorAll('[data-lang]').forEach(el => el.classList.remove('active'));
  document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => el.classList.add('active'));

  // Show/hide inline .il spans
  document.querySelectorAll('.il').forEach(el => el.classList.remove('active'));
  document.querySelectorAll(`[data-li="${lang}"]`).forEach(el => el.classList.add('active'));

  // Lang bar buttons
  document.querySelectorAll('.lang-bar button').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('btn-' + lang);
  if (btn) btn.classList.add('active');

  // Nav links text
  const navMap = {
    'nav-home': LANG_CONFIG.nav.home[lang],
    'nav-percorsi': LANG_CONFIG.nav.percorsi[lang],
    'nav-occasioni': LANG_CONFIG.nav.occasioni[lang],
    'nav-missione': LANG_CONFIG.nav.missione[lang],
    'nav-contatti': LANG_CONFIG.nav.contatti[lang],
  };
  Object.entries(navMap).forEach(([id, text]) => {
    document.querySelectorAll('.' + id).forEach(el => el.textContent = text);
  });

  // CTA buttons
  const cta1 = document.getElementById('cta1');
  const cta2 = document.getElementById('cta2');
  if (cta1) cta1.textContent = LANG_CONFIG.cta1[lang];
  if (cta2) cta2.textContent = LANG_CONFIG.cta2[lang];

  // WhatsApp button text
  const waText = document.querySelector('.wa-text');
  if (waText) waText.textContent = LANG_CONFIG.wa[lang];

  // Page title
  const pageKey = page || 'index';
  if (LANG_CONFIG.titles[pageKey]) {
    document.title = LANG_CONFIG.titles[pageKey][lang];
  }

  // HTML lang attribute
  document.documentElement.lang = lang;

  // Save preference
  localStorage.setItem('er_lang', lang);
}

function initLang(page) {
  const saved = localStorage.getItem('er_lang');
  const browser = navigator.language.substring(0, 2).toLowerCase();
  const supported = ['it', 'en', 'de', 'fr'];
  const lang = supported.includes(saved) ? saved
             : supported.includes(browser) ? browser
             : 'en';
  setLang(lang, page);
}

// === HAMBURGER MENU ===
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// Close menu on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (menu && hamburger && !menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
  }
});
