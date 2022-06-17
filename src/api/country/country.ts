import { ICountries } from "../../interfaces/interfaces";

export const getCountries = (): Promise<ICountries> => {
  return fetch("https://api.covid19api.com/summary").then((response) =>
    response.json()
  );
};
