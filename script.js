// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Function to add new projects dynamically
function addProject(title, description) {
  const projectList = document.getElementById('project-list');
  const card = document.createElement('div');
  card.className = 'card';
  card.textContent = `${title} — ${description}`;
  projectList.appendChild(card);
}

// Theme toggling with persistence
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Initialize theme from localStorage or system preference
(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
})();

// Mobile menu toggle + auto-close on link click
function toggleMenu() {
  const nav = document.getElementById('primary-nav');
  const btn = document.querySelector('.menu-toggle');
  nav.classList.toggle('show');
  btn.setAttribute('aria-expanded', nav.classList.contains('show'));
}

// Close the menu when a nav link is clicked on small screens
document.querySelectorAll('#primary-nav a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 700) {
      const nav = document.getElementById('primary-nav');
      const btn = document.querySelector('.menu-toggle');
      nav.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});

// Optional: close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
  const nav = document.getElementById('primary-nav');
  const btn = document.querySelector('.menu-toggle');
  if (window.innerWidth <= 700 && nav.classList.contains('show')) {
    const clickInside = nav.contains(e.target) || btn.contains(e.target);
    if (!clickInside) {
      nav.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
    }
  }
});



// Multilingual content
const translations = {
  en: {

    
   brand:`
   
   Said • Portfolio
  
  
    `,
    
    
    menuToggle:`
   
   ☰ Menu
  
    `,
    
    themeToggle:`
    
    Toggle Theme
    
    `,
    
    
    
    about:`
    
            <h3 id="icon-about-text"><i class="fas fa-user"></i> About</h3>
    
    
    
    `,
    
    
    menuAbout:`
    
          <a href="#about" id="menu-about" ><i class="fas fa-user"></i> About</a>
      
    
    `,
    
    
    
    role: "Teacher • Aspiring Front-End Developer",
    

    
    intro:`
    
    
           <p id="intro">I'm <span id="highlightName">Said</span> (<span id="highlightName">سعيد</span>). I teach <span id="highlightWord">English</span> and <span id="highlightWord">Arabic</span> to young learners and I'm on a focused journey to become a professional <span id="highlightWord">front-end</span> developer.</p>
    
    `,
    
    
    
    born:`
    
     <p id="born">Born: <span id="highlightWord">July 29</span>, 1996 — Mauritania</p>
    
    `,
    
    
    

    
    experience:`
    
        <h3 id="icon-experience"><i class="fas fa-briefcase"></i> Experience</h3>
    
    
    `,
    
    menuExperience:`
    
    <a href="#experience" id="menu-experience" ><i class="fas fa-briefcase"></i> Experience</a>
    
    `,
    
    
    firstExperience:`
    
             
      
          <i class="fas fa-chalkboard-teacher"></i>
        <br />
          
          
          
          <span id="highlightName">Private Teacher</span> (English & Arabic) — Oct 7, 2022 – Ongoing
    
    
    `,
    
    secondExperience:`
    
          
            <i class="fas fa-chalkboard-teacher"></i>

        <br />
          
          
          <span id="highlightName">School English Teacher</span> — ElMokhtar Ould Daddah School (Oct 5, 2023 – Jun 28, 2024)
    
    `,
    
    
    
    thirdExperience:`
    
          
          <i class="fas fa-chalkboard-teacher"></i>
        <br />
          
          
          <span id="highlightName">School English Teacher</span> — ElAmana School (Oct 5, 2024 – Present)
          
    
    `,
    
    

    
    
    
    
    
    

    
    projects:`
    
        <h3 id="icon-projects"><i class="fas fa-folder-open"></i> Projects</h3>
    
    
    
    
    `,
    
    menuProjects:`
    
        <a href="#projects" id="menu-projects" > <i class="fas fa-folder-open"></i> Projects</a>
    
    `,
    
    
    firstProject:`
    
           <i id="saids-emoji-game" class="fas fa-gamepad"></i>
        <br />
          
          <span id="highlightName"> Said's Emoji Game </span> — Web puzzle game using emojis. [JavaScript <span id="langIcons"><i class="fab fa-js-square"></i> , HTML</span> <span id="langIcons"><i class="fab fa-html5"></i> , CSS</span> <span id="langIcons"><i class="fab fa-css3-alt"></i></span> ]
    `,
    
    
    

    
    
    education:`
    
    
        <h3 id="icon-education"><i class="fas fa-user-graduate"></i> Education</h3>
    
    
    `,
    
    menuEducation:`
    
        <a href="#education" id="menu-education" ><i class="fas fa-user-graduate"></i> Education</a>
      
    `,
    
    
    
    firstDiploma:`
    
             
      
          <i class="fas fa-certificate"></i>
        <br />
          
          
          <span id="highlightName">Entry to First Year Secondary</span> — Essabel Private School — 2011
         
    
    `,
    
    secondDiploma:`
    
             
      
          <i class="fas fa-certificate"></i>
        <br />
          
          
          <span id="highlightName">Secondary Studies Completion</span> — Essabel Private School — 2015
    
    `,
    
    thirdDiploma:`
    
              <i class="fas fa-certificate"></i>
        <br />
          
          <span id="highlightName">Baccalaureate</span> — Zemzem Private School — 2019
      

    `,
    
    
    fourthDiploma:`
    
          <i class="fas fa-certificate"></i>
        <br />
          
          <span id="highlightName">Professional License</span> — High Professional Institute of Languages and Translation, Nouadhibou — 2022

    `,
    
    
    
    
    
    
    
    
    

    
    contact:`
    
    
        <h3 id="icon-contact"><i class="fas fa-envelope"></i> Contact</h3>
    
    
    
    `,
    
    menuContact:`
    
  <a href="#contact" id="menu-contact"> <i class="fas fa-envelope" ></i> Contact</a>
    `,
    
    
    contactText: "I’d love to hear from you! Connect with me through any of the platforms below:",
    
    email:`
    
          <a id="link-email" href="mailto:medsaidmdelhachmy@gmail.com"><i class="fas fa-paper-plane"></i> Email</a>
    
    
    
    `,
    
    messenger:`
    
    <a id="link-messenger" href="https://m.me/100085293536874" target="_blank">
  <i class="fab fa-facebook-messenger"></i> Messenger
</a>
    
    
    `,
    
    
    whatsapp:`
    
    <a id="link-whatsapp" href="https://wa.me/22247324534" target="_blank">
  <i class="fab fa-whatsapp"></i> WhatsApp
</a>

    
    `,
    
    linkedin:`
    
      <a id="link-linkedin" href="https://www.linkedin.com/in/med-said-md-el-hachmy-639b71324" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
      

    
    `,
    
    
    github:`
    
      <a id="link-github" href="https://github.com/saidelhachmy" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      
      

    
    `,
    
    callMe:`
    
      <a id="link-call-me" href="tel:+22247324534">
  <i class="fas fa-phone"></i> Call Me
</a>
      

    
    `,
    
    
    
    
    
    
    
    footer: `
    <footer id="footer">
      © ${new Date().getFullYear()} Said ElHachmy. All rights reserved.
    </footer>
  `,
    
    
    
    
    
    
  },
  
  
  
  
  
  
  fr: {

    
    brand:`

   Said • Portfolio

`,


menuToggle:`

   ☰ Menu

`,



themeToggle:`
    
    Changer le thème
    
`,

    
    about:`
    
            <h3 id="icon-about-text"><i class="fas fa-user"></i> À propos</h3>
    
    
    
    `,
    
    menuAbout:`
    
          <a href="#about" id="menu-about"><i class="fas fa-user" ></i> À propos</a>
      
    
    `,
    
    
    
    role: "Enseignant • Développeur Front-End en devenir",
    

    
    intro:`
    
    
    
         <p id="intro">Je suis <span id="highlightName">Saïd</span> (<span id="highlightName">سعيد</span>).  J'enseigne <span id="highlightWord">l'anglais</span> et <span id="highlightWord">l'arabe</span> aux jeunes apprenants et je suis dans un parcours concentré pour devenir un développeur <span id="highlightWord">front-end</span> professionnel.</p>
    
    
    
    `,
    
    
    
    
    born: "Né le : 29 juillet 1996 — Mauritanie",
    
    
    born:`
    
    
      <p id="born">Né le : <span id="highlightWord">29 juillet</span> 1996 — Mauritanie</p>
    
    
    `,
    
    
    
    

    
    experience:`
    
        <h3 id="icon-experience"><i class="fas fa-briefcase"></i> Expérience</h3>
    
    
    `,
    
    
    menuExperience:`
    
    <a href="#experience" id="menu-experience" ><i class="fas fa-briefcase"></i> Expérience</a>
    
    `,
    
    
    firstExperience:`
    
             
      
          <i class="fas fa-chalkboard-teacher"></i>
        <br />
          
          
          
          <span id="highlightName">Professeur particulier</span> (Anglais & Arabe) — 7 oct. 2022 – En cours
    
    
    `,
    
    
    secondExperience:`
    
          
          <i class="fas fa-chalkboard-teacher"></i>
        <br />
          
          
          <span id="highlightName">Enseignant d’anglais à l’école</span> — École ElMokhtar Ould Daddah (5 oct. 2023 – 28 juin 2024)
    
    `,
    
    
    
    
    thirdExperience:`
    
          
          <i class="fas fa-chalkboard-teacher"></i>
        <br />
          
          
          <span id="highlightName">Enseignant d’anglais à l’école</span> — École ElAmana (5 oct. 2024 – Présent)
          
    
    `,
    
    

    
    projects:`
    
        <h3 id="icon-projects"><i class="fas fa-folder-open"></i> Projets</h3>
    
    
    
    `,
    menuProjects:`
    
        <a href="#projects" id="menu-projects"> <i class="fas fa-folder-open" ></i> Projets</a>
    
    `,
    
    firstProject:`
    
           <i id="saids-emoji-game" class="fas fa-gamepad"></i>
        <br />
          
          <span id="highlightName"> Said's Emoji Game </span> — Jeu de puzzle en ligne utilisant des émojis. [JavaScript <span id="langIcons"><i class="fab fa-js-square"></i> , HTML</span> <span id="langIcons"><i class="fab fa-html5"></i> , CSS</span> <span id="langIcons"><i class="fab fa-css3-alt"></i></span> ]
    `,
    
    
    
    

    education:`
    
    
        <h3 id="icon-education"><i class="fas fa-user-graduate"></i> Éducation</h3>
    
    
    `,
    
    menuEducation:`
    
        <a href="#education" id="menu-education" ><i class="fas fa-user-graduate"></i> Éducation</a>
      
    `,
    
    
    firstDiploma:`
    
             
      
          <i class="fas fa-certificate"></i>
        <br />
          
          
          <span id="highlightName">Admission en première année secondaire</span> — École privée Essabel — 2011
         
    
    `,
    
    secondDiploma:`
    
             
      
          <i class="fas fa-certificate"></i>
        <br />
          
          
          <span id="highlightName">Achèvement des études secondaires</span> — École privée Essabel — 2015
    
    `,
    
    thirdDiploma:`
    
              <i class="fas fa-certificate"></i>
        <br />
          
          <span id="highlightName">Baccalauréat</span> — École privée Zemzem — 2019
      

    `,
    
    
    fourthDiploma:`
    
          <i class="fas fa-certificate"></i>
        <br />
          
          <span id="highlightName">Licence Professionnelle</span> — Institut Supérieur Professionnel des Langues et de la Traduction, Nouadhibou — 2022

    `,
    
    
    
    
    
    

    contact:`
    
    
        <h3 id="icon-contact"><i class="fas fa-envelope"></i> Contact</h3>
    
    
    
    `,
    
    menuContact:`
    
  <a href="#contact" id="menu-contact"> <i class="fas fa-envelope"></i> Contact</a>
    `,
    
    
    contactText: "Je serais ravi de vous entendre ! Connectez-vous avec moi via l'une des plateformes ci-dessous :",
    
    email:`
    
          <a id="link-email" href="mailto:medsaidmdelhachmy@gmail.com"><i class="fas fa-paper-plane"></i> Email</a>
    
    
    
    `,
    
    messenger:`
    
    <a id="link-messenger" href="https://m.me/100085293536874" target="_blank">
  <i class="fab fa-facebook-messenger"></i> Messenger
</a>
    
    
    `,
    
    
    
    whatsapp:`
    
    <a id="link-whatsapp" href="https://wa.me/22247324534" target="_blank">
  <i class="fab fa-whatsapp"></i> WhatsApp
</a>

    
    `,
    
    linkedin:`
    
      <a id="link-linkedin" href="https://www.linkedin.com/in/med-said-md-el-hachmy-639b71324" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
      

    
    `,
    
    
    github:`
    
      <a id="link-github" href="https://github.com/saidelhachmy" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      
      

    
    `,
    
    
    callMe:`
    
      <a id="link-call-me" href="tel:+22247324534">
  <i class="fas fa-phone"></i> Appelez-moi
</a>
      

    
    `,
    
    
    
    
    
    
    
    footer: `
    <footer id="footer">
      © ${new Date().getFullYear()} Said ElHachmy. Tous droits réservés.
    </footer>
  `,
 
 
  },
  
  
  
  
  
  ar: {

    
    brand:`

   سعيد • معرض الأعمال

`,


menuToggle:`

   ☰ القائمة

`,


themeToggle:`

تبديل الوضع  
  
`,
    
    
    about:`
    
            <h3 id="icon-about-text"><i class="fas fa-user"></i> حول</h3>
    
    
    
    `,
    
    menuAbout:`
    
          <a href="#about" id="menu-about" ><i class="fas fa-user"></i> حول</a>
      
    
    `,
    
    role: "أستاذ • مطور واجهات أمامية طموح",
    

    
    intro:`
    
    
    
        <p id="intro">أنا <span id="highlightName">سعيد</span> (<span id="highlightName">Said</span>). أقوم بتدريس اللغة <span id="highlightWord">الإنجليزية</span> و <span id="highlightWord">العربية</span> للصغار وأنا في رحلة مركزة لأصبح مطور   <span id="highlightWord"> واجهات أمامية</span> محترف.</p>
    
    
    `,
    
    
    

   born:`
   
     <p id="born">تاريخ الميلاد: <span id="highlightWord">29 يوليو</span>، 1996 — موريتانيا</p>
   
   
   
   `,
   

    
    experience:`
    
        <h3 id="icon-experience"><i class="fas fa-briefcase"></i> الخبرة</h3>
    
    
    `,
    
    menuExperience:`
    
    <a href="#experience" id="menu-experience" ><i class="fas fa-briefcase"></i> الخبرة</a>
    
    `,
    
    
    
    firstExperience:`
    
             
      
          <i class="fas fa-chalkboard-teacher"></i>
        <br />
          
          
          
          <span id="highlightName">أستاذ خاص</span> (الإنجليزية & العربية) — 7 أكتوبر 2022 – مستمر
    
    
    `,
    
    
    secondExperience:`
    
          
            <i class="fas fa-chalkboard-teacher"></i>

        <br />
          
          
          <span id="highlightName">أستاذ لغة إنجليزية في المدرسة</span> — مدرسة المختار ولد داداه (5 أكتوبر 2023 – 28 يونيو 2024)
    
    `,
    
    
    thirdExperience:`
    
          
          <i class="fas fa-chalkboard-teacher"></i>
        <br />
          
          
          <span id="highlightName">أستاذ لغة إنجليزية في المدرسة</span> — مدرسة الأمانة (5 أكتوبر 2024 – حتى الآن)
          
    
    `,
    
    

    projects:`
    
        <h3 id="icon-projects"><i class="fas fa-folder-open"></i> المشاريع</h3>
    
    
    
    `,
    
    menuProjects:`
    
        <a href="#projects" id="menu-projects" > <i class="fas fa-folder-open"></i> المشاريع</a>
    
    `,
    
    firstProject:`
    
           <i id="saids-emoji-game" class="fas fa-gamepad"></i>
        <br />
          
          <span id="highlightName"> Said's Emoji Game </span> — لعبة ألغاز على الويب باستخدام الإيموجي. [JavaScript <span id="langIcons"><i class="fab fa-js-square"></i> , HTML</span> <span id="langIcons"><i class="fab fa-html5"></i> , CSS</span> <span id="langIcons"><i class="fab fa-css3-alt"></i></span> ]
    `,
    
    
    

    education:`
    
    
        <h3 id="icon-education"><i class="fas fa-user-graduate"></i> التعليم</h3>
    
    
    `,
    
    menuEducation:`
    
        <a href="#education" id="menu-education" ><i class="fas fa-user-graduate"></i> التعليم</a>
      
    `,
    
    firstDiploma:`
    
             
      
          <i class="fas fa-certificate"></i>
        <br />
          
          
          <span id="highlightName">الالتحاق بالسنة الأولى من الإعدادية</span> — مدرسة السبيل الخاصة — 2011
         
    
    `,
    
    secondDiploma:`
    
             
      
          <i class="fas fa-certificate"></i>
        <br />
          
          
          <span id="highlightName">ختم الدورس الإعدادية</span> — مدرسة السبيل الخاصة — 2015
    
    `,
    
    thirdDiploma:`
    
              <i class="fas fa-certificate"></i>
        <br />
          
          <span id="highlightName">شهادة البكالوريا</span> — مدرسة زمزم الخاصة — 2019
      

    `,
    
    fourthDiploma:`
    
          <i class="fas fa-certificate"></i>
        <br />
          
          <span id="highlightName">الليسانس المهنية</span> — المعهد العالي المهني للغات والترجمة، نواذيبو — 2022

    `,
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    contact:`
    
    
        <h3 id="icon-contact"><i class="fas fa-envelope"></i> تواصل</h3>
    
    
    
    `,
    
    menuContact:`
    
  <a href="#contact" id="menu-contact" > <i class="fas fa-envelope"></i> تواصل</a>
    `,
    
    
    contactText: "يسعدني التواصل معكم! تواصلوا معي عبر أي من المنصات أدناه:",
    
    email:`
    
          <a id="link-email" href="mailto:medsaidmdelhachmy@gmail.com"><i class="fas fa-paper-plane"></i> البريد الإلكتروني</a>
    
    
    
    `,
    
    messenger:`
    
    <a id="link-messenger" href="https://m.me/100085293536874" target="_blank">
  <i class="fab fa-facebook-messenger"></i> ماسنجر
</a>
    
    
    `,
    
    whatsapp:`
    
    <a id="link-whatsapp" href="https://wa.me/22247324534" target="_blank">
  <i class="fab fa-whatsapp"></i> واتساب
</a>

    
    `,
    
    
    linkedin:`
    
      <a id="link-linkedin" href="https://www.linkedin.com/in/med-said-md-el-hachmy-639b71324" target="_blank"><i class="fab fa-linkedin"></i> لينكدإن</a>
      

    
    `,
    
    
    github:`
    
      <a id="link-github" href="https://github.com/saidelhachmy" target="_blank"><i class="fab fa-github"></i> جيت هَب</a>
      
      

    
    `,
    
    
    callMe:`
    
      <a id="link-call-me" href="tel:+22247324534">
  <i class="fas fa-phone"></i> اتصلوا بي
</a>
      

    
    `,
    
    
    
    
    
    
    
    
    footer: `
    <footer id="footer">
      © ${new Date().getFullYear()} 
      سعيد الهاشمي. جميع الحقوق محفوظة.
    </footer>
  `,
 
 
  }
};

