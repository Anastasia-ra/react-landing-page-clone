/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import './App.css';
// import Avocode from './images/Avocode.JPG';
import { ReactComponent as Avocode } from './images/Avocode.svg';
import { ReactComponent as LockIcon } from './images/lock.svg';
import Avocado from './images/Avocado.png';
import { ReactComponent as Hand } from './images/hand.svg';
import { ReactComponent as Pencil } from './images/pencil.svg';
import { ReactComponent as Figma } from './images/figma.svg';
import { ReactComponent as Ai } from './images/ai.svg';
import { ReactComponent as Ps } from './images/ps.svg';
import { ReactComponent as Sketch } from './images/sketch.svg';
import { ReactComponent as Underline } from './images/underline-2.svg';
import { ReactComponent as Xd } from './images/xd.svg';
import { ReactComponent as Clients } from './images/clients.svg';
import Favicon from './images/Favicon.ico';
import { ReactComponent as Twitter } from './images/twitter.svg';
import { ReactComponent as Facebook } from './images/facebook.svg';
import { ReactComponent as Instagram } from './images/instagram.svg';
import { ReactComponent as Youtube } from './images/youtube.svg';
import { ReactComponent as Svgexport } from './images/svgexport-83.svg';
import { ReactComponent as Linkedin } from './images/linkedin.svg';

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
  width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // width: 100%;
  height: 4.5rem;
  position: absolute;
  left: 0;
  right: 0;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  /* width: 100%; */
  margin-left: auto;
  margin-right: auto;
  color: rgb(46, 46, 46);
  /* margin-right: 20px;
  margin-left: 20px; */
`;

const logoStyle = css`
  width: 108px;
  height: 32px;
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

const arrow = css`
  ::after {
    content: '▼';
    color: rgb(119, 119, 119);
    padding-left: 0.5rem;
    font-size: 1rem;
  }
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

const centralElements = css`
  position: relative;
  display: flex;
  flex-direction: center;
  justify-content: center;
  top: 150px;
`;

const centralText = css`
  position: absolute;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding-top: 8rem;
  padding-bottom: 3rem;
  width: 764px;
  height: 442px;
  margin: 0 auto;
  font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: -0.06rem;
  font-weight: 700;
  line-height: 1;
  color: rgb(40, 40, 40);
  h1 {
    margin: 0px 0px 2rem;
    font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    letter-spacing: -0.06rem;
    font-weight: 700;
    line-height: 1;
    color: rgb(40, 40, 40);
    font-size: 6rem;
    // margin: 0.67em;
  }
`;

const listStyles = css`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 3rem;
`;

const svgCheckMarkStyle = css`
  position: relative;
  top: -2px;
  color: rgb(0, 188, 135);
  background: rgb(230, 248, 243);
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  text-align: center;
  margin-right: 0.5rem;
  svg {
    position: relative;
    top: 4px;
    fill: rgb(0, 188, 135);
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1rem;
    transition: fill 200ms ease-in;
  }
`;

const listItemStyles = css`
  margin-right: 1.5rem;
  // margin-bottom: 0px;
`;

const listItemText = css`
  font-size: 1.25rem;
  margin: 0px 0px 1rem;
  font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.2;
  color: rgb(46, 46, 46);
`;

const freeTrialStyles = css`
display: flex;
width: 400px;
height: 48px;

  input {
    border: 1px solid rgb(46, 46, 46);
    height: 3rem;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    background-color: transparent;
    cursor: auto;
    color: rgb(46, 46, 46);
  }
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.018rem;
    line-height: 1.269rem;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    font-family: proxima-nova, "Helvetica Neue", Arial, Helvetica, sans-serif;
    transition: background-color 100ms linear 0s;
    padding: 14px 18px;
    background-color: rgb(0, 188, 135);
    color: rgb(255, 255, 255);
    margin: 0px 0px 0px 0.5rem;
    height: 47px;
    width: 250px;
    :hover {
    background-color: rgb(6, 151, 110);
  }

}
  }
