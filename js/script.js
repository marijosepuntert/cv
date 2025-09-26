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
    profile: `Técnica Superior en Educación Infantil e Higiene Bucodental, 
              con experiencia en el cuidado y desarrollo infantil, atención al cliente 
              y manejo de herramientas digitales. Apasionada por las nuevas tecnologías, 
              con conocimientos avanzados en diseño gráfico, gestión de redes sociales y 
              creación de contenido digital. 

              En 2024–2025 he reforzado mi experiencia en el sector industrial (Ibercaco), 
              desarrollando habilidades en control de calidad y procesos de producción. 
              Mi paso por el ámbito sanitario (Manjavacas Dental) me permitió adquirir 
              competencias en organización clínica y trato directo con pacientes. 
              Cuento con una base sólida en comunicación y atención personalizada 
              gracias a mi experiencia en hostelería y educación infantil.

              Actualmente complemento mi perfil con el uso de plataformas de e-commerce, 
              SEO, gestión de catálogos online y herramientas de IA aplicadas al marketing digital. 
              Orientada al aprendizaje continuo y comprometida con ofrecer soluciones innovadoras 
              y eficientes en cada ámbito de trabajo.`,
    studies: [
      {
        title: "Grado en Educación Infantil",
        year: "2018 – 2020",
        institution: "EFA El Gamonal / Prácticas en centros"
      },
      {
        title: "Formación en Higiene Bucodental",
        year: "2022 – 2024",
        institution: "Manjavacas Dental, S.L.L."
      }
    ],
    experience: [
      {
        role: "Operario de Producción",
        year: "2024",
        company: "Ibercaco (Quintanar de la Orden, Toledo)",
        desc: "Trabajo en la línea de producción, asegurando la calidad y eficiencia. Manejo de maquinaria. Control de calidad, embalaje y etiquetado."
      },
      {
        role: "Higienista Bucodental",
        year: "2022 – 2024",
        company: "Manjavacas Dental, S.L.L. (Mota del Cuervo)",
        desc: "Prácticas en periodos de 90 h. Auxiliar de clínica (mar-abr 2023). Prácticas formativas (300 h, mar-jun 2024). Limpiezas, asesoramiento, asistencia al odontólogo, gestión de citas e historiales."
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
    ]
  };

  // ===== Inyección en el DOM =====
  document.getElementById("avatar").textContent = cvData.avatar;
  document.getElementById("name").textContent = cvData.name;
  document.getElementById("role").textContent = cvData.role;

  // Contacto
  let contactEl = document.getElementById("contact");
  cvData.contact.forEach(info => {
    let span = document.createElement("span");
    span.className = "chip";
    span.textContent = info;
    contactEl.appendChild(span);
  });

  // Perfil Personal
  let wrap = document.querySelector(".wrap");
  let profileSection = document.createElement("section");
  profileSection.className = "card";
  profileSection.innerHTML = `<h2>👤 Perfil Personal</h2><p>${cvData.profile}</p>`;
  wrap.insertBefore(profileSection, wrap.firstChild);

  // Estudios
  let studiesEl = document.getElementById("studies");
  cvData.studies.forEach(s => {
    let p = document.createElement("p");
    p.innerHTML = `<strong>${s.title}</strong><br>Año: ${s.year}<br>Institución: ${s.institution}`;
    studiesEl.appendChild(p);
  });

  // Experiencia en formato acordeón con flechas
  let expEl = document.getElementById("experience");
  cvData.experience.forEach((e) => {
    let item = document.createElement("div");
    item.className = "accordion-item";

    let header = document.createElement("div");
    header.className = "accordion-header";
    header.innerHTML = `
      <span>${e.role} (${e.year})</span>
      <span class="accordion-arrow">▼</span>
    `;

    let content = document.createElement("div");
    content.className = "accordion-content";
    content.innerHTML = `<p><strong>${e.company}</strong></p><p>${e.desc}</p>`;

    // Evento de abrir/cerrar
    header.addEventListener("click", () => {
      header.classList.toggle("active");
      content.classList.toggle("open");
    });

    item.appendChild(header);
    item.appendChild(content);
    expEl.appendChild(item);
  });
});
