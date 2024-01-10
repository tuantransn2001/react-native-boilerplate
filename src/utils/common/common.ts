/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import moment from "moment";
import { NativeScrollEvent } from "react-native";
import * as NavigationServices from "react-navigation-helpers";

export const handleNavigate = (href?: string, params?: Record<string, any>) => {
  if (!href) return;
  NavigationServices.push(href, params);
};

export const goBack = () => NavigationServices.goBack();

export const capitalizeFirstLetter = (str: string) =>
  str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;

export const generateRandomNumber = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max + 1 - min));

export const handleCalcRangeBetweenTwoDate = (
  startDate: string,
  endDate: string,
) => {
  const timeDifference =
    new Date(endDate).getTime() - new Date(startDate).getTime();

  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  return daysDifference;
};

export const handleFormatDay = (date: Date) =>
  moment(date).format("dddd, MMMM Do YYYY");

export const isEmail = (email: string) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

export const isPhoneNumber = (phone: string) => {
  const pattern = new RegExp(
    /^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/,
  );
  return pattern.test(phone);
};

export const handleHiddenBodyString = (source: string) => {
  const hiddenPattern = Array(source.length).fill(0);

  const hiddenResult = hiddenPattern.reduce((res, _, index) => {
    if (index === 0) res = res + source[index];
    if (index === source.length - 1) res = res + source[index];
    else {
      res = res + "*";
    }
    return res;
  }, "");

  return hiddenResult;
};

export const handleHidePrivateInformation = (source?: string) => {
  if (!source) return "";
  if (isEmail(source)) {
    const [pre, domain] = source.split("@");

    return handleHiddenBodyString(pre) + "@" + domain;
  }
  if (isPhoneNumber(source)) {
    return handleHiddenBodyString(source);
  }
};

export const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent) => {
  const paddingToBottom = 0;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};
