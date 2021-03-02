import { css } from '@emotion/react';
export const sectionOneStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 40px;

  h1 {
    font-size: 14rem;
    line-height: 12rem;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    margin-top: 70px;
    letter-spacing: 5px;

    span:first-of-type {
      position: relative;
      z-index: 0;
    }

    span:last-child {
      position: relative;
      z-index: 2;
    }
  }

  img {
    position: absolute;
    z-index: 1;
    width: 440px;
    right: 200px;
    top: 140px;
  }

  h2 {
    margin: 0px auto;
    font-weight: 500;
    text-align: center;
    color: rgb(54, 181, 53);
    line-height: 30px;
    font-size: 33px;
    max-width: 725px;
    letter-spacing: 1px;
  }
`;
