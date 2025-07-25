import "./Portfolio.css";
import Header from "../Header/Header";
import poert1 from "../../assets/images/poert1.png";
import poert2 from "../../assets/images/port2.png";
import poert3 from "../../assets/images/port3.png";
import poert4 from "../../assets/images/port4.png";
import poert5 from "../../assets/images/port5.png";
import poert6 from "../../assets/images/poert6.png";

export default function Portfolio() {
  const portfolio = [
    {
      id: 1,
      img: poert1,
    },
    {
      id: 2,
      img: poert2,
    },
    {
      id: 3,
      img: poert3,
    },
    {
      id: 4,
      img: poert4,
    },
    {
      id: 5,
      img: poert5,
    },
    {
      id: 6,
      img: poert6,
    },
  ];

  return (
    <div className="portfolio d-flex flex-column ">
      <Header header={"portfolio section"} />
      <div className="container">
        <div className="row mb-4 g-5">
          {portfolio.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="portfolio-img position-relative">
                <img className="w-100 rounded-3" src={item.img} alt="" />
                <div className="img-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
