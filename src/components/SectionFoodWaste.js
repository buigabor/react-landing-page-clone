/** @jsxImportSource @emotion/react */
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { CardContainer } from '../util/CardContainers';
import { sectionFoodWaste } from './sectionFoodWasteStyle';
// ..

export default function SectionFoodWaste() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section css={sectionFoodWaste}>
      <div className="card-grid">
        <CardContainer
          data-aos="grow-size"
          data-aos-delay="500"
          data-aos-anchor=".pineapple-anchor"
          bgColor="tomato"
          className="tomato-anchor"
        >
          <div className="card__header-wrapper">
            <span className="card__header-icon" role="img" aria-label="Tomato">
              🍅
            </span>
            <span className="card__header-number">2</span>
          </div>
          <div className="card__text-wrapper">
            <span className="card__text-h">Tomatoes</span>
            <span className="card__text-p">Fresh for 3 more days</span>
          </div>
        </CardContainer>
        <CardContainer bgColor="lettuce">
          <div className="card__header-wrapper">
            <span className="card__header-icon" role="img" aria-label="Lettuce">
              🥬
            </span>
            <span className="card__header-number">4</span>
          </div>
          <div className="card__text-wrapper">
            <span className="card__text-h">Lettuce</span>
            <span className="card__text-p">Fresh for 3 more days</span>
          </div>
        </CardContainer>
        <CardContainer
          data-aos="grow-size"
          data-aos-delay="200"
          bgColor="pineapple"
          className="pineapple-anchor"
        >
          <div className="card__header-wrapper">
            <span
              className="card__header-icon"
              role="img"
              aria-label="Pineapple"
            >
              🍍
            </span>
            <span className="card__header-number">2</span>
          </div>
          <div className="card__text-wrapper">
            <span className="card__text-h">Pineapple</span>
            <span className="card__text-p">Fresh for 3 more days</span>
          </div>
        </CardContainer>
        <CardContainer
          data-aos="grow-size"
          data-aos-delay="800"
          bgColor="carrot"
          data-aos-anchor=".tomato-anchor"
        >
          <div className="card__header-wrapper">
            <span className="card__header-icon" role="img" aria-label="Carrot">
              🥕
            </span>
            <span className="card__header-number">1</span>
          </div>
          <div className="card__text-wrapper">
            <span className="card__text-h">Carrots</span>
            <span className="card__text-p">Fresh for 3 more days</span>
          </div>
        </CardContainer>
      </div>
      <div className="wrapper">
        <h2>Don't let your food go to waste.</h2>
        <p>
          Kiff tracks your food's state and orders it by priority, so you will
          know what to eat at a glance.
        </p>
      </div>
    </section>
  );
}
