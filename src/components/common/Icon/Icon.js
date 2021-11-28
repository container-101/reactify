import React, { forwardRef } from "react";
import Account from "./assets/account.svg";
import Notification from "./assets/notification.svg";
import Star from "./assets/star.svg";
import PropTypes from "prop-types";

function Icon({ name, className }) {
  const icons = {
    account: <Account className={className} />,
    notification: <Notification className={className} />,
    star: <Star className={className} />,
  };

  return icons[name];
}

Icon.PropTypes = {
  name: PropTypes.oneOf(["account", "notification", "star"]),
};

export default forwardRef(Icon);
