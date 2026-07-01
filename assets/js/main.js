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
    thumb: "assets/img/green-goblin-bomb-thumb.jpg",
    summary: {
      en: "A cinematic explosion sequence inspired by Spider-Man: No Way Home, combining RBD fracture, Pyro fire and compositing.",
      es: "Secuencia de explosión cinematográfica inspirada en Spider-Man: No Way Home, combinando fractura RBD, fuego con Pyro y composición."
    },
    details: {
      en: [
        "This project was inspired by a sequence from Spider-Man: No Way Home, where a bomb falls from above, bounces on the ground, activates and finally explodes on a road. The main goal was to recreate an action scene by integrating simulation, rendering and compositing, combining destruction, fire, lighting and cinematic staging.",
        "To build the scene, I used assets from Sketchfab, including the bomb model, concrete barriers, road signs and damaged vehicles. These assets were arranged into a road environment that supported the main action. I then researched the technical elements required to recreate the explosion inside Houdini.",
        "The destruction simulation was developed using fracture and forces inside a DOP environment. I worked with Simple Fracture and dynamic adjustments to control the breakup of the bomb. This stage required several iterations to refine the force values, fragmentation and behavior of the pieces, since some of the first fracture results did not feel visually convincing.",
        "After resolving the main destruction, I created the explosion using Pyro, generating fire and smoke to represent the detonation. I also used the same Pyro workflow to add simulated fire to destroyed vehicle models, placing emission sources near the lower areas of each car so the flames could expand and cover most of the vehicle body.",
        "The staging and composition of the scene were built in Blender. The camera was placed close to ground level to match the reference and reinforce the sense of scale. Since the bomb model was divided into different components, I was able to control the lights and core individually, making the activation process visually clear before the explosion.",
        "For the road surface, I used a simple JPG texture combined with a height map to add depth and avoid a completely flat plane. Once the first shot was rendered, I created an additional still shot of the explosion, replacing the original geometry with the Houdini simulation.",
        "The final integration was completed in Nuke. I combined the rendered layers, removed backgrounds using keying, added a high-quality sky image and applied defocus to secondary elements such as signs to reinforce depth of field. I also integrated the burning vehicle layers using merge operations, placing them behind the concrete barriers. For the explosion shot, I added a fracture image inside the core to enhance visual detail once the fire started to dissipate.",
        "This project allowed me to practice a complete VFX workflow, from asset preparation and Houdini simulation to Blender staging and Nuke compositing. It also helped me understand how fracture, fire, lighting, camera work and compositing must work together to create a more believable action shot."
      ],
      es: [
        "Proyecto inspirado en una secuencia de la película Spider-Man: No Way Home, en la que una bomba cae desde una altura considerable, rebota sobre el suelo, se activa y finalmente explota en una carretera. El objetivo principal fue recrear una escena de acción mediante la integración de simulación, render y composición, combinando elementos de destrucción, fuego, iluminación y staging cinematográfico.",
        "Para construir la escena utilicé assets obtenidos de Sketchfab, incluyendo el modelo de la bomba, barreras de concreto, letreros y automóviles dañados. A partir de estos elementos organicé un escenario de carretera que sirviera como contexto para la acción principal. Posteriormente, realicé una etapa de investigación técnica para definir qué herramientas y procesos necesitaba para recrear la explosión dentro de Houdini.",
        "La simulación de destrucción se desarrolló mediante fractura y fuerzas dentro de un entorno DOP, utilizando Simple Fracture y ajustes dinámicos para controlar la ruptura del objeto. Durante esta etapa fue necesario iterar varias veces sobre los valores de fuerza, fragmentación y comportamiento de las piezas, ya que algunas fracturas iniciales no resultaban visualmente convincentes.",
        "Después de resolver la destrucción principal, trabajé la explosión mediante Pyro, generando fuego y humo para representar el momento de detonación. Aprovechando ese mismo flujo, también incorporé modelos de automóviles quemados y destruidos, a los cuales añadí fuego simulado con Pyro. Para ello coloqué fuentes de emisión en la zona inferior de cada vehículo, permitiendo que el fuego se expandiera visualmente hasta cubrir gran parte de la carrocería.",
        "La composición y el staging de la escena se realizaron en Blender. La cámara se colocó a nivel del suelo para acercarse a la perspectiva de la referencia y reforzar la sensación de escala. Como el modelo de la bomba estaba dividido en diferentes componentes, fue posible controlar individualmente la iluminación de los focos y del núcleo, lo cual permitió comunicar visualmente el proceso de activación antes de la explosión.",
        "Para el suelo utilicé una textura JPG de carretera combinada con un mapa de alturas, con el objetivo de aportar mayor profundidad y evitar que el plano se percibiera completamente plano. Una vez generado el primer shot, produje un still shot adicional de la explosión, reemplazando la geometría original por la simulación generada en Houdini.",
        "Finalmente, el proceso se completó en Nuke, donde integré las distintas capas renderizadas. Removí fondos mediante keying, incorporé una imagen de cielo en alta calidad y apliqué defocus a elementos secundarios como los letreros para reforzar la profundidad de campo. También integré las capas de vehículos en llamas mediante operaciones de merge, cuidando que quedaran correctamente posicionados detrás de las barreras de concreto. En el shot de la explosión añadí una imagen de fractura en el núcleo para reforzar el detalle visual cuando el fuego comenzara a disiparse.",
        "Este proyecto me permitió practicar un flujo de trabajo completo de VFX, desde la preparación de assets y simulación en Houdini, hasta staging en Blender y composición final en Nuke. También fue una oportunidad para entender cómo diferentes elementos —fractura, fuego, iluminación, cámara y composición— deben integrarse para construir una escena de acción más creíble."
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
        "This university project focused on the creation of a procedural planet by distributing assets across a spherical surface. The goal was to build a stylized world divided into different visual zones, each one containing its own elements such as vegetation, animals, buildings, bridges and decorative objects.",
        "The process began with the modeling of multiple individual assets. Each element was designed to represent a specific part of the planet ecosystem, from flowers and vegetation to architectural pieces and structures.",
        "After the assets were created, they were distributed around a sphere that represented the planet. Points on the surface were used as a placement system, making it possible to assign different types of objects to specific areas.",
        "A key part of the project was the visual organization of the planet by regions. I worked with painted areas and selective distribution to separate zones of fauna, vegetation and construction. This helped the planet feel less random and gave it a clearer visual structure.",
        "This project was especially useful for practicing procedural modeling, geometry distribution and instance control. Instead of placing each object manually, the system used points and zones to populate the planet more efficiently, while still allowing control over density, position and asset type.",
        "The final result was a stylized planet built from multiple procedurally organized assets. The project helped me understand how Houdini can be used to generate complex worlds and environments through distribution systems while preserving artistic control over the final composition."
      ],
      es: [
        "Proyecto desarrollado como parte de mi formación universitaria, enfocado en la creación de un planeta procedural mediante la distribución de assets sobre una superficie esférica. El objetivo fue construir un mundo estilizado compuesto por distintas zonas, cada una con elementos visuales propios como vegetación, animales, edificios, puentes y otros objetos decorativos.",
        "El proceso inició con el modelado de múltiples assets individuales. Cada elemento fue diseñado para representar una parte específica del ecosistema del planeta, desde flores y vegetación hasta estructuras y elementos arquitectónicos.",
        "Posteriormente, estos modelos fueron distribuidos alrededor de una esfera que funcionaba como la base del planeta. Para lograrlo, utilicé puntos sobre la superficie esférica como sistema de colocación, permitiendo asignar diferentes tipos de objetos en zonas específicas.",
        "Una parte importante del proyecto fue la organización visual del planeta por regiones. Trabajé con pintura de zonas y distribución selectiva para diferenciar áreas de fauna, vegetación y construcción. Este proceso permitió que el planeta no se viera como una repetición aleatoria de assets, sino como un entorno con cierta lógica interna y división visual.",
        "El proyecto fue especialmente útil para practicar conceptos de modelado procedural, distribución de geometría y control de instancias. En lugar de colocar cada elemento manualmente, el sistema permitió utilizar puntos y zonas para poblar el planeta de manera más eficiente, manteniendo la posibilidad de ajustar densidad, posición y tipo de elementos sin reconstruir toda la escena desde cero.",
        "El resultado final fue un planeta estilizado construido a partir de múltiples assets organizados proceduralmente. Este proyecto me ayudó a comprender mejor cómo utilizar Houdini para generar mundos o entornos complejos mediante sistemas de distribución, manteniendo control artístico sobre las zonas y la composición general."
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
        "This project was based on the greeble technique, widely used to create complex science-fiction surfaces, especially in miniature design and visual styles inspired by productions such as Star Wars. The goal was to generate a highly detailed structure using modular pieces, creating a dense technological aesthetic with variations in height and form.",
        "The process began with the design of multiple quadrangular greeble pieces. Each module was built with simple shapes, extrusions and geometric variations, making it usable as a repeatable component within a larger system.",
        "After creating the modules, I used a tubular geometry as the distribution base. The tube was subdivided to generate points across its surface, and different greeble pieces were copied onto those points.",
        "The use of modular variation allowed the tube to be populated with elements of different heights, scales and silhouettes, creating a dense and visually complex surface.",
        "The procedural approach was essential because it made it possible to build a detailed structure from a limited set of pieces. Instead of designing every detail manually, the system distributed modules over a base surface while still allowing control over density, scale and variation.",
        "The final result was a composition with the look of a futuristic city or mechanical structure. This project helped me practice modular asset creation, procedural distribution and visual complexity through controlled repetition."
      ],
      es: [
        "Proyecto basado en la técnica de greeble, ampliamente utilizada en la creación de superficies complejas de ciencia ficción, especialmente en miniaturas y diseños inspirados en producciones como Star Wars. El objetivo fue generar una estructura con alto nivel de detalle visual a partir de piezas modulares, creando una estética sobrepoblada, tecnológica y con variaciones de altura.",
        "El proceso comenzó con el diseño de diferentes piezas cuadrangulares inspiradas en patrones greeble. Cada módulo fue construido con formas simples, extrusiones y variaciones geométricas, buscando que funcionara como una pieza repetible dentro de un sistema mayor.",
        "Posteriormente, utilicé una geometría tubular como base para la distribución. Esta forma fue subdividida para generar puntos sobre su superficie, y en cada punto se copiaron diferentes piezas de greeble.",
        "El uso de variaciones modulares permitió poblar el tubo con elementos de distintas alturas, escalas y formas, logrando una superficie visualmente densa y compleja.",
        "El enfoque procedural fue clave para este proyecto, ya que permitió construir una estructura detallada a partir de un conjunto limitado de piezas. En lugar de diseñar cada detalle individualmente, se creó un sistema capaz de distribuir módulos sobre una superficie base, manteniendo la posibilidad de ajustar densidad, escala y distribución.",
        "El resultado fue una composición con estética de ciudad o estructura futurista, donde la repetición controlada de elementos produce una sensación de complejidad arquitectónica. Este proyecto me ayudó a practicar la creación de sistemas modulares, distribución procedural y composición visual mediante assets repetibles."
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
        "This project was inspired by the album cover of Heroes & Villains by Metro Boomin, reinterpreted through a Houdini VFX approach using Stormtrooper models. The intention was to recreate a dark and dramatic atmosphere using fire and smoke effects, while keeping a visual connection to the reference but with a different creative direction.",
        "At first, I considered modeling characters closer to the original album cover, but that would have required a significant amount of time. The online models I found also did not fully match the style I wanted. Since the project was developed near May 4th, I decided to use Stormtrooper models as a creative reinterpretation.",
        "The models were first imported into Maya, where I adjusted their scale, position and composition. After that, I brought them into Houdini and researched source spread workflows.",
        "Inside Houdini, I used a source spread system based on rasterized points over the geometry. This allowed me to define an origin area and create a progressive expansion effect, similar to an infection spreading across the surface. That animated propagation became the base for the Pyro setup.",
        "Once the expansion was working, I created the Pyro simulation to transform that surface spread into fire and smoke. I added wind to prevent the volume from rising too vertically and to give the simulation a more interesting direction, helping the effect feel better integrated into the shot.",
        "After completing the simulation, I animated a camera and rendered the sequence in Solaris. The final stage was done in Nuke, where I adjusted the background to get closer to the album reference. Instead of using a completely black background, I built a very dark green base with subtle noise and grain to create a more atmospheric final image.",
        "This project allowed me to explore the relationship between visual inspiration, creative reinterpretation and technical simulation. It was also an opportunity to work with attribute propagation, Pyro, wind direction, Solaris rendering and final compositing."
      ],
      es: [
        "Proyecto inspirado en la portada del álbum Heroes & Villains de Metro Boomin, reinterpretado mediante una propuesta visual en Houdini con modelos de Stormtroopers. La intención fue recrear una atmósfera oscura y dramática, utilizando efectos de fuego y humo para generar una imagen cinematográfica con una lectura similar a la referencia, pero con una dirección visual propia.",
        "Inicialmente consideré modelar personajes similares a los de la portada original, pero esto habría requerido una cantidad considerable de tiempo. Además, los modelos encontrados en línea no lograban el nivel de calidad o estilo necesario. Debido a que el proyecto se desarrolló cerca del 4 de mayo, decidí utilizar modelos de Stormtroopers como una reinterpretación creativa.",
        "Estos modelos fueron importados primero en Maya, donde ajusté escala, posición y composición antes de llevarlos a Houdini. Dentro de Houdini investigué y apliqué un sistema de source spread.",
        "Este proceso permite definir un punto o zona inicial sobre una geometría y generar una expansión progresiva, similar a una infección o propagación sobre la superficie. A partir de puntos rasterizados, se delimitó el origen del efecto y se controló su expansión sobre el modelo. Esta animación de propagación sirvió como base para generar el efecto Pyro.",
        "Una vez configurada la expansión, construí el setup de Pyro para transformar esa propagación en fuego y humo. Añadí viento para evitar que el volumen subiera de forma completamente vertical y para darle una dirección más interesante al movimiento. Esto ayudó a que el efecto se sintiera más integrado con la composición y no simplemente como una columna de fuego.",
        "Después de completar la simulación, animé una cámara y rendericé la secuencia dentro de Solaris. La etapa final se realizó en Nuke, donde trabajé el fondo para acercarlo más a la referencia del álbum. En lugar de usar un fondo completamente negro, creé una base verde muy oscura con ruido y grano sutil, buscando una atmósfera más cercana a la imagen original.",
        "Este proyecto me permitió explorar la relación entre inspiración visual, reinterpretación creativa y simulación técnica. También fue una oportunidad para trabajar con propagación de atributos, Pyro, dirección de viento, render en Solaris y composición final."
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
        "This project focused on procedural modeling using basic Houdini tools such as lines, resampling and copy-to-points workflows to build a modular structure. The main goal was to practice a procedural workflow that could generate architectural or structural forms in a flexible way, without relying entirely on manual modeling.",
        "The process was based on the creation of simple modular elements that could be repeated and distributed along defined paths. Lines were used as the main guides, Resample generated evenly spaced points, and Copy to Points placed the modules onto those points.",
        "This workflow made it possible to control the length, spacing and repetition of the elements procedurally. I also used transforms and geometry adjustments to define the scale and position of each module.",
        "The main advantage of this method was flexibility. The structure could be modified quickly by changing parameters such as point count, spacing or the shape of the base curve.",
        "Although the final result remained relatively simple, the project was useful for understanding how Houdini can create editable repetitive structures from basic systems. This logic can be applied not only to bridges, but also to buildings, walkways, facades and other procedural architectural elements.",
        "The main learning outcome was understanding that procedural modeling is not only about complex node networks, but about the organization of a flexible system. By building a structure through modules and points, the design can be adjusted without starting over from scratch."
      ],
      es: [
        "Proyecto enfocado en modelado procedural mediante herramientas básicas de Houdini, utilizando líneas, remuestreo y copiado sobre puntos para construir una estructura modular. El objetivo principal fue practicar un flujo de trabajo procedural que permitiera generar formas arquitectónicas o estructurales de manera flexible, sin depender de un modelado completamente manual.",
        "El proceso se basó en la creación de elementos modulares simples, los cuales podían ser repetidos y distribuidos sobre trayectorias definidas. Para ello utilicé líneas como guías principales, Resample para generar puntos equidistantes y Copy to Points para colocar piezas sobre esos puntos.",
        "Este flujo permitió controlar la longitud, separación y repetición de los elementos de forma procedural. Además del uso de líneas y puntos, trabajé con transformaciones y ajustes de geometría para definir la escala y posición de cada módulo.",
        "La ventaja de este método fue que la estructura podía modificarse rápidamente cambiando parámetros como la cantidad de puntos, la distancia entre ellos o la forma de la curva base.",
        "Aunque el resultado se mantuvo en una versión básica, el proyecto fue útil para comprender cómo Houdini permite construir estructuras repetitivas y editables a partir de sistemas simples. Esta lógica puede aplicarse tanto a puentes como a edificios, pasarelas, fachadas u otros elementos arquitectónicos procedurales.",
        "El aprendizaje principal fue entender que el modelado procedural no depende únicamente de la complejidad inicial de los nodos, sino de la organización del sistema. Al construir una estructura mediante módulos y puntos, se obtiene mayor flexibilidad para modificar el diseño sin rehacerlo desde cero."
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
        "This project focused on the simulation and rendering of destruction across different material types using Houdini RBD tools. The goal was to explore how different objects can fragment, react to external forces and interact inside a dynamic environment using RBD Material Fracture and Bullet Solver.",
        "The process began with the preparation of geometries that were later fractured according to the type of material being represented. RBD Material Fracture made it possible to generate more appropriate breakup patterns for different visual behaviors, such as concrete, glass or rigid materials.",
        "Each geometry was converted into independent pieces so it could behave as a group of rigid bodies inside the simulation. A key part of the project was analyzing how the pieces interacted with different forces.",
        "Inside the Bullet Solver, I tested variations in gravity, impacts, directional forces and collisions to observe how the fragments responded. This helped me understand how mass, friction, bounce, density and constraints influence RBD simulation behavior.",
        "The project also involved practicing the rendering process for simulations. It was not enough to generate the dynamics; the result also needed to be presented clearly and visually. This required work on materials, lighting and camera composition so the destruction could be read properly.",
        "The final result was a series of destruction tests that helped me understand the fundamentals of RBD simulation in Houdini. This project served as a foundation for later, more complex work involving collapses, fractures and procedural destruction."
      ],
      es: [
        "Proyecto enfocado en la simulación y renderizado de destrucción de distintos tipos de materiales mediante herramientas RBD en Houdini. El objetivo fue explorar cómo diferentes objetos pueden fragmentarse, reaccionar a fuerzas externas e interactuar dentro de un entorno dinámico utilizando RBD Material Fracture y Bullet Solver.",
        "El proceso inició con la preparación de geometrías que posteriormente fueron fracturadas según el tipo de material que se quería representar. El uso de RBD Material Fracture permitió generar patrones de ruptura más adecuados para distintos comportamientos visuales, como concreto, vidrio o materiales rígidos.",
        "Cada geometría fue convertida en piezas independientes para que pudiera comportarse como un conjunto de cuerpos rígidos dentro de la simulación. Una parte importante del proyecto fue analizar la interacción entre las piezas y diferentes fuerzas.",
        "Dentro del Bullet Solver probé variaciones de gravedad, impactos, fuerzas direccionales y colisiones para observar cómo cambiaba la respuesta de los fragmentos. Esto me permitió entender mejor cómo factores como masa, fricción, rebote, densidad y constraints influyen en el comportamiento de una simulación RBD.",
        "El proyecto también permitió practicar el proceso de renderizado de simulaciones, ya que no bastaba con generar la dinámica; también era necesario presentar el resultado de forma clara y visualmente legible. Esto implicó trabajar con materiales, iluminación y cámara para que la destrucción se apreciara correctamente.",
        "El resultado fue una serie de pruebas de destrucción que me ayudaron a comprender los fundamentos de las simulaciones RBD en Houdini. Este proyecto sirvió como base para trabajos posteriores más complejos, especialmente aquellos relacionados con colapsos, fracturas y destrucción procedural."
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
        "This was a basic fire simulation created in Houdini as an exploration of Pyro. The goal was to recreate the behavior of a campfire based on video reference, observing how fire starts from a source, rises, deforms and dissipates into the air.",
        "The project focused mainly on the volumetric behavior rather than on final rendering. I worked with emission sources placed around the logs, making the fire originate from the base and expand in a more organic way.",
        "From this source, I configured emission attributes to control the intensity, direction and general shape of the flames. During the process, I studied basic Pyro parameters such as temperature, density, combustion, dissipation and turbulence.",
        "These adjustments helped modify the fire behavior and bring it closer to the reference, avoiding a result that felt too uniform or artificial. The goal was to create flames with variation and movement over time.",
        "Although the simulation was not taken to a final render stage, the project was valuable for understanding the fundamentals of Pyro in Houdini. It served as a first approach to fire, volumetric sources and motion control inside fluid simulations."
      ],
      es: [
        "Simulación básica de fuego realizada en Houdini como ejercicio de exploración de Pyro. El objetivo fue recrear el comportamiento de una fogata a partir de una referencia en video, analizando la forma en que el fuego nace desde una fuente, se eleva, se deforma y se disipa en el aire.",
        "El proyecto se centró principalmente en la construcción del comportamiento volumétrico, más que en el render final. Trabajé con fuentes de emisión colocadas en la zona de los troncos, buscando que el fuego surgiera desde la base y se expandiera de manera orgánica.",
        "A partir de esta fuente configuré atributos de emisión para controlar la intensidad, dirección y forma general de las llamas. Durante el proceso estudié parámetros básicos de Pyro como temperatura, densidad, combustión, disipación y turbulencia.",
        "Estos ajustes permitieron modificar el comportamiento del fuego para acercarlo a la referencia, evitando que se viera demasiado uniforme o artificial. La intención fue lograr una llama con movimiento variable, capaz de cambiar de forma con el tiempo.",
        "Aunque la simulación no fue llevada a una etapa final de render, el proyecto resultó valioso para comprender los fundamentos de Pyro en Houdini. Sirvió como una primera aproximación al trabajo con fuego, fuentes volumétricas y control de movimiento dentro de simulaciones de fluidos."
      ]
    }
  },
  {
    id: "pirate-flag-simulation",
    title: "Pirate Flag Simulation",
    group: "fx",
    category: "Vellum Cloth Simulation",
    tools: "Houdini",
    year: "2025",
    initials: "PF",
    summary: {
      en: "A cloth simulation of a pirate flag using wind, constraints and dynamic motion.",
      es: "Simulación de tela de una bandera pirata usando viento, constraints y movimiento dinámico."
    },
    details: {
      en: [
        "This project focused on cloth simulation for a pirate flag affected by wind. The goal was to recreate the natural motion of a waving flag using simulation tools to represent tension, weight, anchoring and response to external forces.",
        "The process began with the creation or import of a flat geometry that functioned as the flag surface. This geometry was prepared with enough subdivisions to allow smooth deformations during the simulation.",
        "I then defined anchoring areas, especially on the side where the flag needed to remain attached to a pole or support point. The simulation was built as a cloth system, with wind as the main force generating movement.",
        "The challenge was to make the flag react believably: it had to remain attached on one side, deform with the airflow and create visible waves across the surface. To achieve this, I adjusted parameters such as resistance, stiffness, gravity and wind intensity.",
        "This project allowed me to practice fundamental cloth simulation principles, especially the relationship between subdivided geometry, pin constraints and external forces. It also helped me understand how small changes in wind intensity or material stiffness can significantly change the final motion.",
        "The result was a waving flag simulation that worked as an exercise for understanding dynamic cloth systems and their use in cinematic or videogame scenes."
      ],
      es: [
        "Simulación de tela enfocada en el comportamiento de una bandera pirata sometida a viento. El objetivo fue recrear el movimiento natural de una bandera ondeando, utilizando herramientas de simulación para representar tensión, peso, anclaje y respuesta a fuerzas externas.",
        "El proceso inició con la creación o importación de una geometría plana que funcionara como superficie de la bandera. Esta geometría fue preparada con suficientes subdivisiones para permitir deformaciones suaves durante la simulación.",
        "Posteriormente definí zonas de anclaje, especialmente en el lado donde la bandera debía permanecer sujeta al asta o punto de soporte. La simulación se trabajó mediante un sistema de tela, donde el viento fue utilizado como fuerza principal para generar movimiento.",
        "El reto consistió en lograr que la bandera respondiera de manera creíble: debía mantenerse sujeta en un extremo, deformarse por el flujo de aire y producir ondas visibles a lo largo de la superficie. Para ello fue necesario ajustar parámetros como resistencia, rigidez, gravedad e intensidad del viento.",
        "Este proyecto me permitió practicar principios fundamentales de simulación de telas, especialmente la relación entre geometría subdividida, constraints de anclaje y fuerzas externas. También ayudó a entender cómo pequeños cambios en la intensidad del viento o en la rigidez del material pueden alterar considerablemente el resultado final.",
        "El resultado fue una simulación de bandera ondeando, útil como ejercicio para comprender sistemas dinámicos de tela y su aplicación en escenas cinematográficas o de videojuegos."
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
        "This Vellum simulation was created to represent a cloth covering a statue and then moving away to reveal the object underneath. The goal was to work with cloth, wind and solid geometry interaction, creating an animation where the fabric responded physically to the statue.",
        "The process began by preparing the statue as collision geometry. A cloth surface was placed over it, covering the main shape. For the motion to feel believable, the cloth needed to behave like a flexible material that could fold, slide and react to wind without intersecting the geometry underneath.",
        "The simulation was developed with Vellum, using cloth constraints to control the material behavior. I adjusted stiffness, gravity, friction and resistance to give the cloth a sense of weight while still allowing it to move with the wind.",
        "The interaction with the statue was essential, since the cloth had to gradually reveal the object while maintaining the feeling of physical contact.",
        "Wind was used as the main force driving the reveal. Instead of directly animating the cloth, I used an external force to push the fabric, producing a more organic motion with folds and natural variations.",
        "This project allowed me to practice Vellum cloth simulation, collisions with complex geometry and external force control. The final result was a reveal scene that combined a clear visual action with more natural physical behavior."
      ],
      es: [
        "Simulación Vellum creada para representar una manta que cubre una estatua y posteriormente se retira o se desplaza para revelar la figura. El objetivo fue trabajar con interacción entre tela, viento y geometría sólida, logrando una animación en la que la tela respondiera físicamente al contacto con la estatua.",
        "El proceso comenzó con la preparación de la geometría de la estatua como objeto de colisión. Sobre ella coloqué una superficie de tela que debía cubrir la forma principal. Para que el movimiento fuera creíble, la manta necesitaba comportarse como un material flexible, capaz de doblarse, deslizarse y reaccionar al viento sin atravesar la geometría inferior.",
        "La simulación se desarrolló con Vellum, utilizando constraints propios de tela para controlar su comportamiento. Ajusté parámetros como rigidez, gravedad, fricción y resistencia para lograr que la manta conservara cierto peso, pero al mismo tiempo pudiera moverse con el viento.",
        "La interacción con la estatua fue fundamental, ya que la tela debía revelar gradualmente el objeto sin perder la sensación de contacto físico.",
        "El viento se utilizó como recurso principal para generar el movimiento de revelado. En lugar de animar directamente la manta, busqué que la fuerza externa provocara el desplazamiento de la tela. Esto permitió obtener una animación más orgánica, con pliegues y variaciones naturales.",
        "Este proyecto me permitió practicar simulación de telas con Vellum, colisiones con geometría compleja y control de fuerzas externas. El resultado fue una escena de revelado que combina una acción visual clara con un comportamiento físico más natural."
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
        "This 3D environment project was inspired by abandoned psychiatric hospitals, liminal spaces and visual references from games such as Batman: Arkham Asylum. The goal was to build a scene with horror and tension, using composition, lighting, assets, materials and camera work to create an unsettling atmosphere.",
        "The process began with visual research on Pinterest and other references, combining real abandoned-building images with examples of art direction in videogames. From those references, I defined the main intention of the scene: a corridor that felt closed on the sides but tall and open above, creating both confinement and scale.",
        "The space was built through modeling walls, doors, windows and the general corridor structure. I later incorporated downloaded assets to dress the scene and reinforce the abandoned look. These elements were arranged to create a dirty, neglected and narratively believable environment.",
        "Lighting was one of the most important parts of the project. I aimed for a mix of warm light and darkness, using lamps to guide the viewer's eye toward the end of the corridor. At the end of the composition, I placed a subtle threat: red glowing eyes in the distance. This suggested danger without fully revealing the character.",
        "I also created a second shot to expand the narrative and show more of the space and the threat. For this shot, I used a Springtrap model from Sketchfab and integrated it into the abandoned environment.",
        "Once the elements were arranged, I added detail to the materials of assets, floors and walls to make everything feel dirtier and more neglected. Finally, inside Blender, I applied compositing adjustments such as glow on the lamps, subtle fog and depth of field.",
        "For the first shot, I used a fisheye lens to slightly distort the perspective and emphasize the vanishing point of the image. The final result was an atmospheric scene where composition, lighting and camera work support a horror narrative."
      ],
      es: [
        "Proyecto de entorno 3D inspirado en la estética de hospitales psiquiátricos abandonados, espacios liminales y referencias visuales de videojuegos como Batman: Arkham Asylum. El objetivo fue construir una escena con narrativa de tensión y miedo, utilizando composición, iluminación, assets, materiales y cámara para generar una atmósfera inquietante.",
        "El proceso inició con una etapa de investigación visual en Pinterest y otras referencias, combinando imágenes reales de edificios abandonados con ejemplos de dirección artística en videojuegos. A partir de estas referencias definí la intención principal de la escena: crear un pasillo cerrado en los laterales, pero con una altura amplia, para generar una sensación de encierro y escala al mismo tiempo.",
        "La construcción del espacio se realizó mediante modelado de paredes, puertas, ventanas y estructura general del pasillo. Posteriormente incorporé assets descargados de internet para vestir la escena y reforzar el estado de abandono. Estos elementos fueron organizados para crear un entorno sucio, descuidado y narrativamente creíble.",
        "La iluminación fue una de las partes más importantes del proyecto. Busqué una mezcla entre luz cálida y oscuridad, con lámparas que guiaran la mirada hacia el fondo del pasillo. Al final de la composición coloqué una amenaza visual muy sutil: unos ojos rojos iluminados en la distancia. Esta decisión permitió sugerir peligro sin mostrar completamente al personaje, reforzando la tensión de la escena.",
        "También trabajé un segundo shot para ampliar la narrativa y mostrar más del espacio y de la amenaza. Para este plano utilicé un modelo de Springtrap obtenido de Sketchfab, integrándolo dentro del ambiente abandonado.",
        "Una vez colocados todos los elementos, dediqué tiempo a mejorar materiales de pisos, paredes y assets, añadiendo suciedad y desgaste para que el entorno se sintiera más viejo y deteriorado. Finalmente, dentro de Blender apliqué ajustes de composición como glow en las lámparas, fog sutil y profundidad de campo.",
        "En el primer shot utilicé una lente de ojo de pez para distorsionar ligeramente la perspectiva y reforzar el punto de fuga del pasillo. El resultado fue una escena con enfoque narrativo y atmosférico, donde la composición, iluminación y cámara trabajan juntas para generar suspenso."
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
        "This 3D environment project was developed in Blender and focused on the creation of a post-apocalyptic city with technological and cyberpunk elements. It was an important challenge because, at the beginning of the project, I was not as familiar with Blender shortcuts and workflows, since I had been working mainly in Maya for a long time.",
        "The project pushed me outside my comfort zone and helped me adapt to a different software environment. The main goal was to model an architectural module that would be part of a large tower.",
        "For my module, I designed a Chinese restaurant with windows, stairs and connections between the lower and upper levels. Although I incorporated several Sketchfab models to complement the scene, the base structure, facade and main architectural organization were modeled manually.",
        "After building the main module, I integrated it into a larger urban composition using models provided by professors, classmates and external assets. With these elements, I built three shots intended to tell a small story within the environment.",
        "To maintain visual cohesion, I made sure the buildings shared similar materials and textures, preventing the assets from feeling disconnected. The scene was created at a 2048 x 1080 resolution with a cinematic composition in mind.",
        "I also generated a background using AI tools and later integrated it in an image editing program similar to Photoshop. I added blur to the background and light glows to improve depth, scale and atmosphere.",
        "This project was valuable because it combined modeling, kitbashing, composition, lighting and visual direction. It also marked an important learning stage in Blender, helping me become more technically flexible and understand how to build a complex urban scene from modules, assets and composition decisions."
      ],
      es: [
        "Proyecto de entorno 3D desarrollado en Blender, enfocado en la creación de una ciudad postapocalíptica con elementos tecnológicos y estética cyberpunk. Este proyecto representó un reto importante porque, al inicio de la elaboración, no estaba tan familiarizado con los atajos y funciones de Blender, ya que llevaba mucho tiempo trabajando principalmente en Maya.",
        "El proceso me ayudó a salir de mi zona de confort y adaptarme a un entorno de software distinto. El objetivo principal fue modelar un módulo arquitectónico que formara parte de una torre de gran escala.",
        "Para mi módulo decidí diseñar un restaurante chino con ventanas, escaleras y conexiones entre el piso inferior y el superior. Aunque incorporé varios modelos descargados de Sketchfab para complementar la escena, la estructura base, la fachada principal y la organización arquitectónica del módulo fueron modeladas manualmente.",
        "Después de construir el módulo principal, lo integré dentro de una composición urbana más amplia utilizando modelos proporcionados por profesores, compañeros y assets externos. Con estos elementos construí tres shots destinados a contar una pequeña historia dentro del entorno.",
        "Para mantener cohesión visual, cuidé que los edificios compartieran materiales y texturas similares, evitando que los assets se sintieran completamente desconectados entre sí. La escena fue trabajada en resolución 2048 x 1080, buscando una composición cinematográfica.",
        "También generé un fondo con apoyo de herramientas de inteligencia artificial, el cual fue posteriormente integrado y ajustado en un programa de edición de imagen similar a Photoshop. Añadí detalles como desenfoque en el fondo y destellos en las luces para reforzar profundidad, escala y atmósfera.",
        "Este proyecto fue valioso porque combinó modelado, kitbashing, composición, iluminación y dirección visual. Además, representó una etapa importante de aprendizaje en Blender, ayudándome a desarrollar mayor flexibilidad técnica y a comprender cómo construir una escena urbana compleja a partir de módulos, assets y decisiones de composición."
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
        "This modeling project was created in Maya and was based on photographs of my own room. The goal was to practice observation, proportion, everyday object modeling and simple material creation using a real-life reference.",
        "The process began with a collection of photos taken directly from the space, which served as the main guide for building the scene. From those references, I modeled the main elements such as the door, door frames, bed headboard, nightstands and furniture.",
        "I also worked on more specific details, such as the furniture where I kept collectible Funko Pop figures, aiming to make the scene recognizable in relation to the original room.",
        "A key part of the project was maintaining coherent proportions between objects. Because the scene was based on a real room, furniture, walls and accessories needed to keep a believable scale for the result to feel natural.",
        "Although the materials were simple, I tried to match the real colors and general appearance of the objects. The final render was created in Arnold, using lighting and camera placement to present the space clearly.",
        "This project helped me strengthen basic hard-surface modeling skills, reference observation, interior space construction and material assignment inside Maya."
      ],
      es: [
        "Proyecto de modelado realizado en Maya, basado en fotografías de mi propia habitación. El objetivo fue practicar observación, proporción, modelado de objetos cotidianos y creación de materiales simples a partir de una referencia real.",
        "El proceso inició con una recopilación de imágenes tomadas directamente del espacio, las cuales sirvieron como guía para construir la escena. A partir de esas referencias modelé elementos principales como la puerta, los marcos, la cabecera de la cama, los burós y los muebles.",
        "También trabajé detalles más específicos, como el mueble donde se encontraban figuras coleccionables tipo Funko Pop, buscando que la escena tuviera una relación reconocible con el espacio original.",
        "Una parte importante del proyecto fue mantener proporciones coherentes entre los distintos objetos. Al tratarse de una habitación real, era necesario que los muebles, paredes y accesorios conservaran una escala razonable para que el resultado se sintiera natural.",
        "Aunque los materiales se mantuvieron simples, busqué que fueran similares a los reales en color y apariencia general. El render final se realizó en Arnold, utilizando iluminación y cámara para presentar la escena de manera clara.",
        "Este proyecto permitió fortalecer habilidades de modelado hard-surface básico, observación de referencia, construcción de espacios interiores y asignación de materiales dentro de Maya."
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
        "Still Love is a short film developed by a team of four people over approximately one year, covering pre-production, production and post-production. The project was a complete filmmaking experience because it required constant planning, task distribution, team coordination and both technical and creative problem-solving throughout the process.",
        "My participation covered multiple areas. My main roles included original idea, directing, editing, VFX, lighting, sound design and compositing. This range of responsibilities allowed me to be involved from the initial concept to the final post-production adjustments.",
        "As director, my work was to maintain a clear vision for the project and coordinate visual and narrative decisions so all areas worked toward the same result. In editing and compositing, I helped build the final rhythm of the short film, taking care of continuity, emotional tone and visual integration.",
        "In lighting and VFX, I worked to reinforce the atmosphere and support the story through the image. The development of Still Love was especially valuable because it required sustaining a project over a long period of time.",
        "This gave me an experience closer to a real production, where the challenge is not only creating appealing images, but also organizing tasks, meeting deadlines, solving communication issues and maintaining artistic consistency throughout all stages.",
        "The final result is a short film that reflects the collective effort of the team and my interest in combining cinematic storytelling with visual production. This project strengthened my skills in directing, collaboration, post-production and creative decision-making."
      ],
      es: [
        "Still Love es un cortometraje desarrollado por un equipo de cuatro personas durante aproximadamente un año, abarcando las etapas de preproducción, producción y postproducción. El proyecto representó una experiencia integral de trabajo cinematográfico, ya que requirió planificación constante, división de tareas, coordinación de equipo y resolución de problemas técnicos y creativos durante todo el proceso.",
        "Mi participación dentro del cortometraje abarcó múltiples áreas. Mis roles principales fueron idea original, dirección, edición, VFX, iluminación, diseño sonoro y composición. Esta variedad de responsabilidades me permitió involucrarme en el proyecto desde su concepto inicial hasta los últimos ajustes de postproducción.",
        "Como director, mi trabajo consistió en mantener una visión clara del proyecto y coordinar las decisiones visuales y narrativas para que todas las áreas funcionaran hacia un mismo resultado. En edición y composición, participé en la construcción del ritmo final del cortometraje, cuidando la continuidad, el tono emocional y la integración de los elementos visuales.",
        "En iluminación y VFX trabajé para reforzar la atmósfera y apoyar la narrativa desde la imagen. El desarrollo de Still Love fue especialmente valioso porque implicó sostener un proyecto durante un periodo largo de tiempo.",
        "Esto permitió vivir un proceso más cercano a una producción real, donde no sólo importa crear imágenes atractivas, sino también organizar tareas, cumplir entregas, resolver problemas de comunicación y mantener coherencia artística durante todas las etapas.",
        "El resultado final es un cortometraje que refleja el esfuerzo colectivo del equipo y mi interés por combinar narrativa cinematográfica con producción visual. Este proyecto fortaleció mis habilidades de dirección, trabajo colaborativo, postproducción y toma de decisiones creativas."
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
        "Bagel is a short film developed over six months as part of a university course. The project was born from an emotional idea proposed by one of my teammates, who had recently experienced the loss of her pet.",
        "From that experience, the team decided to build a short story about grief, the emotional bond with a pet and the process of learning to let go of the pain that comes with losing a loved one.",
        "My roles in the short film included directing, animatic, editing, surfacing, camera layout, rendering, VFX and compositing. This was one of my first projects with a more professional production approach, requiring several areas of the pipeline to be organized around a clear narrative goal.",
        "During production, many of the techniques we used were learned and applied during the same semester. This created an important challenge, since the team had to move forward with production while developing new technical skills.",
        "One of the most important aspects of the project was preserving the emotional sensitivity of the story. Because the subject was related to loss, the visual and narrative decisions needed to support the tone without exaggerating it.",
        "Although the result contains basic elements from an early learning stage, Bagel represented an important step in my development. It gave me the opportunity to work in a team, understand the production flow of an animated short film and apply different pipeline areas to a project with a clear emotional intention."
      ],
      es: [
        "Bagel es un cortometraje desarrollado durante seis meses como parte de una materia universitaria. El proyecto nació a partir de una idea emocional propuesta por una compañera, quien recientemente había vivido la pérdida de su mascota.",
        "A partir de esa experiencia, el equipo decidió construir una historia corta sobre el duelo, el vínculo afectivo con una mascota y el proceso de aprender a dejar ir el dolor después de una pérdida significativa.",
        "Mi participación dentro del cortometraje incluyó dirección, animatic, edición, surfacing, camera layout, render, VFX y composición. Este proyecto fue una de mis primeras experiencias con un enfoque de producción más profesional, ya que exigía trabajar distintas áreas del pipeline de forma organizada y con un objetivo narrativo claro.",
        "Durante el desarrollo, muchas de las técnicas utilizadas fueron aprendidas y aplicadas en el mismo semestre. Esto representó un reto importante, ya que el equipo debía avanzar en la producción mientras desarrollaba nuevas habilidades técnicas.",
        "Uno de los aspectos más importantes del proyecto fue mantener la sensibilidad emocional de la historia. Al tratarse de un tema relacionado con la pérdida, las decisiones visuales y narrativas debían acompañar el tono del cortometraje sin exagerarlo.",
        "Aunque el resultado conserva elementos básicos propios de una etapa temprana de aprendizaje, Bagel representó un avance importante en mi formación. Fue una oportunidad para trabajar en equipo, comprender mejor el flujo de producción de un cortometraje animado y aplicar distintas áreas del pipeline en un proyecto con una intención narrativa clara."
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
        "This project was developed for a videogame shaders class. The goal was to recreate and present different visual effects inspired by the Batman: Arkham game series inside a Unity scene. The intention was not to create a complete videogame, but to demonstrate shaders and effects within a visually coherent environment based on the dark and stylized aesthetic of the franchise.",
        "The project was created in collaboration with a classmate. From the beginning, we divided responsibilities to cover different types of shaders and effects.",
        "My work focused mainly on the rain shader, wet surface behavior on objects and models, scene assembly, artificial and natural lighting, sky aesthetics, fire coming from a car and a neon sign. My teammate worked on other effects such as the fluid shader for the Bane model, fire on destroyed vehicles and detective vision.",
        "One of my main responsibilities was building the environment where the shaders would be presented. I organized online assets and integrated them into a scene that evoked the visual tone of Batman: Arkham: a dark, wet city with strong lighting contrast and dangerous elements.",
        "Lighting was essential to reinforce the atmosphere, combining artificial lights, reflections on wet surfaces, fire and neon. The rain and wet surface shaders were among the most important challenges because humidity had to be communicated not only through particles, but also through material response to light.",
        "This required working with shine, reflections and the feeling of water affecting the surfaces. The scene also incorporated fire and luminous effects to create visual contrast.",
        "This project was especially challenging because, at the time, videogame development and Unity were outside my main area of knowledge. Adapting to the software, understanding realtime material logic and solving effects inside a game engine represented an important learning curve.",
        "The project helped me understand the difference between creating materials for offline rendering and designing shaders for realtime environments. It also strengthened my interest in visual effects for videogames and in the relationship between aesthetics, lighting and technology inside an interactive engine."
      ],
      es: [
        "Proyecto desarrollado para una materia enfocada en shaders de videojuegos. El objetivo fue recrear y presentar distintos efectos visuales inspirados en la saga Batman: Arkham dentro de un escenario construido en Unity. La intención no era desarrollar un videojuego completo, sino demostrar shaders y efectos en un entorno visualmente coherente con la estética oscura y estilizada de la franquicia.",
        "El proyecto fue realizado en colaboración con un compañero. Desde el inicio decidimos dividir responsabilidades para poder cubrir distintos tipos de shaders y efectos.",
        "Mi trabajo se enfocó principalmente en el shader de lluvia, el aspecto mojado de objetos y modelos, el armado del escenario, la iluminación artificial y natural, la estética del cielo, el fuego saliendo de un coche y un letrero de neón. Mi compañero trabajó en otros efectos como el fluido del modelo de Bane, fuego en vehículos destruidos y la visión detective.",
        "Una de mis responsabilidades principales fue construir el entorno donde se presentarían los shaders. Para ello organicé assets encontrados en línea y los integré dentro de una escena que evocara el tono visual de Batman: Arkham: una ciudad oscura, húmeda, con luces contrastadas y elementos de peligro.",
        "La iluminación fue clave para reforzar la atmósfera, combinando luces artificiales, reflejos en superficies mojadas, fuego y neón. El shader de lluvia y superficies mojadas fue uno de los retos más importantes, ya que debía comunicar humedad no sólo mediante partículas, sino también a través de la reacción de los materiales a la luz.",
        "Esto implicó trabajar con brillo, reflejos y sensación de superficie afectada por el agua. La escena también incorporó elementos de fuego y efectos luminosos para crear contraste visual.",
        "Este proyecto fue especialmente retador porque, en ese momento, el desarrollo de videojuegos y Unity estaban fuera de mi zona de conocimiento principal. Adaptarme al software, comprender la lógica de materiales en tiempo real y resolver efectos dentro de un motor de videojuegos representó una curva de aprendizaje importante.",
        "El proyecto me permitió entender mejor la diferencia entre crear materiales para render offline y diseñar shaders para tiempo real. También fortaleció mi interés por los efectos visuales aplicados a videojuegos y por la integración entre estética, iluminación y tecnología dentro de un motor interactivo."
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

const thumbStyle = project.thumb ? `style="background-image: url('${project.thumb}')"` : "";
const thumbClass = project.thumb ? "project-thumb has-image" : "project-thumb";

article.innerHTML = `
  <div class="${thumbClass}" ${thumbStyle}>
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
      if (event.key === "Enter") {
        openProject(project.id);
      }
    });

    projectGrid.appendChild(article);
  });
}

function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  activeProject = project;

modalMedia.classList.remove("has-image");
modalMedia.style.backgroundImage = "";
modalMedia.innerHTML = `<span>${project.initials}</span>`;

if (project.thumb) {
  modalMedia.classList.add("has-image");
  modalMedia.style.backgroundImage = `url('${project.thumb}')`;
  modalMedia.innerHTML = "";
}
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
