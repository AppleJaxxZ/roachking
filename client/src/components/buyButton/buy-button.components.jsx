import React, { useState } from "react";
import styles from "./buyButton.styles.scss";

const BuyButton = ({ onButtonPressed = () => {} }) => {
  const [isPressed, setIsPressed] = useState(false);
  const onPressed = () => {
    setIsPressed(!isPressed);
    onButtonPressed();
  };
  return (
    <button
      style={isPressed ? styles.pressedButton : styles.button}
      onPress={onPressed}
    >
      BUY ME
    </button>
  );
};

export default BuyButton;
