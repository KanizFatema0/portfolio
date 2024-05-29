import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>A showcase of my skills, each honed through dedicated practice and real-world application, highlights my expertise and commitment to excellence in my field.</p>

              <div className="skill-container">
                <div className="skill-left">
                  <h3>Tools</h3>
                  <br />
                  <h5>VSCode,Netbeans</h5>
                  <br />
                  <h5>MATLAB</h5>
                  <br />
                  <h5>XAMPP</h5>
                  <br />
                  <h5>GitHub</h5>
                  <br />
                  <h5>MS Word, Excel, Powerpoint</h5>
                  <br />
                  <h5>Figma</h5>
                  <br />
                  <h5>Blender, Unity</h5>
                  <br />
                  <h5>Adobe Illustrator, Photoshop, XD</h5>
                </div>
                <div className="skill-right">
                  <h3>Programming Language</h3>
                  <br />
                  <h5>Java</h5>
                  <br />
                  <h5>JavaScript(NodeJS,React)</h5>
                  <br />
                  <h5>PHP</h5>
                  <br />
                  <h5>SQL(MySQL)</h5>
                  <br />
                  <h5>HTML,CSS,Bootstrap</h5>
                  <br />
                  <h5>Csound</h5>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}