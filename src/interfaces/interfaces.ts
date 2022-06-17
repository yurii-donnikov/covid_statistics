export interface IContainer {
  children: React.ReactNode;
}
export interface ICountry {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: {};
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface ICountries {
  Countries: ICountry[];
  Date: string;
  Global: {
    Date: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
  };
  ID: string;
  Message: string;
}
export interface IState {
  CountriesReducer: {
    data: ICountries;
    error: null | Error;
  };
}
export interface IStatisticItemsContent {
  item: ICountry;
  index: number;
  openModal: (arg: ICountry) => () => void;
}
export interface IPortal {
  requiredCountry: ICountry | null;
  setViewModal: (arg: boolean) => void;
}
export interface IStatisticForm {
  setInputValue: (arg: string) => void;
  setUpdateCountries: (arg: boolean) => void;
}
export interface ICountryDefoultState {
  data: ICountries | null;
  error: null | Error;
}
export interface IAction<T> {
  type: string;
  payload?: T;
}
export interface IActions {
  type: string;
}
