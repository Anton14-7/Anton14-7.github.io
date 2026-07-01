const languageToggle = document.getElementById("languageToggle");
const translatableElements = document.querySelectorAll("[data-en][data-es]");
const year = document.getElementById("year");
const projectGrid = document.getElementById("projectGrid");
const projectCount = document.getElementById("projectCount");
const filterButtons = document.querySelectorAll(".filter-btn");

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalMedia = document.getElementById("modalMedia");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");

let currentLanguage = "en";
let activeFilter = "all";
let activeProject = null;

const projects = [
  {
    id: "green-goblin-bomb",
    title: "Green Goblin Bomb",
    group: "fx",
    category: "Pyro + RBD Simulation",
    tools: "Houdini · Blender · Nuke",
    year: "2025",
    initials: "GGB",
    summary: {
      en: "A cinematic explosion sequence inspired by Spider-Man: No Way Home, combining RBD fracture, Pyro fire and compositing.",
      es: "Secuencia de explosión cinematográfica inspirada en Spider-Man: No Way Home, combinando fractura RBD, fuego con Pyro y composición."
    },
    details: {
      en: [
        "This project recreates an action sequence where a bomb falls, bounces, activates and explodes on a road. The goal was to combine simulation, staging, lighting and compositing into a cohesive VFX shot.",
        "The workflow included RBD fracture and DOP forces in Houdini, Pyro for the explosion and burning vehicles, scene staging in Blender and final compositing in Nuke.",
        "The project helped me understand how destruction, fire, camera perspective, lighting and compositing must work together to create a more convincing cinematic effect."
      ],
      es: [
        "Proyecto inspirado en una secuencia de Spider-Man: No Way Home, donde una bomba cae, rebota, se activa y explota en una carretera. El objetivo fue construir una escena de acción combinando simulación, staging, iluminación y composición.",
        "El flujo de trabajo incluyó fractura RBD y fuerzas dentro de Houdini, Pyro para la explosión y los carros en llamas, staging de la escena en Blender y composición final en Nuke.",
        "Este proyecto me permitió entender cómo la destrucción, el fuego, la perspectiva de cámara, la iluminación y la composición deben integrarse para construir un efecto cinematográfico más convincente."
      ]
    }
  },
  {
    id: "procedural-planet",
    title: "Procedural Planet",
    group: "fx",
    category: "Procedural Modeling",
    tools: "Houdini",
    year: "2026",
    initials: "PP",
    summary: {
      en: "A stylized procedural planet populated with assets distributed across painted regions and point-based systems.",
      es: "Planeta procedural estilizado poblado con assets distribuidos sobre regiones pintadas y sistemas basados en puntos."
    },
    details: {
      en: [
        "This university project focused on building a stylized planet through procedural distribution. The scene included flowers, animals, buildings, bridges and decorative assets placed around a spherical surface.",
        "The main technical goal was to use points, painted regions and controlled distribution to organize different ecosystems and visual areas without placing every object manually.",
        "The project helped me practice procedural modeling, asset scattering and art-directed distribution over a curved surface."
      ],
      es: [
        "Proyecto universitario enfocado en construir un planeta estilizado mediante distribución procedural. La escena incluye flores, animales, edificios, puentes y otros assets colocados alrededor de una superficie esférica.",
        "El objetivo técnico fue usar puntos, regiones pintadas y distribución controlada para organizar ecosistemas y zonas visuales sin colocar cada objeto manualmente.",
        "Este proyecto me ayudó a practicar modelado procedural, distribución de assets y control artístico sobre una superficie curva."
      ]
    }
  },
  {
    id: "greeble-city",
    title: "Greeble City",
    group: "fx",
    category: "Procedural Modeling",
    tools: "Houdini",
    year: "2026",
    initials: "GC",
    summary: {
      en: "A procedural sci-fi structure based on the greeble technique, using modular pieces distributed along a tube surface.",
      es: "Estructura procedural de ciencia ficción basada en la técnica greeble, usando piezas modulares distribuidas sobre una superficie tubular."
    },
    details: {
      en: [
        "This project explores the greeble technique used in science fiction surfaces and miniature design. I created a set of modular quadrangular pieces with different heights and details.",
        "The modules were distributed along a subdivided tube to create a dense futuristic surface with the feeling of a highly populated mechanical city.",
        "The result allowed me to practice modular design, procedural distribution and visual complexity through repetition and variation."
      ],
      es: [
        "Proyecto basado en la técnica greeble utilizada en superficies de ciencia ficción y diseño de miniaturas. Se crearon piezas modulares cuadrangulares con distintas alturas y detalles.",
        "Los módulos fueron distribuidos sobre un tubo subdividido para generar una superficie futurista densa, con sensación de ciudad mecánica sobrepoblada.",
        "El resultado me permitió practicar diseño modular, distribución procedural y complejidad visual mediante repetición y variación."
      ]
    }
  },
  {
    id: "pyro-stormtrooper",
    title: "Pyro Stormtrooper",
    group: "fx",
    category: "Pyro Simulation",
    tools: "Houdini · Maya · Nuke",
    year: "2025",
    initials: "PS",
    summary: {
      en: "A Pyro effect inspired by Heroes & Villains, using Stormtrooper models, source spread and compositing.",
      es: "Efecto Pyro inspirado en Heroes & Villains, usando modelos de Stormtroopers, source spread y composición."
    },
    details: {
      en: [
        "This project was inspired by the visual style of Metro Boomin’s Heroes & Villains album cover, reinterpreted with Stormtrooper models.",
        "The technical process involved preparing the models in Maya, creating a source spread effect in Houdini and using it as the basis for a Pyro simulation with wind control.",
        "The final sequence was rendered in Solaris and composited in Nuke, where I adjusted the background, dark green atmosphere, noise and grading."
      ],
      es: [
        "Proyecto inspirado en la estética del álbum Heroes & Villains de Metro Boomin, reinterpretado con modelos de Stormtroopers.",
        "El proceso técnico consistió en preparar los modelos en Maya, crear un efecto de source spread en Houdini y usarlo como base para una simulación Pyro con control de viento.",
        "La secuencia final fue renderizada en Solaris y compuesta en Nuke, donde se ajustó el fondo, la atmósfera verde oscura, el ruido y el grading."
      ]
    }
  },
  {
    id: "procedural-bridge",
    title: "Procedural Bridge",
    group: "fx",
    category: "Procedural Modeling",
    tools: "Houdini",
    year: "2026",
    initials: "PB",
    summary: {
      en: "A procedural modeling study using lines, resampling and copy-to-points workflows to build modular structures.",
      es: "Estudio de modelado procedural usando líneas, resample y copy to points para construir estructuras modulares."
    },
    details: {
      en: [
        "This project focused on procedural modeling through simple but flexible Houdini systems. Lines were used as guides, resampling created evenly spaced points and modular pieces were copied onto those points.",
        "The goal was to understand how structures can be generated and modified procedurally without rebuilding the model manually.",
        "Although the result was simple, the project helped me understand how modular systems can be reused for bridges, buildings, facades and other architectural elements."
      ],
      es: [
        "Proyecto enfocado en modelado procedural mediante sistemas simples pero flexibles dentro de Houdini. Se utilizaron líneas como guías, resample para crear puntos equidistantes y copy to points para distribuir piezas modulares.",
        "El objetivo fue entender cómo una estructura puede generarse y modificarse proceduralmente sin reconstruir el modelo de forma manual.",
        "Aunque el resultado fue sencillo, el proyecto me ayudó a comprender cómo los sistemas modulares pueden reutilizarse en puentes, edificios, fachadas y otros elementos arquitectónicos."
      ]
    }
  },
  {
    id: "rbd-pieces-simulation",
    title: "RBD Pieces Simulation",
    group: "fx",
    category: "RBD + Bullet Solver",
    tools: "Houdini",
    year: "2026",
    initials: "RBD",
    summary: {
      en: "A destruction study exploring RBD Material Fracture, Bullet Solver, forces and different material behaviors.",
      es: "Estudio de destrucción explorando RBD Material Fracture, Bullet Solver, fuerzas y distintos comportamientos de materiales."
    },
    details: {
      en: [
        "This project focused on simulating and rendering the destruction of different materials using Houdini’s RBD workflow.",
        "The process involved fracturing geometry with RBD Material Fracture, sending the pieces into a Bullet Solver and testing their response to different forces.",
        "It was an important foundation for later destruction projects because it helped me understand constraints, collisions, mass, friction and solver behavior."
      ],
      es: [
        "Proyecto enfocado en la simulación y renderizado de destrucción de distintos materiales usando el flujo RBD de Houdini.",
        "El proceso consistió en fracturar geometría con RBD Material Fracture, enviar las piezas a un Bullet Solver y probar su respuesta ante distintas fuerzas.",
        "Fue una base importante para proyectos posteriores de destrucción, ya que me ayudó a entender constraints, colisiones, masa, fricción y comportamiento del solver."
      ]
    }
  },
  {
    id: "logfire-simulation",
    title: "LogFire Simulation",
    group: "fx",
    category: "Pyro Simulation",
    tools: "Houdini",
    year: "2026",
    initials: "LF",
    summary: {
      en: "A basic Pyro fire study based on real footage of a campfire.",
      es: "Estudio básico de fuego con Pyro basado en footage real de una fogata."
    },
    details: {
      en: [
        "This project was a basic Houdini Pyro simulation focused on recreating the movement of a campfire from video reference.",
        "The work centered on emission sources, temperature, density, turbulence and dissipation, with the goal of creating an organic flame behavior.",
        "Although it was not taken to a final render stage, it helped me understand the foundations of fire simulation in Houdini."
      ],
      es: [
        "Simulación básica de Pyro en Houdini enfocada en recrear el movimiento de una fogata a partir de una referencia en video.",
        "El trabajo se centró en fuentes de emisión, temperatura, densidad, turbulencia y disipación para generar un comportamiento orgánico de las llamas.",
        "Aunque no se llevó a una etapa final de render, me ayudó a comprender los fundamentos de la simulación de fuego en Houdini."
      ]
    }
  },
  {
    id: "pirate-flag-simulation",
    title: "Pirate Flag Simulation",
    group: "fx",
    category: "Vellum + Pyro",
    tools: "Houdini · Nuke",
    year: "2025",
    initials: "PF",
    summary: {
      en: "A cloth simulation of a pirate flag using wind, constraints and dynamic motion.",
      es: "Simulación de tela de una bandera pirata usando viento, constraints y movimiento dinámico."
    },
    details: {
      en: [
        "This project focused on simulating a pirate flag reacting to wind. The goal was to create natural cloth motion while keeping part of the flag attached to its support.",
        "The setup explored subdivision, pinning constraints, wind force and material behavior to generate believable waves across the surface.",
        "It was useful for understanding how cloth simulation depends on geometry resolution, stiffness, anchoring and external forces."
      ],
      es: [
        "Proyecto enfocado en simular una bandera pirata reaccionando al viento. El objetivo fue crear movimiento natural de tela manteniendo parte de la bandera sujeta a su soporte.",
        "El setup exploró subdivisión, constraints de anclaje, fuerza de viento y comportamiento del material para generar ondas creíbles sobre la superficie.",
        "Fue útil para entender cómo una simulación de tela depende de la resolución de la geometría, rigidez, anclaje y fuerzas externas."
      ]
    }
  },
  {
    id: "statue-reveal-sim",
    title: "Statue Reveal Sim",
    group: "fx",
    category: "Vellum Simulation",
    tools: "Houdini · Blender",
    year: "2026",
    initials: "SR",
    summary: {
      en: "A Vellum cloth simulation where a draped blanket reveals a covered statue.",
      es: "Simulación Vellum donde una manta cubre y revela gradualmente una estatua."
    },
    details: {
      en: [
        "This project used Vellum to simulate a cloth covering a statue and reacting to wind in order to reveal the object underneath.",
        "The statue was used as collision geometry while the cloth was controlled through gravity, stiffness, friction and wind interaction.",
        "The project helped me practice cloth collisions, reveal animation and the balance between physical simulation and art direction."
      ],
      es: [
        "Proyecto realizado con Vellum para simular una manta que cubre una estatua y reacciona al viento hasta revelar el objeto debajo.",
        "La estatua funcionó como geometría de colisión, mientras que la tela fue controlada mediante gravedad, rigidez, fricción e interacción con viento.",
        "El proyecto me ayudó a practicar colisiones de tela, animación de revelado y el balance entre simulación física y dirección artística."
      ]
    }
  },
  {
    id: "abandoned-asylum",
    title: "Abandoned Asylum",
    group: "3d",
    category: "3D Environment Render",
    tools: "Blender · Mixamo",
    year: "2026",
    initials: "AA",
    summary: {
      en: "A horror environment inspired by abandoned asylums, liminal spaces and Batman: Arkham Asylum.",
      es: "Entorno de horror inspirado en asilos abandonados, espacios liminales y Batman: Arkham Asylum."
    },
    details: {
      en: [
        "This environment project explored horror, tension and liminal space design through modeling, asset dressing, lighting and camera composition.",
        "The scene was built around a long corridor with a strong vanishing point, warm lamps, darkness and a subtle red-eyed threat in the distance.",
        "The project focused on atmosphere, material wear, fog, depth of field and camera distortion to create a more immersive horror shot."
      ],
      es: [
        "Proyecto de entorno 3D enfocado en horror, tensión y diseño de espacios liminales mediante modelado, dressing de assets, iluminación y composición de cámara.",
        "La escena se construyó alrededor de un pasillo largo con un punto de fuga marcado, lámparas cálidas, oscuridad y una amenaza sutil con ojos rojos al fondo.",
        "El proyecto trabajó atmósfera, desgaste de materiales, fog, profundidad de campo y distorsión de cámara para generar una imagen más inmersiva."
      ]
    }
  },
  {
    id: "post-apocalyptic-cybercity",
    title: "Post-Apocalyptic CyberCity",
    group: "3d",
    category: "Hero Asset Modeling + Staging",
    tools: "Blender",
    year: "2026",
    initials: "PC",
    summary: {
      en: "A post-apocalyptic cyberpunk city environment built around a modular hero asset.",
      es: "Entorno cyberpunk postapocalíptico construido alrededor de un hero asset modular."
    },
    details: {
      en: [
        "This project was developed in Blender and focused on creating a post-apocalyptic cyberpunk city environment.",
        "My main asset was a large architectural module designed as a Chinese restaurant with windows, stairs and connections between levels.",
        "The scene combined modeled elements, kitbashing, external assets, AI-assisted background work and compositing to create cinematic shots."
      ],
      es: [
        "Proyecto desarrollado en Blender, enfocado en crear una ciudad postapocalíptica con estética cyberpunk.",
        "Mi asset principal fue un módulo arquitectónico diseñado como restaurante chino, con ventanas, escaleras y conexiones entre niveles.",
        "La escena combinó elementos modelados, kitbashing, assets externos, fondo asistido con IA y composición para construir shots cinematográficos."
      ]
    }
  },
  {
    id: "my-room",
    title: "My Room",
    group: "3d",
    category: "Real-Life Space Recreation",
    tools: "Maya · Arnold",
    year: "2025",
    initials: "MR",
    summary: {
      en: "A Maya modeling project based on real photographs of my room.",
      es: "Proyecto de modelado en Maya basado en fotografías reales de mi habitación."
    },
    details: {
      en: [
        "This project was based on photographs I took of my own room, with the goal of practicing proportion, observation and hard-surface modeling.",
        "I modeled elements such as the door frames, bed headboard, nightstands and furniture, including details like collectible figures.",
        "The final render was created in Arnold using simple materials that matched the real objects in color and general appearance."
      ],
      es: [
        "Proyecto basado en fotografías que tomé de mi propia habitación, con el objetivo de practicar proporción, observación y modelado hard-surface.",
        "Modelé elementos como marcos de puerta, cabecera de cama, burós y muebles, incluyendo detalles como figuras coleccionables.",
        "El render final se realizó en Arnold con materiales simples que se acercaran al color y apariencia general de los objetos reales."
      ]
    }
  },
  {
    id: "still-love",
    title: "Still Love",
    group: "film",
    category: "Short Film",
    tools: "Blender · Houdini · Maya · Rokoko · Premiere",
    year: "2025–2026",
    initials: "SL",
    summary: {
      en: "A short film developed over one year with 3D animation, mocap, VFX simulations and 2D shots.",
      es: "Cortometraje desarrollado durante un año con animación 3D, mocap, simulaciones VFX y shots 2D."
    },
    details: {
      en: [
        "Still Love is a short film developed by a team of four people over approximately one year, covering pre-production, production and post-production.",
        "My roles included original idea, direction, editing, VFX, lighting, sound design and compositing.",
        "The project strengthened my experience in directing, teamwork, cinematic storytelling, post-production and long-term project organization."
      ],
      es: [
        "Still Love es un cortometraje desarrollado por un equipo de cuatro personas durante aproximadamente un año, abarcando preproducción, producción y postproducción.",
        "Mis roles incluyeron idea original, dirección, edición, VFX, iluminación, diseño sonoro y composición.",
        "El proyecto fortaleció mi experiencia en dirección, trabajo en equipo, narrativa cinematográfica, postproducción y organización de proyectos de largo plazo."
      ]
    }
  },
  {
    id: "bagel",
    title: "Bagel",
    group: "film",
    category: "Short Film",
    tools: "Maya · 3ds Max · Houdini · Mixamo · Filmora",
    year: "2023",
    initials: "BG",
    summary: {
      en: "A 3D short film about grief, memory and the emotional bond between a person and his pet.",
      es: "Cortometraje 3D sobre el duelo, la memoria y el vínculo emocional entre una persona y su mascota."
    },
    details: {
      en: [
        "Bagel was developed over six months as a university short film project. The story was born from a teammate’s personal experience with the loss of a pet.",
        "My roles included directing, animatic, editing, surfacing, camera layout, rendering, VFX and compositing.",
        "It was one of my first projects with a more complete production approach, requiring us to learn and apply several pipeline areas during the same semester."
      ],
      es: [
        "Bagel fue desarrollado durante seis meses como cortometraje universitario. La historia nació a partir de la experiencia personal de una compañera con la pérdida de su mascota.",
        "Mis roles incluyeron dirección, animatic, edición, surfacing, camera layout, render, VFX y composición.",
        "Fue uno de mis primeros proyectos con un enfoque de producción más completo, donde tuvimos que aprender y aplicar varias áreas del pipeline durante el mismo semestre."
      ]
    }
  },
  {
    id: "batman-arkham-shaders",
    title: "Batman Arkham Shaders",
    group: "games",
    category: "Realtime Shaders",
    tools: "Unity",
    year: "2024",
    initials: "BAS",
    summary: {
      en: "A Unity shader project inspired by the Batman: Arkham games, including rain, wet surfaces, fire, neon and stylized lighting.",
      es: "Proyecto de shaders en Unity inspirado en Batman: Arkham, incluyendo lluvia, superficies mojadas, fuego, neón e iluminación estilizada."
    },
    details: {
      en: [
        "This project was developed for a videogame shaders class. The goal was to recreate visual effects inspired by the Batman: Arkham game series inside a Unity scene.",
        "My work focused on rain, wet surface behavior, scene assembly, artificial and natural lighting, sky atmosphere, car fire and a neon sign.",
        "The project was especially valuable because Unity and realtime shader workflows were outside my main comfort zone at the time."
      ],
      es: [
        "Proyecto desarrollado para una materia de shaders de videojuegos. El objetivo fue recrear efectos visuales inspirados en la saga Batman: Arkham dentro de una escena en Unity.",
        "Mi trabajo se enfocó en lluvia, comportamiento de superficies mojadas, armado de escena, iluminación artificial y natural, atmósfera del cielo, fuego en un coche y un letrero de neón.",
        "Fue especialmente valioso porque Unity y los flujos de shaders en tiempo real estaban fuera de mi zona principal de conocimiento en ese momento."
      ]
    }
  }
];

