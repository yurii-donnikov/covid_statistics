import { combineReducers } from "redux";
import { CountriesReducer } from "./country/reducer";

export const rootReduces = combineReducers({
  CountriesReducer: CountriesReducer,
});
