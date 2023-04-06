import React from "react";
import "../../styles/footer.css";
import logo2 from "../../assets/img/dumble.png";
export default function Footer() {

  const year = new Date().getFullYear()
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500">

        <div className="logo">
          <div className="logo__img">
            <img src={logo2} alt="" loading="lazy"/>
          </div>
          <h2>Fitbody</h2>
        </div>
        <div className="copy__right">Copyright - {year} developed by Mustafa Tantawy</div>

    </footer>
  );
}
