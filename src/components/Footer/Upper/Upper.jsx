import "./Upper.css";

export default function Upper() {
  return (
    <div className="upper-footer d-flex justify-content-center align-items-center text-center text-white">
      <div className="row">
        <div className="col-md-4">
          <div className="mb-5">
            <h3 className="fs-1">Location</h3>
            <p className="fs-5">2215 John Daniel Drive</p>
            <p className="fs-5">Clark, MO 65243</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="fs-1 mb-5">
            <h3 className="fs-2">AROUND THE WEB</h3>
            <div>
              <i className="fa-brands fa-facebook icon fs-5 mx-3 p-3"></i>
              <i className="fa-brands fa-twitter icon fs-5 mx-3 p-3"></i>
              <i className="fa-brands fa-linkedin-in icon fs-5 mx-3 p-3"></i>
              <i className="fa-solid fa-globe icon fs-5 mx-3 p-3"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="px-5 fs-5">
            <h3 className="fs-2">ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
