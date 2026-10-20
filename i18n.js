/* ==========================================================================
   i18n.js — Translation dictionary (EN default / ES)
   --------------------------------------------------------------------------
   Every translatable node in index.html carries a `data-i18n="key"` attribute
   (text content) or `data-i18n-attr="attr:key;attr:key"` (attributes such as
   aria-label — or the CV link's href/download, so each language serves its
   own PDF). Keys are flat, dot-namespaced by section.

   Technology names, badges and proper nouns are intentionally NOT translated
   and live directly in the HTML.

   Loaded as a plain script (not fetched JSON) so the site also works when
   opened from the local filesystem (file://).
   ========================================================================== */

window.I18N = {
  en: {
    /* ---- Document meta ---- */
    "meta.title": "Álvaro Zarzuela — Software Engineer & Founder of Valiware Loyalty",
    "meta.description":
      "Software engineer and founder of Valiware Loyalty: customer loyalty and retention for physical businesses, combining clone-resistant NFC hardware (NTAG 424 DNA, SUN) with autonomous multi-agent decision systems.",

    /* ---- Navigation ---- */
    "nav.skip": "Skip to content",
    "nav.about": "About",
    "nav.valiware": "Valiware Loyalty",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.menu": "Open menu",
    "nav.theme": "Toggle light / dark theme",
    "nav.lang": "Change language",

    /* ---- Hero ---- */
    "hero.status": "Building Valiware Loyalty · Pre-seed",
    "hero.lead":
      "Software Engineer & Founder @ Valiware Loyalty. Bridging clone-resistant NFC hardware with real-time distributed backends and autonomous multi-agent decision systems.",
    "hero.cta.cv": "Download CV",
    "hero.cv.file": "assets/CV%20-%20%C3%81lvaro%20Zarzuela%20-%20English.pdf",
    "hero.cv.name": "Alvaro-Zarzuela-CV-EN.pdf",
    "hero.cta.github": "GitHub Profile",
    "hero.cta.contact": "Get in Touch",
    "hero.meta.location": "Huelva, Spain · Remote-friendly",
    "hero.meta.study": "Final-year Computer Engineering",
    "hero.meta.cade": "Supported by CADE · Andalucía Emprende",
    "hero.photo": "Portrait of Álvaro Zarzuela",

    /* ---- About ---- */
    "about.eyebrow": "About",
    "about.title": "What drives me",
    "about.1.title": "Engineering with Purpose",
    "about.1.desc":
      "I believe in technical rigor and software craftsmanship: building resilient systems that deliver measurable value from day one.",
    "about.2.title": "The Entrepreneurial Drive",
    "about.2.desc":
      "My ambition is to build global-scale Deep Tech ventures from Southern Europe, proving that world-class engineering can solve tangible, real-economy problems.",
    "about.3.title": "Continuous Evolution",
    "about.3.desc":
      "My core driver is relentless curiosity and learning velocity. I treat every technical hurdle and business challenge as a vector to push past my own limits.",

    /* ---- Featured: Valiware Loyalty ---- */
    "vw.eyebrow": "Featured · Startup",
    "vw.private": "Private / Enterprise Core",
    "vw.title": "Autonomous Decision Systems & Physical Crypto-Verification",
    "vw.desc":
      "Full-stack customer loyalty and retention platform for physical businesses. Eliminates mobile app and plastic card friction through NXP NTAG 424 DNA chips with AES-128 SUN dynamic cryptographic verification. Built on Next.js, PostgreSQL/RLS, and Redis, integrating an autonomous decision-agent layer (in active development) designed to balance perishable capacity and maximize recurring customer lifetime value.",
    "vw.stage.label": "Stage",
    "vw.stage.value": "Pre-seed · Supported by CADE (Andalucía Emprende)",
    "vw.code.label": "Source",
    "vw.code.value": "Proprietary — closed-source intellectual property",
    "vw.tag.agents": "Decision agents (in development)",
    "vw.flow.title": "How it works",
    "vw.flow.1.title": "Physical tap",
    "vw.flow.1.desc":
      "The NTAG 424 DNA chip generates a SUN URL with an encrypted UID, a monotonic counter and an AES-128 CMAC.",
    "vw.flow.2.title": "Crypto verification",
    "vw.flow.2.desc":
      "The backend recomputes the CMAC and enforces counter monotonicity, rejecting cloned or replayed taps.",
    "vw.flow.3.title": "Event store",
    "vw.flow.3.desc":
      "Verified events land in PostgreSQL with row-level security; Redis handles hot state and rate limits.",
    "vw.flow.4.title": "Agent decisions",
    "vw.flow.4.desc":
      "An autonomous decision-agent layer (in active development) reasons over verified signals to act on capacity and retention in real time.",

    /* ---- Other projects ---- */
    "projects.eyebrow": "Open source",
    "projects.title": "Other projects",
    "projects.lead":
      "Public work from university and personal research. Each card links to its repository.",
    "projects.code": "View code",

    "p1.title": "AI Malware Triage & Reversing Orchestrator",
    "p1.desc":
      "LLM-assisted triage pipeline for suspicious executables: extracts SHA-256 and strings, requests a static diagnosis from Claude, and produces a Markdown report ready for a tier-1 analyst.",
    "p2.title": "Geospatial Algorithmic Optimizer",
    "p2.desc":
      "Closest-pair engine over TSPLIB datasets of up to 5,000 points. Benchmarks brute force, pruning and an improved divide-and-conquer, cutting complexity from O(n²) to O(n log n) with visual timing comparisons.",
    "p3.title": "Traffic Processing Engine",
    "p3.desc":
      "C++ engine for processing real traffic and speed-camera datasets, focused on data-structure efficiency, dynamic memory management and empirical performance benchmarking.",
    "p4.title": "Gym Management System",
    "p4.desc":
      "Desktop application for end-to-end management of a sports centre — members, instructors and activities — built on a strict Model-View-Controller architecture with Hibernate persistence.",

    /* ---- Skills ---- */
    "skills.eyebrow": "Stack",
    "skills.title": "Technical skills & tooling",
    "skills.lead": "The tools I use to build, secure and ship — grouped by domain.",
    "skills.crypto": "Hardware & Cryptography",
    "skills.security": "Software & Systems Security",
    "skills.backend": "Backend & Distributed Systems",
    "skills.ai": "Applied AI & LLM Integration",
    "skills.cloud": "Cloud & DevOps",
    "skills.langs": "Languages",
    "skills.tag.design": "Design patterns",
    "skills.tag.static": "Static malware analysis",
    "skills.tag.hardening": "Linux hardening",
    "skills.tag.netsec": "Network security (TCP/IP)",
    "skills.tag.vuln": "Vulnerability analysis",
    "skills.tag.appcrypto": "Applied cryptography",
    "skills.tag.agents": "LLM pipelines",
    "skills.tag.tools": "Tool / function calling",
    "skills.tag.replay": "Anti-replay counters",

    /* ---- Education ---- */
    "edu.eyebrow": "Background",
    "edu.title": "Education & background",
    "edu.degree.title": "BSc in Computer Engineering",
    "edu.degree.track": "Software Engineering track",
    "edu.degree.school": "University of Huelva, Spain",
    "edu.degree.date": "2023 — 2027 (expected)",
    "edu.degree.status": "Final-year student",
    "edu.tfg.label": "Final-year thesis (in progress)",
    "edu.tfg.desc":
      "Design of a cryptographic verification architecture and real-time event pipeline for physical-world interactions — the research foundation of Valiware Loyalty.",
    "edu.cade.title": "CADE Network · Andalucía Emprende",
    "edu.cade.desc":
      "Valiware Loyalty is supported by the Andalusian Entrepreneurship Centre network (CADE) during its pre-seed stage.",
    "edu.training.title": "Additional training",
    "edu.t1.title": "Hack4u Academy",
    "edu.t1.desc": "Hands-on security labs: building and exploiting vulnerable environments.",
    "edu.t2.title": "Cyber BotCamp Málaga",
    "edu.t2.desc": "Workshops and CTF challenges on vulnerability analysis, defensive security and incident response.",
    "edu.t3.title": "IBM SkillsBuild — Cybersecurity",
    "edu.t3.desc": "Professional certificate in cybersecurity fundamentals.",
    "edu.t3.date": "Ongoing",
    "edu.t4.title": "English — B2",
    "edu.t4.desc": "360º LPT Certificate. Native Spanish speaker.",

    /* ---- Contact / Footer ---- */
    "contact.title": "Get in Touch",
    "contact.lead":
      "Interested in Valiware Loyalty, technical collaborations, or new opportunities? Feel free to reach out directly.",
    "contact.email": "Email me",
    "footer.rights": "All rights reserved.",
  },

  es: {
    /* ---- Document meta ---- */
    "meta.title": "Álvaro Zarzuela — Ingeniero de Software y fundador de Valiware Loyalty",
    "meta.description":
      "Ingeniero de software y fundador de Valiware Loyalty: fidelización y retención de clientes para negocios físicos, combinando hardware NFC anticlonación (NTAG 424 DNA, SUN) con sistemas de decisión autónomos multi-agente.",

    /* ---- Navigation ---- */
    "nav.skip": "Saltar al contenido",
    "nav.about": "Sobre mí",
    "nav.valiware": "Valiware Loyalty",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.education": "Formación",
    "nav.contact": "Contacto",
    "nav.menu": "Abrir menú",
    "nav.theme": "Cambiar tema claro / oscuro",
    "nav.lang": "Cambiar idioma",

    /* ---- Hero ---- */
    "hero.status": "Construyendo Valiware Loyalty · Pre-seed",
    "hero.lead":
      "Ingeniero de Software y Fundador en Valiware Loyalty. Conectando hardware NFC anticlonación con backends distribuidos en tiempo real y sistemas de decisión autónomos multi-agente.",
    "hero.cta.cv": "Descargar CV",
    "hero.cv.file": "assets/CV%20-%20%C3%81lvaro%20Zarzuela.pdf",
    "hero.cv.name": "Alvaro-Zarzuela-CV-ES.pdf",
    "hero.cta.github": "Perfil de GitHub",
    "hero.cta.contact": "Contactar",
    "hero.meta.location": "Huelva, España · Disponible en remoto",
    "hero.meta.study": "Último curso de Ingeniería Informática",
    "hero.meta.cade": "Apoyado por CADE · Andalucía Emprende",
    "hero.photo": "Retrato de Álvaro Zarzuela",

    /* ---- About ---- */
    "about.eyebrow": "Sobre mí",
    "about.title": "Lo que me mueve",
    "about.1.title": "Ingeniería con propósito",
    "about.1.desc":
      "Creo en el rigor técnico y en la artesanía del software: construir cosas que no se rompan y que aporten valor medible desde el primer despliegue.",
    "about.2.title": "Ambición empresarial",
    "about.2.desc":
      "Aspiro a liderar proyectos Deep Tech con visión global, demostrando que desde el sur de Europa se puede competir al máximo nivel tecnológico con soluciones útiles para la economía real.",
    "about.3.title": "Crecimiento y disciplina",
    "about.3.desc":
      "Mi mayor motivación es la autocrítica y la velocidad de aprendizaje. Cada reto técnico y de mercado es una oportunidad para aprender más rápido y superar mis propios límites.",

    /* ---- Featured: Valiware Loyalty ---- */
    "vw.eyebrow": "Destacado · Startup",
    "vw.private": "Private / Enterprise Core",
    "vw.title": "Sistemas de decisión autónomos y verificación criptográfica física",
    "vw.desc":
      "Plataforma integral de fidelización y retención de clientes físicos de alta recurrencia. Elimina la fricción de apps y tarjetas plásticas mediante chips NXP NTAG 424 DNA con verificación criptográfica dinámica AES-128 SUN. Combina una arquitectura cloud distribuida (Next.js, PostgreSQL/RLS, Redis) con una capa de agentes de decisión autónomos (en desarrollo activo) orientada a balancear la capacidad ociosa y dinamizar la relación comercial.",
    "vw.stage.label": "Fase",
    "vw.stage.value": "Pre-seed · Apoyado por CADE (Andalucía Emprende)",
    "vw.code.label": "Código",
    "vw.code.value": "Propietario — propiedad intelectual cerrada",
    "vw.tag.agents": "Agentes de decisión (en desarrollo)",
    "vw.flow.title": "Cómo funciona",
    "vw.flow.1.title": "Lectura física",
    "vw.flow.1.desc":
      "El chip NTAG 424 DNA genera una URL SUN con UID cifrado, contador monotónico y CMAC AES-128.",
    "vw.flow.2.title": "Verificación criptográfica",
    "vw.flow.2.desc":
      "El backend recalcula el CMAC y exige que el contador sea creciente, rechazando lecturas clonadas o repetidas.",
    "vw.flow.3.title": "Almacén de eventos",
    "vw.flow.3.desc":
      "Los eventos verificados se guardan en PostgreSQL con seguridad a nivel de fila; Redis gestiona el estado en caliente y los límites.",
    "vw.flow.4.title": "Decisiones de agentes",
    "vw.flow.4.desc":
      "Una capa de agentes de decisión autónomos (en desarrollo activo) razona sobre señales verificadas para actuar en tiempo real sobre aforo y retención.",

    /* ---- Other projects ---- */
    "projects.eyebrow": "Código abierto",
    "projects.title": "Otros proyectos",
    "projects.lead":
      "Trabajo público de la universidad y de investigación personal. Cada tarjeta enlaza a su repositorio.",
    "projects.code": "Ver código",

    "p1.title": "Orquestador de triaje y reversing de malware con IA",
    "p1.desc":
      "Pipeline de triaje asistido por LLM para ejecutables sospechosos: extrae el hash SHA-256 y las cadenas, solicita un diagnóstico estático a Claude y genera un informe en Markdown listo para un analista de nivel 1.",
    "p2.title": "Optimizador algorítmico geoespacial",
    "p2.desc":
      "Motor de par más cercano sobre conjuntos TSPLIB de hasta 5.000 puntos. Compara fuerza bruta, poda y un divide y vencerás mejorado, reduciendo la complejidad de O(n²) a O(n log n) con comparativas visuales de tiempos.",
    "p3.title": "Motor de procesamiento de tráfico",
    "p3.desc":
      "Motor en C++ para procesar datos reales de tráfico y radares, centrado en la eficiencia de estructuras de datos, la gestión de memoria dinámica y el benchmarking empírico.",
    "p4.title": "Sistema de gestión de gimnasio",
    "p4.desc":
      "Aplicación de escritorio para la gestión integral de un centro deportivo (socios, monitores y actividades), construida sobre una arquitectura Modelo-Vista-Controlador estricta con persistencia en Hibernate.",

    /* ---- Skills ---- */
    "skills.eyebrow": "Stack",
    "skills.title": "Habilidades técnicas y herramientas",
    "skills.lead": "Las herramientas con las que construyo, aseguro y despliego, agrupadas por dominio.",
    "skills.crypto": "Hardware y criptografía",
    "skills.security": "Seguridad de software y sistemas",
    "skills.backend": "Backend y sistemas distribuidos",
    "skills.ai": "IA aplicada e integración de LLMs",
    "skills.cloud": "Cloud y DevOps",
    "skills.langs": "Lenguajes",
    "skills.tag.design": "Patrones de diseño",
    "skills.tag.static": "Análisis estático de malware",
    "skills.tag.hardening": "Bastionado de Linux",
    "skills.tag.netsec": "Seguridad de redes (TCP/IP)",
    "skills.tag.vuln": "Análisis de vulnerabilidades",
    "skills.tag.appcrypto": "Criptografía aplicada",
    "skills.tag.agents": "Pipelines con LLMs",
    "skills.tag.tools": "Tool / function calling",
    "skills.tag.replay": "Contadores anti-replay",

    /* ---- Education ---- */
    "edu.eyebrow": "Trayectoria",
    "edu.title": "Formación y trayectoria",
    "edu.degree.title": "Grado en Ingeniería Informática",
    "edu.degree.track": "Mención en Ingeniería del Software",
    "edu.degree.school": "Universidad de Huelva, España",
    "edu.degree.date": "2023 — 2027 (previsto)",
    "edu.degree.status": "Estudiante de último curso",
    "edu.tfg.label": "Trabajo Fin de Grado (en desarrollo)",
    "edu.tfg.desc":
      "Diseño de una arquitectura de verificación criptográfica y un pipeline de eventos en tiempo real para interacciones en el mundo físico: la base de investigación de Valiware Loyalty.",
    "edu.cade.title": "Red CADE · Andalucía Emprende",
    "edu.cade.desc":
      "Valiware Loyalty cuenta con el apoyo de la red de Centros Andaluces de Emprendimiento (CADE) en su fase pre-seed.",
    "edu.training.title": "Formación complementaria",
    "edu.t1.title": "Hack4u Academy",
    "edu.t1.desc": "Laboratorios prácticos de seguridad: montaje y explotación de entornos vulnerables.",
    "edu.t2.title": "Cyber BotCamp Málaga",
    "edu.t2.desc": "Talleres y retos CTF de análisis de vulnerabilidades, seguridad defensiva y respuesta ante incidentes.",
    "edu.t3.title": "IBM SkillsBuild — Ciberseguridad",
    "edu.t3.desc": "Certificado profesional en fundamentos de ciberseguridad.",
    "edu.t3.date": "En curso",
    "edu.t4.title": "Inglés — B2",
    "edu.t4.desc": "360º LPT Certificate. Español nativo.",

    /* ---- Contact / Footer ---- */
    "contact.title": "Contacto",
    "contact.lead":
      "¿Interesado en Valiware Loyalty, colaboraciones tecnológicas o nuevas oportunidades? Envíame un correo directo.",
    "contact.email": "Escríbeme",
    "footer.rights": "Todos los derechos reservados.",
  },
};
