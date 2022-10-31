import React from "react";
import image1 from "./assets/images/image-retro-pcs.jpg";
import image2 from "./assets/images/image-top-laptops.jpg";
import image3 from "./assets/images/image-gaming-growth.jpg";

const TopRow = () => {
  return (
    <section className="list-row">
      <div className="list-row-item">
        <div className="list-row-item__image-container">
          <img src={image1} alt="Retro PC" className="list-row-item__image" />
        </div>
        <div className="list-row-item__text">
          <p className="list-row-item__text__number">01</p>
          <h4 className="list-row-item__text__heading">Reviving Retro PCs</h4>
          <p className="list-row-item__text__paragraph">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="list-row-item">
        <div className="list-row-item__image-container">
          <img
            src={image2}
            alt="Top laptops"
            className="list-row-item__image"
          />
        </div>
        <div className="list-row-item__text">
          <p className="list-row-item__text__number">02</p>
          <h4 className="list-row-item__text__heading">
            Top 10 Laptops of 2022
          </h4>
          <p className="list-row-item__text__paragraph">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="list-row-item">
        <div className="list-row-item__image-container">
          <img
            src={image3}
            alt="Gaming growth"
            className="list-row-item__image"
          />
        </div>
        <div className="list-row-item__text">
          <p className="list-row-item__text__number">03</p>
          <h4 className="list-row-item__text__heading">The Growth of Gaming</h4>
          <p className="list-row-item__text__paragraph">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopRow;
