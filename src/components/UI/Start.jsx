import React from "react";
import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.png";
const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={trainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
              loading="lazy"
            />
          </div>
          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section__title">
              Ready to make a <span className="highlights">change?</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              repellendus facere eos dolorem voluptatibus laborum optio quis
              iusto atque similique unde dicta, maiores voluptatum ullam.
              Repudiandae doloribus magni vel reprehenderit.
            </p>
            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
