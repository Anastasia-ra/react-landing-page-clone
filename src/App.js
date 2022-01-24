/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import './App.css';
import Avocode from './images/Avocode.JPG';
import { ReactComponent as LockIcon } from './images/lock.svg';

const notificationBarStyle = css`
  background-color: rgb(17, 93, 246);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  letter-spacing: -0.09px;
  font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  transition: all 0.2s ease-in 0s;
  cursor: pointer;
  margin: 0px;
  line-height: 1.3;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.14px;
  font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: rgb(255, 255, 255);
`;

const buttonNotBarStyle = css`
  border-radius: 19px;
  text-transform: uppercase;
  height: 28px;
  line-height: 28px;
  margin: 0px 0px 0px 20px;
  padding: 0px 18px;
  font-size: 12px;
  font-weight: 700;
  color: rgb(17, 93, 246);
  background-color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.85;
    background-color: rgb(240, 240, 240);
  }
`;

const navigationStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.5rem;
  position: absolute;
  left: 0;
  right: 0;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  /* width: 100%;
  margin-left: auto;
  margin-right: auto; */
  color: rgb(46, 46, 46);
`;

const logoStyle = css`
  width: 8.5rem;
  height: 2rem;
  cursor: pointer;
`;

const navUlListStyle = css`
  display: flex;
  list-style-type: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  color: rgb(46, 46, 46);
  cursor: pointer;
`;

const navListStyle = css`
  padding: 1.8rem 1.5rem;
  display: inline-block;
`;

const leftNavBarStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const logInStyle = css`
  color: rgb(23, 23, 23);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.018rem;
  line-height: 1.269rem;
  padding: 8px 12px;
  margin-right: 0.5rem;
  height: 36px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease-in 0s;
  :hover {
    background-color: rgb(240, 240, 240);
  }
`;

const lockIconStyle = css`
  margin-right: 0.4rem;
  width: 1.2rem;
  height: auto;
`;

const signUpButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 188, 135);
  border: none;
  transition: background-color 0.3s ease-in 0s;
  color: rgb(255, 255, 255);
  font-weight: 600;
  font-family: 'proxima-nova', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  text-align: center;
  vertical-align: middle;
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 8px 12px;
  // width: auto;
  height: 36px;
  font-size: 1rem;
  letter-spacing: 0.018rem;
  line-height: 1.269rem;
  :hover {
    background-color: rgb(6, 151, 110);
  }
`;

const centralText = css`
  margin: 0px 0px 2rem;
  font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: -0.06rem;
  font-weight: 700;
  line-height: 1;
  color: rgb(40, 40, 40);
`;

function App() {
  return (
    <div className="App">
      <header>
        <div css={notificationBarStyle}>
          <div>
            👋 We're joining forces with Ceros - we play so well together, we
            made it official.
          </div>
          <button css={buttonNotBarStyle}>Learn more</button>
        </div>
        <nav css={navigationStyle}>
          <div>
            <img css={logoStyle} src={Avocode} alt="logo" />
          </div>
          <div>
            <ul css={navUlListStyle}>
              <li css={navListStyle}>Product</li>
              <li css={navListStyle}>Solutions</li>
              <li css={navListStyle}>Blog</li>
              <li css={navListStyle}>Download</li>
              <li css={navListStyle}>Pricing</li>
            </ul>
          </div>
          <div css={leftNavBarStyle}>
            <a css={logInStyle}>
              <LockIcon css={lockIconStyle} /> Log in
            </a>

            <button css={signUpButton}>Sign up</button>
          </div>
        </nav>
      </header>
      <main>
        <div css={centralText}>
          <h1>
            <span>Save time </span>
            <span>working with design files</span>
          </h1>
          <ul>
            <li>Hand-off</li>
            <li>Inspect</li>
            <li>Get assets</li>
            <li>Review</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
