import { COYNTRIES_FETCH_SUCCES, COYNTRIES_FETCH_ERROR } from "./types";
import { IAction } from "../../interfaces/interfaces";
import { ICountryDefoultState } from "../../interfaces/interfaces";

const defoultState: ICountryDefoultState = {
  data: null,
  error: null,
};

export function CountriesReducer<T>(state = defoultState, action: IAction<T>) {
  switch (action.type) {
    case COYNTRIES_FETCH_SUCCES: {
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    }
    case COYNTRIES_FETCH_ERROR: {
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
