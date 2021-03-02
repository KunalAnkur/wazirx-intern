import React, { useState } from "react";
import "./stylesheets/Navbar.css";
import TelegramIcon from "@material-ui/icons/Telegram";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function Navbar() {
  const [initialCurrency, setInitialCurrence] = useState("INR");
  const [finalCurrency, setFinalCurrence] = useState("BTC");
  const [openFinal, setFinal] = useState(false);
  const [openInitial, setInitial] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <h1>
            HODLINFO<span> .com</span>
          </h1>
          <h5>
            Powered By <span>Finstreet</span>
          </h5>
        </div>
        <div className="navbar__middle">
          <div
            onMouseEnter={() => setInitial(true)}
            onMouseLeave={() => setInitial(false)}
            className="navbar__middle__input__menu"
          >
            {initialCurrency} <ArrowDropDownIcon />
            {openInitial && (
              <div
                onMouseEnter={() => setInitial(true)}
                onMouseLeave={() => setInitial(false)}
                className="navbar__middle__input__menu__lists"
              >
                <div
                  onClick={() => setInitialCurrence("INR")}
                  className="navbar__middle__input__menu__list"
                >
                  INR
                </div>
                <div
                  onClick={() => setInitialCurrence("USD")}
                  className="navbar__middle__input__menu__list"
                >
                  USD
                </div>
                <div
                  onClick={() => setInitialCurrence("EUR")}
                  className="navbar__middle__input__menu__list"
                >
                  EUR
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => setFinal(true)}
            onMouseLeave={() => setFinal(false)}
            className="navbar__middle__input__menu"
          >
            {finalCurrency} <ArrowDropDownIcon />
            {openFinal && (
              <div
                onMouseEnter={() => setFinal(true)}
                onMouseLeave={() => setFinal(false)}
                className="navbar__middle__input__menu__lists"
              >
                <div
                  onClick={() => setFinalCurrence("BTC")}
                  className="navbar__middle__input__menu__list"
                >
                  BTC
                </div>
                <div
                  onClick={() => setFinalCurrence("ETH")}
                  className="navbar__middle__input__menu__list"
                >
                  ETH
                </div>
                <div
                  onClick={() => setFinalCurrence("ZIL")}
                  className="navbar__middle__input__menu__list"
                >
                  ZIL
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="navbar__right">
          <button className="navbar__right__input pointsButton">58</button>

          <button className="navbar__right__input contactButton">
            <TelegramIcon />
            <span>Connect Telegram</span>
          </button>

          <div className="navbar__right__input switch">
            <input type="checkbox" name="switch"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
