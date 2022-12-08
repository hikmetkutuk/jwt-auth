import { MessageActionTypes } from "../message/types";

const initialState = {};

export default function (state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case MessageActionTypes.SET_MESSAGE:
      return { message: payload };

    case MessageActionTypes.CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}
