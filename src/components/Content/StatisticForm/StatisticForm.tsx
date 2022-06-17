import style from "./StatisticForm.module.scss";
import arrow from "../../../img/arrow.png";
import { IStatisticForm } from "../../../interfaces/interfaces";

function StatisticForm({ setInputValue, setUpdateCountries }: IStatisticForm) {
  return (
    <div>
      <input
        className={style.inputForm}
        type="text"
        placeholder="Search.."
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <div className={style.btnBlock}>
        <p className={style.btnBlock_number}>№</p>
        <p className={style.btnBlock_Country}>Country</p>
        <div className={style.btnBlock_Confirmed}>
          <p>Total Confirmed</p>
          <div
            className={style.arrow}
            onClick={() => {
              setUpdateCountries(true);
            }}
          >
            <img className={style.firstImg} src={arrow} alt="arrow" />
          </div>
          <div
            className={style.arrow}
            onClick={() => {
              setUpdateCountries(false);
            }}
          >
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default StatisticForm;
