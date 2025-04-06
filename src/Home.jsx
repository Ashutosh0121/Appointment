import React from "react";
import { CiHospital1 } from "react-icons/ci";

export default function Home() {
  return (
    <>
      <main>
        <div className="hero grid ">
          <div className=" content flex">
            <div className="hero_text ">
              <h1>Book Your Appointment</h1>
              <p>
                Book your appointment with our doctors and get the best
                treatment. We are here to help you.
              </p>
            </div>
            <div className="hero_img grid ">
              <img
                src="https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-professional-doctor-with-order-png-image_11626748.png"
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
                <h1>Faster recover</h1>
                <p>We provide the best treatment .</p>
              </div>
            </div>
            <div className="box">
              <div className="box_icon grid">
                <CiHospital1 />
              </div>
              <div className="text">
                <h1>Faster recover</h1>
                <p>We provide the best treatment .</p>
              </div>
            </div>
            <div className="box">
              <div className="box_icon grid">
                <CiHospital1 />
              </div>
              <div className="text">
                <h1>Faster recover</h1>
                <p>We provide the best treatment .</p>
              </div>
            </div>
            <div className="box">
              <div className="box_icon grid">
                <CiHospital1 />
              </div>
              <div className="text">
                <h1>Faster recover</h1>
                <p>We provide the best treatment .</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="content">
          <div className="gird grid_three">
            
            
            <div className="contact"></div>
              <ul>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
              </ul>
          </div>
        </div>
        <div className="copywright">
          <p className="grid ">© 2025 Copyright </p>
        </div>
      </footer>
    </>
  );
}
