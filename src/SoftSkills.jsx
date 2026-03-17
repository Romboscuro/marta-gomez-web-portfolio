import './style/common.css';
import './style/skills.css';

export function SoftSkillsTable() {
  return (
    <div className="soft-skills-table">
      <div>
        <img src="assets/skills/teamwork.png" alt="Trabajo en Equipo"></img>
        <p className="general-subtitle">Trabajo en equipo y Metodologías</p>
        <p className="soft-skill-desc">
          Experiencia trabajando con múltiples equipos, utilizando 
          metodologías ágiles como <strong>Scrum y Kanban</strong>.
        </p>
      </div>
      <div>
        <img src="assets/skills/multiplatform.png" alt="Experiencia Multiplataforma"></img>
        <p className="general-subtitle">Experiencia multiplataforma</p>
        <p className="soft-skill-desc">
          Familiaridad con múltiples entornos de desarrollo 
          y sistemas operativos, por ejemplo <strong>Linux</strong>.
        </p>
      </div>
      <div>
        <img src="assets/skills/thinking.png" alt="Pernsamiento lógico y creativo"></img>
        <p className="general-subtitle">Pensamiento lógico y creativo</p>
        <p className="soft-skill-desc">
          Capacidad para idear soluciones <strong>creativas</strong> a la par 
          que <strong>eficientes</strong>, gracias a mis habilidades técnicas.
        </p>
      </div>
      <div>
        <img src="assets/skills/positive.png" alt="Resiliencia y actitud positiva"></img>
        <p className="general-subtitle">Resiliencia y actitud positiva</p>
        <p className="soft-skill-desc">
          <strong>Constancia</strong> y <strong>dedicación</strong> en mi día a día, 
          usando la observación y la lógica para resolver los problemas.
        </p>
      </div>
    </div>
  );
}