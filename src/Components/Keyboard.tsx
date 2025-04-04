import React from "react";

import KeyboardS from "./Common/Keyboard.style";

type KeyboardT = {
  rowState: number;
  colState: number;
  handleChange: (rowState: number, colState: number, val: string) => void;
};
const Keyboard = (props: KeyboardT) => {
  return (
    <>
      {[
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ].map((val, index) => (
        <KeyboardS
          key={index}
          onClick={() =>
            props.handleChange(props.rowState, props.colState, val)
          }
        >
          {val}
        </KeyboardS>
      ))}
    </>
  );
};

export default Keyboard;
