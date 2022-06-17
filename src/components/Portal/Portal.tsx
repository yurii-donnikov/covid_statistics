import React from "react";
import ReactDOM from "react-dom";
import { IPortal } from "../../interfaces/interfaces";
import heart from "../../img/heart.png";
import head from "../../img/head.png";
import doc from "../../img/doc.png";
import style from "./Portal.module.scss";

const root = document.getElementById("react-modals");

function Portal({ requiredCountry, setViewModal }: IPortal) {
  const closeModal = () => {
    setViewModal(false);
  };

  return root
    ? ReactDOM.createPortal(
        <div className={style.Portal}>
          {requiredCountry ? (
            <div className={style.Portal__wrapper}>
              <div onClick={closeModal} className={style.Portal__back}></div>
              <div className={style.Portal__window}>
                <h2>{requiredCountry.Country}</h2>
                <div>
                  <img src={heart} alt="heart" />
                  <p className={style.txt}>Total Confirmed</p>
                  <p>{requiredCountry.TotalConfirmed}</p>
                </div>
                <div>
                  <img src={head} alt="head" />
                  <p className={style.txt}>Total Deaths</p>
                  <p>{requiredCountry.TotalDeaths}</p>
                </div>
                <div>
                  <img src={doc} alt="document" />
                  <p className={style.txt}>Total Recovered</p>
                  <p>{requiredCountry.TotalRecovered}</p>
                </div>
                <button onClick={closeModal}>OK</button>
              </div>
            </div>
          ) : null}
        </div>,
        root
      )
    : null;
}

export default Portal;
