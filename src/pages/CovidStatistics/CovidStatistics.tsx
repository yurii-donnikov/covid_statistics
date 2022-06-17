import React, { useState } from "react";
import StatisticError from "../../components/Content/StatisticError/StatisticError";
import StatisticItemsContent from "../../components/Content/StatisticItemsContent/StatisticItemsContent";
import StatisticForm from "../../components/Content/StatisticForm/StatisticForm";
import Portal from "../../components/Portal/Portal";
import style from "../../components/Content/StatisticItemsContent/StatisticItemsContent.module.scss";
import { useSelector } from "react-redux";
import { ICountry } from "../../interfaces/interfaces";
import { getCountries, getError } from "../../Redux/country/selectors";

function CovidStatistics() {
  let [filteredCountries] = useState<ICountry[] | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [updateCountries, setUpdateCountries] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [requiredCountry, setRequiredCountry] = useState<null | ICountry>(null);
  const countries = useSelector(getCountries);
  const error = useSelector(getError);

  const sortCountries = (sign: string) => {
    if (filteredCountries) {
      filteredCountries.sort(function (a, b) {
        if (a.TotalConfirmed === b.TotalConfirmed) {
          return 0;
        }
        if (eval(`${a.TotalConfirmed}${sign}${b.TotalConfirmed}`)) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  };

  if (countries) {
    filteredCountries = countries.Countries.filter((country) => {
      return country.Country.toLowerCase().includes(inputValue.toLowerCase());
    });
    if (updateCountries) {
      sortCountries(">");
    } else {
      sortCountries("<");
    }
  }

  const openModal = (arg: ICountry) => {
    return function () {
      setRequiredCountry(arg);
      setViewModal(true);
    };
  };

  return (
    <div>
      <StatisticForm
        setInputValue={setInputValue}
        setUpdateCountries={setUpdateCountries}
      />

      {error ? (
        <StatisticError />
      ) : (
        <ul className={style.listItems}>
          {filteredCountries
            ? filteredCountries.map((item, index) => {
                return (
                  <StatisticItemsContent
                    openModal={openModal}
                    key={item.ID}
                    item={item}
                    index={index}
                  />
                );
              })
            : null}
        </ul>
      )}
      {viewModal ? (
        <Portal requiredCountry={requiredCountry} setViewModal={setViewModal} />
      ) : null}
    </div>
  );
}

export default CovidStatistics;