`;

const mainAvocadoPicture = css`
  z-index: 5;
  position: absolute;
  top: 60px;
  right: -200px;
  width: 344px;
  height: 452px;
  max-width: 100%;
`;

const avocadoHand = css`
  position: absolute;
  z-index: 0;
  top: 175px;
  right: 100px;
  width: 130px;
  height: 65px;
`;

const avocadoPencil = css`
  position: absolute;
  z-index: 10;
  top: 102px;
  right: 180px;
  width: 132px;
  height: 101px;
`;

const avocadoUnderline = css`
  position: absolute;
  top: 130px;
  left: 10px;
  z-index: 10;
  width: 440px;
  height: 10px;
`;

const aiImageStyle = css`
  position: absolute;
  z-index: 5;
  top: 80px;
  right: -280px;
  width: 80px;
  height: 69px;
`;
const psImageStyle = css`
  position: absolute;
  z-index: 5;
  top: -40px;
  right: -60px;
  width: 68px;
  height: 64px;
`;
const figmaImageStyle = css`
  position: absolute;
  z-index: 5;
  top: 195px;
  left: -240px;
  width: 50px;
  height: 74px;
`;
const sketchImageStyle = css`
  position: absolute;
  z-index: 5;
  top: -50px;
  left: -150px;
  width: 80px;
  height: 69px;
`;
const xdImageStyle = css`
  position: absolute;
  z-index: 5;
  top: 440px;
  left: -90px;
  width: 50px;
  height: 51px;
`;

const companyList = css``;

const clientsImageStyle = css`
  position: absolute;
  z-index: 5;
  top: 630px;
  left: 140px;
  width: 50px;
  height: 51px;
`;

const footerPartsStyle = css`
  position: absolute;
  top: 750px;
  display: flex;
  flex-direction: column;
  /* width: 1262.7px;
  height: 50px; */
`;

const linksPartsStyle = css`
  width: 1100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  padding-top: 4.5rem;
  h2 {
    margin: 0px 0px 2rem;
    font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.2;
    color: rgb(88, 88, 88);
  }
`;

const avocadoFavIcon = css`
  height: 22px;
  width: 24px;
  position: relative;
  top: 4px;
`;

const footerLinksStyle = css`
  flex-grow: 1;
  li {
    list-style: none;
    margin: 0px;
    letter-spacing: normal;
    color: rgb(119, 119, 119);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }
  a {
    cursor: pointer;
    background-color: transparent;
  }
  ul {
    padding-left: 0;
  }
`;

const footerStyle = css`
  background-color: rgb(250, 250, 250);
  /* position: relative;
  overflow: hidden; */
  z-index: 0;
  color: rgb(177, 177, 177);
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const firstList = css`
  position: relative;
  top: 21px;
`;

const bottomLinksStyle = css`
  display: flex;
  font-size: 0.75rem;
  padding: 1.5rem 0px 4.5rem;
  align-items: center;
  justify-content: flex-start;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  color: rgb(119, 119, 119);
`;

const socialMediaLogo = css`
  display: flex;
  margin-right: 20px;
  a {
    margin-right: 1rem;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const socialMediaLinks = css``;

const termsLinks = css`
  margin-right: 80px;
  ul {
    display: flex;
    list-style: none;
  }
  a {
    cursor: pointer;
    padding-left: 9px;
  }
`;

const copyright = css`
  margin-right: 40px;
