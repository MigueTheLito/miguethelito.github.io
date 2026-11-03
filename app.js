'use strict';

const spanish = {
  skip:'Ir al contenido',navWork:'Proyectos',navNow:'En desarrollo',navAbout:'Sobre mí',navContact:'Contacto',downloadCV:'Descargar CV ↗',
  heroEyebrow:'DESARROLLADOR DE VIDEOJUEGOS · UNITY / C#',heroTitle:'Hago que jugar<br><span>se sienta bien.</span>',
  heroIntro:'Movimiento de personajes. Cámaras. Sistemas de gameplay. Transformo ideas en experiencias jugables, una iteración a la vez.',
  explore:'Explorar proyectos',getInTouch:'Contactame',location:'Rosario, Argentina · Abierto a oportunidades remotas',playablePreview:'PROYECTOS JUGABLES',viewProject:'Ver proyecto ↗',
  actualCaptures:'Capturas reales de mis proyectos publicados',focusLabel:'MI ENFOQUE',focusMovement:'Movimiento de personajes',focusCamera:'Comportamiento de cámaras',focusGameplay:'Sistemas de gameplay',focusMultiplayer:'Prototipos multijugador',
  workEyebrow:'DEL PROTOTIPO AL JUEGO',workTitle:'Proyectos <span>seleccionados.</span>',workIntro:'Juegos pequeños. Sistemas reales.<br>Una selección de proyectos jugables de mi recorrido como desarrollador.',
  tagTeam:'PROYECTO EN EQUIPO',tagStealth:'SIGILO / ACCIÓN',tagPrototype:'PROTOTIPO',tagTyping:'ESCRITURA / COMBATE',tagAcademic:'PROYECTO ACADÉMICO',
  sigiloShort:'Un prototipo de sigilo con interacción del jugador y cambios de perspectiva de cámara.',typingShort:'Un prototipo de mazmorras donde escribir es tu forma de combatir.',calamarinoShort:'Una pequeña aventura de plataformas. Movete, saltá y ayudá a Calamarino a llegar a la meta.',
  exploreProject:'Explorar proyecto',allItch:'Todos mis proyectos publicados en itch.io',
  benchEyebrow:'DETRÁS DEL GAMEPLAY',benchTitle:'En la mesa <span>de trabajo.</span>',benchIntro:'Una mirada a lo que estoy construyendo<br>y los sistemas en los que trabajo.',internship:'PASANTÍA UTN',inProgress:'En desarrollo',
  bossaIntro:'Gameplay, mecánicas 3C y prototipos online, desarrollados en colaboración con el equipo de mi pasantía.',
  characterTitle:'Movimiento del personaje',characterText:'Trabajo en saltos y dash, prestando atención a cómo responde el personaje durante el juego.',
  cameraTitle:'Cámara y colisiones',cameraText:'Seguimiento de cámara y respuestas a colisiones, conectando el movimiento con la vista del jugador.',
  networkTitle:'Multijugador y físicas',networkText:'Prototipos online con Netcode for GameObjects y sincronización de jugadores y objetos físicos.',
  bossaNote:'Bossaball todavía no está en mi portfolio público. Estoy completando la pasantía en el proyecto y planeo compartirlo en itch.io poco después de finalizarla.',
  piratasText:'Demos de plataformas de salto con manejo de colisiones e interacciones con objetos que causan daño.',developmentWork:'Trabajo de desarrollo',
  aboutEyebrow:'EL DESARROLLADOR DETRÁS DE LOS PROYECTOS',aboutTitle:'Hola, soy Miguel.<br><span>Hagamos que funcione.</span>',
  aboutLead:'Desarrollador de videojuegos en Rosario, Argentina, con un enfoque práctico: construir, probar y mejorar.',
  aboutBody:'Desarrollo gameplay con Unity y C#, trabajo con Blueprints en Unreal Engine e incorporo pruebas funcionales al proceso. Mi experiencia reúne proyectos académicos, personales y colaborativos, además de mi pasantía actual de UTN.',
  toolkitTitle:'Mis herramientas',educationTitle:'Siempre aprendiendo',educationText:'Tecnicatura Universitaria en Desarrollo y Producción de Videojuegos — UTN FRBA. Etapa final, con finalización prevista para diciembre de 2026.',
  collabTitle:'Listo para colaborar',collabText:'Español nativo · Inglés C2 certificado por EF SET.<br>Disponible para trabajo remoto desde Argentina y oportunidades presenciales o híbridas en Rosario.',
  testingTitle:'Una mirada de testing',testingText:'Pruebas funcionales, pasos claros de reproducción, resultados esperados y evidencia. Me importa cómo se comporta una mecánica después de implementarla.',
  available:'ABIERTO A OPORTUNIDADES EN VIDEOJUEGOS',contactTitle:'Hagamos algo<br>que se pueda <span>jugar.</span>',copyEmail:'Copiar correo',viewResume:'Ver CV ↗',footerText:'Los detalles hacen que jugar se sienta bien.',backTop:'Volver arriba ↑',overview:'Sobre el proyecto',controls:'Controles',openItch:'Abrir en itch.io',
};
const english = {};
document.querySelectorAll('[data-i18n]').forEach(el => { english[el.dataset.i18n] = el.innerHTML; });

