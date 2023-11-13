/* eslint-disable camelcase */
import moment from "moment";
import * as NavigationServices from "react-navigation-helpers";

export const handleNavigate = (href: string, params?: Record<string, any>) => {
  if (!href) return;
  NavigationServices.push(href, params);
};

export const goBack = () => {
  console.log("back");
  NavigationServices.goBack();
};

export const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const extractToken = (tokens: string) => {
  if (!tokens) return {};
  const [access_token] = tokens.split(" ");

  return { token_type: "Bearer", access_token };
};

export const handleCalcRangeBetweenTwoDate = (
  startDate: Date | string,
  endDate: Date | string,
) => {
  const timeDifference =
    new Date(endDate).getTime() - new Date(startDate).getTime();

  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  return daysDifference;
};

export const handleFormatDay = (date: Date) => {
  return moment(date).format("dddd, MMMM Do YYYY");
};
