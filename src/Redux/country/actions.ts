import * as type from "./types";
import { IActions } from "../../interfaces/interfaces";

interface IAction<T> {
  type: string;
  payload?: T;
}

export const fetchRequest = (): IActions => ({
  type: type.COYNTRIES_FETCH_REQUEST,
});

export const fetchSuccess = <T>(data: T): IAction<T> => ({
  type: type.COYNTRIES_FETCH_SUCCES,
  payload: data,
});

export const fetchError = <T>(data: T): IAction<T> => ({
  type: type.COYNTRIES_FETCH_ERROR,
  payload: data,
});
