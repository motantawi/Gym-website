import React from "react";
import "../../styles/pricing.css";
const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="pricing__top">
          <h2 className="title">
            Gym <span className="highlights">Pricing</span> Plan
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
            Ullam, tempore. Deleniti magni rerum aspernatur vitae.
          </p>
        </div>
        <div className="pricing__wrapper">
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="pricing__card-top">
              <h2 className="title">Regular Member</h2>
              <h2 className="pricing title">
                $50 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                    Unlimited acces to the gym
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                    Customer support
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                    Personal trainer
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                    Standard options
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>5 classes per
                    week
                  </span>
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>
          <div
            className="pricing__item pre"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="pricing__card-top" id="premium">
              <h2 className="title">Premium Member</h2>
              <h2 className="pricing title">
                $70 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                    Unlimited acces to the gym
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                    Customer support
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                    Personal trainer
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                    Standard options
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>5 classes per
                    week
                  </span>
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="pricing__card-top">
              <h2 className="title">Standard Member</h2>
              <h2 className="pricing title">
                $100 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                    Unlimited acces to the gym
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                    Customer support
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                    Personal trainer
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                    Standard options
                  </span>
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>5 classes per
                    week
                  </span>
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