const projects = {
  calamarino:{
    title:'Calamarino', url:'https://konamigue.itch.io/calamarino',
    images:['assets/calamarino-cover.webp'],
    en:{category:'ACADEMIC PROJECT / 2D PLATFORMER',kind:'2D PLATFORMER',summary:'A short platforming adventure above the sea.',description:'A university project about helping Calamarino reach the goal. The downloadable Windows prototype features pixel art platforms, movement and jumping.',controls:'W / A / S / D — Movement<br>Space — Jump',alt:'Calamarino: a pink pixel art character on platforms above the sea'},
    es:{category:'PROYECTO ACADÉMICO / PLATAFORMAS 2D',kind:'PLATAFORMAS 2D',summary:'Una pequeña aventura de plataformas sobre el mar.',description:'Un proyecto universitario en el que ayudás a Calamarino a llegar a la meta. El prototipo descargable para Windows combina plataformas pixel art, movimiento y saltos.',controls:'W / A / S / D — Movimiento<br>Espacio — Saltar',alt:'Calamarino: un personaje rosa pixel art sobre plataformas encima del mar'}
  },
  sigilo:{
    title:'Operación Sigilo',url:'https://konamigue.itch.io/operacion-sigilo',
    images:['assets/operacion-sigilo-screen-6.webp','assets/operacion-sigilo-screen-2.webp','assets/operacion-sigilo-screen-3.webp','assets/operacion-sigilo-screen-5.webp','assets/operacion-sigilo-screen-4.webp'],
    en:{category:'TEAM PROJECT / STEALTH PROTOTYPE',kind:'STEALTH / ACTION',summary:'A stealth prototype with player interaction and multiple camera perspectives.',description:'A small-group academic project created for Video Game Engines 1 as part of the Video Game Development and Production degree. The work-in-progress build is available on itch.io.',controls:'W / A / S / D — Move<br>E — Interact<br>C — Change camera mode<br>← / → — Switch cameras<br>Mouse — Camera control',alt:'Operación Sigilo gameplay showing a character, stealth environments and camera perspectives'},
    es:{category:'PROYECTO EN EQUIPO / PROTOTIPO DE SIGILO',kind:'SIGILO / ACCIÓN',summary:'Un prototipo de sigilo con interacción y múltiples perspectivas de cámara.',description:'Un proyecto académico realizado en un pequeño grupo para la materia Motores de Videojuegos 1 de la Tecnicatura en Desarrollo y Producción de Videojuegos. La versión en desarrollo está disponible en itch.io.',controls:'W / A / S / D — Movimiento<br>E — Interactuar<br>C — Cambiar modo de cámara<br>← / → — Cambiar cámaras<br>Mouse — Controlar la cámara',alt:'Gameplay de Operación Sigilo con un personaje, escenarios de sigilo y perspectivas de cámara'}
  },
  typing:{
    title:'Typing Crawler',url:'https://konamigue.itch.io/typong-c',
    images:['assets/typing-crawler-screen-2.webp','assets/typing-crawler-screen-1.webp'],
    en:{category:'ACADEMIC PROTOTYPE / WINDOWS',kind:'TYPING / COMBAT',summary:'A dungeon prototype where the keyboard becomes your weapon.',description:'Created for Programming 2, this prototype turns typing into a combat interaction: enter words with the keyboard to damage enemies. The published Windows build is available to download on itch.io.',controls:'Keyboard — Type to damage enemies<br>Mouse — Menu interaction',alt:'Typing Crawler gameplay: a torch-lit dungeon with enemies and words to type'},
    es:{category:'PROTOTIPO ACADÉMICO / WINDOWS',kind:'ESCRITURA / COMBATE',summary:'Un prototipo de mazmorras donde el teclado es tu arma.',description:'Creado para Programación 2, este prototipo transforma la escritura en una interacción de combate: tipeás palabras con el teclado para hacer daño a los enemigos. La versión para Windows se puede descargar en itch.io.',controls:'Teclado — Tipear para dañar enemigos<br>Mouse — Interactuar en el menú',alt:'Gameplay de Typing Crawler: una mazmorra con antorchas, enemigos y palabras para tipear'}
  }
};

let language = 'en';
try { if (localStorage.getItem('mf-portfolio-language') === 'es') language = 'es'; } catch {}
let heroIndex = 0;
const heroKeys = ['calamarino','sigilo','typing'];
let currentProject = null;
let galleryIndex = 0;
const dialog = document.querySelector('#project-dialog');
const languageButton = document.querySelector('#language');

function updateHero(){
  const project = projects[heroKeys[heroIndex]];
  const copy = project[language];
  const image = document.querySelector('#hero-image');
  image.src = project.images[0]; image.alt = copy.alt;
  document.querySelector('#hero-count').textContent = `${String(heroIndex+1).padStart(2,'0')} / 03`;
  document.querySelector('#hero-kind').textContent = copy.kind;
  document.querySelector('#hero-project').textContent = project.title;
  document.querySelector('#hero-open').setAttribute('aria-label',`${language==='en'?'Explore':'Explorar'} ${project.title}`);
}

