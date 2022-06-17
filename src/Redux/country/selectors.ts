import { IState } from "../../interfaces/interfaces";

export const getCountries = (state: IState) => state.CountriesReducer.data;
export const getError = (state: IState) => state.CountriesReducer.error;
