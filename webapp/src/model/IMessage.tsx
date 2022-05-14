import React from "react";

import i18n from "i18n";
import { CompleteIcon, ErrorIcon } from "assets/icons";
import { MESSAGE__TYPE__SUCCESS, MESSAGE__TYPE__FAILED } from "constants/flashMessage";
import colors from "styles/colors";

export interface IMessage {
  body: () => React.ReactNode | string;
  targetUrl: string;
  type: number;
  customIcon?: React.ReactNode;
  icon: React.ReactNode;
  translatedMessage: string | React.ReactNode;
}

interface IMessageData {
  body: () => React.ReactNode | string;
  targetUrl: string;
  type: number;
  customIcon?: React.ReactNode;
}

export class Message implements IMessage {
  body: () => React.ReactNode | string;
  targetUrl: string;
  type: number;
  customIcon?: React.ReactNode;

  constructor(data: IMessageData) {
    this.body = data.body;
    this.targetUrl = data.targetUrl;
    this.type = data.type;
    this.customIcon = data.customIcon;
  }

  get translatedMessage(): string | React.ReactNode {
    if (typeof this.body === "string") return i18n.t(this.body);
    if (typeof this.body === "function") return this.body();
    return "";
  }

  get icon(): React.ReactNode {
    if (this.customIcon) return this.customIcon;

    switch (this.type) {
      case MESSAGE__TYPE__SUCCESS:
        return <CompleteIcon color={colors.brand["100"]} />;
      case MESSAGE__TYPE__FAILED:
        return <ErrorIcon color={colors.state.error.default} />;
      default:
        return null;
    }
  }
}
