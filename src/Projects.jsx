import { useEffect, useState } from 'react';

import { Icon } from './common/Icon';
import { ContentCard } from './common/ContentCard'

import { getContents } from './utils';

import './style/projects.css'

export function Projects() {

const [projectList, setProjectList] = useState([]);

useEffect(() => {
  getContents().then((data) => {
    setProjectList(data);
  });
}, [])

  return (
    <div className="exp-projects-wrapper">
      <section className="exp-projects-container">

        {/* Experience */}
        <div className="exp-intro">
          <h2 className="general-title">
            <Icon icon="fa-solid fa-square"/>
            Experiencia
            <Icon icon="fa-solid fa-square"/>
          </h2>
        </div>
        <section className="exp-wrapper">
        
          <article className="exp-container">
            <div className="exp-title-container">
              <div className="exp-title">
                <h2>Ingeniería Multimedia</h2>
                <p>Universidad de Alicante</p>
                <p>(2021 - 2026)</p>
              </div>
            </div>
        
            <div className="exp-desc">
              <p>
                Durante mis estudios aprendí todas las bases del desarrollo Front-End:
                lenguajes como <strong>HTML, CSS, Javascript</strong>, C/C++..., CMS como
                <strong> Wordpress</strong> y Frameworks como <strong>React</strong>, Angular e Ionic.
                Con estos conocimientos desarrollé varios proyectos:
              </p>
              <ul>
                <li>Múltiples páginas web con características tales como gestión de usuarios e interacción con APIs y bases de datos.</li>
                <li>Tienda online funcional con Wordpress y Woocomerce.</li>
                <li>Aplicación multiplataforma básica para PC y Android, utilizando Ionic.</li>
              </ul>
            </div>
            
            <div className="exp-title-container">
              <div className="exp-title">
                <h2>Prácticas de empresa</h2>
                <p>Mabisy S.L</p>
                <p>(2023)</p>
              </div>
            </div>

            <div className="exp-desc">
              <p>
                Durante mis prácticas en la empresa realicé diversas tareas,
                como <strong>maquetación de tiendas online</strong> y edición de estilos con CSS
                de tiendas ya existentes. Este puesto me aportó experiencia en
                el manejo de herramientas importantes y habilidades de comunicación
                entre los miembros de un equipo de trabajo profesional.
              </p>
            </div>

            <div className="exp-title-container">
              <div className="exp-title">
                <h2>Proyectos personales</h2>
                <p>(Actualidad)</p>
              </div>
            </div>

            <div className="exp-desc">
              Actualmente estoy trabajando en proyectos personales, con tal de profundizar 
              en las herramientas usadas durante mis estudios y ampliar mis conocimientos 
              de desarrollo Front-End. Por ejemplo, este portfolio ha sido creado a mano utilizando
              Vite y React.
            </div>
          </article>
          <div className="exp-separator">
            <Icon icon="fa-solid fa-angle-down" size="5x"/>
          </div>
        </section>

          {/* Projects */}
          <div className="projects-intro">
            <h2 className="general-title">
              <Icon icon="fa-solid fa-square"/>
              Proyectos
              <Icon icon="fa-solid fa-square"/>
            </h2>
          </div>
          <section className="projects-container">
            {projectList.map((project) => (
              <ContentCard contentName={project.name} key={project.name}/>
            ))}
          </section>
      </section>
    </div>
  );
}