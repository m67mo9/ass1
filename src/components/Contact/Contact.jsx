import "./Contact.css";
import Header from "../Header/Header";

export default function Contact() {

  const stop = (e) => e.preventDefault();

  return (
    <div className="contact d-flex flex-column">
      <div className="contact-header">
        <Header header={"conatct section"} />
      </div>

    <form className="w-50 p-3 mx-auto mt">
      <label htmlFor="username">userName :</label>
      <input type="text" placeholder="userName" id="username" className="form-control mb-3 border-0 border-bottom py-3" />

      <label htmlFor="userAge">userAge :</label>
      <input type="number" placeholder="userAge" id="userAge" className="form-control mb-3 border-0 border-bottom py-3" />

      <label htmlFor="userEmail">userEmail :</label>
      <input type="email" placeholder="userEmail" id="userEmail" className="form-control mb-3 border-0 border-bottom py-3" />

      <label htmlFor="userPassword">userPassword :</label>
      <input type="password" placeholder="userPassword" id="userPassword" className="form-control mb-3 border-0 border-bottom py-3" />

      <button onClick={stop} className="btn text-white" style={{ backgroundColor: "#0a1311ff" }}>sned Messgae</button>
    </form>

    </div>
  );
}
