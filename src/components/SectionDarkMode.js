/** @jsxImportSource @emotion/react */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { React, useEffect } from 'react';
import { sectionDarkmode } from './sectionDarkModeStyle';

export default function SectionDarkMode() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section css={sectionDarkmode}>
      <div className="darkmode-text-wrapper">
        <h2>And of course, dark mode.</h2>
        <p>
          Perfect for those midnight trips to the fridge for a healthy snack.
        </p>
      </div>
      <div className="darkmode-img-wrapper">
        <img
          data-aos-delay="600"
          data-aos="slide-up-custom"
          src="img/en-dark-ns-cut.png"
          alt=""
        />
      </div>
    </section>
  );
}
