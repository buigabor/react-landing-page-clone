import { css, keyframes } from '@emotion/react';
import { wrapper } from '../util/wrappers';

const popSize = keyframes`
  0% {
    transform: scale(1)
  }

  50% {
    transform: scale(2)
  }

	100% {
    transform: scale(1)
  }
`;

export const sectionOpeningTime = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  position: relative;
  padding: 0px 40px 0 40px;
  .card-grid {
    display: grid;
    align-items: center;
    justify-items: center;
    justify-content: center;
    grid-template-columns: min-content min-content;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'eggs cheese'
      'matcha tomatosauce';
    gap: 22px;
  }

  .wrapper {
    ${wrapper}
  }

  .delay-cheese-animation {
    animation-delay: 0.4s !important;
  }

  .delay-matcha-animation {
    animation-delay: 0.8s !important;
  }

  .delay-tomatosauce-animation {
    animation-delay: 1.2s !important;
  }

  [data-aos='pop-size'] {
    &.aos-animate {
      animation: ${popSize} 0.6s ease;
    }
  }
`;
