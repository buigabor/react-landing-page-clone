import { css } from '@emotion/react';

export const sectionQRCodeStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;

  h2 {
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 70px;
    text-align: center;
    max-width: 900px;
  }

  p {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    color: rgb(54, 181, 53);
  }

  a {
    display: block;
    margin: 40px auto 0px;
    cursor: pointer;
    width: 150px;
    height: 275px;
    background: url('img/en-kiff-download-qr.svg') center top / 100% no-repeat;
  }
`;
