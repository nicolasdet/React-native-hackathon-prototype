import {
  ToastAndroid,
} from 'react-native';
export const NOTIF_INIT = 'NOTIF_INIT';
export const NOTIF_INIT_NOTIF = 'NOTIF_INIT_NOTIF';
export const CHANGE_CHAT = 'CHANGE_CHAT';
export const VOCAL = 'VOCAL';
export const CHANGE_CHATDOUBLE = 'CHANGE_CHATDOUBLE';

export const InitToken = (token) => {
  return {
  type: NOTIF_INIT,
  payload: token
  };
};

export const InitNotif = (notif) => {
  return {
  type: NOTIF_INIT_NOTIF,
  payload: notif
  };
};


export const changeChat = (msg) => {
  return {
  type: CHANGE_CHAT,
  payload: msg
  };
};

export const changeChatdouble = (msgn) => {
  return {
  type: CHANGE_CHATDOUBLE,
  payload: msgn
  };
};

export const newVocal = (vocal) => {
  return {
  type: VOCAL,
  payload: vocal
  };
};

