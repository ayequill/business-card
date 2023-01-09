import siaw from "../assets/siaw.JPG";
export default function Info() {
  return (
    <>
      <div className="info">
        <img className="avatar" src={siaw} alt="" />
        <p className="name">Siaw A. Nicholas</p>
        <p className="position">Frontend Developer</p>
        <p className="web">siaw.dev</p>
        <div className="buttons">
          <a href="mailto: ayequillgh@gmail.com" className="emailbtn">
            <i class="bi bi-envelope-at-fill"></i>Email
          </a>
          <a
            target="_blank"
            href="http://linkedin.com/in/nicholas-siaw-8824a6175/"
            className="linkbtn"
          >
            <i class="bi bi-linkedin"></i>Linkedin
          </a>
        </div>
      </div>
    </>
  );
}
