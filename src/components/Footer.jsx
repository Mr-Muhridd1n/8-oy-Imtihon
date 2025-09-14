import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container align-elements">
        <span className="footer__text">Made with ❤️ and 🥑</span>
        <div className="footer__links">
          <a href="#">
            <img
              src="../assets/images/icon-instagram.svg"
              alt=""
              width={22}
              height={22}
            />
          </a>
          <a href="#">
            <img
              src="../assets/images/icon-bluesky.svg"
              alt=""
              width={24.99}
              height={22}
            />
          </a>
          <a href="#">
            <img
              src="../assets/images/icon-tiktok.svg"
              alt=""
              width={19.25}
              height={22}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
