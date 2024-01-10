/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
import { IUser } from "domain/user/user";
import moment from "moment";
import { Message } from "type/chat.type";
import { ObjectType } from "type/common";

export const handleCheckTwoSameUsers = (
  targetUser: IUser,
  compareUser: IUser,
) => {
  if (!targetUser || !compareUser) return false;
  return (
    targetUser.id === compareUser.id && targetUser.type === compareUser.type
  );
};

export const isEmpty = (target?: Record<string, any> | any[] | string) => {
  if (!target) return true;
  if (target instanceof Object) return Object.entries(target).length === 0;
  return target.length === 0;
};

export const isUserListValidToRender = (data?: any[]) => {
  return !data ? false : !isEmpty(data);
};

export const isSingleChat = (member: IUser[]) => member.length <= 2;

export const isRightReceiver = (members?: IUser[], currentUser?: IUser) => {
  if (!currentUser || !members) return false;
  const isCurrentUserLoginExistInConversation = (m: IUser) =>
    handleCheckTwoSameUsers(m, currentUser as IUser);

  return members.findIndex(isCurrentUserLoginExistInConversation) !== -1;
};

export const handleConvertDate = (date: Date | string) =>
  moment(date).format("LT");

export const handleRelativeTime = (date: Date) =>
  moment(date).startOf("minute").fromNow();

export const handleConvertDateToSecond = (date: Date) =>
  moment(date).millisecond();

export const handleFindContactUserFromMembers = (
  members: IUser[],
  currentUserLogin: IUser | null,
): IUser | ObjectType => {
  if (!currentUserLogin || !members) return {};
  const isNotSender = (compareUser: IUser) =>
    !handleCheckTwoSameUsers(compareUser, currentUserLogin);

  const foundUser = members.find(isNotSender);

  return foundUser ? foundUser : {};
};

export const handleFindGroupMessage = (
  messages: Message[],
  message: Message,
  index: number,
) => {
  if (index === messages.length - 1) return false;
  const range =
    handleConvertDateToSecond(message.createdAt as Date) -
    handleConvertDateToSecond(messages[index + 1]?.createdAt as Date);

  if (range === 0) return true;
  return false;
};
