import './style/common.css';
import './style/skills.css';

export function HardSkillsTable({children}) {
  return (
    <section className="hard-skills-table">
      {children}
    </section>
  );
}

export function HardSkillsColumn({skillTitle, svgList, nameList, isExpanded = false, isSmallColumn = false, hasLine = false}) {
  return (
    <article className={isExpanded ? "hard-skills-table-column-expanded" : "hard-skills-table-column"}>

      <p className="general-subtitle"><strong>{skillTitle}</strong></p>
      <div className=
          {"hard-skills-table-cell" + " " + 
          (hasLine ? "line-left" : " ") + 
          (isSmallColumn ? "small-column" : " ")}
      >
        {nameList.map((name, index) => (
          <p key={index}>
            <img src={'assets/skills/' + svgList[index] + '.png'} alt={name}></img>
            {name}
          </p>
        ))}
      </div>
    </article>
  );
}