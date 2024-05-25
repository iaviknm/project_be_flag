import aboutData from "../../data/aboutData";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h1 className="title">{aboutData.title}</h1>
        <div className="row">
          <div className="about__col-1">
            <p className="about__col-1_info">{aboutData.info}</p>
          </div>

          <div className="about__col-2">
            <img src={aboutData.image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
