import { HardSkillsTable } from "./HardSkills";
import { HardSkillsColumn } from "./HardSkills";
import { SoftSkillsTable } from "./SoftSkills";
import { Icon } from "./common/Icon"

export function Skills() {
  return (
    <section className="skills-wrapper">

      <article className="skills-container">
        <h2 className="general-title">
          <Icon icon="fa-solid fa-square" size="xs"/>
          Hard Skills
          <Icon icon="fa-solid fa-square" size="xs"/>
        </h2>
        <HardSkillsTable>
          <HardSkillsColumn
            skillTitle={"Desarrollo Front-End"}
            svgList = {["html", "css", "javascript", "wordpress", "react", "angular", "ionic", "cPlusPlus", "sql"]}
            nameList = {["HTML5", "CSS3", "Javascript", "WordPress", "React", "Angular", "Ionic", "C / C++", "MySQL"]}
            isExpanded={false}
            hasLine={true}
          />
          <HardSkillsColumn
            skillTitle={"Maquetación Web"}
            svgList = {["photoshop", "canva"]}
            nameList = {["Photoshop", "Canva"]}
            isExpanded={false}
            isSmallColumn={true}
          />
          <HardSkillsColumn
            skillTitle={"Manejo de proyectos"}
            svgList = {["github", "slack", "discord", "asana", "trello"]}
            nameList = {["Github", "Slack", "Discord", "Asana", "Trello"]}
            isExpanded={true}
          />
        </HardSkillsTable>

        <div className="skill-separator">
          <Icon icon="fa-solid fa-angle-down" size="5x"/>
        </div>
        
        <h2 className="general-title">
          <Icon icon="fa-solid fa-square" size="xs"/>
          Soft Skills
          <Icon icon="fa-solid fa-square" size="xs"/>
        </h2>
        <SoftSkillsTable />

      </article>

    </section>
  );
}