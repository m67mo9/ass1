import "./Header.css";
export default function Header(props) {
  return (
    <div className="text-white my-4">
      <h2 className="header-page fw-bolder text-uppercase d-flex justify-content-center">{props.header}</h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="line bg-white"></div>
        <i className="mx-4 fs-5 fa-solid fa-star"></i>
        <div className="line bg-white"></div>
      </div>
    </div>
  );
}