`;

const bulletPoints = css`
  a::before {
    content: '•';
    padding-right: 9px;
  }
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
            <Avocode css={logoStyle} />
          </div>
          <div>
            <ul css={navUlListStyle}>
              <li css={navListStyle}>
                <span css={arrow}>Product</span>
              </li>
              <li css={navListStyle}>
                <span css={arrow}>Solutions</span>
              </li>
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
        <div css={centralElements}>
          <div css={centralText}>
            <img css={mainAvocadoPicture} src={Avocado} alt="Avocado" />
            <Hand css={avocadoHand} />
            <Pencil css={avocadoPencil} />
            <Underline css={avocadoUnderline} />
            <Ai css={aiImageStyle} />
            <Figma css={figmaImageStyle} />
            <Ps css={psImageStyle} />
            <Sketch css={sketchImageStyle} />
            <Xd css={xdImageStyle} />
            <Clients css={clientsImageStyle} />
            <h1>
              <span>Save time </span>
              <span>working with design files</span>
            </h1>
            <div css={listStyles}>
              <div css={listItemStyles}>
                <span css={svgCheckMarkStyle}>
                  <svg viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                </span>
                <span css={listItemText}>Hand-off</span>
              </div>
              <div css={listItemStyles}>
                <span css={svgCheckMarkStyle}>
                  <svg viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                </span>
                <span css={listItemText}>Inspect</span>
              </div>
              <div css={listItemStyles}>
                <span css={svgCheckMarkStyle}>
                  <svg viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                </span>
                <span css={listItemText}>Get assets</span>
              </div>
              <div css={listItemStyles}>
                <span css={svgCheckMarkStyle}>
                  <svg viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                </span>
                <span css={listItemText}>Review</span>
              </div>
            </div>
            <div css={freeTrialStyles}>
              <input type="email" placeholder="name@company.com" />
              <button>Start free trial</button>
            </div>
          </div>
        </div>
        <div css={companyList}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
      <footer css={footerStyle}>
        <div css={footerPartsStyle}>
          <div css={linksPartsStyle}>
            <div css={footerLinksStyle}>
              <img src={Favicon} alt="Logo" css={avocadoFavIcon} />
              <ul css={firstList}>
                <li>
                  <a>Download</a>
                </li>
                <li>
                  <a>Web app</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Server status</a>
                </li>
                <li>
                  <a>Changelog</a>
                </li>
              </ul>
            </div>
            <div css={footerLinksStyle}>
              <h2>Product</h2>
              <ul>
                <li>
                  <a>Hand-off</a>
                </li>
                <li>
                  <a>Inspect</a>
                </li>
                <li>
                  <a>Review & Comment</a>
                </li>
                <li>
                  <a>Versioning</a>
                </li>
                <li>
                  <a>Pixel Checker</a>
                </li>
              </ul>
            </div>
            <div css={footerLinksStyle}>
              <h2>Solutions</h2>
              <ul>
                <li>
                  <a>Security</a>
                </li>
                <li>
                  <a>Open Design</a>
                </li>
                <li>
                  <a>Convert Figma to Sketch</a>
                </li>
                <li>
                  <a>Convert XD to Sketch</a>
                </li>
                <li>
                  <a>Convert PSD to Sketch</a>
                </li>
              </ul>
            </div>
            <div css={footerLinksStyle}>
              <h2>Company</h2>
              <ul>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Jobs 🚀</a>
                </li>
                <li>
                  <a>Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div css={bottomLinksStyle}>
            <div css={socialMediaLogo}>
              <a css={socialMediaLinks}>
                <Twitter />
              </a>
              <a css={socialMediaLinks}>
                <Facebook />
              </a>
              <a css={socialMediaLinks}>
                <Instagram />
              </a>
              <a css={socialMediaLinks}>
                <Youtube />
              </a>
              <a css={socialMediaLinks}>
                <Svgexport />
              </a>
              <a css={socialMediaLinks}>
                <Linkedin />
              </a>
            </div>
            <div css={termsLinks}>
              <ul>
                <li>
                  <a>Terms of service </a>
                </li>
                <li css={bulletPoints}>
                  <a>Privacy policy </a>
                </li>
                <li css={bulletPoints}>
                  <a>Cookies </a>
                </li>
                <li css={bulletPoints}>
                  <a>Licenses </a>
                </li>
                <li css={bulletPoints}>
                  <a>Sitemap </a>
                </li>
              </ul>
            </div>
            <div css={copyright}>Copyright © 2022 Avocode</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
