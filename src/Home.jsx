import React from "react";
import { CiHospital1 } from "react-icons/ci";
import dr_img from "./asset/Dr1.webp";

export default function Home() {
  return (
    <>
      <main className="content">
        <div className="hero   grid ">
          <div className=" content grid  grid-two">
            <div className="hero_text ">
              <h1>Book Your Appointment</h1>
              <p>
                Book your appointment with our doctors and get the best
                treatment. We are here to help you.
              </p>
              <button className="btn">Book Now</button>
            </div>
            <div className="hero_img grid ">
              <img
                src={dr_img}
                alt=""
              />
            </div>
          </div>
        </div>
      </main>

      <section>
        <div className=" hero-second ">
          <div className="grid grid-four content">
            <div className="box">
              <div className="box_icon grid">
                <CiHospital1 />
              </div>
              <div className="text">
                <h1>Expert Doctors</h1>
                <p>
                  Our team consists of highly qualified and experienced doctors.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box_icon grid">
                <CiHospital1 />
              </div>
              <div className="text">
                <h1>24/7 Support</h1>
                <p>
                  We are available round the clock to assist you with your
                  needs.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box_icon grid">
                <CiHospital1 />
              </div>
              <div className="text">
                <h1>Advanced Facilities</h1>
                <p>
                  We provide state-of-the-art medical facilities for better
                  care.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box_icon grid">
                <CiHospital1 />
              </div>
              <div className="text">
                <h1>Personalized Care</h1>
                <p>
                  We ensure every patient receives personalized attention and
                  care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <article></article>

      <footer>
        <div className="content">
          <div className="grid_three grid">
            <div>
              <h3>Services</h3>
              <p>Consultation</p>
              <p>Emergency Services</p>
              <p>Health Checkup</p>
            </div>

            <div>
              <h3>Contact</h3>
              <p>Email: support@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            <div>
              <h3>About Us</h3>
              <p>
                Learn more about our services 
                and mission to provide the best
                appointments for your needs.
              </p>
              <p>Facebook | Twitter | Instagram</p>
            </div>
          </div>
        </div>
        <div className="copywright">
          <p>&copy; 2025 Doctor Appointment. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
