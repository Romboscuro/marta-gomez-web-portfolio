import { Icon } from './common/Icon';

import './style/aboutme.css';

export function AboutMe() {
  return (
      <section className="about-me-wrapper">
        <section className="about-me-container">

          <article className="about-me-desc-and-photo">

            {/* Personal Information*/}
            <div className="about-me-desc">
              <h2 className="general-title">
              <Icon icon="fa-solid fa-square" size="xs"/> 
              Sobre mí
              <Icon icon="fa-solid fa-square" size="xs"/>
            </h2>
              <p>
                El desarrollo Front-End combina dos de mis pasiones favoritas: Crear 
                mis propios diseños de páginas web, y ayudar a las personas con ellas.
                Soy una persona creativa, constante y responsable, que en su trayectoria 
                ha desarrollado múltiples páginas y aplicaciones web, usando
                <strong> HTML/CSS/JS, Wordpress, React</strong>... Actualmente busco 
                una oportunidad para seguir aprendiendo y poder colaborar en equipo 
                desarrollando nuevos proyectos.
              </p>
            </div>
            
            <div className="about-me-photo">
              <img src="assets/fotoCV.png" alt="Imagen de Marta Gómez Verdú"></img>
            </div>
          </article>

          <article className="about-me-contact">
            <a className="btn-primary" 
               href="https://drive.google.com/file/d/1v3pEHWqvJtBQOX7j-IDHYa3YEhF7Txe3/view?usp=sharing"
               target="_blank"
            >Descargar CV</a>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/marta-gómez-verdú-2681362a1" target="_blank">
                  <Icon icon="fa-brands fa-linkedin" size="2x" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Romboscuro" target="_blank">
                  <Icon icon="fa-brands fa-github" size="2x" />
                </a>
              </li>
              <li>
                <a href="mailto:martagomez3d@gmail.com" target="_blank">
                  <Icon icon="fa-solid fa-envelope" size="2x" />
                </a>
              </li>
            </ul>
          </article>
        </section>
      </section>

  );
}