// Language switcher dropdown
const langBtn = document.querySelector('.lang-btn');
const langMenu = document.querySelector('.lang-menu');

// Toggle dropdown visibility
langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  langMenu.style.display = 'none';
});

// Apply selected language
langMenu.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    // Update content
    document.querySelector('#brand').textContent = translations[lang].brand;
    
    
    document.querySelector('#theme-toggle').textContent = translations[lang].themeToggle;
    
    
    document.querySelector('#menu-toggle').textContent = translations[lang].menuToggle;
    
    
    document.querySelector('#icon-about-text').innerHTML = translations[lang].about;
    
    document.querySelector('#menu-about').innerHTML = translations[lang].menuAbout;
    
    
    
    document.querySelector('#role').textContent = translations[lang].role;
    document.querySelector('#intro').innerHTML = translations[lang].intro;
    document.querySelector('#born').innerHTML = translations[lang].born;
    document.querySelector('#icon-experience').innerHTML = translations[lang].experience;
    
    document.querySelector('#menu-experience').innerHTML = translations[lang].menuExperience;
    
    
    document.querySelector('.first-Experience').innerHTML = translations[lang].firstExperience;
    
    
    
    
    document.querySelector('.second-Experience').innerHTML = translations[lang].secondExperience;
    
    
    
    
    
    document.querySelector('.third-Experience').innerHTML = translations[lang].thirdExperience;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    document.querySelector('#icon-projects').innerHTML = translations[lang].projects;
    
    document.querySelector('#menu-projects').innerHTML = translations[lang].menuProjects;
    
    document.querySelector('.first-Project').innerHTML = translations[lang].firstProject;
    
    
    
    document.querySelector('#icon-education').innerHTML = translations[lang].education;
    
    document.querySelector('#menu-education').innerHTML = translations[lang].menuEducation;
    
    
    document.querySelector('#first-Diploma').innerHTML = translations[lang].firstDiploma;
    
    
    document.querySelector('#second-Diploma').innerHTML = translations[lang].secondDiploma;
    
    
    document.querySelector('#third-Diploma').innerHTML = translations[lang].thirdDiploma;
    
    document.querySelector('#fourth-Diploma').innerHTML = translations[lang].fourthDiploma;
    
    
    
    
    
    
    
    
    
    
    
    document.querySelector('#icon-contact').innerHTML = translations[lang].contact;
    
    document.querySelector('#menu-contact').innerHTML = translations[lang].menuContact;
    
    
    document.querySelector('#contactCard').textContent = translations[lang].contactText;
    
    document.querySelector('#link-email').innerHTML = translations[lang].email;
    
    document.querySelector('#link-messenger').innerHTML = translations[lang].messenger;
    
    document.querySelector('#link-whatsapp').innerHTML = translations[lang].whatsapp;
    
    document.querySelector('#link-linkedin').innerHTML = translations[lang].linkedin;
    
    document.querySelector('#link-github').innerHTML = translations[lang].github;
    
    document.querySelector('#link-call-me').innerHTML = translations[lang].callMe;
    
    
    
    
    
    
    
    
    
    
    
    
    
    document.querySelector('#footer').innerHTML = translations[lang].footer;

    langMenu.style.display = 'none';
  });
});
