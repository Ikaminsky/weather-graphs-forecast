import React from "react";
import "./Footer.scss";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          <span>
            {year} Created by{" "}
            <a
              className="footer__copyright-link"
              href="mailto:ilya.kaminsky@yandex.ru"
            >
              @ikaminsky
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
