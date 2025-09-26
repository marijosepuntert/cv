document.addEventListener('DOMContentLoaded', () => {
  // ===== Datos del CV =====
  let cvData = {
    name: "María José Punteros",
    role: "Técnica Superior en Educación Infantil e Higiene Bucodental",
    avatar: "MJ",
    contact: [
      "📧 mjpunteros@gmail.com",
      "📱 +34 600 123 456",
      "🌐 syrmec.com"
    ],
    profile: `Técnica Superior en Educación Infantil e Higiene Bucodental, con experiencia en
              desarrollo infantil, atención al cliente y manejo de herramientas digitales.
              Apasionada por la tecnología, con conocimientos en diseño gráfico, gestión de redes e
              creación de contenido digital. En 2024–2025 he reforzado experiencia en entorno industrial
              (control de calidad y procesos) y organización clínica (atención a pacientes, agendas, historiales).
              Orientada al aprendizaje continuo y a aportar soluciones innovadoras y eficientes.`,
    // Formación (títulos/certificados)
    formacion: [
      { title: "Técnico Superior en Higiene Bucodental", center: "EFA El Gamonal, Alcázar de San Juan", years: "2022–2024" },
      { title: "Acreditación de Competencias en TIC", center: "Universitat Oberta de Catalunya", years: "2021" },
      { title: "Certificado de Profesionalidad en Gestión de Ventas", center: "", years: "2021" },
      { title: "Técnico Superior en Educación Infantil", center: "EFA El Gamonal, Alcázar de San Juan", years: "2018–2020" },
      { title: "Certificado B1 de Cambridge", center: "Academia Magna Estudios, Mota del Cuervo, Cuenca", years: "2016" }
    ],
    // Experiencia
    experience: [
      {
        role: "Operario de Producción",
        year: "2024",
        company: "Ibercaco (Quintanar de la Orden, Toledo)",
        desc: "Línea de producción, control de calidad y eficiencia. Manejo de maquinaria. Embalaje y etiquetado."
      },
      {
        role: "Higienista Bucodental",
        year: "2022 – 2024",
        company: "Manjavacas Dental, S.L.L. (Mota del Cuervo)",
        desc: "Periodos de prácticas (90 h). Auxiliar de clínica (mar–abr 2023). Prácticas formativas (300 h, mar–jun 2024). Limpiezas, asesoramiento, asistencia al odontólogo, gestión de citas e historiales."
      },
      {
        role: "Camarera y Pinche de Cocina",
        year: "2021 – 2022",
        company: "La Torta Mota (Mota del Cuervo)",
        desc: "Atención al cliente y caja. Elaboración de platos. Limpieza y mantenimiento cumpliendo normas de higiene."
      },
      {
        role: "Educadora Infantil",
        year: "2018 – 2020",
        company: "Prácticas en diferentes centros",
        desc: "Balú (2018, 45 h), EFA El Gamonal (2019, 50 h), CAI Coquitos (2019–2020). Actividades educativas y apoyo individualizado."
      }
    ],
    // Competencias personales
    competenciasPersonales: [
      "Alta capacidad organizativa y enfoque multitarea.",
      "Creatividad y proactividad en la solución de problemas.",
      "Adaptabilidad a diferentes entornos laborales y culturas.",
      "Pasión por el aprendizaje continuo y la innovación tecnológica."
    ],
    // Habilidades digitales
    habilidadesDigitales: [
      "Diseño y contenido: manejo avanzado de Canva (newsletters y piezas visuales).",
      "Social media: planificación, programación y edición de video para Facebook e Instagram.",
      "Email marketing: uso de Mailchimp para campañas y boletines.",
      "Edición de vídeo para redes y proyectos empresariales.",
      "Competencias generales: ofimática avanzada y plataformas digitales.",
      "Herramientas de IA aplicadas a contenido y productividad (p. ej., ChatGPT/Copilot)."
    ],
    // Idiomas
    idiomas: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Intermedio (B1 Cambridge)" }
    ],
    // Datos de interés
    datosInteres: [
      "Carnet de conducir.",
      "Vehículo propio.",
      "Disponibilidad horaria.",
      "Disponibilidad para mudarse."
    ],
    // Situación actual y competencias adquiridas este año
    actualmente: `Formación continua en herramientas digitales y creación de portfolio con proyectos
                  web (HTML/CSS/JS) y contenido social. Mejora de inglés (preparación B2) y
                  especialización en productividad con IA.`,
    competencias2025: [
      "Calidad y seguridad en entorno industrial.",
      "Atención al paciente y organización clínica.",
      "Atención al cliente y comunicación efectiva.",
      "Gestión de contenidos digitales (texto, imagen y vídeo).",
      "Trabajo en equipo y resolución de incidencias.",
      "Planificación, priorización y mejora continua."
    ]
  };

  // ===== Cabecera (si tu HTML ya tiene estos IDs, se rellenan) =====
  let avatarEl = document.getElementById("avatar");
  let nameEl   = document.getElementById("name");
  let roleEl   = document.getElementById("role");
  let contactEl= document.getElementById("contact");
  if (avatarEl) avatarEl.textContent = cvData.avatar;
  if (nameEl)   nameEl.textContent   = cvData.name;
  if (roleEl)   roleEl.textContent   = cvData.role;
  if (contactEl) {
    cvData.contact.forEach(info => {
      let span = document.createElement("span");
      span.className = "chip";
      span.textContent = info;
      contactEl.appendChild(span);
    });
  }

  // ===== Menú de tarjetas horizontales =====
  let wrap = document.querySelector(".wrap") || document.body;
  let menu = document.createElement("section");
  menu.className = "menu-cards";
  wrap.insertBefore(menu, wrap.firstChild);

  // Utilidades de render
  let ul = items => `<ul>${items.map(li => `<li>${li}</li>`).join("")}</ul>`;
  let formaciónHTML = data =>
    `<ul>${data.map(f => `<li><strong>${f.title}</strong>${f.center ? ` — ${f.center}` : ""} <em>(${f.years})</em></li>`).join("")}</ul>`;
  let idiomasHTML = data =>
    `<ul>${data.map(i => `<li><strong>${i.name}:</strong> ${i.level}</li>`).join("")}</ul>`;
  let experienciaHTML = data => {
    // Acordeón interno dentro de la tarjeta de experiencia
    let cont = document.createElement("div");
    data.forEach(e => {
      let item = document.createElement("div");
      item.className = "accordion-item";
      let header = document.createElement("div");
      header.className = "accordion-header";
      header.innerHTML = `<span>${e.role} (${e.year})</span><span class="accordion-arrow">▼</span>`;
      let body = document.createElement("div");
      body.className = "accordion-content";
      body.innerHTML = `<p><strong>${e.company}</strong></p><p>${e.desc}</p>`;
      header.addEventListener("click", () => {
        header.classList.toggle("active");
        body.classList.toggle("open");
      });
      item.appendChild(header);
      item.appendChild(body);
      cont.appendChild(item);
    });
    return cont;
  };

  // Creador de tarjeta (emoji + título + contenido colapsable)
  let createCard = (emoji, title, bodyHTMLorNode) => {
    let card = document.createElement("article");
    card.className = "menu-card";

    let head = document.createElement("button");
    head.type = "button";
    head.className = "menu-card__head";
    head.innerHTML = `<span class="menu-card__emoji">${emoji}</span><span class="menu-card__title">${title}</span><span class="menu-card__chev">▼</span>`;

    let body = document.createElement("div");
    body.className = "menu-card__body";

    if (typeof bodyHTMLorNode === "string") {
      body.innerHTML = bodyHTMLorNode;
    } else {
      body.appendChild(bodyHTMLorNode);
    }

    head.addEventListener("click", () => {
      head.classList.toggle("open");
      body.classList.toggle("open");
    });

    card.appendChild(head);
    card.appendChild(body);
    return card;
  };

  // Tarjetas del menú
  menu.appendChild(createCard("👤", "Perfil Personal", `<p>${cvData.profile}</p>`));
  menu.appendChild(createCard("🎓", "Formación", formaciónHTML(cvData.formacion)));
  menu.appendChild(createCard("💼", "Experiencia Profesional", experienciaHTML(cvData.experience)));
  menu.appendChild(createCard("🧠", "Competencias Personales", ul(cvData.competenciasPersonales)));
  menu.appendChild(createCard("💻", "Habilidades Digitales y Tecnológicas", ul(cvData.habilidadesDigitales)));
  menu.appendChild(createCard("🌍", "Idiomas", idiomasHTML(cvData.idiomas)));
  menu.appendChild(createCard("📌", "Datos de Interés", ul(cvData.datosInteres)));
  menu.appendChild(createCard("🚀", "Actualmente", `<p>${cvData.actualmente}</p>${ul(cvData.competencias2025)}`));
});
