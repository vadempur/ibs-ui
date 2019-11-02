import React from "react";
import "./styles.css";

export default function Services() {
  return (
    <section className="services-section">
      <h1 className="services-title">Services</h1>
      <div className="services-container">
        <div className="services-left">
          <div>
            <h2 className="services-left-title"  data-aos='fade-up'>Lorem ipsum dolor</h2>
            <p className="services-left-text"  data-aos='fade-up'>
              sit amet consectetur adipisicing elit. Voluptas repellat porro nisi ipsam laborum? Perspiciatis saepe
              repellat laboriosam, iste obcaecati, culpa, dolor error cumque officia libero architecto quis hic magni.
            </p>
          </div>
        </div>

        <div className="services-right">
          <Item
            title="Service 1"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat doloremque dignissimos"
          />
          <Item
            title="Service 2"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat doloremque dignissimos"
          />
          <Item
            title="Service 3"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat doloremque dignissimos"
          />
          <Item
            title="Service 4"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat doloremque dignissimos"
            last
          />
        </div>
      </div>
    </section>
  );
}

function Item({ title, desc, icon,last }) {
  return (
    <div className="services-right-item">
      <div data-aos='fade-up'>
        <h3 className="services-right-item-title">{title}</h3>
        <p className="services-right-item-text">{desc}</p>
        {!last && <div className="services-right-item-border" />}
      </div>
      <div data-aos='fade-up' className="services-right-item-img">
        <img width="200px" src="" alt="icon" />
      </div>
    </div>
  );
}
