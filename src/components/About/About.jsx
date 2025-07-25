import "./About.css";
import Header from "../Header/Header";

export default function About() {
  return (
    <div className="about text-center d-flex justify-content-center align-items-center flex-column">
      <Header header={"about component"} />
      <div className="text-white fs-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="paragraph">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="paragraph">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