function updateGallery(){
  if(!currentProject) return;
  const project = projects[currentProject];
  const image = document.querySelector('#dialog-image');
  image.src = project.images[galleryIndex];
  image.alt = `${project[language].alt} (${galleryIndex+1}/${project.images.length})`;
  document.querySelector('#gallery-count').textContent = `${String(galleryIndex+1).padStart(2,'0')} / ${String(project.images.length).padStart(2,'0')}`;
  document.querySelector('#gallery-prev').disabled = project.images.length === 1;
  document.querySelector('#gallery-next').disabled = project.images.length === 1;
}

function updateDialog(){
  if(!currentProject) return;
  const project = projects[currentProject], copy = project[language];
  document.querySelector('#dialog-category').textContent = copy.category;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-summary').textContent = copy.summary;
  document.querySelector('#dialog-description').textContent = copy.description;
  document.querySelector('#dialog-controls').innerHTML = copy.controls;
  document.querySelector('#dialog-link').href = project.url;
  updateGallery();
}

function setLanguage(next){
  language = next;
  const copy = language === 'es' ? spanish : english;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = copy[el.dataset.i18n] || english[el.dataset.i18n]; });
  document.documentElement.lang = language;
  languageButton.innerHTML = `${language.toUpperCase()} <span>↓</span>`;
  languageButton.setAttribute('aria-label',language==='en'?'Cambiar a español':'Switch to English');
  document.querySelector('.menu-toggle').setAttribute('aria-label',language==='en'?'Toggle navigation':'Abrir o cerrar navegación');
  document.querySelector('.dialog-close').setAttribute('aria-label',language==='en'?'Close project':'Cerrar proyecto');
  document.querySelector('#hero-prev').setAttribute('aria-label',language==='en'?'Previous project':'Proyecto anterior');
  document.querySelector('#hero-next').setAttribute('aria-label',language==='en'?'Next project':'Proyecto siguiente');
  document.querySelector('#gallery-prev').setAttribute('aria-label',language==='en'?'Previous screenshot':'Captura anterior');
  document.querySelector('#gallery-next').setAttribute('aria-label',language==='en'?'Next screenshot':'Captura siguiente');
  document.querySelectorAll('[data-project]').forEach(el=>el.setAttribute('aria-label',`${language==='en'?'Explore':'Explorar'} ${projects[el.dataset.project].title}`));
  try { localStorage.setItem('mf-portfolio-language',language); } catch {}
  updateHero();updateDialog();
}

function openProject(key){
  currentProject = key;galleryIndex = 0;updateDialog();
  dialog.showModal();document.body.classList.add('modal-open');
}
document.querySelectorAll('[data-project]').forEach(el => el.addEventListener('click',()=>openProject(el.dataset.project)));
document.querySelector('#hero-open').addEventListener('click',()=>openProject(heroKeys[heroIndex]));
document.querySelector('#hero-prev').addEventListener('click',()=>{heroIndex=(heroIndex+2)%3;updateHero();});
document.querySelector('#hero-next').addEventListener('click',()=>{heroIndex=(heroIndex+1)%3;updateHero();});
languageButton.addEventListener('click',()=>setLanguage(language==='en'?'es':'en'));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
dialog.addEventListener('click',event=>{
  const box=dialog.getBoundingClientRect();
  if(event.target===dialog && (event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)) dialog.close();
});
function nextScreenshot(delta){
  if(!currentProject) return;
  const count=projects[currentProject].images.length;
  galleryIndex=(galleryIndex+delta+count)%count;updateGallery();
}
document.querySelector('#gallery-prev').addEventListener('click',()=>nextScreenshot(-1));
document.querySelector('#gallery-next').addEventListener('click',()=>nextScreenshot(1));
dialog.addEventListener('keydown',event=>{
  if(event.key==='ArrowLeft'){event.preventDefault();nextScreenshot(-1);}
  if(event.key==='ArrowRight'){event.preventDefault();nextScreenshot(1);}
});
const menuToggle=document.querySelector('#menu-toggle'), menu=document.querySelector('#mobile-menu');
menuToggle.addEventListener('click',()=>{const expanded=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-expanded',String(!expanded));menu.hidden=expanded;});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.hidden=true;menuToggle.setAttribute('aria-expanded','false');}));
window.matchMedia('(min-width:801px)').addEventListener('change',event=>{if(event.matches){menu.hidden=true;menuToggle.setAttribute('aria-expanded','false');}});

document.querySelector('#copy-email').addEventListener('click',async()=>{
  const button=document.querySelector('#copy-email'), status=document.querySelector('#copy-status');
  try{
    if(!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('migue.angelko@gmail.com');
    button.textContent=language==='en'?'Email copied ✓':'Correo copiado ✓';
    status.textContent=language==='en'?'Email address copied to clipboard':'Correo copiado al portapapeles';
  }catch{
    button.textContent=language==='en'?'Select the email above to copy':'Seleccioná el correo de arriba para copiarlo';
    status.textContent=button.textContent;
  }
});
setLanguage(language);
