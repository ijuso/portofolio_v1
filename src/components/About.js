import "../styles/about.css"
import logo from '../img/draven.webp'

export default function About() {
    return (
        <section id="about">
          <div className="aboutStyle">
            <div className="intro">
              <h1>
                Hi, I'm Juuso.
                <br/>I love to learn new things <br/>
                and use my learning to build awesome projects.
              </h1>
              <p>
                Software developer 
              </p>
              <div>
                <img class="pics" src={logo} alt="logo" height="100" width="100"/>
              </div>
              <div>
                <a href="#contact">
                  Hire me
                </a>

                <br/>

                <a href="#projects">
                  Check out my recent work
                </a>
              </div>
            </div>
          </div>
        </section>
        
      );
}