function setLanguage(language) {
  currentLanguage = language;

  translatableElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });

  languageToggle.textContent = language === "en" ? "ES" : "EN";
  document.documentElement.lang = language;

  renderProjects();
  if (activeProject) {
    openProject(activeProject.id);
  }
}

function getFilteredProjects() {
  if (activeFilter === "all") return projects;
  return projects.filter((project) => project.group === activeFilter);
}

function renderProjects() {
  const visibleProjects = getFilteredProjects();

  projectGrid.innerHTML = "";
  projectCount.textContent = visibleProjects.length;

  visibleProjects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "project-card";
    article.setAttribute("tabindex", "0");

    article.innerHTML = `
      <div class="project-thumb">
        <span>${project.initials}</span>
      </div>

      <div class="project-body">
        <p class="project-category">${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.summary[currentLanguage]}</p>

        <div class="project-meta">
          <span>${project.tools}</span>
          <span>${project.year}</span>
        </div>
      </div>
    `;

    article.addEventListener("click", () => openProject(project.id));
    article.addEventListener("keydown", (event) => {
      if (event.key === "Enter") openProject(project.id);
    });

    projectGrid.appendChild(article);
  });
}

function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  activeProject = project;

  modalMedia.innerHTML = `<span>${project.initials}</span>`;
  modalCategory.textContent = project.category;
  modalTitle.textContent = project.title;

  modalMeta.innerHTML = `
    <span>${project.tools}</span>
    <span>${project.year}</span>
  `;

  modalDescription.innerHTML = project.details[currentLanguage]
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeProject = null;
}

languageToggle.addEventListener("click", () => {
  const nextLanguage = currentLanguage === "en" ? "es" : "en";
  setLanguage(nextLanguage);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderProjects();
  });
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

year.textContent = new Date().getFullYear();

renderProjects();
