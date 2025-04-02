import React, { useEffect, useRef, useState } from "react";

import Keyboard from "./Components/Keyboard";
import Table from "./Components/Table";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import Data from "./data.json";

import { DivContainerS, DivKeyBoardS, DivTable } from "./Common/App.style";

const App: React.FC = () => {
  const rows = [0, 1, 2, 3, 4];
  const cols = [0, 1, 2, 3, 4];

  // State to store the word to be guessed
  const [wordToFind, setWordToFind] = useState("");
  // State to track the current row and column
  const [rowState, setRowState] = useState(0);
  const [colState, setColState] = useState(0);
  // State to track game status
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);

  // Ref to store input elements
  const ref = useRef<HTMLInputElement[][]>([]);

  useEffect(() => {
    // Select a random word from the dataset
    const index = Math.floor(Data.words.length * Math.random());
    setWordToFind(Data.words[index]);

    // Disable all input fields initially
    ref.current.forEach((row) => {
      row.forEach((col) => {
        col.disabled = true;
      });
    });

    // Enable and focus the first input field
    ref.current[0][0].disabled = false;
    ref.current[0][0].focus();
  }, []);

  // Function to restart the game
  const handleClose = () => {
    setWin(false);
    setLost(false);
    window.location.reload(); // Refresh the page to reset the game
  };

  // Function to handle user input changes
  const handleChange = (rowIndex: number, colIndex: number, val?: string) => {
    ref.current[rowIndex][colIndex].style.animation = "rotate(360)";
    ref.current[rowIndex][colIndex].disabled = true;
    if (val) ref.current[rowIndex][colIndex].value = val;

    // Move to the next input field
    let nextCol: HTMLInputElement | null = null;
    if (ref.current[rowIndex][colIndex + 1]) {
      nextCol = ref.current[rowIndex][colIndex + 1];
      setRowState(rowIndex);
      setColState(colIndex + 1);
    } else if (ref.current[rowIndex + 1]) {
      nextCol = ref.current[rowIndex + 1][0];
      setRowState(rowIndex + 1);
      setColState(0);
    }
    if (nextCol) {
      nextCol.disabled = false;
      nextCol.focus();
    }

    // Check if the letter is in the correct position
    if (
      ref.current[rowIndex][colIndex].value.toUpperCase() ===
      wordToFind.toUpperCase().split(" ")[colIndex]
    ) {
      ref.current[rowIndex][colIndex].style.backgroundColor = "green";
    }
    // Check if the letter exists in the word but in the wrong position
    else if (
      wordToFind
        .toUpperCase()
        .split(" ")
        .includes(ref.current[rowIndex][colIndex].value.toUpperCase())
    ) {
      ref.current[rowIndex][colIndex].style.backgroundColor = "yellow";
    }

    // Handle incorrect multiple appearances
    const ApparitionsWordToFind = wordToFind
      .toUpperCase()
      .split(" ")
      .filter(
        (letter) =>
          letter === ref.current[rowIndex][colIndex].value.toUpperCase()
      );
    const ApparitionsInput = ref.current[rowIndex].filter(
      (col) =>
        col.value.toUpperCase() ===
        ref.current[rowIndex][colIndex].value.toUpperCase()
    );
    if (ApparitionsInput.length > ApparitionsWordToFind.length) {
      const e = ApparitionsInput.filter(
        (col) => col.style.backgroundColor === "yellow"
      );
      if (e.length > 0) e[e.length - 1].style.backgroundColor = "gray";
    }

    // Handle losing case
    if (
      rowIndex === rows.length - 1 &&
      wordToFind.toUpperCase().split(" ")[colIndex] !==
        ref.current[rowIndex][colIndex].value.toUpperCase()
    ) {
      setWin(false);
      setLost(true);
    }

    // Handle winning case
    else if (
      wordToFind.toUpperCase() ===
      ref.current[rowIndex]
        .map((el) => el.value)
        .join(" ")
        .toUpperCase()
    ) {
      setWin(true);
      setLost(false);
    }
  };

  return (
    <DivContainerS>
      {win || lost ? (
        <Modal win={win} lost={lost} handleClose={handleClose} />
      ) : null}
      <Header />
      <DivTable>
        <Table rows={rows} cols={cols} ref={ref} handleChange={handleChange} />
      </DivTable>
      <DivKeyBoardS>
        <Keyboard
          rowState={rowState}
          colState={colState}
          handleChange={handleChange}
        />
      </DivKeyBoardS>
      <Footer />
    </DivContainerS>
  );
};

export default App;
